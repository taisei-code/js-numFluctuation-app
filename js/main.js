'use strict'

let   tubeInput = document.querySelector('#tube-input');
const tubeMinus = document.querySelector('#tube-minus');
const tubePlus  = document.querySelector('#tube-plus');

let countNum = 0;

tubePlus.addEventListener('click', countIncrease);
tubeMinus.addEventListener('click', countDecrease);

// 数量を増やしたときの関数
function countIncrease() {
  countNum++;
  tubeInput.value = countNum;
}

// 数量を減らしたときの関数
function countDecrease() {
  // 数量が0個なら減らさない処理
  if(tubeInput.value == 0) {
    return false
  }
  countNum += -1;
  tubeInput.value = countNum;
}