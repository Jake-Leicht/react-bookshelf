export function appliedStyle(input: string | undefined){
    if(input?.charAt(0) === "#"){
        return input;
    }
    switch(input){
        case "green":
            return "#00b600";
        case "blue":
            return "#0C347D";
        case "umber":
            return "#54290C";
        case "springer":
            return "#F2E323";
        case "maroon":
            return "#800000";
        case "pink":
            return "#CE84F7";
        case "cyan":
            return "#025d57";
        case "purple":
            return "#665f91";
        default:
            return "#00b600";
    }
}