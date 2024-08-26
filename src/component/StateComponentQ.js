import { useState } from "react";

function StateComponentQ() {

  let [cnt, setCnt] = useState(0);

  let increase= () => {
    // cnt++; // 직접 값을 변경하는 것이기 때문에 안 됨
    // setCnt(cnt + 1);
    // setCnt ( 함수 ); // 함수의 첫번째 매개변수에 이전 값을 넣어줌
    setCnt( prev => prev + 1 ); // prev는 state의 이전 값을 받을 수 있음
  }
  
  return (

    <div>

      <h3>실습</h3>
      <h3>카운트 : {cnt}</h3>
      <button onClick={increase}>증가</button>
      <button onClick={() => setCnt(cnt - 1)}>감소</button>
      <button onClick={() => setCnt(0)}>초기화</button>

    </div>

  )

}

export default StateComponentQ;
