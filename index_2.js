//객체

let codeit = { //key : value
    name: '코드잇',
    'born Year': 2017,
    isNice: true,
    course: { //객체 안에 객체
        language: 'java'
    },
    sayHello: function() {
      console.log("hello");
    }
};

console.log(codeit['born'+' Year']);
console.log(codeit.name);
console.log(codeit.course.language);


let propertyName = 'name';
console.log(codeit[propertyName]);//대괄호 사용법 유의!!!


codeit.ceo = '김태웅';//추가
delete codeit.isNice;//삭제
console.log('name' in codeit);// 프로퍼티가 있는지 확인한다. //ture


//메소드
let myVoca = {
    
    addVoca: function(key,value) {
        myVoca[key] = value;
    },
    deleteVoca: function(key){
        delete myVoca[key];
    },
    printVoca: function(key){
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
    }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca['addVoca']('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
//myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');



for(let k in codeit){ //객체의 프로퍼티 네임을 가져오는 반복문
    console.log(k);//프로퍼티들이 출력됨 
    //console.log(codeit[k]);//값들도 같이 출력됨
};
//보통 추가한 순서를 따라서 반복문이 수행된다.

let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16
};

function passChecker(scoreObject) { //객체를 넘겨 받는다.
	// 여기에 코드를 작성해 주세요.
    let totalScore = 0;

    for (let subject in scoreObject) {//객체의 프로퍼티 네임을 가져오는 반복문
    totalScore += scoreObject[subject];
    }

    if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!');
    } 
    else {
    console.log('아쉽지만 불합격입니다..');       
    }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);

//내장 객체 사용하기

let myDate1 = new Date();
console.log(myDate1);//현재시각

let myDate2 = new Date(1000);
console.log(myDate2);//1970년 1월 1일 00:00:00 UTC + 1000밀리초 

let myDate3 = new Date('2021-01-11');
console.log(myDate3);

let myDate4 = new Date(2021, 00);//월은 0부터 시작
console.log(myDate4);



//배열  
let HarryPotter = [ // 대괄호 사용, 객체는 중괄호 였음!
    '마법사의 돌',
    '비밀의 방',
    '아즈카반의 죄수'
];
console.log(HarryPotter[1+1]);

//배열도 객체다!!!!

HarryPotter[3] = '불의 잔'; //추가 가능, 순서를 뛰어 넘으면 비우고 생성됨
delete HarryPotter[2];//확실하게 지워지는건 아님


for(let i = 0 ; i < HarryPotter.length ; i++){
    console.log(HarryPotter[i]);
};

//배열의 원소를 완전히 삭제하려면 splice 사용
//전체적인 사이즈도 줄어든다.
//파라미터 하나만 전달하면 해당 인덱스부터 쭉 삭제
HarryPotter.splice(1,1); //splice(startIndex, deleteCount, 대신 들어가는 값)
for(let i = 0 ; i < HarryPotter.length ; i++){
    console.log(HarryPotter[i]);
};

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
// 여기에 코드를 입력해 주세요.
let numbers = [];
numbers.splice(0,0,'1','2','3','5','8','9');
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]%2!==0){
      numbers.splice(i,1);
      i--;
    }
};
console.log(numbers);

//배열의 여러가지 메소드 참고

//배열의 첫 요소를 삭제 => shift
//배열의 마지막 요소를 삭제 => pop
//배열의 첫 요소로 값을 추가 => unshift
//배열의 마지막 요소로 값 추가 => push


//다차원 배열, 배열의 배열, 자바와 유사

let twoDimensional = [ [1,2] , [3,4]];
console.log(twoDimensional[0][1]); //2

//toFixed 메소드, 문자열로 반환됨
//toString 메소드

//Math 객체 참고


//문자열 심화

let myString = 'Hi Codeit';

console.log(myString.length); //9

console.log(myString[3]); //C
console.log(myString.charAt(3));//C

console.log(myString.slice(0,2)); //Hi //두번째 파라미터로 넘겨준 숫자 이전까지
console.log(myString.slice(3)); //Codeit // 파라미터로 넘겨준 숫자부터 끝까지

console.log(myString.toUpperCase()); //대문자로
console.log(myString.toLowerCase()); //소문자로

console.log(myString.indexOf('i')); //앞에서부터 탐색 몇번째인지


//문자열은 배열과 다르게 한번 할당된 값을 수정할 수 없다

let lyrics = "[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 코드를 작성해 주세요.
let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');
hyungdon = lyrics.slice(startIndex, endIndex);
// 테스트 코드
console.log(hyungdon);

//기본형과 참조형의 차이

//배열의 값만 복사 => slice 메소드 사용
//객체는 Object.assign({},객체);

//const로 변수를 선언하면 재할당이 불가능함.

//마지막 예제 3개 참고