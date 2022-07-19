import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
  const url = new URL('./../database.json', import.meta.url);
  const currentData = JSON.parse((await readFile(url)));
  currentData.push(data);
  
  await writeFile(url, JSON.stringify(currentData));
}