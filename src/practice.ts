const message: string = 'hello world'
const messages: string[] = []
const numbers: number[] = []

let mightBeUndefined: string | undefined | null = null

mightBeUndefined = 'undefined'

let color: 'red' | 'orange' | 'yellow' // 저 3가지중에서만 값을 받을수 있고 초기값 없음

color = "orange"

function sum (a: number, b: number): number { //모든 타입 다 받고 싶을땐 'any'타입
  return a + b
}

const sumArray = (numbersArr: number[]) =>  numbersArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumArray([1,2,3,4]))

const nothingReturn = (): void => {
  console.log('return값 없는 함수로 결과값 타입 void로 설정 했는데 return 하려고 하면 오류남')
  // return 4
}

const numberOrString = ():number | string =>  'string'