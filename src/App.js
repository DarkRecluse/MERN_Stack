

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/Auth'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
        

            <NavBar bg="dark" variant="dark">
              <Container>
                <NavBar.Brand>
                  <Link to={"/create-student"} className="Nav-link">
                    React MERN Stack CRUD
                  </Link>
                </NavBar.Brand>

                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/create-student"} class="nav-link">
                      Create Student
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"/student-list"} class="nav-link">
                      Student List
                    </Link>
                  </Nav>
                </Nav>
              
              </Container>
            </NavBar>

       
          <Container>
            <Row>
              <Col md="12">
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    
                    <Route path="/create-student" component={CreateStudent} />
                    <Route path="/edit-student/:id" component={EditStudent} />
                    <Route path="/student-list" component={StudentList} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
