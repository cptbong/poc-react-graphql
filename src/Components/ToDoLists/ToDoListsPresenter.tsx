import React from 'react';
import { Link } from 'react-router-dom';
import { MutationFn } from 'react-apollo';

interface IProps {
  allToDoLists: [{ id: string, itemName: string, completedYn: boolean }];
  completeMutation: MutationFn;
  deleteToDoList: MutationFn;
}

const ToDoListsPresenter: React.StatelessComponent<IProps> = ({
  allToDoLists,
  completeMutation,
  deleteToDoList }) => {
  return (
    <>
      <svg style={{ display: 'none' }}>
        <symbol id="bin-icon" height="50" width="50" viewBox="0 0 50 50">
        <path style={{ fill: '#000' }} d="m20.651 2.3339c-.73869 0-1.3312.59326-1.3312 1.3296v2.5177h-6.3634c-.73887 0-1.3314.59331-1.3314 1.3295v1.1888c0 .73639.59249 1.3289 1.3312 1.3289h7.6948 8.8798 7.6948c.73869 0 1.3312-.59249 1.3312-1.3289v-1.1888c0-.73639-.59249-1.3296-1.3312-1.3296h-6.3634v-2.5177c0-.73639-.59249-1.3296-1.3312-1.3296h-8.8798zm-5.6786 11.897c-1.7775 0-3.2704 1.4889-3.2704 3.274v27.647c0 1.7775 1.4928 3.2704 3.2704 3.2704h20.783c1.7775 0 3.2704-1.4928 3.2704-3.2704v-27.647c0-1.7852-1.4928-3.274-3.2704-3.274h-20.783zm1.839 3.4895h1.1696c.73869 0 1.3389.60018 1.3389 1.3466v24.247c0 .74638-.60018 1.3389-1.3389 1.3389h-1.1696c-.73869 0-1.3389-.59249-1.3389-1.3389v-24.247c0-.74638.60018-1.3466 1.3389-1.3466zm7.6948 0h1.1696c.73869 0 1.3389.60018 1.3389 1.3466v24.247c0 .74638-.60018 1.3389-1.3389 1.3389h-1.1696c-.73869 0-1.3389-.59249-1.3389-1.3389v-24.247c0-.74638.60018-1.3466 1.3389-1.3466zm7.6948 0h1.1696c.73869 0 1.3389.60018 1.3389 1.3466v24.247c0 .74638-.60018 1.3389-1.3389 1.3389h-1.1696c-.73869 0-1.3389-.59249-1.3389-1.3389v-24.247c0-.74638.60018-1.3466 1.3389-1.3466z"/>
        </symbol>
      </svg>

      <ul id="myUl">
      {
        allToDoLists.map((todo:any, index) => (
          <li key={todo.id} className={todo.completedYn ? 'checked' : ''}>
            <input type="checkbox"
              id={todo.id}
              className="vh"
              checked={todo.completedYn ? true : false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                completeMutation({ variables: {
                  ID: event.target.id,
                  completedYn: event.target.checked,
                }});
              }}
            />
            <label htmlFor={todo.id}>
              <span className="tick"></span>
              <Link to={'/detail'} style={{ textDecoration: 'none' }}>
                <span className="text">{todo.itemName}</span>
              </Link>
            </label>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => {
              deleteToDoList({ variables: {
                ID: todo.id,
              }});
            }}>
              <svg><use xlinkHref="#bin-icon"></use></svg>
            </button>
          </li>
      ))}
      </ul>
    </>
  );
};

// const AddItem: React.SFC = () => {
//   return (
//     <>
//       <Title>
//         ADD ITEM
//       </Title>
//       <InputItem/>
//       <AddButton>Add</AddButton>
//     </>
//   );
// };

export default ToDoListsPresenter;
