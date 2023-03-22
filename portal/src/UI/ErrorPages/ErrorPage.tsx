import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import { isObject } from '../../types';

interface Props {}

interface RouterError {
  statusText?: string;
  message?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: black;
`;

const ErrorPage: React.FC<Props> = (props: Props) => {
  const error = useRouteError();
  console.log(error);

  if (isRouterError(error)) {
    return (
      <Wrapper className='404-error-page'>
        <h1>Oh No!</h1>
        <p>An Unexpected error happened</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Wrapper>
    );
  }
  return <Wrapper className='404-error-unknown'>Unknown Error</Wrapper>;
};

// helpser
const isRouterError = (val: any): val is RouterError =>
  isObject(val) && ('statusText' in val || 'message' in val);

export default ErrorPage;
