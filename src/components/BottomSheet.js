import React from 'react';

const BottomSheet = (props) => {
    const {children} = props;
    return (
        <div className="bottom-sheet-container">
            {children}
        </div>
    )
};

export default BottomSheet;