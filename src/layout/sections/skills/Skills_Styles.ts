import styled from 'styled-components'
import {theme} from '../../../styles/theme'

//  ----------------- Skills styles --------------
const Skills = styled.section`
    
`

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 105px;
  

  @media ${theme.media.tablet} {
    gap: 60px
  }
`

//  ----------------- Skill styles --------------
const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 110px;
  z-index: 2;
`

const SkillTitle = styled.span`
  color: ${theme.colors.secondaryTitle};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 5px;
  text-transform: uppercase;
`

//  ----------------- Export --------------
export const S = {
    Skills,
    SkillWrapper,
    Skill,
    SkillTitle
}