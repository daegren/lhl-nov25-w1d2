# W1D2 - The Dev Workflow

## Problem

Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

## Questions

- How can we tell if it's a whole number?
- How do we get the command line arguments?
  - Does the command line give us a `string` or an `number`?

## Pseudocode

```
Get values from command line arguments (as an array)
sum = 0

for each element in the arguments provided
  if element is a number AND element is a WHOLE number
    sum = sum + element

print out the resulting sum
```
