import LineByLine from 'n-readlines';
import { StreamFileReader } from './StreamFileReader';

export class LineByLineReader implements StreamFileReader {
  private stream: LineByLine;

  // Recieves a StreamFileReader as it's single parameter to read the file using it.
  constructor(private fileName: string) {
    this.stream = new LineByLine(fileName);
  };

  // For fast creating an instance of class.
  static createStream(fileName: string): LineByLineReader {
    return new LineByLineReader(fileName);
  }

  // Returns buffer with the line data without the newLineCharacter or false if end of file is reached.
  next(): Buffer | false {
    return this.stream.next();
  }

  // Resets the pointer and starts from the beginning of the file.
  // This works only if the end is not reached.
  resetStream(): void {
    this.stream.reset();
  }

  // Manually close the open file, subsequent next() calls will return false.
  // This works only if the end is not reached.
  closeStream(): void {
    this.stream.close();
  }
  
  // For reading the file without having a loop in code.
  readStream(callback: (line: Buffer) => any): void {
    const streamReader = new LineByLineReader(this.fileName);
    let line;
    while (line = streamReader.next()) {
      callback(line as Buffer);
    }
  }
}