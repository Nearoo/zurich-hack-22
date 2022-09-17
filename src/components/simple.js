import { Button, Dropdown, Menu } from "antd"
import { useEffect, useRef, useState } from "react";

import LocationPicker from "location-picker";


export const DropdownSimple = ({items, title, onSelect}) => {
    const onClick = ({key}) => onSelect(items[key]);
    const menu = <Menu
    onClick={onClick}
        items={items.map((item, i) =>({
            key: i,
            value: item,
            label: (
                <a>{item}</a>
            )
        }))} />
    return <Dropdown overlay={menu} placement="bottom" arrow>
        <Button>{title}</Button>
    </Dropdown>
}



export const SimpleMap = () => {
    const ref = useRef();
    useEffect(()=>{
        if(!ref.current)
            ref.current = new LocationPicker('map', {
                pluginOptions: 
                    { lat: 47.40013610518291, lng: 8.50934637970123 }
            });
    })

    return <div id="map"
    style={{
        margin: "0px",
        width: "300px"
    }}></div>
}