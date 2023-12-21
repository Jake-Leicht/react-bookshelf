import styled from "styled-components";

export const BookTiltedDefault = styled.div.attrs<{$color?: string, $width?: number, $margin?: any}>(props => ({
    $color: props.$color || "green",
    $width: props.$width || 40,
    $margin: props.$margin || "1em",
}))`
&{
    .bookshelf__book-title{
        margin: 30px 0 0 calc(50% + ${props => props.$margin} + 10px);
    }
}
`;