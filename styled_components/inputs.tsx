import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { type InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  id: string
  name: string
}

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

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .dateIcon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const DateInputComponent = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 14px 16px;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 10px 0;

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`

export const DateInput: React.FC<InputProps> = ({
  type,
  id,
  name,
  onClick,
  ...props
}) => {
  return (
    <DateContainer>
      <DateInputComponent
        type={type}
        id={id}
        name={name}
        onClick={onClick}
        {...props}
      />
      <FontAwesomeIcon className="dateIcon" icon={faCalendarDays} />
    </DateContainer>
  )
}
