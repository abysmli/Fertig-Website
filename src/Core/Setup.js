if (process.env.NODE_ENV === 'production') {
    console.warn = function () {

    };
} else {
    console.log(' *dev mode, console is enabled.')
}