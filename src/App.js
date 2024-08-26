import StateComponent from "./component/StateComponent";
import {Fragment} from 'react';
import StateComponentQ from "./component/StateComponentQ.js";
import ClassComponent from "./component/ClassComponent.js";

function App() {

  return (
    <Fragment>
      <StateComponent/>

      <hr/>
      <StateComponentQ/>

      <hr/>
      <ClassComponent name="홍길동" age={20} />

    </Fragment>
  )

}
export default App;