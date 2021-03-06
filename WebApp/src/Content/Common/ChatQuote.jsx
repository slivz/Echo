import React, { useEffect } from 'react';
import { render } from 'react-dom';

const ChatQuote = (props) => {
    const { color, content, uuid } = props;

    let renderContent = content;
    if(!!!Array.isArray(content)) {
        renderContent = [content];
    }

    return (
        <span style={{color:color}}>
            {renderContent.map((item, idx) => {
                if(typeof(item) == "string") {
                    return (
                        <React.Fragment key={`${uuid}_${idx}`}>
                            {item}
                        </React.Fragment>
                    )
                }
                return React.cloneElement(
                    item, { key: `${uuid}_${idx}`}
                );
            })}
        </span>
    );
}
export default ChatQuote;