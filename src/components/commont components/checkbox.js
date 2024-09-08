import {React, useState } from "react";

function Checkbox({ }) {
    const [check, setState] = useState(false)
    const checkboxSheet = {
        marginTop:"20px",
        flexDirection:"row",
        display:'flex',
        justifyContent: 'space-between',
        width:"600px"
        };
        const forgetPass = {
            color: 0xff003C49,
            fontSize: "18px",
            fontWeight: "700",
            textDecoration:"underline",
            cursor:"pointer"
        };
    return (
        <div style={checkboxSheet}>
            <div style={{ flexDirection: "row", display: "flex", alignItems:"center", justifyItems:"center" }}>
                <input type="checkbox" onClick={() => setState(!check)} style={{ height: "20px", width: "20px", }}>
                </input>
                <text style={{ color: 0xff003C49, fontSize: "18px", fontWeight: "700" }} >Remember Me</text>
            </div>
        <text style={forgetPass}>Forget Password</text>
        </div>
    );
}



export default Checkbox;
