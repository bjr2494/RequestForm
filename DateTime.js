export function getCurrentDateTime(separator='-') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let betweenDateAndTime = ', at';
    let space = ' ';
    let hour = newDate.getHours();
    let colon = ':';
    let minute = newDate.getMinutes();
    let amOrPm;
    amOrPm = hour < 12 ? 'AM': 'PM'; 

    return `${date}${separator}${month<10 ? `0${month}` : `${month}`}${separator}${year}${betweenDateAndTime}
            ${space}${hour}${colon}${minute<10 ? `0${minute}` : `${minute}`}${space}${amOrPm}`
}