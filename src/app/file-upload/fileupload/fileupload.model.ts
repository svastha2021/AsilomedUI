export class FileUpload {
    key!: string;
    name!: string;
    url!: string;
    file: File;
    desc!:string;
  
    constructor(file: File) {
      this.file = file;
    }
  }