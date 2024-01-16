import styled from 'styled-components'

export const DescribedSelect = styled.select`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  border: 1px solid black;
  border-radius: 4px;
  padding: 14px 26px 14px 46px;

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

export const Option = styled.option`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`
