const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Agar Express bisa menampilkan file HTML, CSS, dan JS
app.use(express.static(__dirname));

// Data awal
let dataCuaca = [
    {
        suhu: 30,
        kelembapan: 75,
        kondisi: "Cerah Berawan"
    }
];

// Halaman utama
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API GET
app.get("/api/cuaca", (req, res) => {
    res.json(dataCuaca);
});

// API POST
app.post("/api/cuaca", (req, res) => {

    const dataBaru = req.body;

    dataCuaca.push(dataBaru);

    res.json({
        message: "Data berhasil ditambahkan",
        data: dataBaru
    });

});

// Jalankan server
app.listen(3000, () => {
    console.log("====================================");
    console.log("Server berjalan di http://localhost:3000");
    console.log("Dashboard : http://localhost:3000");
    console.log("API GET   : http://localhost:3000/api/cuaca");
    console.log("====================================");
});