// 가. 변수의 선언 및 사용
//1. 변수는 앞에 타입에 대한 구분없이 var 로 선언한다
//2. 문장의 끝은 항상 ; (세미콜론)으로 끝낸다
var name;

//3. = 을 사용해서 변수에 값을 입력하는데 문자열 입력시에는 앞뒤로 '(외따옴표) 또는 "(쌍따옴표)를 붙혀준다
name = '홍길동';

//4. 문자나 숫자 및 타입에 관계없이 변수는 var 로 선언한다
var num1;
num1 = 21;

//5. 변수의 선언과 동시에 값을 입력할 수 있다
var num2 = 3;

//6. 두 개의 변수를 더해서 다른 변수에 입력할 수 있다
var sum = num1 + num2;

//7. 숫자와 문자를 더할 경우 결과값은 문자가 된다. 아래 연산결과로 sum2 에는 "홍길동21"이 sum3에는 "이순신3"이 입력된다
var sum2 = name + num1;
var sum3 = '이순신' + 3;

// 나. 함수의 선언 및 사용
// 1. 세개의 파라미터를 더한 후 결과값을 리턴하는 함수를 선언
function sum(param1, param2, param3) {
    return param1 + param2 + param3;
}

// 2. 함수 실행 후 결과값을 result 에 대입
var result = sum(1, 2, 3);

// 3. result 에 담긴 결과값을 출력
console.log('result=' + result);

// 4. 결과값이 없는 함수의 선언
function print(param1) {
    console.log('param1=' + param1);
}

// 5. 함수호출 : return 이 없는 함수는 로직을 자체적으로 처리하기 때문에 결과값 대입 불필요
print('출력내용');

// 다.조건문
var a = 10;

if (a > 11) {
    console.log('a가 11보다 큽니다');
} else if (a == 11) {
    console.log('a가 11과 같습니다');
} else {
    console.log('a가 11보다 작습니다');
}

// 라. 반복문
// 0부터 9까지 출력하는 while문
var i = 0;
while (i < 10) {
    console.log("for : i의 값은=" + i);
    i = i + 1;
}

// 마. 클래스
// test_class.js
//class의 선언 - 낙타표기법으로 첫번째 글자를 대문자로 함수를 하나 선언한다.
function Clazz(msg) {
    // 변수를 객체의 멤버로 사용하기 위해 this 예약어를 사용해서 정의한다.
    this.name = 'I am Class';
    this.message = msg;

    // this를 사용하지 않은 변수
    message2 = "find me!";
    // 멤버함수 선언
    this.print = function () {
        console.log(message2);
    };
}

// 객체를 생성
var myClazz = new Clazz('good to see u!');
console.log(myClazz.message);
// this를 사용하지 않은 message2 변수는 외부에서 참조할 수 없다.
console.log(myClazz.message2);
// this로 선언된 함수를 통해 사용할 수 있다.
myClazz.print();

// test_prototype.js
function Clazz(msg) {
    this.name = 'I am Class';
    this.message = msg;

    message2 = "find me!";
}
//Clazz 객체의 prototype 을 가져와서 message값을 리턴하는 함수를 하나 추가한다.
Clazz.prototype.getMessage = function () {
    return this.message;
}

Clazz.prototype.getMessage2 = function () {
    return this.message2;
}

// 객체를 생성
var myClazz = new Clazz('good to see u!');
console.log(myClazz.getMessage());
// 내부에 선언된 함수와는 다르게 prototype으로 선언한 함수는 값을 사용할 수 없다.
console.log(myClazz.getMessage2());

// NodeClass.js
function Clazz() {
    this.name = 'Hello there!';
    this.message;
}

// message 변수에 값을 입력하는 함수
Clazz.prototype.setMessage = function (msg) {
    this.message = msg;
}
// message 변수의 값을 가져오는 함수
Clazz.prototype.getMessage = function () {
    return this.message;
}

// exports 명령어를 사용함으로써 다른파일에서 require 예약어를 이용해 Clazz 객체를 사용할 수 있게된다.
// exports 명령어의 위치는 파일의 어떤곳에 위치해도 동일하게 동작한다.
module.exports = Clazz;

// use_class.js
// NodeClass 를 선언한다. 여기서 NodeClass 는 변수명이 아니라 class명 이므로 첫글자를 대문자로 한다.
var NodeClass = require('./NodeClass');

// new 연산자를 사용해서 NodeClass 클래스를 nodeClass 변수로 초기화한다.
var nodeClass = new NodeClass();

// setMessage 함수로 값을 입력한다.
nodeClass.setMessage('Good to See u!');

// 입력된 값을 출력한다.
console.log(nodeClass.getMessage());