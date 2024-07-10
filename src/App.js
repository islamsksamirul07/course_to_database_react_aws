// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddCourse from './component/AddCourse';
import AllCourses from './component/AllCourses';
import Header from './component/Header';
import Home from './component/Home';
import Manues from './component/Manues';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Update from './component/Update';
// import { Button, Container } from "reactstrap";

function App() {
  return (
    
    
    <div>
      <div>This is div for checking</div>
        {/* <Header/>
        <Home name="Sahil"/>
        <AllCourses/>
        <AddCourse/>
        <Manues/> */}

        <Router>
          {/* <ToastContainer> */}
            {/* <Container> */}
              <Header/>
              <Row>
                <Col md={4}>
                <Manues/>
                </Col>
                <Col md={8}>
                <Routes>
                  <Route path="/" Component={Home}/>
                  <Route path="/view-courses" Component={AllCourses} exact/>
                  <Route path="/add-course" Component={AddCourse} exact/>
                  <Route path="/course-update" Component={Update} exact/>
                </Routes>
                </Col>
              </Row>
            {/* </Container> */}
          {/* </ToastContainer> */}
        </Router>
       
       
    </div>
    );
}

export default App;
