
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './Slider.css'



const SlideBox = ({ images: { image } }) => {
  const [index, set] = useState(0)

  const slides = image?.map((image, index) => ({
    id: index,
    url: image
  }))

  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), 3000), [])

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={item && key}
      className="bg"
      style={{ ...props, backgroundImage: `url(${ item.url })` }}
    />
  ))
}

export default SlideBox