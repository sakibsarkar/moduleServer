import fs from "fs";
export const destroyFile = (filePath: string) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err}`);
    } else {
      console.log(`File ${filePath} deleted successfully`);
    }
  });
};

export default destroyFile;
