## 4주차 퀴즈
결과화면

<img width="503" alt="스크린샷 2024-10-07 오전 9 46 59" src="https://github.com/user-attachments/assets/1aad5860-c310-4ccb-b8f6-af96edff1fca">


🛠️ App.js 파일만 변경하면 됩니다!

### 상단) 프로필

- 결과 화면처럼 인풋 박스가 보이지 않도록 숨겨주세요
- Edit Profile 버튼을 누르면 프로필을 수정할 수 있도록 구현해주세요
- 각자의 이름, 전공, 이메일, 깃허브 주소로 변경해주세요

### 하단) 오늘의 할일

이 예시에서는 todos를 편집하거나 삭제하는 기능이 동작하지 않습니다. 

- 추가, 편집, 삭제 기능이 동작하도록 비변경 함수를 사용해서 `handleAddTodo`, `handleChangeTodo` , `handleDeleteTodo`를 다시 작성해주세요

<br/>
<br/>

## 질문

🤔 **변경과 재할당이 헷갈려요 ! 어떤 상황이 변경이고 재할당인 것인지 설명해주시면 좋을 거 같습니다**
<br/>

- 재할당 : 이미 값이 할당된 변수에 새로운 값을 할당하는 것
- 변경 : *객체 자체* 의 내용을 바꾸는 것(직접 변경)

재할당과 변경은 같은 뜻이지만 맥락상 state의 객체를 ‘직접’ 변경한다는 것을 강조하기 위해 ‘변경’이라고 표기한 듯 합니다.

<br/>
<br/>

🤔 **그러면 중간 과정에서는 변경되든 말든 상관없이 최종적으로만 새로운 객체를 state에 넣어주기만 하면 되는 건가요?**
<br/>

state에 존재하는 객체를 변경하는 것은 문제가 됩니다! 여기서 보여주는 예제에서는 방금 생성한 새로운 객체를 변경하기 때문에 괜찮습니다.

<br/>
<br/>

🤔 **이 얕은 복사 깊은 복사 부분 매번 헷갈려서 이참에 설명할 수 있을 정도로 완벽하게 이해하고 싶은데 이 내용으로 토론(?)하실분 찾습니다. 혹은 절 붙잡고 이해시켜주실 분 찾습니다.**
<br/>

얕은 복사

- 객체의 최상위 속성만 새로운 메모리에 복사하는 방법
- 객체의 `1depth까지만` 복사하는 것
- 중첩된 객체나 배열의 경우 참조만 복사되어 원본과 복사본이 같은 참조를 공유하게 됨

```jsx
const originalState = {
  user: {
    name: 'John',
    age: 30
  },
  items: [1, 2, 3]
};

const shallowCopy = { ...originalState };

shallowCopy.user.name = 'Jane';
console.log(originalState.user.name); // 'Jane'
```

이 예에서 **`shallowCopy`**를 변경하면 **`originalState`**도 영향을 받음

깊은 복사

- 객체의 모든 수준에서 새로운 복사본을 만드는 방법
- 원본 객체와 완전히 독립적인 새로운 객체가 생성됨

```jsx
const originalState = {
  user: {
    name: 'John',
    age: 30
  },
  items: [1, 2, 3]
};

const deepCopy = JSON.parse(JSON.stringify(originalState));

deepCopy.user.name = 'Jane';
console.log(originalState.user.name); // 'John'
```

이 예에서 **`deepCopy`**를 변경해도 **`originalState`**는 영향을 받지 않음

React에서는 상태 업데이트의 불변성을 유지하기 위해 **얕은 복사를 주로 사용**

→ 얕은 복사만으로도 React가 상태 변화를 감지하고 리렌더링을 트리거할 수 있기 때문

```jsx
const [state, setState] = useState({ count: 0, user: { name: 'John' } });

// 얕은 복사를 사용한 상태 업데이트
setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
```

<br/>
<br/>

🤔 **'중첩된 객체 갱신하기'와 같은 중첩을 말하는 것일까요? 그렇다면 주로 객체나 배열을 가진 state들만 사용하는 라이브러리 일까요?**
<br/>

맞습니다! Immer는 중첩된 객체나 배열과 같이 복잡한 상태를 관리할 때 사용합니다.

<br/>
<br/>

🤔 **해당 문장이 정확히 이해가 안되요..! state가 깊이 중첩되어 있는 경우 평탄화를 고려하라고하는데, 이 과정에서 발생할 수 있는 문제나 주의사항은 무엇인가요? 어떤 방법으로 상태 구조를 최적화할 수 있을까요?**
<br/>

평탄화에 관한건 다음 챕터 내용이라 추후에 공부해서 답변을 달도록 하겠습니다.

<br/>
<br/>

🤔 **이 방법이 편해 보이긴 하는데, 현업에서 자주 쓰는 라이브러리인가요?**
<br/>

찾아보니 immer를 자주 사용하면 오히려 사용하지 않았을 때보다 속도가 더 느려진다고 합니다. 
간단한 상태 관리의 경우 useState만으로 충분하고 중첩된 객체나 큰 배열 등 복잡한 상태를 관리해야하는 경우 Immer를 사용하는 방향으로 적절히 혼용해서 사용하지 않을까 추측합니다.

<br/>
<br/>

🤔 **해당 문장의 의미가 단순한 상태는 useState로 관리하고, 복잡한 중첩 상태는 useImmer로 관리한다는 의미일까요? 제대로 이해한건지 의미가 조금 헷갈려요ㅠㅠ**
<br/>

정답입니다^_^

