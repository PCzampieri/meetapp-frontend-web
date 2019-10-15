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
      display: block;
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    .descriptionInput {
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      height: 200px;
      padding: 20px 20px 0 20px;
      color: #fff;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > button {
      align-self: flex-end;
      margin: 10px 0 0;
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

export const InputFile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 300px;
  max-width: 940px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      max-width: 940px;
      max-height: 300px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        margin-top: 10px;
        color: rgba(255, 255, 255, 0.3);
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  input {
    display: none;
  }
`;
