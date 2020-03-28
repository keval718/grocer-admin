import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import Header from './components/Header';
import Footer from './components/Footer';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "Tomatoes",
          company: "Mapple",
          description: "$2.71/lb",
          url:"https://image.shutterstock.com/image-photo/tomato-isolated-on-white-background-260nw-650684470.jpg"
        },
        {
          id: 2,
          name: "Cilantro",
          company: "Some Company, Inc",
          description: "$1.10/lb",
          url:"https://hypothyroidchef.com/wp-content/uploads/2016/03/Depositphotos_58848057_s-2015-e1457557778704.jpg"


        },
        {
          id: 3,
          name: "Potatoes",
          company: "Big, Inc",
          url: "https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-630239534.jpg",
          description:"$1.19/lb"
        },
        {
          id: 4,
          name: "Potatoes",
          company: "Big, Inc",
          url: "https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-630239534.jpg",
          description:"$1.19/lb"
        }
       
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <div>
      
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
      <Footer/>
      </div>
    )
  }
}

export default MainArea;
