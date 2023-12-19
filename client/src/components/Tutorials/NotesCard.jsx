import { BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";

const NotesCard = ({item, index}) => {
    const {question, content, bgColor, textColor} = item
    return (
        <div className="category__item py-[30] px-3 lg:px-5">
            <h5 className="text-[14px] leading-1 text-irisBlueColor font-[700]">
                 {index + 1}:-  {question}</h5>
            <h3 className="text-[14px] text-justify leading-7 text-[primaryColor] font-[600]  mt-4">
                {content}
            </h3>            
        </div>
    )
}
export default NotesCard