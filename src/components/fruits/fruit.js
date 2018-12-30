import React, { Component } from "react";
import "./fruit.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
class Fruits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    console.log(props);
  }
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { name, price, image, description } = this.props.fruit;
    return (
      <section>
        <Card>
          <a class="delete" href="/">
            ×
          </a>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>Price ${price}</CardText>
            <CardText>{this.state.showInfo ? description : ""}</CardText>
            <Button color="primary" size="sm" onClick={this.handleInfo}>
              {"more"}
            </Button>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default Fruits;
