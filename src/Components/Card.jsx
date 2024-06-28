import React from 'react'

const Card = (props) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                loading="lazy"
                src={'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                className="h-60 w-full object-cover shadow-sm z-1 "
            />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                <div className="text-gray-700 text-base leading-4 h-16 overflow-hidden">
                    <p className="line-clamp-3">
                        {props.text}
                    </p>
                </div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default Card