import React from "react";
const Modal1 = ({ nextActivModal, toggle }) => (
	<div>
		<h3>1. Make sure the company is fully insured</h3>
		<hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
		<p>During the relocation process, it is crucial that the moving company take full care and responsibility for what happened 
		to all your furniture and personal belongings. This means if any of your items are damaged in transit, will be covered by the 
		company.</p>
		<div className='text-right'>
			<button className='btn' onClick={toggle}>Close</button>
			<button className='btn next' onClick={nextActivModal}>Next &raquo;</button>
		</div>
	</div>
);

export default Modal1;
