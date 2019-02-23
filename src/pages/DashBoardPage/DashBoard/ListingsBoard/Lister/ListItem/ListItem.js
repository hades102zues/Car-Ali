import React from "react";
import styles from "./ListItem.module.css";

const listItem = () => {
	return (
		<div className={styles.listItem}>
			<div className={styles.left}>
				<p className={styles.carName}>BMW Coupe</p>
				<p className={styles.cost}>$X.XX</p>
			</div>
			<div className={styles.right}>
				<div className={styles.editButton}>
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7QAAAO0Bq2+TWQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACLSURBVCiRvc29DgFREIDRux6AUmNZso1GVB55X0LjIaiI+CkUGh3dUbiJEOHGhq+ZZJIzE8I/QoEKg2/wzK0dylTUxzjObTxQpcAhDjhhghxTdD/BAhv3jhilfCyx99gK+TdwWQd2fgabWD/BNXpvYcTFE1yg/RG+wPNUmEXcCCG04u6cZdkl6WudrtX+Cgh15bwaAAAAAElFTkSuQmCC"
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

export default listItem;
