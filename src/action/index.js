// action 的构建函数
const sendAction = () => {
    return {
        type: 'send_type',
        value: '我是一个 action'
    }
}

export {
    sendAction
}