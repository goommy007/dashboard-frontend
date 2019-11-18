import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class AlertPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: null,
        };
    }

    async componentDidMount() {
        const questions = (await axios.get('http://localhost:8081/')).data;
        this.setState({
            questions,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.questions === null && <h4>No Issues on-going currently</h4>}
                    {
                        this.state.questions && this.state.questions.map(question => (
                            <div className="App" key={question.id}  >
                                <Alert variant={question.status}>
                                    <Alert.Heading>Update : {question.id}</Alert.Heading>
                                    <p3>Last Updated :  {question.timestamp}</p3>
                                    <p>{question.title}</p>
                                    <hr />
                                    <p className="mb-0">{question.description}</p>
                                </Alert>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default AlertPage;