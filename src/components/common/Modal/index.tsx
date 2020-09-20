import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd';

interface IModalParms {
    title: string
    onOkFn?: () => void
    onCancelFn?: () => void
    content: React.ReactChild
}

export function showModal(params: IModalParms) {
    const cdiv = document.createElement('div');
    cdiv.id = 'COMMON_MODAL';
    ReactDOM.render(<ModalShow {...params}/>, cdiv);
}

export function ModalShow(params: IModalParms) {
    const { title, onOkFn, onCancelFn, content } = params
    const [visible, setVisible] = useState<boolean>(true)

    const handleOk = useCallback(() => {
        setVisible(false)
        onOkFn && onOkFn();
    }, [])


    const handleCancel = useCallback(() => {
        setVisible(false)
        onCancelFn && onCancelFn()
    }, [])


    return (
        <Modal
            title={title}
            visible={visible}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
        >
            {content}
        </Modal>
    )
}


