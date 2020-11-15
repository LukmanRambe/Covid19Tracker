import {
    CountUp
} from "countup.js/dist/countUp.min";

const main = () => {
    const getCovidData = async () => {
        try {
            const response = await fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
            const responseJson = await response.json();

            const dataConfirmed = `${responseJson.positif}`;
            const dataRecovered = `${responseJson.sembuh}`;
            const dataDeaths = `${responseJson.meninggal}`;
            const dataActive = `${responseJson.dirawat}`;
            const lastUpdate = new Date();

            document.getElementById("data-c").innerHTML = new Intl.NumberFormat().format(dataConfirmed);
            document.getElementById("data-r").innerHTML = new Intl.NumberFormat().format(dataRecovered);
            document.getElementById("data-d").innerHTML = new Intl.NumberFormat().format(dataDeaths);
            document.getElementById("data-a").innerHTML = new Intl.NumberFormat().format(dataActive);
            document.getElementById("updated").innerHTML = `Terakhir Diperbarui : ${[lastUpdate.toLocaleString()]}`;

            const countConfirmed = new CountUp("data-c", dataConfirmed);
            if (!countConfirmed.error) {
                countConfirmed.start();
            } else {
                console.error(countConfirmed.error);
            }

            const countActive = new CountUp("data-a", dataActive);
            if (!countActive.error) {
                countActive.start();
            } else {
                console.error(countActive.error);
            }

            const countRecovered = new CountUp("data-r", dataRecovered);
            if (!countRecovered.error) {
                countRecovered.start();
            } else {
                console.error(countRecovered.error);
            }

            const countDeaths = new CountUp("data-d", dataDeaths);
            if (!countDeaths.error) {
                countDeaths.start();
            } else {
                console.error(countDeaths.error);
            }

        } catch (error) {
            console.log(error);
        }
    };

    getCovidData();

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
            navigator.serviceWorker.register("/sw.js").then(
                function (registration) {
                    // Registration was successful
                    console.log(
                        "ServiceWorker registration successful with scope: ",
                        registration.scope,
                    );
                },
                function (err) {
                    // registration failed :(
                    console.log("ServiceWorker registration failed: ", err);
                },
            );
        });
    }
};



export default main;