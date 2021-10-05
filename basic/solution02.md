# 중복문자제거

> 문자열이 주어졌을때, 중복문자가 제거된 문자열을 출력하라.

```javascript
// 중복문자 제거하기
function solution02(s) {
  let answer = '';
  for(let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}

// 번외 문제 - k의 갯수 찾기
function solution02_02(s) {
  let answer = 0;
  let pos = s.indexOf('k');

  while(pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }

  return answer;
}

console.log('solution02',solution02('ksekkset')); // kset
console.log('solution02_02',solution02_02('ksekkset')); // 3
```
- indexOf는 첫번째 순번을 반환하기 때문에 indexOf값과 i값이 같으면 중복되지 않은 문자열이기 때문에 변수 answer에 그 문자를 추가해준다.
- 번외문제
  - 변수 pos에 찾고 싶은 문자열을 indexOf로 구한다.
  - while문을 통해 pos가 -1이 아닐때 즉, 찾고싶은 문자열일때 변수 answer에 1을 더해주고 pos값을 현재 찾은 index다음부터 찾도록 수정해준다.
