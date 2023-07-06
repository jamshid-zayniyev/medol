import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const animationGroup = ['fade-up', 'fade-right', 'fade-left', 'fade-down']

const Index = ({children, dataoas = animationGroup[1],dataaosoffset = 300, dataaosduration = 400,dataaosonce = true, delay, className}) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
      <div
          className={className}
          data-aos={dataoas}
          data-aos-delay={delay}
          data-aos-duration={dataaosduration}
          data-aos-once={dataaosonce}
          data-aos-offset={dataaosoffset}
          style={{width: '-webkit-fill-available'}}
      >
        {children}
      </div>
  )
}

export default Index;
