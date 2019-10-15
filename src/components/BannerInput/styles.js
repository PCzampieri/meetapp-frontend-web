import styled from 'styled-components';

export const Container = styled.div`
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
      width: 100%;
      height: 100%;
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

    input {
      display: none;
    }
  }
`;
