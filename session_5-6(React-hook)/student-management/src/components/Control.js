import React from 'react'
import { Col, Row } from 'antd';
import { Input, Select, Button } from 'antd';

const { Search } = Input;


const onSearch = (value) => console.log(value);
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Control() {
    return (
        <div>
            <Row className="p-4 bg-light rounded">
                <Col span={10}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </Col>
                <Col span={10}>
                    <Select
                        defaultValue="Sắp xếp"
                        style={{ width: 200 }}
                        size="large"
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </Col>
                <Col span={4}>
                    <Button type="primary" size="large">Add new</Button>
                </Col>
            </Row>

        </div>
    )
}
