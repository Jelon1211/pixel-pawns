import { IButton } from "@/models/IButton"

const ButtonCTA = ({text}:IButton) => {
    return(
        <>
        <button className="bg-main-button text-white px-3 py-1 leading-5 uppercase font-bolds font-montserrat">{text}</button>
        </>
    )
}
export default ButtonCTA