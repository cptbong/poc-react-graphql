import React from 'react';
import { CREATE_TODO } from './AddItemQL';
import { TO_DO_LIST } from '../ToDoLists/ToDoListsQL';
import AddItemPresenter from './AddItemPresenter';
import { Mutation } from 'react-apollo';


class ToDoListContainer extends React.Component {
  public state = {
    itemName: '',
  };

  public render() {
    return (
        <Mutation
          mutation={CREATE_TODO}
          refetchQueries={[{ query: TO_DO_LIST }]}
          onCompleted={() => {
            this.state.itemName = '';
          }}
        >
          {(createMutation, { loading }) => {
            return (
              <AddItemPresenter
              createMutation={createMutation}
              />
            );
          }}
        </Mutation>
    );
  }

  // public toggleChnage: React.ChangeEventHandler<any> = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     id: event.target.id,
  //     completedYn: event.target.checked,
  //   }, () => {
  //       this.completeMutation()
  //   });
  // }

  // public deleteToDoList = (id: string) => {
  //   console.log(id);
  // }
}

export default ToDoListContainer;
