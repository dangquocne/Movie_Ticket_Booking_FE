<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div class="col mx-auto">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="text-uppercase">Đăng Nhập <span class="text-primary fw-bold">OIZOIOI
                                            Cinema</span></h3>
                                    <p>Bạn chưa có tài khoản?
                                        <router-link to="/client/dang-ky">
                                            <a href="/client/dang-ky">Đăng ký ngay</a>
                                        </router-link>
                                    </p>
                                </div>
                                <div class="d-grid">
                                    <a class="btn my-3 shadow-sm btn-white" href="javascript:;"> <span
                                            class="d-flex justify-content-center align-items-center">
                                            <img class="me-2" src="../../../assets/images/icons/search.svg" width="16"
                                                alt="Image Description">
                                            <span>Đăng nhập bằng Google</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="login-separater text-center mb-4">
                                    <span>OR</span>
                                    <hr>
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label">Email</label>
                                            <div class="input-group">
                                                <span class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </span>
                                                <input v-model="thong_tin_dang_nhap.email" type="email"
                                                    class="form-control border-start-0" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Mật khẩu</label>
                                            <div class="input-group">
                                                <span class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-lock"></i>
                                                </span>
                                                <input v-model="thong_tin_dang_nhap.password" type="password"
                                                    class="form-control border-start-0" placeholder="Mật khẩu">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                        </div>
                                        <div class="col-md-6 text-end"> <a href="/client/quen-mat-khau">Quên mật
                                                khẩu</a>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="dangNhap()" class="btn btn-primary btn-pill"><i
                                                        class="bx bxs-lock-open"></i>Đăng Nhập</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            thong_tin_dang_nhap: {}
        }
    },
    mounted() {
        // Load list nhân viên từ localStorage
        this.list_nhan_vien = JSON.parse(localStorage.getItem("list_nhan_vien") || "[]");

        // Nếu chưa có dữ liệu, thêm nhân viên mẫu
        if (this.list_nhan_vien.length === 0) {
            const nhanVienMau = {
                id: Date.now(),
                ho_va_ten: "Nguyễn Văn Admin",
                email: "admin@gmail.com",
                mat_khau: "12345",
                chuc_vu_id: 1, // Quản lý
                role: "ROLE_ADMIN", // Role admin để login vào trang admin
                tinh_trang: 1, // Hoạt động
                dia_chi: "Hà Nội",
                ngay_sinh: "1990-01-01",
                so_dien_thoai: "0987654321"
            };

            this.list_nhan_vien.push(nhanVienMau);
            localStorage.setItem("list_nhan_vien", JSON.stringify(this.list_nhan_vien));

        }

          // Load list nhân viên từ localStorage
        this.list_khach_hang = JSON.parse(localStorage.getItem("list_khach_hang") || "[]");

        // Nếu chưa có dữ liệu, thêm nhân viên mẫu
        if (this.list_khach_hang.length === 0) {
            const nhanVienMau = {
                id: Date.now(),
                ho_va_ten: "Nguyễn Thành An",
                email: "An1234@gmail.com",
                mat_khau: "123123",
                xac_nhan_mat_khau: "123123",
                ngay_sinh: "1995-05-15",
                so_dien_thoai: "0123456789",
                is_active:true,
                is_block:false,
                cccd:"123456789012"
            };

            this.list_khach_hang.push(nhanVienMau);
            localStorage.setItem("list_khach_hang", JSON.stringify(this.list_khach_hang));
        }
        
    },
    methods: {
        dangNhap() {

            // ✅ Kiểm tra có nhập email và mật khẩu hay chưa
            if (!this.thong_tin_dang_nhap.email || !this.thong_tin_dang_nhap.password) {
                this.$toast.error("Vui lòng nhập đầy đủ email và mật khẩu!");
                return;
            }

            // ✅ Kiểm tra định dạng email
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(this.thong_tin_dang_nhap.email)) {
                this.$toast.error("Email sai định dạng!");
                return;
            }
            // ✅ Lấy danh sách khách hàng + nhân viên
            const danhSachKhachHang = JSON.parse(localStorage.getItem('list_khach_hang')) || [];
            const danhSachNhanVien = JSON.parse(localStorage.getItem('list_nhan_vien')) || [];

            // ✅ Gộp danh sách
            const danhSachNguoiDung = [...danhSachKhachHang, ...danhSachNhanVien];

            // ✅ Tìm người dùng khớp email + mật khẩu
            const nguoiDung = danhSachNguoiDung.find(u =>
                u.email === this.thong_tin_dang_nhap.email &&
                u.mat_khau === this.thong_tin_dang_nhap.password
            );

            if (nguoiDung) {
                if (nguoiDung.tinh_trang !== undefined && nguoiDung.tinh_trang === 0) {
                    this.$toast.error("Tài khoản của bạn đã bị khóa!");
                    return;
                }

                this.$toast.success("Đăng nhập thành công!");

                // ✅ Lưu người đăng nhập hiện tại
                localStorage.setItem('user_login', JSON.stringify(nguoiDung));

                // ✅ Điều hướng theo role
                if (nguoiDung.role === "ROLE_ADMIN") {
                    this.$router.push('/admin/');
                } else {
                    this.$router.push('/');
                }
            } else {
                this.$toast.error("Email hoặc mật khẩu không đúng!");
            }
        },


        layDataKhachHang() {
            const data = localStorage.getItem("list_khach_hang");

            if (data) {
                this.list_khach_hang = JSON.parse(data);
            } else {
                // Dữ liệu mẫu
                this.list_khach_hang = [
                    {
                        id: 1,
                        ho_va_ten: "Nguyễn Văn A",
                        email: "vana@example.com",
                        so_dien_thoai: "0912345678",
                        ngay_sinh: "1990-05-12",
                        cccd: "123456789012",
                        is_active: true,
                        is_block: false,
                    },
                    {
                        id: 2,
                        ho_va_ten: "Trần Thị B",
                        email: "thib@example.com",
                        so_dien_thoai: "0987654321",
                        ngay_sinh: "1995-10-20",
                        cccd: "987654321098",
                        is_active: false,
                        is_block: false,
                    },
                    {
                        id: 3,
                        ho_va_ten: "Lê Minh C",
                        email: "minhc@example.com",
                        so_dien_thoai: "0909998888",
                        ngay_sinh: "1988-03-08",
                        cccd: "012345678912",
                        is_active: true,
                        is_block: true,
                    },
                ];

                // Lưu vào localStorage
                this.saveToStorage();
            }
        }
    },
}
</script>

<style></style>