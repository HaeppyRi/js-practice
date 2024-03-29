


function getNode(node, context = document){
    //type guard
if(typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자형이어야 합니다.');
  }

if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
}
return context.querySelector(node);
}







function getNodes(node, context = document){

    if(typeof node !== 'string') {
        throw new Error('getNodes 함수의 인수는 문자형이어야 합니다.');
      }

    if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
    }

    return context.querySelectorAll(node);

}