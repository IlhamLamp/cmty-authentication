# API Documentation - Authentication Service

## User Registration

### POST `/api/v1/auth/register`

**Description**: Endpoint untuk registrasi pengguna baru.

**Request Body**:

```json
{
  "email": "user@example.com",
  "password": "password123",
  "confirmation_password": "password123"
}
```

**Response**:

- **201 Created**: Pengguna berhasil didaftarkan.
- **400 Bad Request**: Jika data tidak lengkap atau tidak valid.

---

### POST `/api/v1/auth/verify`

**Description**: Endpoint untuk memverifikasi OTP setelah pendaftaran pengguna.

**Request Body**:

```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Response**:

- **200 OK**: OTP berhasil diverifikasi, pengguna aktif.
- **400 Bad Request**: Jika OTP tidak valid atau telah kedaluwarsa.

---

### POST `/api/v1/auth/resend-otp`

**Description**: Endpoint untuk mengirim ulang kode OTP ke email pengguna.

**Request Body**:

```json
{
  "email": "user@example.com"
}
```

**Response**:

- **200 OK**: Kode OTP berhasil dikirim ulang.
- **400 Bad Request**: Jika email tidak terdaftar atau terdapat kesalahan lainnya.

---

## User Action Authentication

### POST `/api/v1/auth/login`

**Description**: Endpoint untuk login pengguna.

**Request Body**:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response**:

- **200 OK**: Login berhasil dan token akses diberikan.
- **401 Unauthorized**: Jika kredensial salah.

---

### POST `/api/v1/auth/logout`

**Description**: Endpoint untuk logout pengguna dan menghapus session/token.

**Response**:

- **200 OK**: Pengguna berhasil logout.
- **400 Bad Request**: Jika tidak ada session yang ditemukan.

---

### GET `/api/v1/auth/google`

**Description**: Endpoint untuk menginisialisasi login menggunakan OAuth dengan Google.

**Response**:

- **302 Found**: Redirect ke halaman login Google.

---

### GET `/api/v1/auth/google/callback`

**Description**: Endpoint callback setelah login dengan Google. Digunakan untuk verifikasi token dan mendapatkan informasi pengguna.

**Response**:

- **200 OK**: Pengguna berhasil masuk menggunakan Google OAuth.
- **400 Bad Request**: Jika verifikasi gagal atau token tidak valid.

---

### POST `/api/v1/auth/login/redirect`

**Description**: Endpoint untuk mengatur password bagi pengguna yang melakukan registrasi melalui Google atau metode lain.

**Request Body**:

```json
{
  "password": "newPassword123"
}
```

**Response**:

- **200 OK**: Password berhasil diatur.
- **400 Bad Request**: Jika data tidak valid.

---

### GET `/api/v1/auth/login/success`

**Description**: Endpoint untuk mendapatkan data status sukses login setelah login menggunakan OAuth.

**Response**:

- **200 OK**: Menampilkan data login yang berhasil.
- **400 Bad Request**: Jika data tidak ditemukan atau login gagal.

---

## Tokenization

### POST `/api/v1/auth/refresh-token`

**Description**: Endpoint untuk memperbarui token akses menggunakan refresh token.

**Request Body**:

```json
{
  "refresh_token": "your-refresh-token"
}
```

**Response**:

- **200 OK**: Token akses baru berhasil diberikan.
- **401 Unauthorized**: Jika refresh token tidak valid atau telah kedaluwarsa.

---

### POST `/api/v1/auth/verify-token`

**Description**: Endpoint untuk memverifikasi keabsahan token akses yang digunakan.

**Request Body**:

```json
{
  "access_token": "your-access-token"
}
```

**Response**:

- **200 OK**: Token valid.
- **401 Unauthorized**: Jika token tidak valid atau kedaluwarsa.

---

```

```
