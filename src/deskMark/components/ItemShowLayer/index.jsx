import React from 'react'
import marked from 'marked'
export default function ItemShowLayer({ items, ondelect, bianji }) {
    if (!items || !items.id) {
        return (
            <div>
                请选择左侧列表的文章中
            </div>
        )
    }
    let content = marked(items.content)

    return (
        <div>
            <button onClick={() => bianji(items.id)}>编辑</button>
            <button onClick={() => ondelect(items.id)}>删除</button>
            <h2>{items.title}</h2>
            <div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
