import PropTypes from "prop-types";
import styles from "./carItem.module.css";
import { Link } from "react-router-dom";

function CarItem({ car }) {
  return (
    <div
      className={styles.item}
      style={{
        backgroundImage: `url(${car.image})`,
      }}
    >
      <div className={styles.text}>
        <div>
          <h2>{car.model}</h2>
          <span>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "USD",
            }).format(car.price)}
          </span>
        </div>
        <Link className="button" to={`/car/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarItem;
