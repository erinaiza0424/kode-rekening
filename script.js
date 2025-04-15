// Data kode rekening dari PDF
const kodeRekeningData = [
    {
        kode: "5.1.02.01.01.0001",
        rincian: "Belanja Bahan-Bahan Bangunan dan Konstruksi",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0002",
        rincian: "Belanja Bahan-Bahan Kimia",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0004",
        rincian: "Belanja Bahan-Bahan Bakar dan Pelumas",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0005",
        rincian: "Belanja Bahan-Bahan Baku Praktek KBM",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0008",
        rincian: "Belanja Bahan-Bahan/Bibit Tanaman",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0009",
        rincian: "Belanja Bahan-Isi Tabung Pemadam Kebakaran",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0010",
        rincian: "Belanja Bahan-Isi Tabung Gas",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0011",
        rincian: "Belanja Bahan-Bahan/Bibit Ternak/Bibit Ikan",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0013",
        rincian: "Belanja Suku Cadang-Suku Cadang Alat Angkutan",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0016",
        rincian: "Belanja Suku Cadang-Suku Cadang Alat Laboratorium",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0017",
        rincian: "Belanja Suku Cadang-Suku Cadang Alat Pemancar",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0018",
        rincian: "Belanja Suku Cadang-Suku Cadang Alat Studio dan Komunikasi",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0019",
        rincian: "Belanja Suku Cadang-Suku Cadang Alat Pertanian",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0020",
        rincian: "Belanja Suku Cadang-Suku Cadang Alat Bengkel",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0024",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0026",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Bahan Cetak dan Penggandaan",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0027",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Benda Pos",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0029",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Komputer",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0030",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Perabot Kantor",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0031",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Listrik",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0032",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Perlengkapan Dinas",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0034",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Perlengkapan Pendukung Olahraga",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0035",
        rincian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Suvenir/Cendera Mata",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0037",
        rincian: "Belanja Obat-Obat-Obatan",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0055",
        rincian: "Belanja Makanan dan Minuman pada Fasilitas Pelayanan Urusan Pendidikan",
        ppn: true,
        pph21: false,
        pph23: true,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.01.01.0066",
        rincian: "Belanja Pakaian Dinas Upacara (PDU)",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0067",
        rincian: "Belanja Pakaian Penyelamatan",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0069",
        rincian: "Belanja Pakaian Teknik",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0071",
        rincian: "Belanja Pakaian Kerja Laboratorium",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0072",
        rincian: "Belanja Pakaian Kerja Bengkel",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0074",
        rincian: "Belanja Pakaian Adat Daerah",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0075",
        rincian: "Belanja Pakaian Batik Tradisional",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0076",
        rincian: "Belanja Pakaian Olahraga",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.01.01.0077",
        rincian: "Belanja Pakaian Paskibraka",
        ppn: true,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bhp"
    },
    {
        kode: "5.1.02.02.01.0003",
        rincian: "Honorarium Narasumber atau Pembahas, Moderator, Pembawa Acara, dan Panitia",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0004",
        rincian: "Honorarium Tim Pelaksana Kegiatan dan Sekretariat Tim Pelaksana Kegiatan",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0006",
        rincian: "Honorarium Penyuluhan atau Pendampingan",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0007",
        rincian: "Honorarium Rohaniwan",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0008",
        rincian: "Honorarium Tim Penyusunan Jurnal, Buletin, Majalah, Pengelola Teknologi Informasi dan Pengelola Website",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0009",
        rincian: "Honorarium Penyelenggara Ujian",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0011",
        rincian: "Honorarium Penyelenggaraan Kegiatan Pendidikan dan Pelatihan",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0013",
        rincian: "Belanja Jasa Tenaga Pendidikan / Honorarium Guru",
        ppn: false,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0016",
        rincian: "Belanja Jasa Tenaga Penanganan Prasarana dan Sarana Umum / Upah Tukang",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0025",
        rincian: "Belanja Jasa Tenaga Kesenian dan Kebudayaan",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0026",
        rincian: "Belanja Jasa Tenaga Administrasi",
        ppn: false,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0027",
        rincian: "Belanja Jasa Tenaga Operator Komputer",
        ppn: false,
        pph21: false,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0029",
        rincian: "Belanja Jasa Tenaga Ahli",
        ppn: false,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    {
        kode: "5.1.02.02.01.0030",
        rincian: "Belanja Jasa Tenaga Kebersihan",
        ppn: true,
        pph21: true,
        pph23: false,
        pph4: false,
        sspd: false,
        blok: "bbj"
    },
    // Lanjutkan dengan data lainnya dari PDF
    
    // ... (tambahkan data lainnya dari PDF)
];

// Variabel global untuk paginasi
let currentPage = 1;
const rowsPerPage = 10;
let filteredData = [...kodeRekeningData];

// Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsBody = document.getElementById('resultsBody');
const noResults = document.getElementById('noResults');
const paginationContainer = document.getElementById('pagination');
const filterPPN = document.getElementById('filterPPN');
const filterPPH21 = document.getElementById('filterPPH21');
const filterPPH23 = document.getElementById('filterPPH23');
const filterPPH4 = document.getElementById('filterPPH4');
const filterSSPD = document.getElementById('filterSSPD');
const filterBlok = document.getElementById('filterBlok');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initial display
    updateTable();
    
    // Event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filter change events
    filterPPN.addEventListener('change', performSearch);
    filterPPH21.addEventListener('change', performSearch);
    filterPPH23.addEventListener('change', performSearch);
    filterPPH4.addEventListener('change', performSearch);
    filterSSPD.addEventListener('change', performSearch);
    filterBlok.addEventListener('change', performSearch);
});

