export function Label (props) {
    const variantModifiers = {
        'positive' : "label--positive",
        'negative' : "label--negative",
        'neutral' : "label--neutral"
    };
    return (
        <div className={"label " + variantModifiers[props.variant || "neutral"]}>{props.children}</div>
    );
}