import styles from "./catalog.module.css";
import PropTypes from "prop-types";
import CarItem from "../car-item/carItem";

function Catalog({ cars }) {
  return (
    <section>
      <h1>Cars catalog</h1>

      <div className={styles.carsList}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </section>
  );
}
Catalog.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default Catalog;
