const carouselStyle = {
    card: {
        marginTop: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
    },
    carouselBackgroundImg: {
        height: "100vh",
        backgroundPosition: "center",
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
    }
};

export default carouselStyle;
