const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
export default [
    {
        id:1,
        country: "India",
        a:"www.google.com",
        place: "Agra",
        date: currentDate+" to "+'24-jan-2021',
        des: "Hello this is from Agra"
    },
    {
        id: 2,
        country: "India",
        a:"www.google.com",
        place: "Agra",
        date: currentDate+" to "+'24-jan-2021',
        des: "Hello this is from Delhi"
    },
    {
        id: 3,
        country: "India",
        a:"www.google.com",
        place: "Agra",
        date: currentDate+" to "+'24-jan-2021',
        des: "Hello this is from Bihar"
    }

]