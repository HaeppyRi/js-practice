




//getter
function getAttr(node, prop){

    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(typeof node !== 'string'){
        throw new Error ('getter 함수의 두 번째 인수는 문자형이어야 한다.')
    }


    return node.getAttribute(prop);
}





//setter
function setAtter(node,prop,value) {
    if(typeof node === 'string') node = getNode(node);
    if(typeof prop !== 'string' || typeof value !== 'string') throw new TypeError('setAttr함수의 두 번째와 세 번째 인수는 문자 타입이어야 합니다.');
    if(!value) throw new Error('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.');
}

function attr(node, prop, value){
    if (!value){
        return getAttr(node, prop);
    }else {
        setAttr(node, prop, value);
    }
}