import React, { useState } from "react";
import { MdClose, MdOutlineCircle } from "react-icons/md";
import "../style.scss"

export default function TikTakToe() {
    let [count, setCount] = useState(0)
    const [icon, setIcon] = useState(false)
    const [player, setPlayer] = useState("X")
    const [title, setTitle] = useState("")
    const [arr, setArr] = useState(new Array(9).fill(""))
    const click = (e, index) => {
        // arr[index] = icon ? "X" : "O"
        arr[index] = player
        if(player == "X"){
            setPlayer("O")
        }
        else{
            setPlayer("X")
        }
        setIcon(!icon)
        
        winner()
    }

    const winner = () => {
        if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] != "") {
            won(arr[2])
        }
        else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] != "") {
            won(arr[5])
        }
        else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] != "") {
            won(arr[8])
        }
        else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] != "") {
            won(arr[6])
        }
        else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != "") {
            won(arr[7])
        }
        else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != "") {
            won(arr[8])
        }
        else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] != "") {
            won(arr[8])
        }
        else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] != "") {
            won(arr[6])
        }
    }
    const won = (g) => {
        setIcon(true)
        setPlayer(null)
        if (g === "X") {
            setTitle("Winner X")
        }
        
        else {
            setTitle("Winner O")
        }
    }

    const resetClick = () => {
        setArr(new Array(9).fill(""))
        setTitle("")
        setPlayer("X")
    }

    return (
        <div className="gameCont">
            <div className="title">{`Tic Tac Toe Game `}<span>{title}</span></div>
            <div className="box">
                {arr.map((elem, index) => {
                    return <div key={index} onClick={(e) => { click(e, index) }}>{elem}</div>
                })}
            </div>
            <div>
                <button onClick={resetClick} className="reset">Reset</button>
            </div>
        </div>
    )
}