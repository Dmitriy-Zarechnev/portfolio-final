import styled, {css} from 'styled-components'
import {Button} from '../../../components/Button'
import {theme} from '../../../styles/theme'
import {ProjectTitle} from '../works/Works_Styles'
import {respFont} from '../../../styles/Common'

const Contact = styled.section`
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 540px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  position: relative;

  textarea {
    resize: none;
    height: 160px;
  }

  ${Button} {
    width: 100%;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.buttonBg};
  border: 1px solid ${theme.colors.borderColor};
  font-family: 'Poppins', sans-serif;
  padding: 7px 15px;
  font-size: 16px;
  color: ${theme.colors.accent};

  &::placeholder {
    color: ${theme.colors.primaryTextColor};
    text-transform: capitalize;
  }
  `

const StyledLabel = styled.label`
  align-self: flex-start;
  color: ${theme.colors.contactColor};
  text-transform: capitalize;
`


const SendMessageWindow = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 60%;
  background-color: ${theme.colors.primaryBg};

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0;
  z-index: -3;
  transition: ${theme.animations.slowTransition};

  border: 15px solid;
  border-image: linear-gradient(130deg, ${theme.colors.accent}, ${theme.colors.contactColor}) 1;

  ${ProjectTitle} {
    ${respFont({PxMax: 28, PxMin: 20})};
  }

  ${Button} {
    width: 50%;
    align-self: center;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    opacity: 1;
    z-index: 3;
  `}
`

export const S = {
    Contact,
    StyledForm,
    Field,
    StyledLabel,
    SendMessageWindow
}