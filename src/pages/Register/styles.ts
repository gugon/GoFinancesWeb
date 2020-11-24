import styled from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ContainerSend = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  //padding: 10px 5px;

  button {
    background: #ff872c;
    color: #fff;

    margin: 15px auto;
    display: flex;
    width: 335px;
    height: 50px;
    border-radius: 5px;
    padding: 15px 80px;
    align-items: center;
    justify-content: space-around;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;

export const Input = styled.input`
  margin: 15px auto;
  display: flex;

  background: #ffffff;
  color: #969cb2;
  width: 335px;
  height: 50px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ButtonInOuT = styled.section`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: #e5e5e5;
    color: #363f5f;
    border-radius: 5px;
    margin: 8px;
    width: 160px;
    height: 50px;
    border: 1.5px solid #969cb3;
    box-sizing: border-box;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#e5e5e5')};
    }
  }
`;
