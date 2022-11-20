const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const axios = require("axios");

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.post("/", (req, res) => {
	function rupiahFormat(angka) {
		var number_string = angka.toString(),
			sisa = number_string.length % 3,
			rupiah = number_string.substr(0, sisa),
			ribuan = number_string.substr(sisa).match(/\d{3}/g);

		if (ribuan) {
			separator = sisa ? "." : "";
			rupiah += separator + ribuan.join(".");
		}

		return rupiah;
	}
	const jumlah = rupiahFormat(req.body.amount);
	if (req.body.amount == 10000) {
		axios
			.get(
				"http://localhost:32032/keypress?key=w&presses=1&duration=10&pass=Tf1pp84L"
			)
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else if (req.body.amount == 15000) {
		axios
			.get(
				"http://localhost:32032/keypress?key=Space&presses=5&duration=05&pass=Tf1pp84L"
			)
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else if (req.body.amount == 30000) {
		axios
			.get("http://localhost:32032/keypress?key=F6&presses=1&pass=Tf1pp84L")
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else if (req.body.amount == 50000) {
		axios
			.get(
				"http://localhost:32032/keypress?key=Tab&presses=5&modifier=a&pass=Tf1pp84L"
			)
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else if (req.body.amount == 75000) {
		axios
			.get(
				"http://localhost:32032/keypress?key=F4&presses=1&modifier=a&pass=Tf1pp84L"
			)
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else if (req.body.amount == 100000) {
		axios
			.get(
				"http://localhost:32032/keypress?key=%60&presses=1&modifier=c&pass=Tf1pp84L"
			)
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else if (req.body.amount == 500000) {
		axios
			.get(
				"http://localhost:32032/keypress?key=Insert&presses=1&modifier=a&pass=Tf1pp84L"
			)
			.then((response) => {
				console.log(`Berhasil menjalankan challenge Rp${jumlah}`);
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		console.log(`Tidak ada challenge, namun mendapatkan Rp${jumlah}`);
	}
	res.send(req.body);
});
