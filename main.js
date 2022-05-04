/**
 *
 *
 *
 */
let storeStack = [];
let storeNum = undefined;
const res = document.querySelector('.result');


/**
 *
 *
 *
 */
function onNumClick(evt) {

  const currNum = evt.srcElement.innerText;
  if (storeNum) {
    storeNum += currNum;
  } else {
    storeNum = currNum;
  }

  res.innerText = storeNum;
}


/**
 *
 *
 *
 */
function onOpClick(evt) {

  if (storeStack.length === 0) {
    const currOp = evt.srcElement.innerText;
    storeStack.push(Number(storeNum));
    storeStack.push(currOp);
    storeNum = undefined;
    return; // exit
  }

  if (storeStack.length === 1) {
    const currOp = evt.srcElement.innerText;
    storeStack.push(currOp);
    storeNum = undefined;
    return; // exit
  }

  const lastOp = storeStack.pop();
  const lastNum = storeStack.pop();
  let nextRes = undefined;
  if (lastOp === '+') nextRes = lastNum + Number(storeNum);
  if (lastOp === '−') nextRes = lastNum - Number(storeNum);
  if (lastOp === '×') nextRes = lastNum * Number(storeNum);
  if (lastOp === '÷') nextRes = lastNum / Number(storeNum);
  storeStack.push(nextRes);
  res.innerText = nextRes;
  storeNum = undefined;
}


/**
 *  Reset everything
 *
 *
 */
function onAcClick(evt) {
  storeStack = [];
  storeNum = undefined;
  res.innerText = '0';
}


/**
 *  By using the general class ".num" get all
 *  numbers (plus the comma ",") and attach
 *  an event listener.
 */
const nums = document.querySelectorAll('.num');
nums.forEach(elm => elm.addEventListener('click', onNumClick));


/**
 *
 *
 *
 */
const ops = document.querySelectorAll('.op');
ops.forEach(elm => elm.addEventListener('click', onOpClick));


/**
 *
 *
 *
 */
document.querySelector('.ac').addEventListener('click', onAcClick);
