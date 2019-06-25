import React from 'react';
import AddItem from 'Components/AddItem';
import ToDoLists from 'Components/ToDoLists';
import styled from 'typed-components';

const Container = styled.div`
  display: block;
  width: 400px;
  margin: 100px auto 0;
`;

const HomePresenter: React.SFC = () => {
  return (
    <>
      <Container>

      </Container>
      <section aria-labelledby="todos-label">
        <p className="smaller">This is A Todo List, with typescript, reactjs, styledcomponents, graphql, graphcool, <a href="https://inclusive-components.design/a-todo-list/"><strong>style</strong></a>.</p>
        <h1 id="todos-label" tabIndex={-1}>TODO List</h1>
        <ToDoLists/>
        <AddItem/>
      </section>
    </>
  );
};

export default HomePresenter;
