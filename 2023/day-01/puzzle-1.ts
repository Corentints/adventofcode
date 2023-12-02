import { readFileSync } from 'fs';
import path from 'path';

const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

const result = input.split('\n').reduce((acc, line) => {
  const matches = line.match(/\d/g);
  if (matches && matches.length > 0) {
    const firstDigit = matches[0];
    const lastDigit = matches[matches.length - 1];
    return acc + Number(`${firstDigit}${lastDigit}`);
  }
  return acc;
}, 0);

console.log(result);
