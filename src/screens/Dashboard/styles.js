import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    button {
      margin: 5px 0 0;
      padding: 0 25px 0 20px;
      height: 42px;
      background: #f94d6a;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
      border: 0;
      font-size: 16px;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
      }
    }
  }

  ul {
    width: 100%;
    margin-top: 50px;

    li:first-child {
      margin-top: 5;
    }
  }
`;

export const Meetup = styled.li`
  margin-top: 10px;
  height: 62px;
  border-radius: 4px;
  display: ${props => (props.past ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.past ? 0.4 : 1)};

  strong {
    padding: 0 30px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }

    svg {
      margin: 0 30px;
    }
  }
`;
