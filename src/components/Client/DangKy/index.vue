<template>
    <div class="d-flex align-items-center justify-content-center my-5 my-lg-0" style="background-position: center; height: 100vh;">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center mb-4">
                                    <h3 class="text-uppercase">
                                        Đăng ký tài khoản <b class="text-primary">oizoioi cinema</b>
                                    </h3>
                                    <p>
                                        Bạn đã có tài khoản?
                                        <router-link to="/client/dang-nhap">Đăng nhập tại đây</router-link>
                                    </p>
                                </div>

                                <div class="form-body">
                                    <div class="row g-3">
                                        <!-- Họ tên -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Họ và tên</label>
                                            <input v-model="user.ho_va_ten" type="text" class="form-control" @blur="kiemTraHoTen" />
                                            <div v-if="errors.ho_va_ten" class="text-danger small mt-1">{{ errors.ho_va_ten }}</div>
                                        </div>

                                        <!-- Email -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Email</label>
                                            <input v-model="user.email" type="email" class="form-control" @blur="kiemTraEmail" />
                                            <div v-if="errors.email" class="text-danger small mt-1">{{ errors.email }}</div>
                                        </div>

                                        <!-- Số điện thoại -->
                                        <div class="col-sm-4">
                                            <label class="form-label">Số điện thoại</label>
                                            <input v-model="user.so_dien_thoai" type="text" class="form-control" @blur="kiemTraSoDienThoai" />
                                            <div v-if="errors.so_dien_thoai" class="text-danger small mt-1">{{ errors.so_dien_thoai }}</div>
                                        </div>

                                        <!-- CCCD -->
                                        <div class="col-sm-4">
                                            <label class="form-label">Số CCCD</label>
                                            <input v-model="user.cccd" type="text" class="form-control" @blur="kiemTraCCCD" />
                                            <div v-if="errors.cccd" class="text-danger small mt-1">{{ errors.cccd }}</div>
                                        </div>

                                        <!-- Ngày sinh -->
                                        <div class="col-sm-4">
                                            <label class="form-label">Ngày sinh</label>
                                            <input v-model="user.ngay_sinh" type="date" class="form-control" @blur="kiemTraNgaySinh"
                                                min="1900-01-01" max="2025-12-31" />
                                            <div v-if="errors.ngay_sinh" class="text-danger small mt-1">{{ errors.ngay_sinh }}</div>
                                        </div>

                                        <!-- Mật khẩu -->
                                        <div class="col-6">
                                            <label class="form-label">Mật khẩu</label>
                                            <div class="input-group">
                                                <input v-model="user.password" type="password" class="form-control border-end-0" @blur="kiemTraMatKhau" />
                                                <a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
                                            </div>
                                            <div v-if="errors.password" class="text-danger small mt-1">{{ errors.password }}</div>
                                        </div>

                                        <!-- Nhập lại mật khẩu -->
                                        <div class="col-6">
                                            <label class="form-label">Nhập lại mật khẩu</label>
                                            <div class="input-group">
                                                <input v-model="user.re_password" type="password" class="form-control border-end-0" @blur="kiemTraMatKhau" />
                                                <a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
                                            </div>
                                            <div v-if="errors.re_password" class="text-danger small mt-1">{{ errors.re_password }}</div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check form-switch">
                                                <input v-model="dongY" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                                <label class="form-check-label" for="flexSwitchCheckChecked">
                                                    Tôi đồng ý với Điều khoản &amp; Chính sách bảo mật của <b>Oizoioi Cinema</b>.
                                                </label>
                                            </div>
                                            <div v-if="errors.dongY" class="text-danger small mt-1">{{ errors.dongY }}</div>
                                        </div>

                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button @click="dangKyTaiKhoan" type="submit" class="btn btn-primary text-uppercase">
                                                    <i class="bx bx-user"></i> Đăng Ký
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end border -->
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
            dongY: false,
            errors: {}
        }
    },
    methods: {
        // ------------------ VALIDATIONS ------------------
       kiemTraHoTen() {
        const regex = /^[A-Za-zÀ-ỹ\s]+$/u;
        if (!this.user.ho_va_ten?.trim()) {
            this.errors.ho_va_ten = "Vui lòng nhập họ và tên!";
        } else if (!regex.test(this.user.ho_va_ten.trim())) {
            this.errors.ho_va_ten = "Họ và tên chỉ được chứa chữ cái, không bao gồm số hoặc ký tự đặc biệt!";
        } else if (this.user.ho_va_ten.trim().length < 3) {
            this.errors.ho_va_ten = "Họ và tên phải có ít nhất 3 ký tự!";
        } else {
            this.errors.ho_va_ten = '';
        }
    },
        kiemTraEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.user.email) this.errors.email = "Vui lòng nhập email!";
            else if (!regex.test(this.user.email)) this.errors.email = "Email không hợp lệ!";
            else if (this.list_khach_hang.find(kh => kh.email === this.user.email))
                this.errors.email = "Email đã được sử dụng!";
            else this.errors.email = '';
        },
        kiemTraSoDienThoai() {
            const regex = /^(0[0-9]{9})$/;
            if (!this.user.so_dien_thoai) this.errors.so_dien_thoai = "Vui lòng nhập số điện thoại!";
            else if (!regex.test(this.user.so_dien_thoai)) this.errors.so_dien_thoai = "Số điện thoại không hợp lệ!";
            else this.errors.so_dien_thoai = '';
        },
        kiemTraCCCD() {
            const regex = /^[0-9]{12}$/;
            if (!this.user.cccd) this.errors.cccd = "Vui lòng nhập số CCCD!";
            else if (!regex.test(this.user.cccd)) this.errors.cccd = "CCCD phải gồm 12 số!";
            else this.errors.cccd = '';
        },
        kiemTraNgaySinh() {
            if (!this.user.ngay_sinh) this.errors.ngay_sinh = "Vui lòng chọn ngày sinh!";
            else this.errors.ngay_sinh = '';
        },
        kiemTraMatKhau() {
            if (!this.user.password) this.errors.password = "Vui lòng nhập mật khẩu!";
            else if (this.user.password.length < 6)
                this.errors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
            else this.errors.password = '';

            if (!this.user.re_password) this.errors.re_password = "Vui lòng nhập lại mật khẩu!";
            else if (this.user.re_password !== this.user.password)
                this.errors.re_password = "Mật khẩu không khớp!";
            else this.errors.re_password = '';
        },

        // ------------------ ĐĂNG KÝ ------------------
        dangKyTaiKhoan() {
            // Gọi tất cả hàm kiểm tra
            this.kiemTraHoTen();
            this.kiemTraEmail();
            this.kiemTraSoDienThoai();
            this.kiemTraCCCD();
            this.kiemTraNgaySinh();
            this.kiemTraMatKhau();

            if (!this.dongY) this.errors.dongY = "Bạn phải đồng ý với điều khoản!";
            else this.errors.dongY = '';

            // Nếu có lỗi → không submit
            if (Object.values(this.errors).some(err => err)) {
                this.$toast.warning("Vui lòng kiểm tra lại thông tin!");
                return;
            }

            // ✅ Lưu tài khoản mới
            const newUser = {
                id: Date.now(),
                ho_va_ten: this.user.ho_va_ten.trim(),
                email: this.user.email.trim(),
                so_dien_thoai: this.user.so_dien_thoai,
                ngay_sinh: this.user.ngay_sinh,
                cccd: this.user.cccd,
                mat_khau: this.user.password,
                is_active: true,
                is_block: false,
                role: 'ROLE_USER'
            };

            this.list_khach_hang.push(newUser);
            localStorage.setItem('list_khach_hang', JSON.stringify(this.list_khach_hang));

            this.$toast.success("Đăng ký thành công!");
            this.user = { role: 'ROLE_USER' };
            this.dongY = false;
        }
    }
}
</script>

<style scoped>
.card {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}
</style>