// Search function
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const ppnChecked = filterPPN.checked;
    const pph21Checked = filterPPH21.checked;
    const pph23Checked = filterPPH23.checked;
    const pph4Checked = filterPPH4.checked;
    const sspdChecked = filterSSPD.checked;
    const blokValue = filterBlok.value.toLowerCase();
    
    filteredData = kodeRekeningData.filter(item => {
        // Search by text
        const matchesSearch = searchTerm === '' || 
            item.kode.toLowerCase().includes(searchTerm) || 
            item.rincian.toLowerCase().includes(searchTerm);
        
        // Filter by checkboxes
        const matchesPPN = !ppnChecked || item.ppn;
        const matchesPPH21 = !pph21Checked || item.pph21;
        const matchesPPH23 = !pph23Checked || item.pph23;
        const matchesPPH4 = !pph4Checked || item.pph4;
        const matchesSSPD = !sspdChecked || item.sspd;
        
        // Filter by blok
        const matchesBlok = blokValue === '' || item.blok.toLowerCase() === blokValue;
        
        return matchesSearch && matchesPPN && matchesPPH21 && matchesPPH23 && 
               matchesPPH4 && matchesSSPD && matchesBlok;
    });
    
    // Reset to first page
    currentPage = 1;
    
    // Update the table with search results
    updateTable();
}

// Update table and pagination
function updateTable() {
    // Clear current results
    resultsBody.innerHTML = '';
    
    if (filteredData.length === 0) {
        // Show no results message
        noResults.classList.remove('hidden');
        paginationContainer.innerHTML = '';
        return;
    }
    
    // Hide no results message
    noResults.classList.add('hidden');
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);
    
    // Display current page data
    for (let i = startIndex; i < endIndex; i++) {
        const item = filteredData[i];
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.kode}</td>
            <td>${item.rincian}</td>
            <td>${item.ppn ? '✓' : ''}</td>
            <td>${item.pph21 ? '✓' : ''}</td>
            <td>${item.pph23 ? '✓' : ''}</td>
            <td>${item.pph4 ? '✓' : ''}</td>
            <td>${item.sspd ? '✓' : ''}</td>
            <td>${item.blok.toUpperCase()}</td>
        `;
        
        resultsBody.appendChild(row);
    }
    
    // Update pagination controls
    updatePagination(totalPages);
}

// Update pagination controls
function updatePagination(totalPages) {
    paginationContainer.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = '«';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Page numbers
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    
    if (endPage - startPage + 1 < maxButtons) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            updateTable();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = '»';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateTable();
        }
    });
    paginationContainer.appendChild(nextButton);
}