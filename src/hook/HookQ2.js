import { useRef, useState } from "react";





const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.

    */

    let [list, setList] = useState([]);
    let [todo, setTodo] = useState('');
    
    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    let input = useRef(null);
    
    const handleClick = () => {
        const obj = {num: list.length + 1, content: todo};
        const newList = list.concat(obj);
        
        setList(newList);
        setTodo('');

        alert(`${todo}를 추가하였습니다`);
        input.current.focus();
    }

    const newList = list.map( value => <li key={value.num}>{value.num}. {value.content}</li>)

    return (
        <div>
            <input type="text" placeholder="할일 목록을 작성하세요" value={todo} onChange={handleChange}/>
            <button type="button" onClick={handleClick} ref={input}>등록</button>
            <ul>
				{newList}
            </ul>
        </div>
    )

    
}

export default HookQ2;

// import { useRef, useState } from "react";

// const HookQ2 = () => {
//     /*
//     실습(할일목록 만들기)
//     1. state는 {todo: '', list: []} 로 관리합니다.
//     2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
//     3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.
//     */
//     const todoRef = useRef(null); //
//     const [data, setData] = useState({todo: '', list: []});

//     //인풋데이터 핸들링
//     const handleTodo = (e) => {
//         setData({...data, ["todo"] : e.target.value });
//     }
//     const handleClick = () => {
//         let newList = data.list;
//         newList.push( data.todo ); //concat를 이용해서 합치기.
//         setData( {todo : '', list : newList });
//         todoRef.current.focus(); //포커싱
//     }

//     return (
//         <div>
//             <h3>실습</h3>

//             <input type="text" placeholder="할일 목록을 작성하세요" value={data.todo} onChange={handleTodo} ref={todoRef}/>
//             <button type="button" onClick={handleClick}>등록</button>
//             <ul>
//                 {
//                     data.list.map( (item, index) => <li key={index}>{index+1}. {item}</li>)
//                 }
//             </ul>
//         </div>
//     )










//     /*
//     const [state, action] = useReducer(todoReducer, {todo: '', list: []})
//     const handleClick = (e) => {
//         action(e.target);
//     }
//     return (
//         <div>
//             <h3>실습</h3>

//             <input type="text" placeholder="할일 목록을 작성하세요" value={state.todo} onChange={(e) => action(e.target) } />
//             <button type="button" onClick={ handleClick }>등록</button>
//             <ul>
//                 {
//                     state.list.map( (item, index) => <li key={index}>{index+1}. {item}</li>)
//                 }
//             </ul>
//         </div>
//     )
//     */
// }

// //리듀스
// const todoReducer = (state, action) => {
//     if(action.type == "text" ) {
//         state = {...state, ["todo"] : action.value}
//     } else if(action.type == "button" ){
//         state.list.push( state.todo );
//         state = {...state, ["todo"] : ''}
//     }
//     return state;
// }

// export default HookQ2;