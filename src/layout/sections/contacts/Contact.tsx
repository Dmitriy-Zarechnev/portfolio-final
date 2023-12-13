import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle mainTitle={'Contact'} subTitle={'Together we will stand'}/>
                <StyledForm>
                    <StyledLabel htmlFor="name" aria-labelledby="name">Your Name </StyledLabel>
                    <Field title={'Write down your name'} id={'name'} type={'text'} placeholder={'Name'}/>
                    <StyledLabel htmlFor="email" aria-labelledby="email">Your email address: </StyledLabel>
                    <Field title={'Write down your email'} id={'email'} type={'email'} placeholder={'Email'}/>
                    <Field title={'Write down message'} placeholder={'Your message starts with…'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`
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

