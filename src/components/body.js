

import { Button, Form, Input, Space, Typography } from 'antd';
import { useState } from 'react';
import { EnterData } from './enterdata';

import { DropdownSimple, SimpleMap } from './simple';
import { ViewResult } from './viewresult';
const { Title } = Typography;
export const Body = () => {
    const [page, setPage] = useState(0);
    
        const gotoResult = () => {
            setPage(1);
        }

    const gotoEnterData = () => {
            setPage(0);
        }

    const [reqRes, setReqRes] = useState(null);
    const fetchReqRes = reqData => {
        const fetchUrl = "https://3ce9-194-230-148-102.ngrok.io/";
        const fetchParams = new URLSearchParams({req_strength: 1, pour_revenue: 10_000, pour_star: 4, ...reqData});
        const reqUrl = `${fetchUrl}get_quote?${fetchParams}`;
        console.log("Stitched together req url", reqUrl)
        fetch(reqUrl)
            .then(result => {
                const res = result.json()
                return res
            })
            .then(result => [setReqRes(result), gotoResult()])
    }


    if(page == 0){
        return <EnterData onSubmit={(data) => {
            console.log("Making request with data", data)
            fetchReqRes(data);
        }} />
    }

    else if (page == 1) {
        return <ViewResult onBack={gotoEnterData} result={reqRes} />
    }
    
}


