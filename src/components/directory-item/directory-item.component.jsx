import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="directory-item-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="background-image" />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
