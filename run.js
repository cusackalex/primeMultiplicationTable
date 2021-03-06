import { generateTable, generateTableForDisplay } from './buildTable'
import { generatePrimeNumberList } from './generatePrimes'

const listSize = parseInt(process.argv[2]) || 10

const primes = generatePrimeNumberList()

const take = (generator, listSize) => {
  const list = []
  for (let i = 0; i < listSize; ++i) {
    list.push(generator.next().value)
  }
  return list
}

const multiplicationTableWithHeader = generateTable(take(primes, listSize))

console.log(generateTableForDisplay(multiplicationTableWithHeader))
