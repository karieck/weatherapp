import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  // weatherdata in the body of the POST req
  const { weatherData } = await request.json();

  const openai = new OpenAI({
    organization: "org-pScpbWEygebgZeKszAn4DWHC",
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // or 'gpt-4'
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television. be energetic and full of charisma. State the city you are providing a summary for. Then give a summary of todays weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc. use the uv_index data provided to provide UV advice. Assume the data came from your team at the news office and not the user.`,
      },
      {
        role: "user",
        content: `Hi there, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  console.log("DATA IS: ", response);

  return NextResponse.json(response.choices[0].message);
}
