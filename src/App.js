import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Cardmap from './components/Cardmap';
import Statefulcomponent from './components/Statefulcomponent';
import Eventhandlers from './components/Eventhandlers';
import Reacthooks from './components/Reacthooks';
import Statelessbutton from './components/Statelessbutton';
import Httpfetch from './components/Httpfetch';
import Httpaxios from './components/Httpaxios';
import Register from './components/Register';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <>
      <Navibar/>
      <Container style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Cardmap/>
      </Container>
      {/* <Statelessbutton color="success" label="Message Us" display="inline-block" margin={5}/> */}
      <Container>
        <h4>Sign-up Here</h4>
        <Register/>
        <Httpaxios/>
        {/* <Httpfetch/> */}
        {/* <Statefulcomponent/> */
        /* <Eventhandlers/> */
        /* <Reacthooks/> */}
      </Container>
    </>
    
  );
};
export default App;