import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as TodoActions} from '../../store/ducks/todos';
import todolist from '../../assets/todolist.png';
import trash from '../../assets/trash.png';

import {
  Container,
  ListContainer,
  AddTodoContainer,
  AddTodoButton,
  AddTodoInput,
  TodoRow,
  Remove,
  Done,
  ButtonsRowCotainer,
  ImageTodo,
  ImageTrash,
  Text,
} from './style';

const Todo = ({todos, addTodo, doneTodo, removeTodo}) => {
  const [text, setText] = useState('');

  function newTodo(todo) {
    if (!todo) {
      // eslint-disable-next-line no-alert
      alert('The task field is empyt :(');
    } else {
      addTodo(todo);
      setText('');
    }
  }

  return (
    <Container>
      <Text size={32} margint={20} opacity={0.5}>
        TODO-LIST
      </Text>

      <ListContainer>
        <AddTodoContainer>
          <AddTodoInput
            value={text}
            onChangeText={(todo) => setText(todo)}
            placeholder="Make Coffee..."
          />
          <AddTodoButton onPress={() => newTodo(text)}>
            <Text size={24}>Add</Text>
          </AddTodoButton>
        </AddTodoContainer>

        {todos.map((todo) => (
          <TodoRow key={todo.id}>
            <Text size={24} done={todo.done}>
              {todo.text}
            </Text>
            <ButtonsRowCotainer>
              <Done onPress={() => doneTodo(todo.id)}>
                <Text>Done</Text>
              </Done>
              <Remove onPress={() => removeTodo(todo.id)}>
                <ImageTrash source={trash} />
              </Remove>
            </ButtonsRowCotainer>
          </TodoRow>
        ))}
      </ListContainer>
      <ImageTodo source={todolist} />
    </Container>
  );
};

const MapStateToProps = (state) => ({
  todos: state.todos,
});

const MapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(MapStateToProps, MapDispatchToProps)(Todo);
