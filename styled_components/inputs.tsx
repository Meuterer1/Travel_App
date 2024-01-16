import styled from 'styled-components'

export const DescribedInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 4px;
  padding: 15px 36px 15px 46px;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 10px 0;

  @media (max-width: 800px) {
    padding: 15px 5px 15px 36px;
  }
`

export const PrimaryInput = styled.input`
  border-radius: 4px 4px 0px 0px;
  border: none;
  height: 40px;
  flex: 1 0 0;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;

  display: flex;
  padding: 8px 60px 8px 16px;
  align-items: center;
  align-self: stretch;
`

export const DateInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 14px 16px;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 10px 0;
`
