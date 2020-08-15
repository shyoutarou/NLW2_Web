import React from 'react'
import { Link } from 'react-router-dom'
import doneIcon from '../../assets/images/icons/done.svg'
import backgroundImg from '../../assets/images/success-background.svg'
import './styles.css'

const pageFullBackgroundStyle = {
  backgroundImage: `url(${backgroundImg})`,
}

interface FullContentProps {
  className?: string
  title: string
  message: string
  link: {
    url: string
    text: string
  }
}

const FullContent: React.FunctionComponent<FullContentProps> = ({
  title,
  message,
  link,
  className,
}) => {
  return (
    <div id="page-full-content" className={className}>
      <div className="page-full-container">
        <div className="page-full-background" style={pageFullBackgroundStyle} />
        <div>
          <img src={doneIcon} alt="" />
          <h2>{title}</h2>
          <p>{message}</p>

          <Link to={link.url}>{link.text}</Link>
        </div>
      </div>
    </div>
  )
}

export default FullContent