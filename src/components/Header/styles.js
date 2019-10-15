import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 5px;
      color: #999;
    }
  }

  button {
    height: 42px;
    padding: 0 20px;
    margin-left: 30px;
    font-weight: bold;
    color: #fff;
    background: #d44059;
    border: 0;
    border-radius: 4px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#d44059')};
    }
  }
`;
