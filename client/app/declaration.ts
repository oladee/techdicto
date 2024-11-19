export interface accordionProps {
    currentAccord : number | null
    setCurrentAccord : React.Dispatch<React.SetStateAction<number | null>>

}

export interface contextProps {
    children : React.ReactNode
}

export interface faqComponentProps {
    heading : string
    answer : string
    idx : number
  }
