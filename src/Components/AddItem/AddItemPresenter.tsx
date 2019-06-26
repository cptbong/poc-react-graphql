import React from 'react';
import { MutationFn } from 'react-apollo';

interface IProps {
  createMutation: MutationFn;
}

const AddItem: React.StatelessComponent<IProps> = ({
  createMutation
}) => {
  return (
    <>
      <div className="empty-state">
        <p>Either you've done everything already or there are still things to add to your list. Add your first todo &#x2193;</p>
      </div>
      <form onSubmit={(event) => {
        event.preventDefault();
        const itemName = event.target[0].value;
        createMutation({ variables: {
          itemName,
        }});
      }}>
        <label htmlFor="add" className="vh">
          Write a new todo item
        </label>
        <input type="text" id="add" placeholder="Write your TODO"/>
        <button type="submit">Add</button>
        {/* <button onClick={(event: React.MouseEvent<HTMLElement>) => { */}
      </form>
      <div role="status" className="vh">
        feedback
      </div>
    </>
  );
};

export default AddItem;
