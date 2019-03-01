import React from "react";
import styles from "./BidItem.module.css";

const bidItem = props => {
	return (
		<div className={styles.bidItem}>
			<div className={styles.left}>
				<p className={styles.carName}>{props.carName}</p>
				<p className={styles.cost}>{`$${props.cost}`}</p>
			</div>
			<div className={styles.right}>
				<div className={styles.viewButton}>
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFOSURBVEiJ7ZS7SgNBFIb/DQQ0Jhh7LwF9glgn2Nv6CHkACxubiI15CCPYewMhT5DeoFUKBbdJYSemsshnkTOwxLObRFCbHDgszH+by85Ii/rvirJAoCzpQNK+pKqkkkEfkh4kdSRdRVH0PlcqkAdOgCHTawg0gfys5ltAbwbjyeoBm9PMN4AXR3wN1IA16zpw4/CegfU08wLw5IgOMyZ05PAfgYJHbnszT5xJC3i1bmF7Dtw5uvNJ8zowcog1w1sOdmbYnoONgjYEdB0SwIrhAwcbGFZK0XYlKWcZOWVX5n3J0gTjY0k4pKp9Lx0sjO06GOaZGIELZ5n3hoVDfrNOHnLH0bW/R0IR6DvkZtoeAKcOvw8U0wQ7QOyIwkVbApYZ/3W3Di8GttMmFEIq/PypqGSaJ0J+77GbCCoDDca3NQY+rWMbawCrcxsv6k/rCxV6IRC0rOvzAAAAAElFTkSuQmCC"
						className={styles.img}
						alt="edit_icon"
					/>
				</div>
				<div className={styles.deleteButton}>
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEJSURBVEiJ5ZVNTgMxDIU/A10g1qwK9Aa9ATdBvUbvhzgCHKA/AlXsu2mlx8ZTRZ40k6CRKsSTRtbEL36OHTnwLyBpqT6WNXstBNIYCZnZKe7VGAGbIOnDSzBv2DP3Pe/RlzvByu2sIa+Ou4qOnMDG7WOSodL+xP+EuyEgJ7B2+1TIOKLjrqPjIgJdHX8jUNWDUU/Qg6SJpKN/E1872+TAvxk8gZkdgC/gGphWZD917qeZHQcFHC1lKpbnYgItN+nsDSoJbN0+uH3LcF4DZ5vh0Ot6yGYGYGbPqTMdxxTmEAz3oGbgFXtguUVJd8A3cFshALAH7s1sX8kHSQtJu8xTGbGT9FId+M/hB0A4vuLipYN8AAAAAElFTkSuQmCC"
						className={styles.img}
						alt="trash_icon"
					/>
				</div>
			</div>
		</div>
	);
};

export default bidItem;
