<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark py-0" style="background-color: #000957;">
            <div class="container">
                <a class="navbar-brand fs-4 fw-bold" href="#"><span class="text-warning">OIZOIOI </span>Cinema</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                    aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <router-link to="/">
                            <li class="nav-item"> <a class="nav-link  text-light fs-6" aria-current="page"
                                    href="#">Trang
                                    Chủ</a>
                            </li>
                        </router-link>
                        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle text-light fs-6" href="#"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Phim
                            </a>
                            <ul class="dropdown-menu">
                                <router-link to="/phim/dang-chieu">
                                    <li><a class="dropdown-item" href="/phim/dang-chieu">Phim Đang Chiếu</a>
                                    </li>
                                </router-link>
                                <router-link to="/phim/sap-chieu">
                                    <li><a class="dropdown-item" href="/phim/sap-chieu">Phim Sắp Chiếu</a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <router-link to="/bai-viet">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/bai-viet">Bài Viết</a>
                            </li>
                        </router-link>
                        <router-link to="/about">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/about">Về chúng tôi</a>
                            </li>
                        </router-link>
                    </ul>

                    <!-- Đã đăng nhập -->
                    <div class="d-flex nav-search" v-if="user_login">
                        <div class="my-2 border radius-30 ">
                            <div class="dropdown">
                                <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg"
                                        class="user-img" style="height: 35px; object-fit: cover;">
                                    <div class="user-info ps-3 pe-3">
                                        <p class="user-name mb-0 text-light">{{ user_login.ho_ten }}</p>
                                        <p class="designattion mb-0">{{ user_login.email }}</p>
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <router-link :to="`/client/profile/${user_login.email}`">
                                        <li><a class="dropdown-item" href="javascript:;"><i
                                                    class="bx bx-user"></i><span>Profile</span></a>
                                        </li>
                                    </router-link>
                                    <li><a class="dropdown-item" href="javascript:;" @click="logout"><i
                                                class="bx bx-log-out-circle"></i><span>Logout</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>



                </div>
                <!-- Chưa đăng nhập -->
                <ul class="navbar-nav mb-2 mb-lg-0" v-if="!user_login">

                    <router-link to="/client/dang-nhap">
                        <li class="nav-item">
                            <a class="nav-link active fs-6" aria-current="page" href="/client/dang-nhap"> Đăng Nhập</a>

                        </li>

                    </router-link>
                    <router-link to="/client/dang-ky">
                        <li class="nav-item">
                            <a class="nav-link active fs-6" aria-current="page" href="/client/dang-ky">Đăng Ký</a>
                        </li>
                    </router-link>
                    <!-- <router-link to="/admin/">
                        <li class="nav-item">
                            <a class="ms-2  nav-link link-secondary fs-6" href="/admin/"> Admin</a>

                        </li>

                    </router-link> -->


                </ul>

            </div>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {

            // Danh sách người dùng, nếu không có thì khởi tạo mảng rỗ
            user_login: null,
            list_user: [{
                cccd: "123",
                email: "admin@gmail.com",
                ho_va_ten: "ADMIN",
                id: 115,
                ngay_sinh:"2025-07-24",
                password : "123",
                re_password:"123",
                role:"ROLE_ADMIN",
               so_dien_thoai:"123",
            },
            {
                cccd: "123",
                email: "quoc@gmail.com",
                ho_va_ten: "quoc",
                id: 116,
                ngay_sinh:"2004-03-29",
                password : "123",
                re_password:"123",
                role:"ROLE_USER",
                so_dien_thoai:"123",
            }
        
        ]


        }
    },
    mounted() {
     
        const user = localStorage.getItem("user_login");
        if (user) {
            this.user_login = JSON.parse(user);
        }
        const storedUsers = localStorage.getItem('list_user');


    if (storedUsers) {
      this.list_user = JSON.parse(storedUsers);
    } else {
      localStorage.setItem('list_user', JSON.stringify(this.list_user));
    }
    }, methods: {
        logout() {
            localStorage.removeItem("user_login");
            this.user_login = null;
            this.$router.push("/");
        },
    }
}
</script>
<style></style>