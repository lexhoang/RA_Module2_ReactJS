import React from 'react'
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default function FormManager() {

    return (
        <div className="py-4 bg-light rounded">
            <Title level={2} className="my-4">Thông tin học viên</Title>
            <Form className="my-4" name="basic" labelCol={{ span: 6, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item label="Mã sinh viên" name="Mã sinh viên"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Mã sinh viên!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Tên sinh viên" name="Tên sinh viên"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Tên sinh viên!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Tuổi" name="Tuổi"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Tuổi!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Giới tính" name="Giới tính"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Giới tính!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Ngày sinh" name="Ngày sinh"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Ngày sinh!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Nơi sinh" name="Nơi sinh"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Nơi sinh!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Địa chỉ" name="Địa chỉ"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Địa chỉ!',
                        },
                    ]}
                >
                    <Input size="medium" placeholder="large size" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 7,
                    }}
                >
                    <Button type="primary" htmlType="submit" size='large'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
