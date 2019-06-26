import React from 'react';
import { TO_DO_LIST, TOGLE_TODO, REMOVE_TODO } from './ToDoListsQL';
import ToDoListsPresenter from './ToDoListsPresenter';
import { Query, Mutation } from 'react-apollo';

class ToDoListContainer extends React.Component {
  public state = {
    id: '',
    completedYn: false,
    checked: false,
  };

  public render() {
    return (
        <Query query={TO_DO_LIST}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <Mutation
              mutation={TOGLE_TODO}
              refetchQueries={[{ query: TO_DO_LIST }]}
            >
              {(completeMutation, { loading }) => {
                return (
                  <Mutation
                    mutation={REMOVE_TODO}
                    refetchQueries={[{ query: TO_DO_LIST }]}
                  >
                    {(deleteToDoList, { loading }) => {
                      return (
                        <ToDoListsPresenter
                          allToDoLists={data.allToDoLists}
                          completeMutation={completeMutation}
                          deleteToDoList={deleteToDoList}
                        />
                      );
                    }}
                  </Mutation>
                )
              }}
              </Mutation>
          );
        }}
        </Query>
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
