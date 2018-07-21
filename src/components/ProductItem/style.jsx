import {primaryColor} from "../../assets/jss/material-kit-react";
import {primaryColorLight} from "../../assets/jss/fertig";

const productItemStyle = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem'
    },
    imgWrapper: {},
    img: {
        width: '70%',
        display: 'flex',
        margin: 'auto'
    },
    titleWrapper: {
        display: 'inline-flex',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    titleLabel: {
        padding: "0 0.5rem",
        margin: 'auto',
        marginRight: '0.5rem',
        color: 'white',
        borderRadius: '4px',
    },
    title: {
        color: primaryColor,
        fontWeight: 500,
        margin: 'auto',
        fontSize: '1.45rem'
    },
    subtitle: {
        maxWidth: '350px',
        color: primaryColorLight,
        lineHeight: '1.5rem',
        textAlign: 'justify',
        fontWeight: 400,
        fontSize: '0.95rem'
    },
    button: {
        padding: '4px 3rem'
    },
    buttonText: {
        fontSize: '0.8rem'
    }
};

export default productItemStyle;
