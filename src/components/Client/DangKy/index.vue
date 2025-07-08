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
                                    <h3 class="text-uppercase ">Đăng ký tài khoản <b class="text-primary">oizoioi cinema</b>
                                    </h3>
                                    <p>Bạn đã có tài khoản?
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
                                            <label for="inputEmailAddress" class="form-label">Email</label>
                                            <input v-model="user.email" type="email" class="form-control">
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="form-label">Số điện thoại</label>
                                            <input v-model="user.so_dien_thoai" type="text" class="form-control">
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="form-label">Số CCCD</label>
                                            <input v-model="user.cccd" type="text" class="form-control">
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="form-label">Ngày Sinh</label>
                                            <input v-model="user.ngay_sinh" type="date" class="form-control"
                                                min="1900-01-01" max="2025-12-31">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Mật khẩu</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input v-model="user.password" type="password"
                                                    class="form-control border-end-0">
                                                <a href="javascript:;" class="input-group-text bg-transparent">
                                                    <i class="bx bx-hide"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Nhập Lại Mật khẩu</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input v-model="user.re_password" type="password"
                                                    class="form-control border-end-0">
                                                <a href="javascript:;" class="input-group-text bg-transparent">
                                                    <i class="bx bx-hide"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckChecked">
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Bằng việc
                                                    đăng ký tài khoản, tôi đồng ý với Điều khoản dịch vụ &amp; Chính
                                                    sách bảo mật của <b>DZCinema</b>.</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button @click="dangKyTaiKhoan()" type="submit"
                                                    class="btn btn-success text-uppercase"><i class="bx bx-user"></i>
                                                    Đăng Ký</button>
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
import axios from 'axios'
export default {
    data() {
        return {
            list_user: JSON.parse(localStorage.getItem('list_user')) || [],
            // Danh sách người dùng, nếu không có thì khởi tạo mảng rỗ
            user: {}
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

            if(this.user.email==this.list_user.find(user => user.email === this.user.email)?.email) {
                this.$toast.error("Email đã được sử dụng, vui lòng nhập email khác!");
                return;

            }


            // Tạo bản sao của phim vừa nhập, kèm ID tạm
            const newUser = {
                ...this.user,
                id: Date.now(), // ID giả, để phân biệt
            };

            // Thêm người dùng vào danh sách
            this.list_user.push(newUser);

            // Lưu vào localStorage
            localStorage.setItem('list_user', JSON.stringify(this.list_user));

            // Reset form nhập
            this.user = {};

            // Ẩn modal (nếu dùng Bootstrap)
            const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
            modal?.hide?.();

            // Thông báo đơn giản
            this.$toast.success("Người dùng đã được thêm thành công!");
            console.log("Người dùng đã được thêm:", newUser);
        },

    },
}
</script>
<style></style>