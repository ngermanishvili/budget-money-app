// # This formdate is material-ui date picker format, it is used to format the date to YYYY-MM-DD format

const formatDate = (date) => {
    const d = new Date(date); // convert to date object
    const year = d.getFullYear(); // get full year
    let month = `0${d.getMonth() + 1}`.slice(-2); // add leading zero 
    const day = `0${d.getDate()}`.slice(-2); // add leading zero

    if (month.length < 2) {
        month = `0${month}`;
    }

    if (day.length < 2) {
        day = `0${day}`;
    }

    return [year, month, day].join('-'); // return formatted date

}

export default formatDate;