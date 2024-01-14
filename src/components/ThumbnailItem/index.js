// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnailItem, isActiveId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickThumbnail = () => {
    clickThumbnailItem(id)
  }

  const activeThumbnail = isActiveId ? '' : 'active-image'
  console.log(isActiveId)

  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
