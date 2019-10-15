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
  }

  main {
    width: 100%
    margin-top: 50px;

    img {
      width: 940px;
      height: 300px;
    }

    p {
      margin-top: 25px;
      color: #fff;
      font-size: 18px;
      line-height: 32px;
    }

    div {
      display: flex;
      align-items: center;
      margin-top: 30px;

      span:first-child {
        margin-left: 0;
      }

      span {
        font-size: 16px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: rgba(255, 255, 255, 0.6);

        svg {
          margin-right: 15px;
        }
      }
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;

  opacity: ${props => (props.past ? 0.4 : 1)};
  pointer-events: ${props => (props.past ? 'none' : 'auto')};

  button:first-child {
    background: #4dbaf9;
    margin-right: 15px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#4dbaf9')};
    }
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
`;
