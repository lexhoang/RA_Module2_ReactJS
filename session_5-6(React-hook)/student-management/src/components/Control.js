import React, { useState } from 'react'
import { Col, Row } from 'antd';
import { Input, Select, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons'
const { Search } = Input;


export default function Control(props) {
    const handleSearchStudent = (keySearch) => {
        console.log(keySearch);
        props.handleSearch(keySearch);
    };

    const handleChangeSort = (value) => {
        let valueSort = value;
        let arraySort = valueSort.split('-');
        console.log(arraySort);
        props.handleSortList(arraySort[0], arraySort[1]);
    };

    return (
        <div>
            <Row className="p-4 bg-light rounded">
                <Col span={10}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={handleSearchStudent}
                    />
                </Col>
                <Col span={10}>
                    <Select
                        defaultValue="Sắp xếp"
                        style={{ width: 200 }}
                        size="large"
                        onChange={handleChangeSort}
                        options={[
                            // { value: '', label: 'Sắp xếp' },
                            { value: 'studentName-ASC', label: 'Name-ASC' },
                            { value: 'studentName-DESC', label: 'Name-DESC' },
                            { value: 'ageStudent-ASC', label: 'age-ASC' },
                            { value: 'ageStudent-DESC', label: 'age-DESC' },
                        ]}
                    />
                </Col>
                <Col span={4}>
                    <Button type="primary" size="large" onClick={() => props.btnAddNew()}><UserAddOutlined style={{ fontSize: '24px' }} />Thêm mới</Button>
                </Col>
            </Row>

        </div >
    )
}
