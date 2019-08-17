import React from 'react';
import Post from './Post';

const PostList = ({ postList, updateScore, removeItem }) => {
    return (
        <ol>
            {
                postList.map((item, index) =>
                    <Post
                        key={index}
                        title={item.title}
                        score={item.score}
                        incrementScore={() => updateScore(index, 1)}
                        decrementScore={() => updateScore(index, -1)}
                        removeItem={() => removeItem(index)}
                    />
                )
            }
        </ol>
    )
}

export default PostList;