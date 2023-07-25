import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";

import { selectCategoriesIsLoading } from "../../store/categories/category.selector";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="preview">
          {products
            .filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      )}
    </div>
  );
};

export default CategoryPreview;
