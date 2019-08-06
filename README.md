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