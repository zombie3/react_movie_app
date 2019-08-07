## Movie App

첫 React tutorial 테스트 진행기

1. (1.2) React 맛보기
    * 기본 설명을 위해 필요 없는 부분 삭제
    * React app의 간단한 설명
        * App.js 수정 후 출력되는 내용 확인
        * index.js 파일의 document query select 문 수정 후 결과 확인 (오류 발생)
        * index.html 을 수정하여 오류 수정

2. (2.0) Create first component
    * Component 만들기
        * Component javascript 생성
        * index.js 안의 render의 <App /> 부분 옆에 생성한 Component 입력 후 결과 확인 (오류 발생)
            * React의 application은 한 번에 하나의 component만 rendering 할 수 있음
        * Component를 지우고 App.js 파일의 App Component 안에 생성한 Component 입력
            * 이상 없이 rendering 됨
            * 하지만 Component 안에서 최상위 Level에 여러개의 <div> 태그는 사용 불가 그러므로 하나의 <div> 태그안에 입력 필요
            * Component 안에는 수많은 Component를 import 해서 사용 가능

3. (2.1) Resuable Components with JSX + Props
    * Component에 값 전달하기
        * Component Function 생성
            * 다른 Component 안에서 사용 시 Tag 안에 임의 이름의 Prop 추가
            * Tag 이름과 동일한 이름의 Argument 추가

4. (2.2) Dynamic Component Generation
    * 동적으로 Component를 생성하는 방법 설명
        * javascript의 array map 기능 설명
        * map 기능을 이용한 Dynamic Component 생성

5. (2.3) Map Recap
    * map의 다른 사용 방법 설명
        * 무명 함수가 아닌 일반 함수 생성 후 지정하는 방식
    * render 시 생성 되는 객체와 방식 설명 (React Element)
    * 에러 체크
        * React element 생성 시 key 지정이 필수
            * React 내부에서 사용되는 값
        * missing img alt tagcode - 가이드 라인이 되는 것을 설명

6. (2.4) Protection with Prop Types
    * Tag의 Prop 를 사전 체크하는 방법
        * prop-types Lib를 이용한 Prop Type과 Require 체크
        * https://ko.reactjs.org/docs/typechecking-with-proptypes.html

7. (3.0) Class Components and State
    * Class Component
        * 기존 예제의 Fucntion Component를 Class Component로 변경
        * State 를 확인할 수 있는 예제 소스로 변경
        * Class Component는 React.Component extends 하여 구현
        * render 함수안에 기존 Function Compoent 에서 Reture 하던 내용을 구현
        * state 변수(dictionary) 안에 state 변수들을 지정
        * render 함수에서 state 사용 시에는 this.state.X 와 같이 기존 javascript 형태로 작성
        * button event 도 동일하게 this.functionName 형태로 입력


8. (3.1) All you need to know about State
    * State 상태 갱신 시 this.state.count 에 직접 입력하지 말 것
        * render 함수를 호출하지 않으므로 화면에 갱신되지 않음
        * 이말인 즉슨 화면에 즉시 갱신이 필요없는 애들은... 성능상 쓰지 않는 방법을 생각해볼 수도 있을 듯
    * State 상태 갱신은 this.setState 함수를 통하여 진행 가능
        * 함수의 파라미터 값에 Dic 을 지정 하면 값을 지정 후 화면에 render
        * render 시에는 모든 화면을 갱신하지 않고 변경된 State 부분만 갱신 (이런 로직 때문에 갱신에 대한 부하가 적음)
        * 하지만 여기서도 바로 this.state.count 로 바로 값을 들고오면 문제나 성능상 문제가 될 수 있따고 함
            * 정확한 원인은 찾아봐야할 듯, 아마도 mutex 처리가 자동으로 되지 않을까라고 생각해봄
            * setState 함수 파라미터에 익명함수를 생성하면 첫번째 변수로 현재 State 를 전달 받아서 처리 가능

9. (3.2) Component Life Cycle
    * Mounting
        * constructor
        * componentWillMount
        * render
        * componentDidMount
    * Updating
        * componentWillUpdate
        * render
        * componentDidUpdate
    * UnMounting
        * componentWillUnmount