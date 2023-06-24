import { readFile } from "fs/promises"

export const readJSON = async(filePath:string) => {
    return JSON.parse(await readFile(filePath, "utf-8"))
}