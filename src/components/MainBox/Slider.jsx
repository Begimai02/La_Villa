// import React, { useState } from 'react';
// import './Slider.css';
// import { images } from '../MainBox/Images';
// import { motion, AnimatePresence } from 'framer-motion';
// import { wrap } from '@popmotion/popcorn';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { Typography } from '@material-ui/core';


// const Slider = () => {
//     const [[page, direction], setPage] = useState([0, 0])

//     const imageIndex = wrap(0, images.length, page)

//     const paginate = newDirection => {
//         setPage([page + newDirection, newDirection])
//     }

//     return (
//         <div>
//             <>
//                 <Typography>
//                     fdsfs
//                 </Typography>
//                 <motion.button
//                     whileHover={{
//                         scale: 1.2, transition: { duration: 0.5 }

//                     }}

//                     whileTap={{ scale: 0.9 }}
//                     className="previous"
//                     onClick={() => paginate(-1)}

//                 >
//                     <FontAwesomeIcon icon={faArrowLeft} size="2x" />
//                 </motion.button>
//                 <AnimatePresence initial={false} custom={direction}>

//                     <motion.img
//                         key={page}
//                         src={images[imageIndex]}
//                         custom={direction}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{
//                             x: { type: 'spring', stiffness: 300, damping: 300 },
//                             opacity: { duration: 1 }
//                         }}
//                         drag="x"
//                         dragConstraints={{ left: 0, right: 0 }}
//                         dragElastic={1}
//                     />
//                 </AnimatePresence>
//                 <motion.button
//                     whileHover={{
//                         scale: 1.2, transition: { duration: 0.5 }

//                     }}

//                     whileTap={{ scale: 0.9 }}
//                     className="next"
//                     onClick={() => paginate(1)}

//                 >
//                     <FontAwesomeIcon icon={faArrowRight} size="2x" />
//                 </motion.button>
//             </>
//         </div>
//     );
// };

// export default Slider;



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