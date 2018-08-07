import React from "react";

const Modal5 = ({ previousActivModal, toggle }) => (
    <div>
        <h3>5. the cheapest company is not necessarily the best!</h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p>Prices should not be the first factor to choose who you are moving with, look at the other 4 points we mentioned before and check what service the company offers to you because it is your prized personal belongs and possessions that they relocate and you need to be with a company that is reliable.</p>
        <button className='btn previous' onClick={previousActivModal}>&laquo; previous</button>
        <button className='btn' onClick={toggle}>Close</button>
    </div>
);
export default Modal5;