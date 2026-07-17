async function updateData() {

    try {

        const response = await fetch("http://localhost:3000/api/cuaca");

        const hasil = await response.json();

        // Ambil data terakhir
        const data = hasil[hasil.length - 1];

        document.getElementById("suhu").innerHTML =
            data.suhu + "°C";

        document.getElementById("kelembapan").innerHTML =
            data.kelembapan + "%";

        document.getElementById("cuaca").innerHTML =
            data.kondisi;

    } catch (error) {

        console.log(error);

        alert("Server tidak dapat diakses.");

    }

}

updateData();