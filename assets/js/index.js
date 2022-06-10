
const changeTheme = () => {
    const body = document.querySelector('.body');
    const colors = ["Green", "Yellow", "Purple", "Red", "Blue", "Orange", "Blue-Dark"];

    document.querySelector('.container--btn').onclick = () => {

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        switch (randomColor) {
            case 'Blue-Dark':
                body.classList.contains("Yellow") && body.classList.replace("Yellow", randomColor);
                body.classList.contains("Purple") && body.classList.replace("Purple", randomColor);
                body.classList.contains("Green") && body.classList.replace("Green", randomColor);
                body.classList.contains("Orange") && body.classList.replace("Orange", randomColor);
                body.classList.contains("Red") && body.classList.replace("Red", randomColor);
                body.classList.contains("Blue") && body.classList.replace("Blue", randomColor);
                body.classList.add("Blue-Dark");
                break;
            case 'Orange':
                body.classList.contains("Yellow") && body.classList.replace("Yellow", randomColor);
                body.classList.contains("Purple") && body.classList.replace("Purple", randomColor);
                body.classList.contains("Blue-Dark") && body.classList.replace("Blue-Dark", randomColor);
                body.classList.contains("Green") && body.classList.replace("Green", randomColor);
                body.classList.contains("Red") && body.classList.replace("Red", randomColor);
                body.classList.contains("Blue") && body.classList.replace("Blue", randomColor);
                body.classList.add("Orange");
                break;
            case 'Green':
                body.classList.contains("Yellow") && body.classList.replace("Yellow", randomColor);
                body.classList.contains("Purple") && body.classList.replace("Purple", randomColor);
                body.classList.contains("Blue-Dark") && body.classList.replace("Blue-Dark", randomColor);
                body.classList.contains("Orange") && body.classList.replace("Orange", randomColor);
                body.classList.contains("Red") && body.classList.replace("Red", randomColor);
                body.classList.contains("Blue") && body.classList.replace("Blue", randomColor);
                body.classList.add("Green");
                break;
            case 'Yellow':
                body.classList.contains("Green") && body.classList.replace("Green", randomColor);
                body.classList.contains("Blue-Dark") && body.classList.replace("Blue-Dark", randomColor);
                body.classList.contains("Orange") && body.classList.replace("Orange", randomColor);
                body.classList.contains("Purple") && body.classList.replace("Purple", randomColor);
                body.classList.contains("Red") && body.classList.replace("Red", randomColor);
                body.classList.contains("Blue") && body.classList.replace("Blue", randomColor);

                body.classList.add("Yellow");
                break;
            case 'Purple':
                body.classList.contains("Green") && body.classList.replace("Green", randomColor);
                body.classList.contains("Blue-Dark") && body.classList.replace("Blue-Dark", randomColor);
                body.classList.contains("Orange") && body.classList.replace("Orange", randomColor);
                body.classList.contains("Yellow") && body.classList.replace("Yellow", randomColor);
                body.classList.contains("Red") && body.classList.replace("Red", randomColor);
                body.classList.contains("Blue") && body.classList.replace("Blue", randomColor);

                body.classList.add("Purple");
                break;
            case 'Red':
                body.classList.contains("Green") && body.classList.replace("Green", randomColor);
                body.classList.contains("Blue-Dark") && body.classList.replace("Blue-Dark", randomColor);
                body.classList.contains("Orange") && body.classList.replace("Orange", randomColor);
                body.classList.contains("Purple") && body.classList.replace("Purple", randomColor);
                body.classList.contains("Yellow") && body.classList.replace("Yellow", randomColor);
                body.classList.contains("Blue") && body.classList.replace("Blue", randomColor);

                body.classList.add("Red");
                break;

            case 'Blue':
                body.classList.contains("Green") && body.classList.replace("Green", randomColor);
                body.classList.contains("Blue-Dark") && body.classList.replace("Blue-Dark", randomColor);
                body.classList.contains("Orange") && body.classList.replace("Orange", randomColor);
                body.classList.contains("Purple") && body.classList.replace("Purple", randomColor);
                body.classList.contains("Yellow") && body.classList.replace("Yellow", randomColor);
                body.classList.contains("Red") && body.classList.replace("Red", randomColor);

                body.classList.add("Blue");

                break;
            default:
                console.log('We are sorry, but it is not that color');
        }

    }
}
const timeCountDown = () => {

    const getDate = new Date("August 30, 2022 00:00:00");
    const now = new Date();
    const gap = getDate - now;

    const seg = 1000;
    const min = seg * 60;
    const hr = min * 60;
    const d = hr * 24;

    const days = document.querySelector('#day');
    const hours = document.querySelector('#hour');
    const minutes = document.querySelector('#minute');
    const seconds = document.querySelector('#second');

    const getDays = Math.floor(gap / d);
    const getHours = Math.floor((gap % d) / hr);
    const getMinutes = Math.floor((gap % hr) / min);
    const getSeconds = Math.floor((gap % min) / seg);


    days.innerText = getDays;
    hours.innerText = getHours;
    minutes.innerText = getMinutes;
    seconds.innerText = getSeconds;

}
changeTheme();

setInterval(() => {
    timeCountDown()
}, 1000)
