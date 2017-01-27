import React from 'react';
import ReactDOM from 'react-dom';

class ProductBox extends React.Component {
  constructor() {
    super();
    this.state = {
        name: '',
        details: ''
      };
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({
      name: ReactDOM.findDOMNode(this.refs.name).value,
      details: ReactDOM.findDOMNode(this.refs.details).value
    });
  }

  render() {
    return (
      <div className='product--box'>
        <div className='product--name'>
          <h5>{this.state.name}</h5>
          <ProductAdmin ref='name' update={this.update} />
        </div>
        <div className='product--details'>
          <h5>{this.state.details}</h5>
          <ProductAdmin ref='details' update={this.update} />
        </div>
      </div>
    );
  }
}

class ProductAdmin extends React.Component {
  render() {
    return (
      <input type='text'
          onChange={ this.props.update } />
    );
  }
}
