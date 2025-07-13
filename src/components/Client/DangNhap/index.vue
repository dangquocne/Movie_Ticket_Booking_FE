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
                                        <div class="col-md-6 text-end"> <a href="">Quên mật khẩu</a>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="dangNhap()" class="btn btn-success btn-pill"><i
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
    methods: {
        dangNhap() {
            const danhSachNguoiDung = JSON.parse(localStorage.getItem('list_user')) || [];

            // Tìm người dùng khớp email + password
            const nguoiDung = danhSachNguoiDung.find(u =>
                u.email === this.thong_tin_dang_nhap.email && u.password === this.thong_tin_dang_nhap.password
            );

            if (nguoiDung) {
                this.$toast.success("Đăng nhập thành công!");

                // Lưu user đã đăng nhập vào localStorage (để biết người nào đang đăng nhập)
                localStorage.setItem('user_login', JSON.stringify(nguoiDung));

                if (nguoiDung.role === "ROLE_USER") {
                    // Chuyển trang user
                    this.$router.push('/');
                }else if(nguoiDung.role === "ROLE_ADMIN"){
                    // Chuyển trang admin
                    this.$router.push('/admin/');
                }
            } else {
                this.$toast.error("Email hoặc mật khẩu không đúng!");
            }
        }
    },
}
</script>
<style></style>