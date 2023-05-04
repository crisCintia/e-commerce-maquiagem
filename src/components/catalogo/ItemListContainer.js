import React, { useEffect, useState } from "react";
import ListItensContent from "../listItens/ListItensContents";

function ItemListContainer() {
    const [Loading, setLoading] = useState(true)
    
    const promessa = () => new Promise ((resolve, reject) => {
        if (Loading=false) {
            resolve(<ListItensContent/>)    
        };
        reject ("Produto não encontrado!")
    })

    promessa()
    .then (resolve => <ListItensContent/>)
    .catch (reject => console.log ("Produto não encontrado!"))
    .finally(
        useEffect(
            () => { 
                setTimeout(() => {
                    setLoading(false)
                },2000)
            })
    )
    
    /*useEffect(
        () => { 
            setTimeout(() => {
                setLoading(false)
            },2000)
        },
        []
    );*/

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
