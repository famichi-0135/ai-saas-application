import { NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

import sharp from "sharp";



export async function POST(req: Request){

  const {keyword} = await req.json();
  console.log("keyword:",keyword);

  try{
const payload = {
  prompt: `Create Image with ${keyword}`,
  output_format: "png"
};

const formData = new FormData();
formData.append("prompt",payload.prompt);
formData.append("output_format",payload.output_format);

const response = await axios.postForm(
  `https://api.stability.ai/v2beta/stable-image/generate/core`,
  formData,
  // axios.toFormData (payload, new FormData()),
  {
    validateStatus: undefined,
    responseType: "arraybuffer",
    headers: { 
      Authorization: `Bearer ${process.env.STA_API_KEY}`, 
      Accept: "image/*" 
    },
  },
);

  if(response.status !==  200){
   
    throw new Error(`API error : ${response.status}`);
    
  }

  //画像の圧縮
  const optimizedImage =await sharp(response.data).resize(1280, 720).png({quality: 80, compressionLevel:  9}).toBuffer();

  //Base64 encoding
  const base64Image = optimizedImage.toString("base64");
  const imageUrl = `data:image/png;base64,${base64Image}`;
  
  // console.log(response.data);
  return NextResponse.json({imageUrl});
  }catch (error){
    console.log("Error generate image:" , error);
    return NextResponse.json(
    {
      error:"Failed To GenerateImage"
    },
    {status: 500}

  );
  }
}