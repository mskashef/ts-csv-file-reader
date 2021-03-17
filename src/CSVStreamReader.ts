import { StreamFileReader } from "./StreamFileReader";

export abstract class CSVStreamReader<T> {
  // Recieves a StreamFileReader as it's single parameter to read the file using it.
  constructor(private reader: StreamFileReader) {}

  protected abstract convert(line: string): T;
  
  // Returns T with the line data or false if end of stream is reached.
  next(): T | false {
    const next = this.reader.next();
    return next ? this.convert(next.toString()) : false;
  }

  // Resets the pointer and starts from the beginning of the file.
  // This works only if the end is not reached
  resetStream(): void {
    this.reader.resetStream();
  }

  // Manually close the open file, subsequent next() calls will return false.
  // This works only if the end is not reached.
  closeStream(): void { 
    this.reader.closeStream();
  }
}