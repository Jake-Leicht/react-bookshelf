import styled from 'styled-components';

export const BookStackDefault = styled.div.attrs<{$color?: string}>(props => ({
    $color: props.$color || "green",
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);
`;

export const BookStackColoredSpine = styled.div.attrs<{$color?: string}>(props => ({
    $color: props.$color || "green",
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        &:before{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 40px;
            width: calc(100% + 4px);
            border-radius: 4px;

            position: absolute;
            top: 0px;
            left: -2px;
        }
    }
`;

export const BookStackSplitBands = styled.div.attrs<{$color?: string}>(props => ({
    $color: props.$color || "green",
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        &:after{
            content: " ";
            display: block;
            background:color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 40px;
            width: 20px;
    
            position: absolute;
            top: 0px;
            left: 10px;
        }
    
        &:before{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);
            height: 40px;
            width: 20px;
    
            position: absolute;
            top: 0px;
            right: 10px;
            z-index: 2;
        }
    }
`;

export const BookStackDualTopBands = styled.div.attrs<{$color?: string}>(props => ({
    $color: props.$color || "green",
}))`
    background: ${props => props.$color};
    border-left: 2px solid color-mix(in srgb, ${props => props.$color}, white 4%);
    border-right: 2px solid color-mix(in srgb, ${props => props.$color}, black 4%);

    &{
        &:after{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);;
            height: 40px;
            width: 10px;
    
            position: absolute;
            top: 0px;
            left: 6px;
        }
    
        &:before{
            content: " ";
            display: block;
            background: color-mix(in srgb, ${props => props.$color}, black 14%);;
            height: 40px;
            width: 15px;
    
            position: absolute;
            top: 0px;
            left: 24px;
            z-index: 2;
        }
    }
`;