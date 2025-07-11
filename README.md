# Proyek Visualisasi Data Populasi AS 📊

Aplikasi *web* ini adalah proyek test *front-end* di perusahaan NoLimit Indonesia yang dibuat menggunakan **React.js** dan **Vite** untuk memvisualisasikan data populasi Amerika Serikat dari Data USA API. Pengguna dapat melihat tren populasi melalui *line chart* dan distribusi populasi melalui *pie chart*, serta memfilter data berdasarkan rentang tahun.

---

## Fitur-Fitur Utama ✨

* **Visualisasi Data Interaktif**:
    * **Line Chart**: Menampilkan tren populasi per tahun.
    * **Pie Chart**: Menampilkan distribusi populasi per tahun.
* **Filter Rentang Tahun**: Pengguna dapat memasukkan "Start Year" dan "End Year" untuk memfilter data dan memperbarui grafik secara dinamis.
* **Informasi Sumber Data**: Menampilkan nama dan deskripsi organisasi sensus yang merupakan sumber data.

---

## Teknologi yang Digunakan 🛠️

* **React.js**: Pustaka JavaScript untuk membangun antarmuka pengguna.
* **Vite**: *Build tool* generasi berikutnya untuk pengembangan *front-end* yang cepat.
* **Axios**: Klien HTTP berbasis *Promise* untuk mengambil data dari API.
* **Recharts**: Pustaka charting yang dibangun di atas React untuk membuat grafik interaktif.

---

## Instalasi dan Menjalankan Proyek 🚀

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di mesin lokal Anda:

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/en/download/) (disarankan versi LTS) dan [pnpm](https://pnpm.io/installation) di sistem Anda. Jika belum, Anda bisa menginstal pnpm secara global menggunakan npm:

```bash
npm install -g pnpm
```

### Langkah-langkah

1. **Kloning Repositori**:

    ```bash
    git clone [URL_REPOSITORI_ANDA]
    cd test-frontend
    ```

2. **Instal Dependensi**:

    ```bash
    pnpm install
    ```

3. **Jalankan Aplikasi**:

    ```bash
    pnpm run dev
    ```

-----

## Struktur Proyek 📁

```
.
├── public/                 
├── src/
│   ├── components/         
│   │   ├── button.jsx
│   │   ├── button.css
│   │   ├── card.jsx
│   │   ├── card.css
│   │   ├── navbar.jsx
│   │   └── navbar.css
│   ├── contents/          
│   │   ├── ChartStyles.css
│   │   ├── DateRangeFilter.jsx
│   │   ├── DateRangeFilter.css
│   │   ├── LineChart.jsx
│   │   ├── OrganizationInfo.jsx
│   │   ├── OrganizationInfo.css
│   │   └── PieChart.jsx
│   ├── styles/             
│   │   └── variables.css
│   ├── utils/              
│   │   └── api.js
│   ├── App.jsx             
│   ├── App.css            
│   ├── index.css          
│   └── main.jsx            
├── .gitignore              
├── index.html            
├── package.json            
├── pnpm-lock.yaml          
├── README.md               
└── vite.config.js          
```

-----
