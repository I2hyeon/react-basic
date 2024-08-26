
import PropTypes from 'prop-types'

function MyComponent( {name = "이름없음", age=2, addr="주소없음"} /*props*/) { // props 값을 받음

  // console.log(props);

  return (
    <div>
      이름: {name}<br/>
      나이: {age}<br/>  
      주소: {addr}<br/>
    </div>
  );

/*   return (
    <div>
      이름: {props.name}<br/>
      나이: {props.age}<br/>  
      주소: {props.addr}<br/>
    </div>
  ); */

}

// 프롭스의 기본값 지정
// MyComponent.defaultProps = {
//   name : "이름없음",
//   age : 0,
//   addr : "경기도"
// }

// 프롭스의 타입 검증 -> 실제 에러가 나는 것은 아니지만, 타입에 대한 힌트를 줍니다
MyComponent.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string
}


export default MyComponent;