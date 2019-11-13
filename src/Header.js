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
export default function Header() {
    return (
        <div>
            <div style={style}>
                <h2 style={headingFont} id="">Top 10 Reasons Why Your Website Needs A Blog</h2>
                <h6 style={bodyFont} id="">Published on April 26, 2019</h6>
            </div>

        </div>
    )
}
