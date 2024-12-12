export default function Model({
    text,
    color,
}) {
    const style = {
        backgroundColor: color == "voilet" ? "#000" : "#000",
    };
    return (
        <div style={style} className="model">
            <h1>{text}</h1>
        </div>
    );
}
