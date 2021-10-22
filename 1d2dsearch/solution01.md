# 가위바위보

> A, B가 낸 가위바위보 정보가 주어졌을 때 각회차마다 승자를 구하라

```javascript
function solution03(n, arr1, arr2) {
  let answer = '';

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) answer += 'D' + ' ';
    else if (arr1[i] === 1 && arr2[i] === 3) answer += 'A' + ' ';
    else if (arr1[i] === 2 && arr2[i] === 1) answer += 'A' + ' ';
    else if (arr1[i] === 3 && arr2[i] === 2) answer += 'A' + ' ';
    else answer += 'B' + ' ';
  }

  return answer;
}
console.log('solution03', solution03(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // A B A B D
```

- 배열의 길이가 같기 때문에 하나를 선택해 반복분을 돌린다.
- 매 판마다 A를 기준으로 승, 패, 무의 경우를 모두 구하고 나머지 경우에는 B가 승리하도록 한다.
- 결과 값을 answer에 담아 출력한다.
