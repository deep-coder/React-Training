/**
 * Created by deepcoder on 16/01/17.
 */
import React from 'react';


class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getProductList: { "Product1": "p1", "Product2": 'p2' }
    }
  }

  componentDidMount() {
    this.setState({
      getProductList: { "Product1": "p1", "Product2": 'p2' }
    })
  }

  componentWillMount() {

  }

  renderProducts = () => {
    return (
      <div>
        <label>{this.state.getProductList.Product1}</label>
        <label>{this.state.getProductList.Product2}</label>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderProducts()}
      </div>
    )
  }
}

export default ProductListing;