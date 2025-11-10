import '../styles/PromoCard.css'

function PromoCard({ title, description, backgroundColor, imageUrl }) {
  return (
    <div className="promo-card" style={{ backgroundColor }}>
      <div className="promo-content">
        <h3 className="promo-title">{title}</h3>
        <p className="promo-description">{description}</p>
      </div>
      {imageUrl && (
        <div className="promo-image-container">
          <img src={imageUrl} alt="" className="promo-image" />
        </div>
      )}
    </div>
  )
}

export default PromoCard