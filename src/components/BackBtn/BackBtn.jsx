import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BackBtn = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [from, setFrom] = useState('');

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
    }
  }, [state?.from]);

  const handleBack = () => navigate(from);

  return (
    <Wrap>
      <Button onClick={handleBack} type="button">
        Go Back
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ea6969;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background-color: #ea2020;
  }
`;

export default BackBtn;
