import BlogItem from "./components/BlogItem";
import useFetch from "./useFetch";

const Test = () => {
    const { blogs, loading, clickMe } = useFetch()
    return ( 
        <div className="container mx-auto">
            <div className="relative rounded-xl overflow-auto p-8">
                <div className="overflow-visible relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                    <img className="absolute -left-6 w-24 h-24 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" alt="profile"/>
                    <div className="flex flex-col py-5 pl-24">
                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Technical advisor</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
               <div>
                    { loading && <div> loading ....</div> }
                    { blogs && <BlogItem blogs={blogs} handleClick={clickMe}/>}
               </div>
            </div>
        </div>
     );
}
 
export default Test;