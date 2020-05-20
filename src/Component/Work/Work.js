import React from "react";
import "./Work.css";
import works from "../../data/Work/WordData";

function Work(props) {
    let list = [];

    for (const work of works) {
        list.push(
            <div className="Work__graper" key={work.key}>
                <p className="Work__title">
                    {work.category}
                </p>
                <div className="Work__content">
                    <ul>
                        {work.items.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
            </div >
        );
    }

    return <div className="Work">{list}</div>;
}

export default Work;
