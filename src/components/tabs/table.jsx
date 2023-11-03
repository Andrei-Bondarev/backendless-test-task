import React from 'react';
import sharedStyles from "../../css/shared-styles.module.css";
import style from '../../css/table.module.css'
const Table = () => {
  return (
		<div>
			<div className={sharedStyles.tab_header_container}>
				<h1 className={sharedStyles.tab_header}>Table Component</h1>
			</div>
			<table className={style.table}>
				<tbody>
					<tr>
						<td>item 1</td>
						<td>item 2</td>
						<td>item 3</td>
					</tr>
					<tr>
						<td>item 4</td>
						<td>item 5</td>
						<td>item 6</td>
					</tr>
					<tr>
						<td>item 7</td>
						<td>item 8</td>
						<td>item 9</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
