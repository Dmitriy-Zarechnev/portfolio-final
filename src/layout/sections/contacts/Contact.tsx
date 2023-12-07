import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Button} from '../../../components/Button'

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle mainTitle={'Contact'} subTitle={'Together we will stand'}/>
            <StyledForm>
                <Field placeholder={'Name'}/>
                <Field placeholder={'Subject'}/>
                <Field placeholder={'Message'} as={'textarea'}/>
                <Button type={'submit'}>Send Message</Button>
            </StyledForm>
        </StyledContact>
    )
}

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: brown;
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Field = styled.input``


