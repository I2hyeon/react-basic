import HookEffect from "./hook/HookEffect.js";
import HookQ2 from "./hook/HookQ2.js";
import HookReducer from "./hook/HookReducer.js";
import HookReducer2 from "./hook/HookReducer2.js";
import HookRef from "./hook/HookRef.js";

function App() {

  return (
    <>
      <HookEffect/>
      <hr/>
      <HookRef/>

      <hr/> 
      <HookReducer/>

      <hr/>
      <HookReducer2/>

      <hr/>
      <HookQ2/>

    </>
  )
}

export default App;