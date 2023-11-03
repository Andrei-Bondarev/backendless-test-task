import React from "react";
import styles from '../../css/loader.module.css'
const Loader = () => {
  return (
		<div className={styles.lds_ellipsis}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
