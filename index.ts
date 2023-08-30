import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/mapto
// Example 1: Map every emission to string

//emit value every two seconds
const srcInterval$ = interval(2000);
//map all emissions to one value
const example = srcInterval$.pipe(mapTo('HELLO WORLD!'));
const subscribe = example.subscribe((val) => console.log(val));
//output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
