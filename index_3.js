// 인터렉티브 자바스크립트


// id로 태그 선택하기
const myTag1 = document.getElementById('myNumber'); // id를 넘겨준다
console.log(myTag1);

const myTag2 = document.getElementById('btns');
console.log(myTag2);

const myTag3 = document.getElementById('codeit'); //존재하지 않는 태그
console.log(myTag3);


//클래스로 태그 선택하기
//HTMLCollection이 반환된다!!!
const myTags1 = document.getElementsByClassName('color-btn'); // 유사배열의 형태
console.log(myTags1);
console.log(myTags1[1]); // orange // 인덱싱 사용가능
console.log(myTags1.length);//8

for (let tag of myTags1) { // 배열처럼 사용
	console.log(tag);
};
//기타 메소드는 사용불가

//깊이와는 상관없이 위에서 부터 순서대로 HTMLCollection에 들어간다.

//존재하지 않는 class 값으로 태그를 선택하게 되면 그 값은 빈 HTMLCollelction이 된다


//css 선택자로 태그 선택하기

const myTag4 = document.querySelector('#myNumber'); //id
console.log(myTag4);
const myTag5 = document.getElementById('myNumber');
console.log(myTag5);
//////////////////////////////////////////////////////////동일

const myTag6 = document.querySelector('.color-btn');// 하나만 반환
console.log(myTag6);
const myTags2 = document.querySelectorAll('.color-btn');
console.log(myTags2);
//////////////////////////////////////////////////////////All을 사용해야 유사배열 형태로 반환

const myTags3 = document.getElementsByClassName('color-btn');// 위와 비교
console.log(myTags3);

//All 메소드를 사용하면 일단 NodeList 형태로 반환됨
//존재하지 않는 요소로 태그를 선택하게 되면 그 값은 빈 NodeList이 된다


// 이벤트(Event)와 버튼 클릭
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링(Event Handling)
btn.onclick = function() { // 이벤트 핸들러(Event Handler)
	console.log('Hello Codeit!');
};

btn.onclick = function() { //onclick 프로퍼티에 함수를 할당한다!!!!
    alert('정답입니다!👏🏻')
}



//window 객체는 다른 모든 객체를 포함하는 최상단 객체, 전역객체

console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

//DOM

//웹페이지에 나타나는 html문서 모두를 나타낸다
//html 태그를 객체처럼 다룰 수 있다

console.log(document);
console.log(typeof document);
console.dir(document);

// 값에 좀 더 중점을 둔 log 메소드는 대상을 HTML 형태로 출력하고,
// 객체의 속성에 좀 더 중점을 둔 dir 메소드는 대상을 객체 형태로 출력합니다.

// DOM 트리 여행하기
const myTag = document.querySelector('.color-btn');

console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

console.log(myTag.parentElement.nextElementSibling);






