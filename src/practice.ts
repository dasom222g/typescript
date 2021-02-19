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

const numberOrString = ():number | string =>  0

// interface
interface Shape {
  getArea(): number // return값은 number
}

class Retangle implements Shape {
  constructor(private width: number, private height: number) { // public이나, private 키워드를 넣어주면 this.width에 할당해주는 작업 생략 가능
    // this.width = width
    // this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

const retangle = new Retangle(100, 100)
console.log('retangle', retangle.getArea())

// generic (any와 동일한 효과지만 generic으로 사용하면 해당 값이 할당된곳에서 사용된 타입을 알수있음)

function merge (a: object, b: object) { //이렇게 사용하면 merged안의 객체속성을 모름
  return {
    ...a,
    ...b
  }
}

function merge2<T1, T2> (a: T1, b: T2) { //이렇게 사용하면 merged안의 객체속성을 모름
  return {
    ...a,
    ...b
  }
}


const merged = merge2({id: 1, content: 'foo'}, {id: 2, content: 'bar'})
console.log('merged', merged)

function wrap<T> (params: T) {
  return {
    params
  }
}

const wrapped = wrap(10)