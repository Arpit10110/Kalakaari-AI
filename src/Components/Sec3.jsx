
import Marquee from "react-fast-marquee";
const Sec3 = () => {
   const data= [
        { icon: "🚀 ", text: "Innovate now" },
        { icon: "🌟 ", text: "Inspire all" },
        { icon: "🖌️ ", text: "Create big" },
        { icon: "📈 ", text: "Elevate fast" },
        { icon: "🌍 ", text: "Go beyond" }
      ]
      


  return (
    <>
        <div className='mt-[9rem]'>
            <Marquee play={true} speed={90} pauseOnHover={true} className='cursor-pointer bg-[#19122F] p-[2.5rem] ' loop={0}  autoFill={true}>
               {
                data.map((i,index)=>{
                    return(
                        <h2 key={index} className='text-[2rem] ml-[10rem] font-semibold '>{i.icon}<span className='bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>{i.text}</span></h2>
                    )
                })
               }
            </Marquee>
        </div>
    </>
  )
}

export default Sec3
