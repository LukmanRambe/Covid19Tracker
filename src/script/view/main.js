import { CountUp } from 'countup.js/dist/countUp'

const main = () => {
	const getCovidData = async () => {
		try {
			const response = await fetch(
				'https://apicovid19indonesia-v2.vercel.app/api/indonesia'
			)
			const responseJson = await response.json()

			const dataConfirmed = `${responseJson.positif}`
			const dataRecovered = `${responseJson.sembuh}`
			const dataDeaths = `${responseJson.meninggal}`
			const dataActive = `${responseJson.dirawat}`

			const date = new Date()
			const day = date.getDate()
			const month = date.getMonth()
			const year = date.getFullYear()

			document.getElementById('data-positif').innerHTML =
				new Intl.NumberFormat().format(dataConfirmed)
			document.getElementById('data-aktif').innerHTML =
				new Intl.NumberFormat().format(dataActive)
			document.getElementById('data-sembuh').innerHTML =
				new Intl.NumberFormat().format(dataRecovered)
			document.getElementById('data-meninggal').innerHTML =
				new Intl.NumberFormat().format(dataDeaths)
			document.getElementById(
				'updated'
			).innerText = `Terakhir Diperbarui : ${day}/${month}/${year}`

			const countConfirmed = new CountUp('data-positif', dataConfirmed)
			if (!countConfirmed.error) {
				countConfirmed.start()
			} else {
				console.error(countConfirmed.error)
			}

			const countActive = new CountUp('data-aktif', dataActive)
			if (!countActive.error) {
				countActive.start()
			} else {
				console.error(countActive.error)
			}

			const countRecovered = new CountUp('data-sembuh', dataRecovered)
			if (!countRecovered.error) {
				countRecovered.start()
			} else {
				console.error(countRecovered.error)
			}

			const countDeaths = new CountUp('data-meninggal', dataDeaths)
			if (!countDeaths.error) {
				countDeaths.start()
			} else {
				console.error(countDeaths.error)
			}
		} catch (error) {
			console.log(error)
		}
	}

	getCovidData()
}

export default main
