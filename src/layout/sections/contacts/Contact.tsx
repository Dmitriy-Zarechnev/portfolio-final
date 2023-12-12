import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from '../../../components/Container'

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle mainTitle={'Contact'} subTitle={'Together we will stand'}/>
                <StyledForm>
                    <StyledLabel>Your Name <Field type={'text'} placeholder={'Name'}/></StyledLabel>
                    <StyledLabel>Your email address: <Field type={'email'} placeholder={'Email'}/></StyledLabel>
                    <Field placeholder={'Your message starts with…'} as={'textarea'}/>
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
  gap: 10px;
`

const Field = styled.input``

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

