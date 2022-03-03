import React from "react"
import {useDrag, DragPreviewImage} from "react-dnd"

export default function Piece({piece: {type, color}, position}) {
    const [{isDragging}, dragRef, preview] = useDrag({
        type: 'piece',
        // item: {type: 'piece', id: `${type}_${color}`},
        item: {type: 'piece', id: `${position}_${type}_${color}`},
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging()}
        }
    })
    const pieceImg = require(`./assets/${type}_${color}.png`)
    return (
        <>
        <DragPreviewImage connect={preview} src={pieceImg}/>
        <div ref={dragRef} style={{opacity: isDragging ? 0 : 1}} className="piece-container">
            <img src={pieceImg} alt="" className="piece"/>
        </div>
        </>
    )
}