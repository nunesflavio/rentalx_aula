import * as fs from "fs";

export const deleteFile = async(filename: string) => {

    try {
        //STAT verifica se existe ou noa o arquivo no diretorio
        await fs.promises.stat(filename);

    }catch {
        return;
    }

    await fs.promises.unlink(filename);

}