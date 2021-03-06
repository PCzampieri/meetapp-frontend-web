import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 20px;
      color: #fff;
      font-size: 18px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0 20px;
    }

    button {
      align-self: flex-end;
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
        padding-right: 10px;
      }
    }
  }
`;
