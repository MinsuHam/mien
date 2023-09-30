import React from 'react'
import { 
         RiFacebookFill, 
         RiKakaoTalkFill, 
         RiLineFill, 
         RiInstagramFill,
         RiTwitterFill,
         RiGithubFill,
         RiYoutubeFill
        } from "react-icons/ri";

const Footers = () => {
  return (
    <footer className="bg-orange-700 
                       mt-8 mb-0 
                       pt-7 
                       pb-5 
                       text-white">
      <div className="max-w-[1540px] mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
              <div classname="w-full lg:w-6/12 px-4">
                  <h4 className="text-3xl font-semibold">
                    Wein's 요리교실
                  </h4>  
                  <p>
                  Find us on any of these platforms, we respond 1-2 business days.
                  </p>
                  <div className="mt-6 lg:mb-0 mb-6 flex">
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-3
                                        text-[#4267B2]
                                        text-2xl
                                        " type="button">
                         <RiFacebookFill />
                     </button>
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-2
                                        text-[#ffe812]
                                        text-2xl
                                        " type="button">
                         <RiKakaoTalkFill />
                     </button>
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-2
                                        text-[#06c755]
                                        text-2xl
                                        " type="button">
                         <RiLineFill />
                     </button>
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-2
                                        text-[#C13584]
                                        text-2xl
                                        " type="button">
                         <RiInstagramFill />
                     </button>
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-2
                                        text-[#1DA1F2]
                                        text-2xl
                                        " type="button">
                         <RiTwitterFill />
                     </button>
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-2
                                        text-[#4078c0]
                                        text-2xl
                                        " type="button">
                         <RiGithubFill />
                     </button>
                     <button className="bg-white 
                                        shadow-lg 
                                        h-10 w-10
                                        rounded-full
                                        px-0
                                        flex
                                        justify-center
                                        align-center
                                        items-center
                                        outline-0
                                        border-0
                                        focus:outline-0
                                        mr-2
                                        text-[#FF0000]
                                        text-2xl
                                        " type="button">
                         <RiYoutubeFill />
                     </button>
                  </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                  <div className="flex flex-wrap items-top mb-6">
                       <div className="w-full lg:w-4/12 px-4 ml-auto">
                          <div class="text-sm text-gray-100 font-semibold py-1">
                          Copyright &copy; 
                          <span>2023</span>
                           Wein's by
                           <span class="text-gray-100 hover:text-white">Creative Tim</span>.
                          </div>
                       </div>
                  </div>
              </div>

          </div>  
      </div> 
    </footer>
  )
}

export default Footers