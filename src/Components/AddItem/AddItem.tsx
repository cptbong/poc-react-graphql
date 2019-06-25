import React from 'react';

const newElement: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log('111');
  console.log(HTMLFormElement);
};

const AddItem: React.SFC = () => {
  return (
    <>
      <div className="empty-state">
        <p>Either you've done everything already or there are still things to add to your list. Add your first todo &#x2193;</p>
      </div>
      <form onSubmit={newElement}>
        <label htmlFor="add" className="vh">
          Write a new todo item
        </label>
        <input type="text" id="add" v-model="workingName" placeholder="Write your TODO"/>
        <button type="submit">Add</button>
      </form>
      <div role="status" className="vh">
        feedback
      </div>
    </>
  );
};

export default AddItem;
