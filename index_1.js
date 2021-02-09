console.log('Hello World!');//세미콜론은 필수다!

//주석 처리는 동일하다. 

//변수 선언

let espressoPrice; //변수 이름을 잘 정하자!

espressoPrice = 3000;

console.log(espressoPrice);


//함수 선언

function greetings() { //기본적으로 반환타입을 명시 안함.....
    console.log("Hi");
    console.log("안녕");
};

greetings();


//매개변수

function greetings(sentence) { //파라미터에 데이터 타입을 명시 안하네.......
    console.log("Hi");
    console.log(sentence);
};

greetings("Hola");

function welcome(name) {
    console.log("안녕하세요 " + name +"님!");// 문자열의 +연산  
};

welcome("김태웅");


function printSum(a, b) {
    console.log(a+b);
};

printSum(10, 5);


//boolean

console.log(2 > 1); // true
console.log(2 < 1); //false

console.log(typeof '1'); //string
//typeof 연산자는 사칙연산보다 우선순위가 높다.

// 거듭제곱이 곱셈보다 우선순위가 높다.


//형변환

//각각은 함수임
console.log(Number('10') + Number('5'));//15
console.log(String(10) + String(5));//105


//템플릿 문자열

function calcWage(name, time, wage) {
    let total = time * wage;
  
    console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); 
};
  
calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
 

// null, undifined

console.log(null == undefined); //true
console.log(null === undefined); //false


  // adultTag, teenagerTag, errorTag, transferTag라는 이름의 변수들을 만드세요.
// 여기에 코드를 작성해 주세요.
let adultTag = '삑!';
let teenagerTag = '삑삑!';
let errorTag = '삑삑삑!';
let transferTag = '환승입니다.';

// tagCase파라미터를 가지는 tagNotification라는 이름의 함수를 만드세요.
// 여기에 코드를 작성해 주세요.
 function tagNotification(num){
   console.log(`${num}`);
 };

// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);

//switch문 예제

// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	// 여기에 코드를 작성해 주세요.
	switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
  }
};

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');


function printTriangle(height) {
	// 여기에 코드를 작성해 주세요.
  for(let i=0; i<height; i++){

    let string = "";

    for(let j=0; j<=i; j++){
      string = string+"*";//주의!!
    }

    console.log(string);
  }
};

printTriangle(5);
