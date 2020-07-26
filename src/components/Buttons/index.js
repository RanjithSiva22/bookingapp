import React from 'react';

function Buttons(props) {
    let { type } = props;
    return (
     <div>
            <button type={`${type}`} />
           
     </div>
    );
  }
  
  
export default Buttons;