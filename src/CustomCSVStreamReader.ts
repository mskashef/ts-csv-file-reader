// Simply Change this code to use the CSV File reader to use it with your own csv file.
import { CSVStreamReader } from "./CSVStreamReader";

export type MyCustomRecord = {
  grade: number;
  playerId: string;
  score: number;
}

export class CustomCSVStreamReader extends CSVStreamReader<MyCustomRecord> {
  // overriding the abstract method of 'CSVStreamReader' class
  // this method specifies the way of converting a record to out custom type
  protected convert(line: string): MyCustomRecord {
    let result: MyCustomRecord = {
      grade: 0,
      playerId: '0',
      score: 0,
    };

    line.split(',').map((val: string, index: number) => {
      switch (index) {
        case 0: return result.grade = Number(val);
        case 1: return result.playerId = val;
        case 2: return result.score = Number(val);
      }
    });

    return result;
  }

}