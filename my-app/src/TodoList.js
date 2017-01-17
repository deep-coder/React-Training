/**
 * Created by deepcoder on 17/01/17.
 */
import React, { PropTypes } from 'react';

//Example for Usage of key in React
const TodoList = ({ items }) => {
  const createItem = (item) => <div key={item.id}>{item.text}</div>;
  return <div>{items.map(createItem)}</div>;
};

TodoList.propTypes = { items: PropTypes.array.isRequired };

export default TodoList;