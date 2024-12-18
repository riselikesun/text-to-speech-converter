
import { type NextRequest } from 'next/server'
import textShifter from '../utils/textShifter';
 
export const dynamic = "force-dynamic";

export interface Data {
  status: string
  code: number
  locale: string
  seed: unknown
  total: number
  data: Daum[]
}

export interface Daum {
  title: string
  author: string
  genre: string
  content: string
}

 
const getData = async (shiftCount: number): Promise<Daum[]> => {

  try{
    const res = await fetch('https://fakerapi.it/api/v2/texts')

    const result: Data = await res.json()
    
    const processedResponse = result.data.map((details) => {
      const shiftedTitle = textShifter(details.title, shiftCount);

      return {...details, title: shiftedTitle}
    })

    return processedResponse
  }
  catch{
    return []
  }

}

const getAllData = (dataFetchCount: number, shiftCount: number): Promise<Daum[][]> => {
  const promises =[]

  for(let i=0; i< dataFetchCount; i++){
    promises.push(getData(shiftCount));
  }

  return Promise.all(promises)
}

export async function GET(
  req: NextRequest
) {
  const searchParams = req.nextUrl.searchParams

  const shiftCount = searchParams.get('shift-count')
  const dataFetchCount = searchParams.get('data-fetch-count')

  const data = await getAllData(Number(dataFetchCount), Number(shiftCount))
  const result: Daum[] = [];

  for(const array of data){
    for(const details of array){
      result.push(details)
    }
  }

  return Response.json( result );
}
