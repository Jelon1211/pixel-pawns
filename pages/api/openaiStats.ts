import type { NextApiRequest, NextApiResponse } from 'next'

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  name?: string,
  error?: any,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const {prompt} = req.body;
    try {
    const response = await openai.createCompletion({
      model: "text-curie-001",
      prompt: `With given prompt return stats for a warrior in a json format. It must include attack from 1 to 10, health point from 60 to 100, type melee or range. Prompt: ${prompt}`,
      max_tokens: 35,
      temperature: 0,
    });

    const warrior = JSON.parse(response.data.choices[0].text);

    res.status(200).json( warrior );
    }catch (error) {
      res.status(400).json({error});
    }
  }
  