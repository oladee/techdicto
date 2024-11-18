interface buttonProps {
    text : string
}
const PrimaryButton = ({text}:buttonProps) => {
  return (
    <div className="px-4 py-3 text-sm text-[#fff] border border-[#B5ADFF] bg-[#15113F] rounded-xl cursor-pointer hover:text-[#B5ADFF] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-700">
      {text}
    </div>
  )
}

export default PrimaryButton

export const SecondaryButton = () => {
    return (
      <div>
        
      </div>
    )
  }
