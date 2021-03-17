export interface StreamFileReader {
  next(): any;
  resetStream(): void;
  closeStream(): void;
  readStream(callback: (line: Buffer) => any): void
}