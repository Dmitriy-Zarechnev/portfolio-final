import styled from 'styled-components'
import {Button} from '../../../components/Button'
import {theme} from '../../../styles/theme'

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

  textarea {
    resize: none;
    height: 160px;
  }

  ${Button} {
    @media ${theme.media.tablet} {
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.borderColor};
      transform: scale(1.1);
    }
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

export const S = {
    Contact,
    StyledForm,
    Field,
    StyledLabel
}