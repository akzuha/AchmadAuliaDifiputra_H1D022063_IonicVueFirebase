## SCREENSHOT TAMPILAN SIGN IN WITH GOOGLE MENGGUNAKAN FIREBASE VUE

# Login Page
<img src="https://github.com/user-attachments/assets/78904bea-452f-40ec-891c-7861d62a97dc" height="360"/>
<img src="https://github.com/user-attachments/assets/e478d44c-3591-4cb4-be9e-57f6482d26ae" height="360"/><br>
<p>Halaman login, button sign in with google untuk login menggunakan akun google</p>

# Home Page
<img src="https://github.com/user-attachments/assets/290b474b-ce16-4978-8ccd-87c5a9133be9" height="360"/><br>
<p>Halaman beranda setelah login</p>

# Profile Page
<img src="https://github.com/user-attachments/assets/fb87c399-b8e6-4673-90b5-390a6f0d4d55" height="360"/><br>
<p>Halaman profil, berisi nama yg diambil dari nama email dan email dari akun google yg digunakan untuk sign in</p>

# Flow cara kerja program
<h2> 1. Inisiasi Autentikasi Google </h2>
<p>Pertama Aplikasi ionic memanggil layanan Firebase Authentication untuk memulai proses login. Disini kita menggunakan Google Sign-In untuk mengautentikasi pengguna.</p>

<h2> 2. Permintaan Token Google </h2>
<p>Firebase mengarahkan pengguna untuk login ke akun Google pengguna. Jika login berhasil, Firebase akan menerima token autentikasi dari Google.</p>

<h2> 3. Verifikasi Token di Firebase </h2>
<p>Token yang diterima dari Google di validasi oleh Firebase. Jika valid, Firebase membuat sesi autentikasi untuk pengguna tersebut.</p>

<h2> 4. Pengambilan Data Profil </h2>
<p>Firebase memungkinkan aplikasi untuk mendapatkan detail profil pengguna, pada program memanggil nama dengan value="user?.displayName" dan email dengan value="user?.email". Untuk foto menggunakan objek const userPhoto = ref(user.value?.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg');</p>

<h2> 5. Sinkronisasi di Aplikasi </h2>
<p>Setelah login berhasil, informasi pengguna disimpan dalam state aplikasi untuk digunakan pada fitur yang memerlukan data pengguna.</p>
