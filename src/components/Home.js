import React from 'react'
import styled from 'styled-components'
import useDynamicContentParent from '../hooks/useDynamicContentParent'
import useScrollToNextSectionParent from '../hooks/useScrollToNextSectionParent'
import Section from './Section'

function Home() {

  const initialContent = {
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom order",
    rightBtnText: "Existing inventory",
  }

  const { content, setContent, opacity, setOpacity } = useDynamicContentParent(initialContent)

  const { setSectionsInView } = useScrollToNextSectionParent()

  return (
    <Container>
      <ContentContainer opacity={opacity} >
        <ItemText>
          <h1>{ content.title }</h1>
          <p>{ content.description }</p>
        </ItemText>

        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    { content.leftBtnText }
                </LeftButton>
                { content.rightBtnText && 
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                }
                
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </ContentContainer>

        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
          setContent={setContent}
          setOpacity={setOpacity}
          setSectionsInView={setSectionsInView}
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
    position: relative;
`

const ItemText = styled.div`
  top: 15vh;
  position: fixed;
  text-align: center;
  width: 100%;
  text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    bottom: 30px;
    position: static;
    @media (max-width: 768px) {
        flex-direction: column;
    };
    width: 100vw;
    justify-content: center;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.95);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: 600;
    backdrop-filter: blur(8px);
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    position: static;
    margin-top: 20px
`

const Buttons = styled.div`
    position: fixed;
    bottom: 30px;
`

const ContentContainer = styled.div`
    opacity: ${props => {
      if (props.opacity < 60) return `0`
      else if (props.opacity > 80) return `100`
      else return `${props.opacity}`
    }}%;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: transparetn:
`