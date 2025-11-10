import '../../styles/ContentPages.css'

function FavoritesContent() {
  return (
    <div className="content-page">
      <h2>My Favorites</h2>
      <div className="favorites-filters">
        <button className="filter-button active">All</button>
        <button className="filter-button">Clothing</button>
        <button className="filter-button">Gear</button>
      </div>
      <div className="favorites-list">
        <p className="empty-message">No favorites yet</p>
      </div>
    </div>
  )
}

export default FavoritesContent