import React from "react";
import testData from "../testData";

function ListItem ({ listData }) {
    return (
        <div>
            <p>{ listData.name }</p>
            <p>{ listData.clothes.map(e => e) }</p>
        </div>
    )
}

export default function List ({ list }) {
    const lists = {
        popular: testData.lists.popular,
        mine: testData.lists.mine,
        subscriptions: testData.lists.subscriptions,
    }
    return (
        <div>
            { React.Children.toArray(
                lists[list].map(e => {
                    return <ListItem listData={e} />
                })
            ) }
        </div>
    )
}