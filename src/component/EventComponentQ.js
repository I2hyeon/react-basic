import { useState } from "react";

function EventComponentQ() {
  
  // 실습
  let [form, setForm] = useState({ data: '', result: '' });

  let handleChange = (e) => {
    setForm({data: e.target.value, result: form.result});
  };

  let handleClick = () => {
    let copy = { data: '', result: form.data };
    setForm(copy);
  };

  return (
    <div>
      <h3>인풋데이터 핸들링 (실습)</h3>
      클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리

      <br />
      <input type="text" name="data" value={form.data} onChange={handleChange}></input>
      <button type="submit" onClick={handleClick}>추가하기</button>

      <h3>결과</h3>
      {form.result} 입니다
    </div>
  );
}

export default EventComponentQ;
