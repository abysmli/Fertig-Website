import {primaryColor} from "../../assets/jss/material-kit-react";

const productStyle = {
    container: {
        padding: 0,
        margin: 0,
        maxWidth: '900px',
    },
    item: {
        padding: 0,
        height: 'auto',
        paddingTop: '1rem',
        paddingBottom: '3rem',
        '&:nth-child(even)': {
            backgroundColor: primaryColor
        }
    },
    itemWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px'
    },
    contentWrapper: {
        margin: 'auto',
        padding: 0,
        maxWidth: '700px',
        color: primaryColor,
        fontWeight: 400
    },
    contentWrapperPrimary: {},
    caption: {
        display: 'inline-flex',
        fontWeight: 600,
        marginTop: '4rem',
        textAlign: 'center'
    },
    divide: {
        marginTop: 0,
        width: '3rem',
        padding: '1px',
    },
    bgIntro: {
        backgroundPosition: "bottom right",
        backgroundSize: "cover",
        marginTop: '6rem',
        marginBottom: '3rem'
    },
    image: {
        maxWidth: '100%'
    },
    featureWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontWeight: 500,
        paddingRight: '1rem',
        paddingBottom: '3px',
        borderBottom: '2px solid white',
        color: 'white',
        display: 'inline-flex'
    },
    table: {
        maxWidth: '700px',
        marginTop: '3rem'
    },
    tableCell: {
        border: '1px solid #f8df50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontWeight: 400,
        minHeight: '4rem',
        marginRight: '-1px',
        marginBottom: '-1px',
        '&:nth-child(odd)': {
            color: '#f8df50'
        },
        '&:nth-child(even)': {
            color: 'white'
        },
        '&:last-child': {
            marginLeft: '-2px',
            borderLeft: 'none'
        }
    }
};

export default productStyle;
