import { gql } from 'apollo-boost';

export const TO_DO_LIST = gql`
  query {
    allToDoLists(orderBy:id_DESC) {
      id
      itemName
      completedYn
    }
  }
`;

export const TOGLE_TODO = gql`
  mutation updateToDoList($ID: ID!, $completedYn: Boolean) {
    updateToDoList(id: $ID, completedYn: $completedYn){
      completedYn
      itemName
    }
  }
`;
