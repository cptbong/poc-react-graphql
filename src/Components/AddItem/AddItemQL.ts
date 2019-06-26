import { gql } from 'apollo-boost';

export const CREATE_TODO = gql`
  mutation createToDoList($itemName: String!) {
    createToDoList(completedYn: false, itemName: $itemName){
      completedYn
      itemName
    }
  }
`;
