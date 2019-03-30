import React from 'react'

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message || "Ładowanie danych ..."}
                </div>    
        </div>
    )
}

Spinner.defaultProps = {
    message:"Ładowanie danych ..." 
}
export default Spinner
