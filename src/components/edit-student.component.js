import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class EditStudent extends Component {

    constructor(props) {
        super(props);

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

    componentDidMount() {
        axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id).then(res => {
            this.setState({
                name: res.data.name,
                regisno: res.data.regisno,
                schoolof: res.data.schoolof,
                major: res.data.major,
                advisor: res.data.advisor,
                address: res.data.address,
                phonenumber: res.data.phonenumber,
                email: res.data.email,
                requestfor: res.data.name
                
            })
        })
        .catch((error) => {
            console.log(error)
        })
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

        axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject).then((res) => {
            console.log(res.data);
            console.log('Student Successfully Updated');
        }).catch((error) => {
            console.log(error)
        });

        // Redirect to student list
        this.props.history.push('/student-list')
    }



    render() {
        return (
            <div className="form-wrapper mt-5">
            <h1>Update Student</h1>
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

                        <label>Engineering </label>
                        
                            <input type="radio" name="schoolof" value="Engineering" onChange={this.onChangeStudentSchoolof}/>     
                        
                        
                        <lable>Management </lable>
                        
                            <input type="radio" name="schoolof" value="Management" onChange={this.onChangeStudentSchoolof}/>
                        
                        
                        <lable>Commerce </lable>
                            
                            <input type="radio" name="schoolof" value="Commerce" onChange={this.onChangeStudentSchoolof}/>
                        

                <Form.Group controlId= "Major">
                    <Form.Label>Major</Form.Label>
                    <Form.Control type="text" value={this.state.major} onChange={this.onChangeStudentMajor}/> 
                </Form.Group>

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
                    Update Student
                </Button>
            </Form>
        </div>
        )
    }
}
 