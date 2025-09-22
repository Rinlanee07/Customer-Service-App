import React from 'react'
import { LoaderCircleIcon } from 'lucide-react'
const Loading = () => {
    return (
        <div className='absolute top-1/2 left-1/2'>
            <LoaderCircleIcon className='animate-spin' size={42} />
        </div>
    )
}

export default Loading