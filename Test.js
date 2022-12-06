import React from 'react';

const Test = ({examples}) => {


    return (
        <div>
            {
                examples.map(example => <p>{example.name}</p>)
            }
            <div>
                    ম্যাপ করার আইটেম গুলো এই ডিবে কিভাবে দেখাবো?
                <p>{example.name}</p>
            </div>
        </div>
    );
};

export default Test;