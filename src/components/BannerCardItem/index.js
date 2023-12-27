// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {each} = props
  const {headerText, description, className} = each
  return (
    <li className={className}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
