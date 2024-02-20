import fs, { unlink } from "fs-extra";
import { IMulterFile } from "../models/types";
import path from "path";

export class File {
  static store(file: IMulterFile, folder: string): string {
    const destPath = path.join(
      "storage",
      folder,
      file.filename + "." + `${file.originalname}`.split(".").reverse()[0]
    );
    fs.moveSync(file.path, destPath);
    return destPath;
  }

  static destroy(path: string): boolean {
    try {
      if (fs.pathExistsSync(path)) {
        unlink(path);
      }
    } catch (e) {
      console.log(e);
    }
    return true;
  }
}
