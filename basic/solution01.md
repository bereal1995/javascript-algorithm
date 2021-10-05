# 일곱 난쟁이

> 아홉 난쟁이의 키가 주어 졌을때, 일곱 난쟁이를 찾아라  
> 일곱 난쟁이의 키의 합은 100 이다.  
> 아홉난쟁이의 키는 모두 다르고, 정답이 여러개인 경우 아무거나 출력한다.

```javascript
function solution01(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i+1; j < 9; j++) {
      if( (sum - ( arr[i] + arr[j] )) === 100){
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution01(arr)); // [20, 7, 23, 19, 10, 8, 13]
```

- 아홉난쟁이의 키의 합을 모두 구해 변수 sum에 저장한다.
- 2중 반복문을 통해 전체합 sum에서 키중에서 i,j번째 키를 뺀 값이 100이 되는 경우에 i,j번째 배열을 제거한다.
- 이 때 i부터 제거하면 j의 순서가 바뀜으로 j부터 제거하고 i를 제거한다.
