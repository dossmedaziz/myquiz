import avatar from '../../assets/images/identity.jpg'

export default function Avatar() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
        >
            <img src={avatar}
                 alt="avatar"
                 style={{
                     width: "70px",
                     height: "70px",
                     borderRadius: "50%",
                 }}
            />
            <p
                style={{
                    fontSize: "16px",
                    color: "#696F79",
                }}
            >Oluwatobi..</p>
        </div>
    )
}