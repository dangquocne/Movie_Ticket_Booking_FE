<template>
    <div class="d-flex align-items-center justify-content-center my-5 my-lg-0"
        style="background-position: center; height: 100vh;">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="my-4 text-center"></div>
                    <div class="card d-flex">
                        <div class="card-body flex-full">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="text-uppercase ">
                                        Đăng ký tài khoản <b class="text-primary">oizoioi cinema</b>
                                    </h3>
                                    <p>
                                        Bạn đã có tài khoản?
                                        <router-link to="/client/dang-nhap">
                                            <a href="/client/dang-nhap">Đăng nhập tại đây</a>
                                        </router-link>
                                    </p>
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label class="form-label">Họ và tên</label>
                                            <input v-model="user.ho_va_ten" type="text" class="form-control">
                                        </div>

                                        <div class="col-sm-6">
                                            <label class="form-label">Email</label>
                                            <input v-model="user.email" type="email" class="form-control" @blur="kiemTraEmail">
                                            <div v-if="emailError" class="text-danger small mt-1">{{ emailError }}</div>
                                        </div>

                                        <div class="col-sm-4">
                                            <label class="form-label">Số điện thoại</label>
                                            <input v-model="user.so_dien_thoai" type="number" class="form-control">
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="form-label">Số CCCD</label>
                                            <input v-model="user.cccd" type="number" class="form-control">
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="form-label">Ngày Sinh</label>
                                            <input v-model="user.ngay_sinh" type="date" class="form-control"
                                                min="1900-01-01" max="2025-12-31">
                                        </div>

                                        <div class="col-6">
                                            <label class="form-label">Mật khẩu</label>
                                            <div class="input-group">
                                                <input v-model="user.password" type="password" class="form-control border-end-0">
                                                <a href="javascript:;" class="input-group-text bg-transparent">
                                                    <i class="bx bx-hide"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Nhập Lại Mật khẩu</label>
                                            <div class="input-group">
                                                <input v-model="user.re_password" type="password" class="form-control border-end-0">
                                                <a href="javascript:;" class="input-group-text bg-transparent">
                                                    <i class="bx bx-hide"></i>
                                                </a>
                                            </div>
                                            <div v-if="passwordError" class="text-danger small mt-1">{{ passwordError }}</div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                                <label class="form-check-label" for="flexSwitchCheckChecked">
                                                    Bằng việc đăng ký tài khoản, tôi đồng ý với Điều khoản dịch vụ &amp;
                                                    Chính sách bảo mật của <b>DZCinema</b>.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button @click="dangKyTaiKhoan()" type="submit" class="btn btn-primary text-uppercase">
                                                    <i class="bx bx-user"></i> Đăng Ký
                                                </button>
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
export default {
    data() {
        return {
            list_khach_hang: JSON.parse(localStorage.getItem('list_khach_hang')) || [],
            user: { role: 'ROLE_USER' },
            emailError: '',
            passwordError: ''
        }
    },
    methods: {
        dangKyTaiKhoan() {
            // Kiểm tra thông tin cơ bản
            if (
                !this.user.ho_va_ten ||
                !this.user.cccd ||
                !this.user.ngay_sinh ||
                !this.user.password ||
                !this.user.re_password ||
                !this.user.email ||
                !this.user.so_dien_thoai
            ) {
                this.$toast.warning("Vui lòng nhập đầy đủ thông tin!");
                return;
            }

            // Kiểm tra email trùng
            if (this.list_khach_hang.find(kh => kh.email === this.user.email)) {
                this.$toast.error("Email đã được sử dụng, vui lòng nhập email khác!");
                return;
            }

            // Kiểm tra mật khẩu khớp
            if (!this.kiemTraMatKhau()) return;

            // Tạo user mới (auto kích hoạt)
            const newUser = {
                id: Date.now(),
                ho_va_ten: this.user.ho_va_ten,
                email: this.user.email,
                so_dien_thoai: this.user.so_dien_thoai,
                ngay_sinh: this.user.ngay_sinh,
                cccd: this.user.cccd,
                mat_khau: this.user.password,
                is_active: true,   // ✅ tự động kích hoạt
                is_block: false,   // ✅ chưa bị khóa
                role: 'ROLE_USER'
            };

            // Thêm vào danh sách
            this.list_khach_hang.push(newUser);
            localStorage.setItem('list_khach_hang', JSON.stringify(this.list_khach_hang));

            // Reset form
            this.user = { role: 'ROLE_USER' };

            this.$toast.success("Đăng ký thành công!");
        },

        // Kiểm tra email đúng định dạng
        kiemTraEmail() {
            const email = this.user.email;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regex.test(email)) {
                this.emailError = "Vui lòng nhập đúng định dạng email!";
            } else {
                this.emailError = '';
            }
        },

       kiemTraMatKhau() {
    if (!this.user.password || !this.user.re_password) {
        this.passwordError = "Vui lòng nhập đầy đủ mật khẩu!";
        return false;
    }

    // 🔹 Kiểm tra độ dài mật khẩu
    if (this.user.password.length < 6) {
        this.passwordError = "Mật khẩu phải có ít nhất 6 ký tự!";
        return false;
    }

    if (this.user.password !== this.user.re_password) {
        this.passwordError = "Mật khẩu không khớp!";
        return false;
    }

    this.passwordError = '';
    return true;
},
    },
}
</script>

<style></style>
