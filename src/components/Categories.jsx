import React, { Component } from 'react';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Все',
        },
        {
          key: 'wardrobe',
          name: 'Шафи',
        },
        {
          key: 'bed',
          name: 'Ліжка',
        },
        {
          key: 'chairs',
          name: 'Стільці',
        },
        {
          key: 'table',
          name: 'Столи',
        },
        {
          key: 'commode',
          name: 'Комоди',
        },
      ],
      filter: false,
    };
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map((el) => (
          <div
            key={el.key}
            onClick={() => 
              this.props.chooseCategory(el.key)}
          >
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
