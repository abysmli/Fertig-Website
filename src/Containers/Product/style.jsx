import {primaryColor} from "../../assets/jss/material-kit-react";

const productStyle = {
    container: {
        padding: 0,
        margin: 0,
        width: '900px',
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
        padding: 0
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
        alignItems: 'flex-start'
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
        width: '700px',
        marginTop: '3rem'
    },
    tableCell: {
        border: '1px solid #f8df50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontWeight: 400,
        minHeight: '4rem',
        '&:nth-child(odd)': {
            color: '#f8df50'
        },
        '&:nth-child(even)': {
            color: 'white'
        }
    }
};

export default productStyle;
