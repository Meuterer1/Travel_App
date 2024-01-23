import React, { useRef } from 'react'
import styled from 'styled-components'

interface SliderProps {
  slides: React.ReactNode[]
}

const SliderItem = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
  padding-right: 16px;
`

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 16px 0;
  width: 100%;
`

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <SliderWrapper ref={sliderRef} className="sliderWrapper">
        {slides.map((slide, index) => (
          <SliderItem key={index}>{slide}</SliderItem>
        ))}
      </SliderWrapper>
    </>
  )
}

export default Slider
