// TODO: The divs in NamedChildSlot render should be the layout components to format the window properly

import React, { Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import { isObject } from '../../types';

interface Props {
  children: ReactNode | NamedChildSlot;
}

interface NamedChildSlot {
  navBar?: ReactNode;
  body: ReactNode;
}

const Wrapper = styled.div``;

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  // Child = undefined / null
  if (!children) throw new Error("'children' is required!");
  // Child = NamedChildSlot
  if (isNamedChildren(children)) {
    const { navBar, body } = children;
    return (
      <Wrapper>
        {navBar && <>{navBar}</>}
        {<div className='app-body'>{body}</div>}
      </Wrapper>
    );
  }
  // Child = ReactNode
  return <Wrapper>{children}</Wrapper>;
};

// Helpers
const isNamedChildren = (children: any): children is NamedChildSlot =>
  isObject(children) && 'body' in children;

export default Layout;
