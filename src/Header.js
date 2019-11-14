import React from 'react'

const style={
    backgroundColor:"#097890",
    textAlign:"center",
    padding:"2rem 0rem",
    color:"#EAEAEA",
    marginBottom:"1.5rem",
}
const headingFont={
    fontSize:"2em",
}
const bodyFont={
    fontSize:"1.2em",
}
export default function Header(props) {
    return (
        <div>
            <div style={style}>
                <h2 style={headingFont} id="">{props.headerFont}</h2>
                <h6 style={bodyFont} id="">{props.headerTime}</h6>
            </div>

        </div>
    )
}
