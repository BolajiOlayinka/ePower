import React from 'react';
import image from './image/photography.png';

const style={
    textAlign:"center",
    width:"60%",
    margin:"5em auto",
}
const img={
width:"100%",
  padding:"1em 0em",
}
const para={
    textAlign:"justify",
}
export default function Body() {
    return (
        <div>
            <div style={style}>
                <img src={image} style={img} alt="imag"/>
                <p style={para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. 
                Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius 
                libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam placerat sem at mauris suscipit porta. Cras metus velit, 
                elementum sed pellentesque a, pharetra eu eros. Etiam facilisis 
                placerat euismod. Nam faucibus neque arcu, quis accumsan leo tincidunt varius. 
                In vel diam enim. Sed id ultrices ligula. Maecenas at urna arcu. Sed quis nulla 
                sapien. Nam felis mauris, tincidunt at convallis id, tempor molestie libero. 
                Quisque viverra sollicitudin nisl sit amet hendrerit. Etiam sit amet arcu sem. 
                Morbi eu nibh condimentum, interdum est quis, tempor nisi. Vivamus convallis 
                erat in pharetra elementum. Phasellus metus neque, commodo vitae venenatis sed, 
                pellentesque non purus. Pellentesque egestas convallis suscipit. Ut luctus, leo 
                quis porta vulputate, purus purus pellentesque ex, id consequat mi nisl quis eros. 
                Integer ornare libero quis risus fermentum consequat. Mauris pharetra odio sagittis, 
                vulputate magna at, lobortis nulla. Proin efficitur, nisi vel finibus elementum, orci 
                sem volutpat eros, eget ultrices velit mi.</p>
            </div>
        </div>
    )
}
