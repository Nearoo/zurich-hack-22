

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

    if(page == 0){
        return <EnterData onSubmit={gotoResult} />
    }
    else if (page == 1) {
        return <ViewResult onBack={gotoEnterData} />
    }
    
}


