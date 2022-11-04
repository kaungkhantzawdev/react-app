import { useState, useEffect } from "react";
import BlogItem from "./components/BlogItem";

const Test = () => {
    const [blogs, setBlogs] = useState([
        {
            "id": 1,
            "title": "His mother had always taught him",
            "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
            "userId": 9,
        
        },
        {
            "id": 2,
            "title": "He was an expert but not in a discipline",
            "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
            "userId": 13,
            
        },
            {
            "id": 3,
            "title": "Dave watched as the forest burned up on the hill.",
            "body": "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
            "userId": 32,
        
        },
        {
            "id": 4,
            "title": "All he wanted was a candy bar.",
            "body": "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
            "userId": 12,
            
        },
        {
            "id": 5,
            "title": "Hopes and dreams were dashed that day.",
            "body": "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
            "userId": 41,
            
        },
    ])

    const clickMe = (id)=> {
        const newBlog = blogs.filter( blog => blog.id !== id)
        return setBlogs(newBlog)
    }

    //useEffect
    useEffect( _=>{
        console.log('effect', "run use effect")
    })
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
                    <BlogItem blogs={blogs} handleClick={clickMe}/>
               </div>
            </div>
        </div>
     );
}
 
export default Test;