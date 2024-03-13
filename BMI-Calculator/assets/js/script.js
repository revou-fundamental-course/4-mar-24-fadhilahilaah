const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const category = document.querySelector('#category');
    const advice = document.querySelector('#advice');

    // input tidak boleh kosong, < 0, dan NaN
    if ((height === '') || (height < 0) || (isNaN(height))) {
        results.innerHTML = "Silakan isi tinggi yang valid";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Silakan isi berat yang valid";
    } else {
        // menghitung BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        // menampilkan hasil BMI
        results.innerHTML = bmi;

        // menampilkan pesan dari hasil BMI
        if (bmi < 18.5) {
            category.innerHTML = "Berat Rendah! 🙁";
            advice.innerHTML = "Kamu mungkin kekurangan nutrisi nih. Disarankan untuk berkonsultasi dengan dokter atau ahli gizi.";
        } else if (bmi >= 18.5 && bmi <= 22.9) {
            category.innerHTML = "Berat Ideal! 🥰";
            advice.innerHTML = "Tubuh kamu dalam kondisi yang sehat! Pertahankan pola makan dan olahraga yang baik ya.";
        } else if (bmi >= 23 && bmi <= 29.9) {
            category.innerHTML = "Berat Berlebih! (berpotensi obesitas 😭)";
            advice.innerHTML = "Utamakan hidup sehat dan perhatikan konsumsi harian kamu ya";
        } else {
            category.innerHTML = "Gawat! Kamu obesitas nih🤐";
            advice.innerHTML = "Perubahan gaya hidup mungkin diperlukan untuk mengurangi risiko masalah kesehatan terkait obesitas. Semangat ya!";
        }
    }
})

// button reset akan mereset semua input dan hasilnya
function resetForm() {
    document.getElementById('results').innerHTML = "";
    document.getElementById('category').innerHTML = "";
    document.getElementById('advice').innerHTML = "";
}

// penambahan enter sebagai tombol submit hasil BMI
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        submitForm();
    }
}