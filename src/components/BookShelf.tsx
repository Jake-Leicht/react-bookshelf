import { useEffect, useState } from "react";
import Book from "./Book";
import BookStackElement from "./BookStackElement";
import { BookshelfDefault } from "../utils/BookshelfDesign";
import * as Themes from "../utils/BookshelfThemes";
import BookStack from "./BookStack";

interface Props{
    children: JSX.Element[] | JSX.Element;
    bookCount?: number;
    theme?: Themes.ThemeInterface | string | undefined;
}

export const colors_db: Array<string> = ["green", "blue", "umber", "springer", "maroon", "pink", "cyan", "purple"];
const design_db: Array<string> = ["no bands", "split bands", "dual top bands", "colored spine"];
const orientation_db: Array<string> = ["default", "tilted", "onDisplay", "stack"];

const defaultTheme: Themes.ThemeInterface = {
    bookshelf: "#A87328",
    colors: colors_db
}

const BookShelf = ({children, bookCount, theme}: Props) => {
    const [colorSelection, setColorSelection] = useState<Themes.ThemeInterface>(defaultTheme);

    useEffect(() => {
        if(typeof theme === "string" || theme instanceof String){
            switch(theme){
                case "beige":
                    setColorSelection(Themes.beigeMomTheme);
                    break;
                case "shades of purple":
                    setColorSelection(Themes.shadesOfPurpleTheme);
                    break;
                case "night owl":
                    setColorSelection(Themes.nightOwlTheme);
                    break;
                case "gruvbox":
                    setColorSelection(Themes.gruvboxTheme);
                    break;
                case "vue":
                    setColorSelection(Themes.vueTheme);
                    break;
                default:
                    setColorSelection(defaultTheme);
            }
        } else if(typeof theme === "object"){
            setColorSelection(theme);
        }
    }, [theme]);

    function createOrientations(num: number){
        let orientation_array = Array.from(Array(num).fill(null).map((elem: any) => 
            elem = Math.floor(Math.random() * orientation_db.length)));

        // * Check for 'tilted pairs' || 'onDisplay pairs'
        for(let index = 1; index < orientation_array.length - 1; index++){
            if(orientation_array[index - 1] === 1 || orientation_array[index + 1] === 1 || 
                orientation_array[index - 1] === 2 || orientation_array[index + 1] === 2){
                    orientation_array[index] = 0;
            }
        }

        // * Prevent last book to be tilted (prevents ghost floating)
        orientation_array[orientation_array.length - 1] = 0;

        return orientation_array;
    }

    function createRandomBooks(num: number){
        let book_array = Array.from(Array(num).keys());
        let color_index = 0;
        let design_index = 0;
        let orientation_array: Array<number> = createOrientations(num);
        let numberOfStacks: number = 0;

        return(book_array.map((index: number) => {
            color_index = Math.floor(Math.random() * colorSelection.colors.length);
            design_index = Math.floor(Math.random() * design_db.length);

            if(orientation_db[orientation_array[index]] === "stack" && numberOfStacks < 1){
                numberOfStacks += 1;
                return(
                    <BookStack key={index} stackDesign={design_db[design_index]} theme={colorSelection.colors}>
                        <BookStackElement/>
                        <BookStackElement/>
                        <BookStackElement/>
                    </BookStack>);
            } else{
                return <Book key={index} color={colorSelection.colors[color_index]} 
                design={design_db[design_index]}
                orientation={orientation_db[orientation_array[index]]}/>
            }
        }));
    }

    return(<>
        <BookshelfDefault className="bookshelf__wrapper" $shelf={theme ? `${colorSelection.bookshelf}` : ""}>
            {bookCount ? <>
                {createRandomBooks(bookCount)}
            </> : <>{children}</>}
        </BookshelfDefault>
    </>);
}

export default BookShelf;