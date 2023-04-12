#!/usr/bin/node
const dataList = [/* values from 100-data.js */];

const newList = dataList.map((value, index) => {
  return value * index;
});

console.log("Initial list: ", dataList);
console.log("New list: ", newList);
