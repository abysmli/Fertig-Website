const carouselStyle = {
    card: {
        marginTop: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        marginBottom: 0,
    },
    carouselBackgroundImg: {
        height: "100vh",
        backgroundPosition: "bottom right",
        backgroundSize: "cover",
        margin: 0,
        padding: 0,
        border: 0,
        display: "flex",
        alignItems: "center",
        "&:before, &:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
    },
    carouselCaption: {
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#3399cc",
        textDecoration: "none",
        background: "-webkit-linear-gradient(0,#09bdf8, #156eb2)",
        backgroundClip: "text",
        webkitTextFillColor: "transparent"

    }
};

export default carouselStyle;
