import React from 'react'

export default function Show({ data, ondelect, onEditor }) {
    if (!data) {
        return <div>
            请选择左侧的栏目
        </div>
    }
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <button onClick={() => onEditor(data.id)}>编辑</button>
            <button onClick={() => ondelect(data.id)}>删除</button>
        </div>
    )
}
