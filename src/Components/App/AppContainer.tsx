import React from 'react';
import { graphql } from 'react-apollo';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQL';
import { theme } from 'theme';
import { ThemeProvider } from 'typed-components';
import GlobalStyle from 'global-styles';

const AppContainer:any = ({ data }) => {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn}/>
      </ThemeProvider>
    </>
  );
};

export default graphql(IS_LOGGED_IN)(AppContainer);
