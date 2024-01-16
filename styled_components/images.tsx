import styled from 'styled-components'

interface ImamgeProps {
  top: string
  left: string
}

export const SmallIcon = styled.img`
  height: 24px;
  padding-right: 4px;
  width: 24px;
`

export const XSIcon = styled(SmallIcon)`
  height: 16px;
  width: 16px;
`

export const InputIcon = styled(SmallIcon)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, 90%);
`

export const FooterIcon = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 12px;
`

export const SmallTail = styled.img`
  border-radius: 8px;
  height: 90px;
  margin-right: 16px;
  width: 90px;
`
export const IconAbsolute = styled.img<ImamgeProps>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`
