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
        color: 'white',
        '&:nth-child(even)': {
            backgroundColor: primaryColor
        },
        '&:nth-child(odd)': {
            color: primaryColor
        }
    },
    itemWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        color: 'inherit'
    },
    contentWrapper: {
        margin: 'auto',
        padding: 0,
        maxWidth: '700px',
        color: 'inherit',
        fontWeight: 400,
        width: '100%'
    },
    contentWrapperPrimary: {},
    caption: {
        display: 'inline-flex',
        fontWeight: 600,
        marginTop: '1rem',
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
        borderBottom: '2px solid',
        borderBottomColor: 'inherit',
        color: 'inherit',
        display: 'inline-flex',
        textAlign: 'left'
    },
    table: {
        maxWidth: '700px',
        marginTop: '3rem',
        color: 'inherit'
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
            paddingLeft: '15px',
            borderLeft: 'none'
        }
    },
    usageContentWrapper: {
        maxWidth: '700px',
        color: 'inherit',
        width: '100%',
        alignItems: 'center'
    },
    usageContent: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1rem'

    },
    stepWrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        margin: '6px 20px 6px 0',
        padding: '6px 0'
    },
    stepNumber: {
        color: 'white',
        borderRadius: '4px',
        backgroundColor: primaryColor,
        padding: '0 8px',
        marginRight: '10px',
    },
    stepDescription: {
        color: 'inherit'
    }
};

export default productStyle;
