'use client'

import { Button } from "../ui/button"

function PostNewJob(){
    return (
        <div>
            <Button className=" disabled:opacity-60 h-11 items-center justify-center">Post a Job</Button>
        </div>
    )
}
export default PostNewJob