import { reviewData } from "@/app/constant"
import Image, { StaticImageData } from "next/image"

interface reviewCardProps {
    img : StaticImageData,
    name : string,
    title : string,
    comment : string
}

const Reviews = () => {
  return (
    <div className="my-[35vw] md:my-[25vw] lg:my-[11.90vw]">
      <header className="text-center flex flex-col items-center" data-aos='fade-up'>
        <h4 className="text-[#1D2739] bg-[#C6D7F7] py-1 font-medium rounded-full text-sm w-[174px] lg:w-[158px] mb-6 lg:mb-4">
        Techdicto Reviews
        </h4>
        <h3 className="text-[rgba(255,255,255,0.98)] text-[clamp(32px,9.09vw,40px)] lg:text-[clamp(35px,2.98vw,45px)] font-bold w-[92.2vw] max-w-[406px] lg:w-[33vw] lg:max-w-[558px] lg:leading-[48px]">
        Why Others Can’t Wait for Techdicto
        </h3>
      </header>
      <main className="grid md:grid-cols-2 lg:grid-cols-3 md:px-14 lg:px-[3vw] gap-8 md:gap-10 lg:gap-0 place-items-center mt-[16.36vw] lg:mt-[4.96vw]">
        {
            reviewData.map((item, idx)=> <ReviewCard key={idx} name={item.name} img={item.img} title={item.title} comment={item.comment}/>)
        }
      </main>
    </div>
  )
}

export default Reviews

const ReviewCard = ({name, img, comment, title}:reviewCardProps)=>{
    return(<div className="h-[304px] w-[317px] rounded-3xl bg-[rgba(13,13,13,0.99)] p-5" data-aos='fade-right'>
        <div className="flex items-start gap-2 mb-[19px]">
            <Image src={img} width={48} height={48} alt="techdicto review" className="rounded-full" />
            <div className='text-sm pt-1'>
                <h3 className="font-semibold text-[#fff]">
                    {name}
                </h3>
                <p className="text-[#D0D5DD]">
                    {title}
                </p>
            </div>
        </div>
        <p className="text-sm text-grey-200">
            {comment}
        </p>
    </div>)
}
