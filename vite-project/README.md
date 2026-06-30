# Unit Testing React with Jest

this project uses jest and react testing library to test a Counter component and a calculateTotal function

## how to install

```bash
npm install
```

## how to run tests

```bash
npm test
```

to run with code coverage:

```bash
npm run test:coverage
```

coverage report goes into the /coverage folder

---

## what's being tested

### Counter component (src/components/Counter.jsx)

just a counter that you can increment and decrement. tests check:
- that it starts at 0
- that increment adds 1
- that decrement subtracts 1
- that multiple clicks work correctly
- snapshot test so we know if the rendered output changes

the snapshot gets saved to src/__tests__/__snapshots__/ the first time you run tests

### calculateTotal function (src/utils/calculateTotal.js)

takes an array of numbers and returns the sum. returns 0 if the array is empty.

tests cover positive numbers, negative numbers, zeros, empty arrays, and some edge cases like single elements and big numbers

no mocks needed for either of these since there's no api calls or anything like that

---

## notes

ran into a failing test on the negative numbers case, i think i did the math wrong ill fix it later
