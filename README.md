# Praktikum Pemrograman Mobile Pertemuan 10
## SCREENSHOT TAMPILAN SIGN IN WITH GOOGLE MENGGUNAKAN FIREBASE VUE 
### Login Page
<img src="https://github.com/user-attachments/assets/78904bea-452f-40ec-891c-7861d62a97dc" height="360"/>
<img src="https://github.com/user-attachments/assets/e478d44c-3591-4cb4-be9e-57f6482d26ae" height="360"/><br>
<p><b>Deskripsi:</b> Halaman login, button sign in with google untuk login menggunakan akun google</p>

### Home Page
<img src="https://github.com/user-attachments/assets/290b474b-ce16-4978-8ccd-87c5a9133be9" height="360"/><br>
<p><b>Deskripsi:</b> Halaman beranda setelah login</p>

### Profile Page
<img src="https://github.com/user-attachments/assets/fb87c399-b8e6-4673-90b5-390a6f0d4d55" height="360"/><br>
<p><b>Deskripsi:</b> Halaman profil, berisi nama yg diambil dari nama email dan email dari akun google yg digunakan untuk sign in</p>

### Flow cara kerja program
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

# Praktikum Pemrograman Mobile Pertemuan 11
## SCREENSHOT TAMPILAN CRUD APLIKASI TO-DO LIST WITH FIREBASE
### Tambah Note
<img src="https://github.com/user-attachments/assets/21c7968f-6de5-47d6-8cbc-63680fac4d12" height="360"/>
<img src="https://github.com/user-attachments/assets/9ac358ad-23fd-46eb-bcc0-a9648631f22d" height="360"/><br>
### Penjelasan:
Notes ditambahkan dengan klik ikon tambah pada kanan bawah. Isi form dan notes akan masuk ketika di submit.

### Edit Note
<img src="https://github.com/user-attachments/assets/ffd27d99-714a-4c25-b5d9-08310df9a8a6" height="360"/>
<img src="https://github.com/user-attachments/assets/2e0a6835-2c71-445c-86fd-d8590d9e7c2f" height="360"/>
<img src="https://github.com/user-attachments/assets/376838a1-60e0-49ae-935d-5721a2dff804"/>
<img src="https://github.com/user-attachments/assets/465dd780-6767-4300-ad3b-205d698de378" height="360"/><br>
### Penjelasan:
Untuk edit notes, geser notes ke kiri kemudian pencet ikon edit. Ketika notes digeser ke kiri secara mentok maka akan menandai notes sebagai completed.

### Delete Note
<img src="https://github.com/user-attachments/assets/9fcb069a-0b32-4377-bcec-5d6dbb576442" height="360"/>
<img src="https://github.com/user-attachments/assets/69f72839-cab0-418b-b359-86edd36ca15b" height="360"/><br>
### Penjelasan:
Ketika pada notes dislide ke kanan, maka akan memunculkan opsi delete. Slide mentok ke kanan untuk langsung menghapus, atau slide sedikit ke kanan lalu pencet ikon hapus.

### Build APK
### 1. Run Build Ionic
<img src="https://github.com/user-attachments/assets/c622742a-8adf-48fb-ba45-5ad7f7c12507"/><br>

### 2. Install Capacitor
<img src="https://github.com/user-attachments/assets/61a99d4c-1b17-4150-b950-cb48be16b4ac"/><br>

### 3. Tambahkan Android dan Sinkronisasi
<img src="https://github.com/user-attachments/assets/063f9b91-9cc3-4867-836a-1e2da9fe9583"/><br>

### 4. Buka di android studio untuk membuild apk
<img src="https://github.com/user-attachments/assets/833eba63-e447-4d50-93fe-fd151ea0fdeb"/>
<img src="https://github.com/user-attachments/assets/adfc8d1e-8108-4725-8b2d-3ab23727f333"/><br>

### 5. Pindahkan file apk ke HP kemudian install
<img src="https://github.com/user-attachments/assets/363c45b2-1cb9-45e2-b51b-db1ffe6ca1c7" height="360"/>
<img src="https://github.com/user-attachments/assets/0c7b7713-35ba-4079-9503-dd15c99b48d5" height="360"/>
<img src="https://github.com/user-attachments/assets/88cdc438-d771-42ce-8f7a-7f5bb8e622bf" height="360"/><br>



