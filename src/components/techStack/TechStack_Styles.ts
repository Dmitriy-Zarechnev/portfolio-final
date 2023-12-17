import styled from 'styled-components'
import {theme} from '../../styles/theme'

const TechStack = styled.div`
  margin-bottom: 20px;
`

const TechStackTitle = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 16px;
  font-weight: 400;
`

const TechStackText = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 14px;
  font-weight: 300;
`

export const S ={
    TechStack,
    TechStackTitle,
    TechStackText
}
