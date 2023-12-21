import styled from "styled-components";

export const BookDefault = styled.div.attrs<{$color?: string, $width?: number, $margin?: any}>(props => ({
    $color: props.$color || "green",
    $width: props.$width || 40,
    $margin: props.$margin || "1em",
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        .bookshelf__book-title{
            height: calc(${props => props.$width}px);
            width: calc(200px - 60px);
            margin: 30px 0 0 calc(50% + ${props => props.$margin});
        }
    }
`;

export const BookColoredSpine = styled.div.attrs<{$color?: string, $width?: number, $margin?: any}>(props => ({
    $color: props.$color || "green",
    $width: props.$width || 40,
    $margin: props.$margin || "1em"
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        &:before{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 100%;
            width: calc(${props => props.$width}px + 4px);
            border-radius: 4px;

            position: absolute;
            top: 0px;
            left: -2px;
        }

        .bookshelf__book-title{
            height: calc(${props => props.$width}px);
            width: calc(200px - 60px);
            margin: 30px 0 0 calc(50% + ${props => props.$margin});
        }
    }
`;

export const BookSplitBands = styled.div.attrs<{$color?: string, $width?: number, $margin: any}>(props => ({
    $color: props.$color || "green",
    $width: props.$width || 40,
    $margin: props.$margin || "1em"
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        &:after{
            content: "";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 20px;
            width: calc(100% + 4px);
    
            position: absolute;
            top: 10px;
            left: -2px;
        }
    
        &:before{
            content: "";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 20px;
            width: calc(100% + 4px);
    
            position: absolute;
            bottom: 10px;
            left: -2px;
            z-index: 2;
        }

        .bookshelf__book-title{
            height: calc(${props => props.$width}px);
            width: calc(200px - 60px);
            margin: 30px 0 0 calc(50% + ${props => props.$margin});
        }
    }
`;

export const BookDualTopBands = styled.div.attrs<{$color?: string, $width?: number, $margin?: any}>(props => ({
    $color: props.$color || "green",
    $width: props.$width || 40,
    $margin: props.$margin || "1em"
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        &:after{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 10px;
            width: calc(100% + 4px);
    
            position: absolute;
            top: 8px;
            left: -2px;
        }
    
        &:before{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 15px;
            width: calc(100% + 4px);
    
            position: absolute;
            top: 26px;
            left: -2px;
            z-index: 2;
        }

        .bookshelf__book-title{
            height: calc(${props => props.$width}px);
            width: calc(200px - 41px);
            margin: 41px 0 0 calc(50% + ${props => props.$margin});
        }
    }
`;

export const BookOnDisplay = styled.div.attrs<{$color?: string}>(props => ({
    $color: props.$color || "green",
}))`
    background: ${props => props.$color};
`;