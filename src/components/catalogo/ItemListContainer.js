import React, { useEffect, useState } from "react";
import ListItensContent from "../listItens/ListItensContents";

function ItemListContainer() {
    const [Loading, setLoading] = useState(true)
    
    useEffect(
        () => { 
            setTimeout(() => {
                setLoading(false)
            },2000)
        },
        []
    );

    if (Loading) {
        return (
            <div className="spinner-border" roles="status">
                <span className="visually-hidden">Loading ...</span>
            </div>
        )
    }

    return (
        <ListItensContent/>
    )

}

export default ItemListContainer;