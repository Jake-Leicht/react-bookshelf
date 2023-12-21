import {useState, useEffect} from "react";
import { BookOnDisplay, BookSplitBands, BookDualTopBands, 
    BookColoredSpine, BookDefault } from "../utils/BookDesigns";
import { appliedStyle } from "../utils/BookMethods";
import { BookTiltedDefault } from "../utils/BookTiltedDesigns";

interface BookProps{
    title?: string;
    subtitle?: string;
    author?: string;
    color?: string | undefined;
    design?: string | undefined;
    orientation?: string;
    height?: number;
    width?: number;
}

const Book = ({title, subtitle, author, color, orientation, design, width, height}: BookProps) => {
    const [verifiedWidth, setVerifiedWidth] = useState<number>(widthCheck(width));
    const [textColor, setTextColor] = useState<string>("white");

    useEffect(() => {
        setVerifiedWidth(widthCheck(width));
    }, [width]);

    useEffect(() => {
        // ! 'red' is not in HEX
        let hexToRGB: any = hexToRgb(appliedStyle(color));
        let rgb: Array<string> = hexToRGB.split(",");
        let textColor: string = getContrastColor(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), 1);
        setTextColor(textColor);
    }, [color]);

    const BookDisplayCrease: any = {
        backgroundColor: `color-mix(in srgb, ${appliedStyle(color)}, black 14%)`,
        width: "5px",
        height: "100%",
        position: "absolute",
        top: "0",             
        left: "8px",
    }

    function appliedOrientation(orientation: string | undefined){
        switch(orientation){
            case "tilted":
                return(
                    <BookTiltedDefault className="bookshelf__book-wrapper bookshelf__book-tilted"
                    $margin={adjustedMargin(verifiedWidth)}>
                        {appliedDesign(design)}
                    </BookTiltedDefault>
                );
            case "onDisplay":
                return(
                    <BookOnDisplay className="bookshelf__book-wrapper bookshelf__book-onDisplay" $color={appliedStyle(color)}>
                        <div style={BookDisplayCrease}></div>
                        {title ? <>
                            <div>
                                <h2 className="bookshelf__book-title">{title}</h2>
                                <h3 className="bookshelf__book-subtitle">{subtitle}</h3>
                            </div>
                            <p className="bookshelf__book-author">By: {author}</p>
                        </> : <></>}
                    </BookOnDisplay>
                );
            default:
                return(appliedDesign(design));
        }
    }

    function adjustedMargin(width: number){
        if(width <= 20){
            return "0.75em";
        } else if(width > 20 && width <= 50){
            return "0.5em";
        }
        return "1em";
    }

    function widthCheck(input: number | undefined){
        if(input){
            if(input <= 150){
                return 15;
            }
            return input / 10;
        }
        return 40;
    }

    function getContrastColor(R: number, G: number, B: number, A: number) {
        //https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
        const brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;
        return brightness > 186 ? "#000000" : "#FFFFFF";
    }

    const hexToRgb = (hex: any) => {
        //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
        // Remove the # character if present
        hex = hex.replace("#", "");
    
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        if (hex.length === 3) {
            hex = hex.replace(/(.)/g, "$1$1");
        }
    
        // Verify if the input is a valid hexadecimal color code
        const validHexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    
        if (!validHexRegex.test(hex)) {
            throw new Error("Invalid Hexadecimal Color Code.");
        }
    
        // Convert the hex value to decimal
        const [r, g, b] = hex.match(/[A-Fa-f0-9]{2}/g).map((value: any) => parseInt(value, 16));
    
        // Return the RGB values as an object
        return `${r}, ${g}, ${b}`;
    };

    function appliedDesign(input: string | undefined){
        switch(input){
            case "split bands":
                return (
                <BookSplitBands style={{width: `${verifiedWidth}px`, color: `${textColor}`}} 
                className="bookshelf__book-wrapper" 
                $color={appliedStyle(color)}
                $width={verifiedWidth}
                $margin={adjustedMargin(verifiedWidth)}>
                    <h2 className="bookshelf__book-title">{title}</h2>
                </BookSplitBands>);
            case "dual top bands":
                return (
                <BookDualTopBands style={{width: `${verifiedWidth}px`, color: `${textColor}`}} 
                className="bookshelf__book-wrapper" 
                $color={appliedStyle(color)}
                $width={verifiedWidth}
                $margin={adjustedMargin(verifiedWidth)}>
                    <h2 className="bookshelf__book-title">{title}</h2>
                </BookDualTopBands>);
            case "colored spine":
                return (
                <BookColoredSpine style={{width: `${verifiedWidth}px`, color: `${textColor}`}} 
                className="bookshelf__book-wrapper" 
                $color={appliedStyle(color)}
                $width={verifiedWidth}
                $margin={adjustedMargin(verifiedWidth)}>
                    <h2 className="bookshelf__book-title">{title}</h2>
                </BookColoredSpine>);
            default:
                return(
                <BookDefault style={{width: `${verifiedWidth}px`, color: `${textColor}`}} 
                className="bookshelf__book-wrapper" 
                $color={appliedStyle(color)}
                $width={verifiedWidth}
                $margin={adjustedMargin(verifiedWidth)}>
                    <h2 className="bookshelf__book-title">{title}</h2>
                </BookDefault>);
        }
    }

    return(<>
        {orientation ? appliedOrientation(orientation) : appliedDesign(design)}
    </>);
}

export default Book;