import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #ffdefa;
`;

export const ListContainer = styled.View`
  background-color: #f2d3ed;
  padding: 20px 15px;
  margin-top: 40px;
  border-radius: 10px;
`;

export const AddTodoContainer = styled.View`
  width: 350px;
  height: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const AddTodoInput = styled.TextInput`
  width: 69%;
  height: 100%;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 10px;
`;
export const AddTodoButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #89f5e5;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TodoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  border-bottom-width: 1px;
  border-bottom-color: #ffff;
  padding-bottom: 10px;
`;

export const Remove = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #f58989;
  justify-content: center;
  align-items: center;
`;
export const Done = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: #89f5bf;
  align-items: center;
  justify-content: center;
`;

export const ButtonsRowCotainer = styled.View`
  flex-direction: row;
`;

export const ImageTodo = styled.Image`
  position: absolute;
  bottom: 70px;
`;
export const ImageTrash = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-size: ${(props) => (props.size ? props.size + 'px' : '16px')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'solid')};
  margin-top: ${(props) => (props.margint ? props.margint + '%' : 0)};
  opacity: ${(props) => (props.done ? 0.5 : 1)};
`;
