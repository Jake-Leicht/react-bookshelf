import React, {useState, useEffect} from "react";
import { colors_db } from "./BookShelf";
import * as Themes from "../utils/BookshelfThemes";

interface BookStackProps{
    children: JSX.Element[] | JSX.Element;
    stackDesign?: string;
    theme?: string | string[] | undefined;
    // height?: number;    // todo: future add-ons
    // width?: number;     // todo: future add-ons
}

const BookStack = ({children, stackDesign, theme}: BookStackProps) => {
    const MAX_CHILDREN: number = 5;
    const [colorSelection, setColorSelection] = useState<string[]>(colors_db);

    useEffect(() => {
        if(typeof theme === "string" || theme instanceof String){
            switch(theme){
                case "beige":
                    setColorSelection(Themes.beigeMomTheme.colors);
                    break;
                case "shades of purple":
                    setColorSelection(Themes.shadesOfPurpleTheme.colors);
                    break;
                case "night owl":
                    setColorSelection(Themes.nightOwlTheme.colors);
                    break;
                default:
                    setColorSelection(colors_db);
            }
        } else if(typeof theme === "object"){
            setColorSelection(theme);
        }
    }, [theme]);

    const renderArrayChildren = (children: JSX.Element[]) => {
        return(<>
            <ul style={{margin: `calc(20px + ${(MAX_CHILDREN - children.length) * 40}px) 1px 10px 1px`}} className="bookshelf__bookStack-wrapper">
                {children.length > MAX_CHILDREN ? <>
                    <li className="bookshelf__bookStack-outOfStock">
                        <div>Temporarily</div>
                        <div>
                            <em>out of</em>
                        </div>
                        <div>Stock</div>
                    </li>
                    </> : <>
                        {children.map((child: any, index: number) => {
                            let color_index = Math.floor(Math.random() * colorSelection.length);
    
                            return(<li key={index} className="bookshelf__bookstack-elem">
                                {React.cloneElement(child, { design: stackDesign, color: colorSelection[color_index] })}
                            </li>);
                        })}
                    </>}
            </ul>
        </>);
    }

    const renderChildElem = (children: JSX.Element) => {
        function getChild(){
            let color_index = Math.floor(Math.random() * colorSelection.length);
            return(
                <li key={0} className="bookshelf__bookstack-elem">
                    {React.cloneElement(children, { design: stackDesign, color: colorSelection[color_index] })}
                </li>);
        }

        return(<>
            <ul style={{margin: `calc(20px + ${(MAX_CHILDREN - 1) * 40}px) 1px 10px 1px`}} className="bookshelf__bookStack-wrapper">
                {getChild()}
            </ul>
        </>);
    }

    return(<>
        {children instanceof Array ? renderArrayChildren(children) : renderChildElem(children)}
    </>);
}

export default BookStack;