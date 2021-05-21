import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'



export default class CreateStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            regisno: '',
            schoolof: '',
            major: '',
            advisor: '',
            address: '',
            phonenumber: '',
            email: '',
            requestfor: ''
        }
    }


    onChangeStudentName = (e) => {
        this.setState({ name: e.target.value})
    }

    onChangeStudentRegisno = (e) => {
        this.setState({ regisno: e.target.value})
    }

    onChangeStudentSchoolof = (e) => {
        this.setState({ schoolof: e.target.value})
    }

    onChangeStudentMajor = (e) => {
        this.setState({ major: e.target.value})
    }

    onChangeStudentAdvisor = (e) => {
        this.setState({ advisor: e.target.value})
    }

    onChangeStudentAddress = (e) => {
        this.setState({ address: e.target.value})
    }

    onChangeStudentphonenumber = (e) => {
        this.setState({ phonenumber: e.target.value})
    }

    onChangeStudentEmail = (e) => {
        this.setState({ email: e.target.value})
    }

    onChangeStudentrequestfor = (e) => {
        this.setState({ requestfor: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const studentObject = {
            name: this.state.name,
            regisno: this.state.regisno,
            schoolof: this.state.schoolof,
            major: this.state.major,
            advisor: this.state.advisor,
            address: this.state.address,
            phonenumber: this.state.phonenumber,
            email: this.state.email,
            requestfor: this.state.requestfor
        };

        axios.post('http://localhost:4000/students/create-student', studentObject).then(res =>
        console.log(res.data));



        //console.log('student successfully created!');
        //console.log(`Name: ${this.state.name}`);
        //console.log(`RegisNo: ${this.state.regisno}`);
        //console.log(`Schoolof: ${this.state.schoolof}`);
        //console.log(`Major: ${this.state.major}`);
        //console.log(`Advisor: ${this.state.advisor}`);
        //console.log(`Address: ${this.state.address}`);
        //console.log(`phonenumber: ${this.state.phonenumber}`);
        //console.log(`Email: ${this.state.email}`);
        //console.log(`requestfor: ${this.state.requestfor}`);

        this.setState({
            name: '',
            regisno: '',
            schoolof: '',
            major: '',
            advisor: '',
            address: '',
            phonenumber: '',
            email: '',
            requestfor: ''
        })

    }






    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Create Student</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId= "Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/> 
                    </Form.Group>

                    <Form.Group controlId= "RegisNo">
                        <Form.Label>RegisNo</Form.Label>
                        <Form.Control type="text" value={this.state.regisno} onChange={this.onChangeStudentRegisno}/> 
                    </Form.Group>

                    <Form.Group controlId= "School of">
                        <Form.Label>School of </Form.Label>
                        
                    </Form.Group>

                        <lable>Engineering </lable>
                            
                            <input type="radio" name="schoolof" value="Engineering" onChange={this.onChangeStudentSchoolof}/>     
                        
                        
                        <lable>Management </lable>
                        
                            <input type="radio" name="schoolof" value="Management" onChange={this.onChangeStudentSchoolof}/>
                        
                        
                        <lable>Commerce </lable>
                            
                            <input type="radio" name="schoolof" value="Commerce" onChange={this.onChangeStudentSchoolof}/>
                        
                    
                    <Form.Group controlId= "Major">
                        <Form.Label>Major</Form.Label>
                    </Form.Group>    
                    <Dropdown>
                        <Dropdown.Toggle >
                        Major
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item eventKey="1" value="CPE"  onChange={this.onChangeStudentMajor}>CPE</Dropdown.Item>
                            <Dropdown.Item eventKey="2" value="Logistic" onChange={this.onChangeStudentMajor}>Logistic</Dropdown.Item>
                            <Dropdown.Item eventKey="3" value="Electrical" onChange={this.onChangeStudentMajor}>Electrical</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                   

                    <Form.Group controlId= "Advisor">
                        <Form.Label>Advisor</Form.Label>
                        <Form.Control type="text" value={this.state.advisor} onChange={this.onChangeStudentAdvisor}/> 
                    </Form.Group>

                    <Form.Group controlId= "Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.onChangeStudentAddress}/> 
                    </Form.Group>

                    <Form.Group controlId= "phonenumber">
                        <Form.Label>phonenumber</Form.Label>
                        <Form.Control type="text" value={this.state.phonenumber} onChange={this.onChangeStudentphonenumber}/> 
                    </Form.Group>

                    <Form.Group controlId= "Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/> 
                    </Form.Group>

                    <Form.Group controlId= "Request for">
                        <Form.Label>Request for</Form.Label>
                        <Form.Control type="text" value={this.state.requestfor} onChange={this.onChangeStudentrequestfor}/> 
                    </Form.Group>

                    <Button variant="success" size="lg" block="block" type="submit">
                        Create Student
                    </Button>
                </Form>
            </div>
        )
    }
}
