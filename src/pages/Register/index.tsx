import React, { useState, FormEvent, useEffect } from 'react';
import Header from '../../components/Header';

import { Container, Title, ContainerSend, Input, ButtonInOuT } from './styles';

const Register: React.FC = () => {
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState('');
  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastro</Title>
        <Input value={newName} placeholder=" Nome" />
        <Input value={newPrice} placeholder=" Preço" />
        <ButtonInOuT>
          <button type="button">Icome</button>
          <button type="button">Outcome</button>
        </ButtonInOuT>
        <Input value={newCategory} placeholder=" Categoria" />
        <ContainerSend>
          <button type="button">Enviar</button>
        </ContainerSend>
      </Container>
    </>
  );
};

export default Register;
