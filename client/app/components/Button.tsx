interface buttonProps {
    text : string
    disabled ?: boolean
    onClick ?: ()=> void
}
const PrimaryButton = ({text, disabled, onClick}:buttonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className="px-4 py-3 text-sm text-[#fff] border border-[#B5ADFF] bg-[#15113F] rounded-xl cursor-pointer hover:text-[#B5ADFF] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-700 disabled:bg-[rgba(255,255,255,0.05)]">
      {text}
    </button>
  )
}

export default PrimaryButton

export const SecondaryButton = () => {
    return (
      <div>
        
      </div>
    )
  }
