/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className);

// first.className = 'second';




// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('is--valid');
first.classList.remove('is--valid');
//first.classList.toggle('is--vaild');
console.log(first.classList.contains('is--vaild'));



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`



/* =========== CSS 읽어오기 ============== */ //getter
// let style = getComputedStyle(first);
// console.log(style.color)






function css(node,prop,value) {
    if (!value){
    return getCss(node,prop);
    }else {
        setCss(node,prop,value);
    } 
}

//삼항식
function css(node,prop,value) {
    (!value) ? getCss(node,prop) : setCss(node,prop,value)
} 

//화살표함수
const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)









//getComputedStyle(first)['color'];
getCss('.first', 'color');

//first.style.backgroundcolor = 'orange';
setCss('.first','backgroundColor','orange')