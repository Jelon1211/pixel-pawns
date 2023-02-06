import type { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs');
const Axios = require('axios')

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



// File save ------------------------------------------------------------
    const url = "https://www.arcanewonders.com/wp-content/uploads/2021/05/BeastmasterWarlock.png"
    const path = "pages/api/images/elo.png"
    async function downloadImage(url: string, filepath: string) {
        const response = await Axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });
        return new Promise((resolve, reject) => {
            response.data.pipe(fs.createWriteStream(filepath))
                .on('error', reject)
                .once('close', () => resolve(filepath)); 
        });
    }

    downloadImage(url, path);
  }
  