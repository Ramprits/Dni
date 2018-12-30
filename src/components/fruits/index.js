import React, { Component } from "react";
import Fruit from "./fruit";
export default class Fruits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      fruits: [
        {
          name: "Apple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
          price: 35,
          description:
            "Apples are extremely rich in important antioxidants, flavanoids, and dietary fiber. The phytonutrients and antioxidants in apples may help reduce the risk of developing cancer, hypertension, diabetes, and heart disease. This article provides a nutritional profile of the fruit and its possible health benefits."
        },
        {
          name: "Banana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 12,
          description:
            "The carbohydrate composition of bananas changes drastically during ripening. The main component of unripe bananas is starch. Green bananas contain up to 70-80% starch, on a dry weight basis."
        },
        {
          name: "Grapes",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          price: 45,
          description:
            "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil."
        },
        {
          name: "Pineapple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          price: 200,
          description:
            "The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant in the family Bromeliaceae."
        }
      ]
    };
  }

  renderFruits = () => {
    return this.state.fruits.map((fruit, index) => {
      return (
        <section key={index} className="col-md-4 mt-1">
          <Fruit fruit={fruit} showInfo={this.state.showInfo} />
        </section>
      );
    });
  };
  render() {
    return <section className="row">{this.renderFruits()}</section>;
  }
}
