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


let imgSrc = ""
let name = ""

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const {prompt} = req.body
    try{
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: "256x256",
      });
      imgSrc = response.data.data[0].url
      name =  response.data.created
        }catch(error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data)
        res.status(error.response.status).json(error.response.data)
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`)
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
      }
    } 

// File save ------------------------------------------------------------

    const url = imgSrc;
    const path = `pages/api/images/${name}.png`
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
  