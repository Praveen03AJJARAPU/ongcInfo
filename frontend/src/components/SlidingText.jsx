import React from 'react'

const SlidingText = ({mainText, linkText, link}) => {
  return (
    <div>
        <p>{mainText}</p>
        <a href={link}>{linkText}</a>
    </div>
  )
}

export default SlidingText