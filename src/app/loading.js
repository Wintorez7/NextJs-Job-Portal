import { Skeleton } from "@/components/ui/skeleton";


function Loading() {
    return ( 
        <div className="flex flex-col space-y-3">
            {/* <div class="spinner">
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            </div> */}
            <Skeleton className="min-h-[630px] h-full w-full bg-zinc-500 mt-5"/>
        </div>
     );
}

export default Loading;