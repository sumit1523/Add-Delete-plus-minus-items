import React from 'react';

const Post = ({ removeItem, title, incrementScore, score, decrementScore }) => {
    let style = {
        display: "inline-flex"
    }

    const PostButton = ({ handleClick, label }) => {
        let style = {
            width: 24,
            height: 24
        }
        return (
            <button style={style} onClick={() => handleClick()}>{label}</button>
        )
    }
    const PostText = ({ width, height, text }) => {
        let style = {
            border: "1px solid black",
            width: width,
            height: height
        }
        return (
            <div style={style}>{text}</div>
        )
    }
    return (
        <div style={style}>
            <PostButton label="x" handleClick={removeItem} />
            <PostText text={title} width="200px" height="24px" />
            <PostButton label="+" handleClick={incrementScore} />
            <PostText text={score} width="24px" height="24px" />
            <PostButton label="-" handleClick={decrementScore} />
        </div>
    )
}

export default Post;