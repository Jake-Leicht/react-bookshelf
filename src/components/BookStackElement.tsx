import { appliedStyle } from "../utils/BookMethods";
import { BookStackSplitBands, BookStackDefault, 
    BookStackColoredSpine, BookStackDualTopBands } from "../utils/BookStackDesigns";

interface BookStackElementProps{
    title?: string;
    subtitle?: string;
    color?: string;
    design?: string;
}

const BookStackElement = ({title, subtitle, color, design}: BookStackElementProps) => {

    function appliedDesign(input: string | undefined){
        switch(input){
            case "split bands":
                return(
                    <BookStackSplitBands className="bookshelf__book-wrapper" $color={appliedStyle(color)}>
                        <h2 className="bookshelf__book-title">{title}</h2>
                    </BookStackSplitBands>);
            case "dual top bands":
                return(
                    <BookStackDualTopBands className="bookshelf__book-wrapper" $color={appliedStyle(color)}>
                        <h2 className="bookshelf__book-title">{title}</h2>
                    </BookStackDualTopBands>);
            case "colored spine":
                return(
                    <BookStackColoredSpine className="bookshelf__book-wrapper" $color={appliedStyle(color)}>
                        <h2 className="bookshelf__book-title">{title}</h2>
                    </BookStackColoredSpine>);
            default:
                return(
                    <BookStackDefault className="bookshelf__book-wrapper" $color={appliedStyle(color)}>
                        <h2 className="bookshelf__book-title">{title}</h2>
                    </BookStackDefault>);
        }
    }

    return(<>
        {appliedDesign(design)}
    </>);
}

export default BookStackElement;