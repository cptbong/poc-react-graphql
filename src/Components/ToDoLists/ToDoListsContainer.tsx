import React from 'react';
import { TO_DO_LIST, TOGLE_TODO } from './ToDoListsQL';
import ToDoListsPresenter from './ToDoListsPresenter';
import { Query, Mutation, MutationFn } from 'react-apollo';

class ToDoListContainer extends React.Component {
  public state = {
    id: '',
    completedYn: false,
    checked: false,
  };
  public completeMutation: MutationFn;

  public render() {
    return (
        <Query query={TO_DO_LIST}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          console.log(data);
          console.log(data.allToDoLists);

          return (
            <Mutation
              mutation={TOGLE_TODO}
              variables={{
                ID: this.state.id,
                completedYn: this.state.completedYn,
              }}>
              {(completeMutation, { loading }) => {
                this.completeMutation = completeMutation;
                return (
                  <ToDoListsPresenter
                    allToDoLists={data.allToDoLists}
                    checked={this.state.checked}
                    toggleChange={this.toggleChnage}
                  />
                );
              }}
              </Mutation>

          );
        }}
        </Query>
    );
  }

  public toggleChnage: React.ChangeEventHandler<any> = (event) => {
    event.preventDefault();
    this.setState({
      id: event.target.id,
      completedYn: !this.state.completedYn,
    }, () => this.completeMutation());
  }
}

export default ToDoListContainer;
