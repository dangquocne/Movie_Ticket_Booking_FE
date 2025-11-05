<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">

                <img src="https://metiz.vn/media/slide_home/bo-tu-sieu-dang.jpg" class="d-block w-100" alt="Banner 1">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>

            <div class="carousel-item">
                <img src="https://metiz.vn/media/slide_home/PHIMHOT_T8Artboard_1_copy3x.png" class="d-block w-100"
                    alt="Banner 2">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://cdn.galaxycine.vn/media/2025/7/21/mang-me-di-bo-2048_1753070307369.jpg"
                    class="d-block w-100" alt="Banner 3">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container my-4">
        <!-- DỊCH VỤ OIZOIOI CINEMA -->
        <section class="services-section py-5">
            <h3 class="text-center fw-bold mb-5 text-dark">Trải Nghiệm Cùng OIZOIO</h3>
            <div class="row justify-content-center text-center">
                <div class="col-md-3 col-sm-6 mb-4" v-for="item in [
                    { icon: 'fa-ticket', color: '#0d6efd', title: 'Đặt vé nhanh chóng', text: 'Chọn ghế trực tuyến, không cần chờ đợi, chỉ với vài thao tác đơn giản.' },
                    { icon: 'fa-film', color: '#6610f2', title: 'Kho phim đa dạng', text: 'Từ bom tấn Hollywood đến phim Việt và hoạt hình cho trẻ em.' },
                    { icon: 'fa-clock', color: '#ffc107', title: 'Lịch chiếu linh hoạt', text: 'Suất chiếu trải dài cả ngày, phù hợp mọi khung giờ rảnh rỗi.' },
                    { icon: 'fa-popcorn', color: '#198754', title: 'Combo bắp nước ưu đãi', text: 'Nhiều lựa chọn hấp dẫn, ưu đãi đặc biệt cho thành viên thân thiết.' }
                ]">
                    <div class="service-card p-4 h-100">
                        <div class="icon-wrapper mx-auto mb-3"
                            :style="`background: ${item.color}1A; color: ${item.color}`">
                            <i :class="`fa ${item.icon} fa-2x`"></i>
                        </div>
                        <h5 class="fw-bold mb-2">{{ item.title }}</h5>
                        <p class="text-muted small">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHIM ĐANG CHIẾU -->
        <h3 class="text-center mb-4 mt-5 text-dark">PHIM ĐANG CHIẾU</h3>
        <div class="row g-4 justify-content-center">
            <template v-for="(value, index) in list_phim.filter(x => x.tinh_trang === 2).slice(0, 4)" :key="index">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card movie-card border-0 shadow-sm h-100">
                        <div class="position-relative">
                            <img :src="value.hinh_anh" class="card-img-top rounded-3" alt=""
                                style="height: 450px; object-fit: cover;" />
                            <!-- Điểm số -->
                            <div
                                class="rating-badge position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-dark text-warning rounded-2 fw-bold">
                                <i class="fa-solid fa-star me-1"></i>{{ value.diem_danh_gia || 8.0 }}
                            </div>
                            <!-- Độ tuổi -->
                            <div
                                class="age-badge position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-warning text-dark rounded-2 fw-bold">
                                {{ value.do_tuoi || 'T13' }}
                            </div>
                        </div>

                        <div class="card-body text-center">
                            <h6 class="fw-bold text-dark mb-1 text-truncate">{{ value.ten_phim }}</h6>
                            <p class="text-muted small mb-2">{{ value.the_loai }}</p>
                            <p class="text-muted small mb-3">
                                <i class="fa-regular fa-calendar me-1"></i>{{ value.ngay_phat_hanh || '31.10.2025' }}
                            </p>
                            <router-link :to="`/chi-tiet-phim/${value.id}`">
                                <button class="btn btn-outline-darkblue rounded-pill px-4">
                                    Đặt vé
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div class="text-center mt-5 mb-4">
            <router-link to="/phim/dang-chieu">
                <button class="btn btn-outline-darkblue-square px-4 py-2">
                    Xem thêm <i class="fa-solid fa-chevron-right ms-1"></i>
                </button>
            </router-link>
        </div>

        <!-- Về chúng tôi -->
        <section class="about-section py-5 rounded-4 shadow-lg mx-3"
            style="background: linear-gradient(135deg, #0d1b2a, #1b263b); color: #f8f9fa;">
            <div class="container">
                <div class="text-center mb-5">
                    <h3 class="text-uppercase fw-bold" style="letter-spacing: 2px; color: #ffc107;">Về Chúng Tôi</h3>
                    <p class="text-light mt-2 fs-5">
                        Trải nghiệm điện ảnh đẳng cấp – nhanh chóng, tiện lợi và đầy cảm xúc cùng <span
                            class="fw-bold text-warning">OIZOIOI Cinema</span>.
                    </p>
                </div>

                <div class="row align-items-center g-4">
                    <!-- Hình minh họa -->
                    <div class="col-md-5 text-center">
                        <div class="position-relative d-inline-block">
                            <img src="https://res.cloudinary.com/dvxkhsfyj/image/upload/v1756395686/popcorn-removebg-preview_mkbjoj.png"
                                alt="OIZOIOI Cinema" class="img-fluid rounded-4 shadow-lg"
                                style="max-height: 360px; object-fit: cover;">
                            <div
                                class="position-absolute bottom-0 start-50 translate-middle-x bg-dark bg-opacity-75 text-light px-3 py-2 rounded-top">
                                <i class="fa-solid fa-film me-1 text-warning"></i> Hơn 200+ suất chiếu mỗi ngày
                            </div>
                        </div>
                    </div>

                    <!-- Nội dung giới thiệu -->
                    <div class="col-md-7">
                        <h4 class="fw-bold mb-3">
                            <span class="text-warning">Trải nghiệm điện ảnh </span>
                            <span class="text-primary">sống động </span>
                            <span class="text-light">với OIZOIOI Cinema</span>
                        </h4>

                        <p class="fs-5 mb-4 text-light-50">
                            Chúng tôi mang đến nền tảng đặt vé xem phim thông minh – dễ dùng, nhanh chóng, cùng nhiều ưu
                            đãi độc
                            quyền.
                            Hãy để OIZOIOI đồng hành cùng bạn trong từng khoảnh khắc điện ảnh đáng nhớ.
                        </p>

                        <div class="row">
                            <div class="col-6 mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="icon-circle bg-success bg-opacity-25 text-success me-3">
                                        <i class="bi bi-ticket-perforated fs-4"></i>
                                    </div>
                                    <span>Mua vé trực tuyến 24/7</span>
                                </div>
                            </div>

                            <div class="col-6 mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="icon-circle bg-danger bg-opacity-25 text-danger me-3">
                                        <i class="fa-solid fa-chair fs-4"></i>
                                    </div>
                                    <span>Tự do chọn chỗ ngồi yêu thích</span>
                                </div>
                            </div>

                            <div class="col-6 mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="icon-circle bg-warning bg-opacity-25 text-warning me-3">
                                        <i class="fa-solid fa-popcorn fs-4"></i>
                                    </div>
                                    <span>Combo bắp nước siêu ưu đãi</span>
                                </div>
                            </div>

                            <div class="col-6 mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="icon-circle bg-info bg-opacity-25 text-info me-3">
                                        <i class="fa-solid fa-clock fs-4"></i>
                                    </div>
                                    <span>Lưu lịch sử & nhắc lịch chiếu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHIM SẮP CHIẾU -->
        <h3 class="text-center mb-4 mt-5 text-dark">PHIM SẮP CHIẾU</h3>
        <div class="row">
            <template v-for="(value, index) in list_phim.filter(x => x.tinh_trang === 1).slice(0, 4)" :key="index">
                <div class="col-md-3 mb-4 d-flex">
                    <div class="card flex-full w-100" style="background-color: #c6dcfe;">
                        <img :src="value.hinh_anh" class="card-img-top" style="height: 350px;">
                        <div class="card-body">
                            <span class="badge bg-info mb-2">{{ value.ngay_phat_hanh }}</span>
                            <h5 class="card-title text-truncate text-dark">{{ value.ten_phim }}</h5>
                            <p class="card-text">{{ value.the_loai }}</p>
                            <button class="btn btn-outline-darkblue btn-sm mt-2">Nhắc tôi</button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="text-center mt-5 mb-4">
            <router-link to="/phim/sap-chieu">
                <button class="btn btn-outline-darkblue-square px-4 py-2">
                    Xem thêm phim <i class="fa-solid fa-chevron-right ms-1"></i>
                </button>
            </router-link>
        </div>

        <!-- BÀI VIẾT -->
        <h3 class="text-center mb-4 mt-4">BÀI VIẾT</h3>
        <div class="row">
            <template v-for="(value, index) in list_bv.slice(0, 6)" :key="index">
                <div class="col-lg-4 mb-4 ">
                    <router-link :to="`/chi-tiet-bai-viet/${value.id}`">
                        <div class="card h-100">
                            <img :src="value.hinh_anh" class="card-img-top" style="height: 250px;">
                            <div class="card-body">
                                <h5 class="card-title text-truncate">{{ value.tieu_de }}
                                </h5>
                                <p class="card-text text-dark">{{ value.mo_ta_ngan }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </template>
        </div>

        
        <!-- TIN KHUYẾN MÃI -->
        <section class="promo-section py-5 mx-3">
            <div class="container">
                <!-- Tiêu đề -->
                <div class="text-center mb-4">
                    <h3 class="text-uppercase fw-bold text-dark" style="letter-spacing: 2px;">Tin Khuyến Mãi</h3>
                    <p class="text-secondary fs-5">Cập nhật ưu đãi cực hot – xem phim thả ga, tiết kiệm tối đa!</p>
                </div>

                <!-- Carousel -->
                <div id="promoCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <!-- Slide 1 -->
                        <div class="carousel-item active">
                            <div class="row g-4">
                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://cdn.galaxycine.vn/media/2025/9/26/lio-t9-galaxy-banner-app-1800x1200_1758894324797.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Tải App Liobank Giảm Ngay 60K Khi Mua Vé</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://cdn.galaxycine.vn/media/2025/9/24/imax-treasure-hunt-3_1758703263482.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Voucher ShopeePay Giảm Đến 50K</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://cdn.galaxycine.vn/media/2025/9/4/momo-galaxy-1_1756958473463.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Happy Day - Vé Chỉ Từ 45K</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://metiz.vn/media/new_offer/Deadpool-Wolverine.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Ưu Đãi Thành Viên Galaxy Cinema 2025</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 2 -->
                        <div class="carousel-item">
                            <div class="row g-4">
                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://cdn.galaxycine.vn/media/2025/10/29/750_1761720681370.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Giảm 30K Khi Thanh Toán Qua MoMo</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://cdn.galaxycine.vn/media/2023/11/23/giaveu22-digital-1800x1200_1700731546949.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Giảm 20K Khi Dùng ZaloPay</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://metiz.vn/media/new_offer/hang-muc-thanh-vien-metiz-2023.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">FPT Play Combo Xem Phim Chất</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="promo-card rounded-4 shadow-sm overflow-hidden">
                                        <img src="https://cdn.galaxycine.vn/media/2025/8/25/zalopay-1_1756131251308.jpg"
                                            class="img-fluid promo-img" alt="">
                                        <div class="promo-overlay p-3">
                                            <h6 class="fw-bold text-white">Techcombank Ưu Đãi Độc Quyền</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Nút điều hướng -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#promoCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#promoCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </section>

        <!-- KHÁCH HÀNG NÓI GÌ VỀ OIZOIOI CINEMA -->
        <h3 class="text-center mb-4 fw-bold mt-3">Khách Hàng Nói Gì Về OIZOIOI Cinema?</h3>
        <div class="row justify-content-center">
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm " style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Nguyễn Văn A</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">CEO Công ty ABC</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Rạp OIZOIOI Cinema Trình là gì mà trình ai chấm có không gian hiện đại, âm thanh sống động
                            và dịch
                            vụ tuyệt vời. Tôi và gia
                            đình luôn chọn nơi đây mỗi cuối tuần để thư giãn."
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm " style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Trần Thị B</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Giám đốc XYZ Shop</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Tôi rất thích đặt vé online trên website OIZOIOI Cinema – giao diện trực quan, thanh toán
                            dễ dàng
                            và đặc biệt là chọn được chỗ ngồi yêu thích."
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm " style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Lê Văn C</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Chủ cửa hàng DEF</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Combo bắp nước giá hợp lý, phim mới cập nhật liên tục, hệ thống ghế ngồi êm ái – OIZOIOI
                            Cinema
                            là lựa chọn hàng đầu của mình khi đi xem phim cùng bạn bè."
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
        // Lấy ngày hôm nay
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        // Lấy ngày mai
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        return {
            list_phim: [{
                id: 3,
                ten_phim: "Thám Tử Kiên: Kỳ Án Không Đầu",
                hinh_anh: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/t/t/ttk_poster_official_fa_1638x2048px_1_.jpg",
                dao_dien: "Nguyễn Hữu Tuấn",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-04-19",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Việt - Phụ đề Tiếng Anh",
                the_loai: "Trinh thám, Hồi hộp, Hài hước",
                thoi_luong: 118,
                dien_vien: "Kiều Minh Tuấn; Vân Trang; Hứa Vĩ Văn",
                nha_san_xuat: "CJ HK Entertainment",
                trailer: "https://www.youtube.com/embed/7kO_ALcwNAw?list=RD7kO_ALcwNAw",
                noi_dung: "Thám Tử Kiên là một nhân vật được yêu thích trong tác phẩm điện của ăn khách Người Vợ Cuối Cùng của Victor Vũ, Thám Tử Kiên: Kỳ Không Đầu sẽ là một phim Victor Vũ trở về với thể loại sở trường Kinh Dị - Trinh Thám sau những tác phẩm tình cảm lãng mạn trước đó. Với slogan đầy ám ảnh: “Kẻ chết không siêu thoát, người sống không lối thoát”, Thám Tử Kiên: Kỳ Án Không Đầu ẩn chứa muôn vàn bí ẩn. Một chuỗi án mạng kinh hoàng tại một ngôi làng hẻo lánh - nơi liên tiếp xảy ra tám vụ giết người với cùng một đặc điểm rợn người: tất cả nạn nhân đều không còn đầu.  Thám Tử Kiên phải đối mặt với vụ án khủng khiếp gây hoang mang tột độ cho dân làng. Ai sẽ là nạn nhân tiếp theo trong chuỗi án mạng rùng rợn? Kiên có tìm ra mấu chốt để lần theo dấu vết hung thủ? Thuộc thể loại tâm linh - ly kỳ - phá án, Thám Tử Kiên: Kỳ Án Không Đầu được đạo diễn Victor Vũ kì công nhào nặn, ghi hình tại Tuyên Quang và Cao Bằng cực kì kĩ lưỡng. Dàn diễn viên chính trong phim bao gồm: Quốc Huy vai Thám tử Kiên, Đinh Ngọc Diệp vai Hai Mẫn, Quốc Anh vai Thạc, Anh Phạm vai Tuyết và Minh Anh vai Nga, NSƯT Xuân Trang trong vai Quan Liêm, NSND Mỹ Uyên trong vai Bà Vượng (vợ quan Liêm)."
            },

            {
                id: 4,
                ten_phim: "Yadang: Ba Mặt Lật Kèo",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/5/9/yadang-500_1746783491666.jpg",
                dao_dien: "Han Jae-rim",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-05-11",
                quoc_gia: "Hàn Quốc",
                ngon_ngu: "Tiếng Hàn - Phụ đề Tiếng Anh",
                the_loai: "Tội phạm, Tâm lý, Hành động",
                thoi_luong: 132,
                dien_vien: "Lee Byung-hun; Yoo Ah-in; Kim Tae-ri",
                nha_san_xuat: "CJ Entertainment",
                trailer: "https://www.youtube.com/embed/1sfhCvsEHVo?si=RVLD-bnIDtkbs2PH",
                noi_dung: "Từ giờ trở đi, bạn là kẻ chỉ điểm của tôi. Là “cầu nối” giữa thế giới ngầm và các cơ quan thực thi pháp luật, những kẻ chỉ điểm chuyên nghiệp được gọi là 'yadang' - người cung cấp thông tin bí mật về thế giới ma túy cho các công tố viên và cảnh sát. Khi một kẻ chỉ điểm ma túy “báo tin” về một bữa tiệc có sự tham dự của các VIP nổi tiếng và vô tình vướng vào một âm mưu nguy hiểm, hắn phải làm mọi thứ trong khả năng của mình không chỉ để sống sót,mà còn để phục thù."
            },


            {
                id: 5,
                ten_phim: "Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/5/9/doraemon-the-movie-nobitas-art-world-tales-1_1746800200069.jpg",
                dao_dien: "Kazuaki Imai",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-12-20",
                quoc_gia: "Nhật Bản",
                ngon_ngu: "Tiếng Nhật - Lồng tiếng/Phụ đề Tiếng Việt",
                the_loai: "Hoạt hình, Phiêu lưu, Gia đình",
                thoi_luong: 99,
                dien_vien: "'Wasabi Mizuta; Megumi Ōhara",
                nha_san_xuat: "Shin-Ei Animation, TV Asahi",
                trailer: "https://www.youtube.com/embed/nDR_9NCMIYk?si=QZ032Uf1Ki5bJd9C",
                noi_dung: "Doraemon sử dụng bảo bối đưa nhóm bạn vào một thế giới bên trong tranh vẽ. Tại đây, họ gặp những nhân vật kỳ bí và phải giải mã bí ẩn cổ xưa để trở về thế giới thật, đồng thời cứu lấy thế giới tranh khỏi sự hủy diệt."
            },

            {
                id: 6,
                ten_phim: "Lật Mặt 8: Vòng Tay Nắng",
                hinh_anh: "https://image-worker.momocdn.net/img/77210013985876184-lm81.png?size=M&referer=cinema.momocdn.net",
                dao_dien: "Lý Hải",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-07-05",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Việt",
                the_loai: "Hành Động",
                thoi_luong: 120,
                dien_vien: "Quốc Cường; Huy Khánh; Trần Kim Hải; Trúc Anh",
                nha_san_xuat: "Hãng phim Lý Hải Production",
                trailer: "https://www.youtube.com/embed/W_0AMP9yO1w?si=wkt6Dg7fNWqE4tJH",
                noi_dung: "Lật Mặt 8: Vòng Tay Nắng kể về sự khác biệt quan điểm giữa ba thế hệ ông bà cha mẹ con cháu. Ai cũng đúng ở góc nhìn của mình nhưng đứng trước hoài bão của tuổi trẻ, cuối cùng thì ai sẽ là người phải nghe theo người còn lại? Và nếu ước mơ của những đứa trẻ bị cho là viển vông, thì cơ hội nào và bao giờ tuổi trẻ mới được tự quyết định tương lai của mình?"
            },


            {
                id: 7,
                ten_phim: "Shin Cậu Bé Bút Chì: Bí Ẩn! Học Viện Hoa Lệ Tenkasu",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/4/10/crayon-shinchan-the-movie-school-mystery-the-splendid-tenkasu-academy-2_1744271074944.jpg",
                dao_dien: "Wataru Takahashi",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-07-20",
                quoc_gia: "Nhật Bản",
                ngon_ngu: "Tiếng Nhật - Lồng tiếng/Phụ đề Tiếng Việt",
                the_loai: "Hoạt hình, Hài, Phiêu lưu",
                thoi_luong: 104,
                dien_vien: "Yumiko Kobayashi; Miki Narahashi",
                nha_san_xuat: "Shin-Ei Animation",
                trailer: "https://www.youtube.com/embed/2ck-25PYR-o?si=Ij2QoYnbLVrNX-8u",
                noi_dung: "Phim Shin Cậu Bé Bút Chì: Bí Ẩn! Học Viện Hoa Lệ Tenkasu kể về trải nghiệm học tại Học viện Tenkasu của bé Shin. Shinnosuke và những người bạn của Shin thuộc Đội đặc nhiệm Kasukabe trải qua một tuần ở lại 'Học viện Tư nhân Tenkasu Kasukabe' (Học viện Tenkasu). Đây là trường nội trú ưu tú được quản lý bởi một AI hiện đại - Otsmun.  Tất cả các học sinh ban đầu được trao một huy hiệu với 1000 điểm và điểm của các em sẽ được Otsmun tăng hoặc giảm dựa trên hành vi và kết quả học tập của các em. Tuy nhiên, ai đó đã tấn công Kazama. Đội đặc nhiệm Kasukabe hợp lực với chủ tịch hội học sinh bỏ học của trường, Chishio Atsuki, một cựu vận động viên, để thành lập một nhóm thám tử và giải quyết bí ẩn."
            },

            {
                id: 8,
                ten_phim: "Quái Thú Đại Náo Sở Thú",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/4/16/quai-thu-500_1744775258641.jpg",
                dao_dien: "Brad Peyton",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-09-12",
                quoc_gia: "Hoa Kỳ",
                ngon_ngu: "Tiếng Anh - Phụ đề Tiếng Việt",
                the_loai: "Hành động, Khoa học viễn tưởng",
                thoi_luong: 101,
                dien_vien: "Dwayne Johnson; Naomie Harris",
                nha_san_xuat: "Warner Bros., New Line Cinema",
                trailer: "https://www.youtube.com/embed/IrEin0s_0Ik?si=ABnC-rDFyrrkQgF2",
                noi_dung: "Một thử nghiệm di truyền thất bại khiến nhiều loài động vật tại sở thú đột biến thành quái thú khổng lồ. Một nhà sinh vật học và đội đặc nhiệm phải ngăn chặn thảm họa khi chúng thoát ra và tấn công thành phố."
            },


            {
                id: 9,
                ten_phim: "Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/5/6/de-men-500_1746513868460.jpg",
                dao_dien: "Trần Vũ Minh",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-07-20",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Nhật - Lồng tiếng/Phụ đề Tiếng Việt",
                the_loai: "Hoạt hình, Phiêu lưu, Hài",
                thoi_luong: 95,
                dien_vien: "Lồng tiếng bởi các nghệ sĩ Việt: Xuân Bắc, Tự Long",
                nha_san_xuat: "Hãng phim hoạt hình Việt Nam",
                trailer: "https://www.youtube.com/embed/Vwwsh0QxwIs?si=wctix0qqNzXst_ww",
                noi_dung: "Dựa trên cảm hứng từ “Dế Mèn Phiêu Lưu Ký”, bộ phim là hành trình phiêu lưu hài hước và xúc động của Dế Mèn khi lạc đến vùng đất Xóm Lầy Lội và kết bạn với các loài sinh vật kỳ quái, đồng thời học được những bài học quý giá về lòng dũng cảm và tình bạn."
            },


            {
                id: 10,
                ten_phim: "Địa Đạo: Mặt Trời Trong Bóng Tối",
                hinh_anh: "https://riocinemas.vn/Areas/Admin/Content/Fileuploads/images/poster%20web/2025/T4/SCDB.jpg",
                dao_dien: "Bùi Thạc Chuyên",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-04-04",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Việt - Phụ đề Tiếng Anh",
                the_loai: "Lịch sử, Chiến tranh",
                thoi_luong: 128,
                dien_vien: "Thái Hòa; Quang Tuấn; Diễm Hằng Lamoon; Anh Tú Wilson; Hồ Thu Anh",
                nha_san_xuat: "'Nhà sản xuất Nguyễn Trí Viễn",
                trailer: "https://www.youtube.com/embed/xh6IDHjvytU?si=dTUhWz3bcqFJ2Jod",
                noi_dung: "Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực - Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường."
            },


            ]
            ,
            list_bv: [],
            list_suat_chieu: [


                {
                    id: 7,
                    id_phim: 4,
                    ten_phim: 'Yadang: Ba Mặt Lật Kèo',
                    id_phong_chieu: 2,
                    ten_phong: 'Phòng 2',
                    ngay_chieu: todayStr,
                    thoi_gian_bat_dau: '15:20',
                    thoi_gian_ket_thuc: '17:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 8,
                    id_phim: 5,
                    ten_phim: 'Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh',
                    id_phong_chieu: 2,
                    ten_phong: 'Phòng 2',
                    ngay_chieu: tomorrowStr,
                    thoi_gian_bat_dau: '19:30',
                    thoi_gian_ket_thuc: '21:00',
                    gia_ve: 450000,
                    tinh_trang: 1
                }
                ,
                {
                    id: 9,
                    id_phim: 6,
                    ten_phim: 'Lật Mặt 8: Vòng Tay Nắng',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: tomorrowStr, // Ngày mai
                    thoi_gian_bat_dau: '21:30',
                    thoi_gian_ket_thuc: '23:30',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 10,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: todayStr, // Ngày hôm nay
                    thoi_gian_bat_dau: '20:30',
                    thoi_gian_ket_thuc: '22:30',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 11,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: todayStr, // Ngày mai
                    thoi_gian_bat_dau: '22:30',
                    thoi_gian_ket_thuc: '00:30',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 12,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: tomorrowStr, // Ngày mai
                    thoi_gian_bat_dau: '15:20',
                    thoi_gian_ket_thuc: '17:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 14,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: tomorrowStr, // Ngày mai
                    thoi_gian_bat_dau: '20:20',
                    thoi_gian_ket_thuc: '22:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
            ],

        }
    },
    mounted() {

        // Lấy dữ liệu từ localStorage cho danh sách phim
        const stored = localStorage.getItem('list_phim');

        const defaultList = this.list_phim.slice(); // clone ra

        if (stored) {
            const storedList = JSON.parse(stored);
            const merged = [...defaultList, ...storedList.filter(storedItem => {
                return !defaultList.some(defaultItem => defaultItem.id === storedItem.id);
            })];

            this.list_phim = merged;
            localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
        } else {
            // localStorage rỗng → lưu list mặc định
            localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
        }


        // Lấy dữ liệu từ localStorage cho danh sách suất chiếu
        const storedSuatChieu = localStorage.getItem('list_suat_chieu');

        const defaultListSuatChieu = this.list_suat_chieu.slice(); // clone danh sách mặc định

        if (storedSuatChieu) {
            const storedList = JSON.parse(storedSuatChieu);

            // Hợp nhất dữ liệu mặc định + localStorage (tránh trùng id)
            const merged = [...defaultListSuatChieu, ...storedList.filter(storedItem => {
                return !defaultListSuatChieu.some(defaultItem => defaultItem.id === storedItem.id);
            })];

            this.list_suat_chieu = merged;
            localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
        } else {
            // Nếu localStorage rỗng, lưu lại mặc định
            localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
        }

    },
    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/client/home-page')
                .then((res) => {
                    this.list_phim = res.data.data_phim;
                    this.list_bv = res.data.data_bv;
                })
        }
    }
}
</script>

<style scoped>

/* Card phim */
.movie-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 16px;
    overflow: hidden;
}

.movie-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.rating-badge {
    font-size: 0.9rem;
    background: rgba(0, 0, 0, 0.7);
}

.age-badge {
    font-size: 0.9rem;
    background: #ffc107;
}

.btn-outline-darkblue {
    color: #002D72;
    /* xanh đậm */
    border: 2px solid #002D72;
    background-color: transparent;
    transition: all 0.3s ease;
}

.btn-outline-darkblue:hover {
    background-color: #002D72;
    color: #fff;
}

.btn-outline-darkblue-light {
    color: #002D72;
    /* xanh đậm */
    border: 1px solid #002D72;
    background-color: rgba(0, 45, 114, 0.05);
    /* xanh đậm nhạt nền */
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-outline-darkblue-light:hover {
    background-color: #002D72;
    color: #fff;
}

.btn-outline-darkblue-square {
    color: #002D72;
    /* xanh đậm */
    border: 1px solid #002D72;
    background-color: rgba(0, 45, 114, 0.02);
    /* nền trắng hơn, chỉ hơi ám xanh nhẹ */
    font-weight: 500;
    border-radius: 6px;
    /* vuông như hình */
    transition: all 0.3s ease;
}

.btn-outline-darkblue-square:hover {
    background-color: #002D72;
    color: #fff;
}

/* ==== Phần dành cho dịch vụ */
.services-section {
    background: linear-gradient(135deg, #f9fbff 0%, #ffffff 100%);
}

.service-card {
    background: #ffffff;
    border-radius: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(13, 110, 253, 0.2);
}

.icon-wrapper {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    transition: 0.3s ease;
}

.service-card:hover .icon-wrapper {
    transform: scale(1.1);
    background: linear-gradient(135deg, #0d6efd33, #0d6efd11);
}


/* ==== Phần dành cho biểu tượng về chúng tôi===== */

.icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.icon-circle:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}



/* ==============================
   🎬 PHẦN CSS CHO "TIN KHUYẾN MÃI"
   Dành cho: Dev front-end hoặc người bảo trì dự án sau này
   Mục đích: Làm đẹp phần khuyến mãi (promo-section)
   ============================== */

/* ====== CARD CHỨA ẢNH KHUYẾN MÃI ====== */
.promo-card {
  position: relative; /* Để overlay và các phần tử con định vị tuyệt đối được */
  cursor: pointer; /* Biến con trỏ thành bàn tay khi hover */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hiệu ứng mượt khi hover */
}

/* Hiệu ứng khi hover vào card */
.promo-card:hover {
  transform: translateY(-6px); /* Nổi lên nhẹ */
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3); /* Đổ bóng để nổi bật */
}

/* ====== HÌNH ẢNH TRONG CARD ====== */
.promo-img {
  height: 200px; /* Cố định chiều cao ảnh */
  width: 100%; /* Chiếm toàn bộ chiều ngang */
  object-fit: cover; /* Giữ tỉ lệ ảnh, không méo */
  transition: transform 0.4s ease; /* Hiệu ứng phóng nhẹ khi hover */
}

/* Khi hover card thì ảnh zoom nhẹ */
.promo-card:hover .promo-img {
  transform: scale(1.05);
}

/* ====== PHẦN NỀN MỜ & TEXT TRÊN ẢNH ====== */
.promo-overlay {
  position: absolute; /* Đặt đè lên ảnh */
  bottom: 0;
  left: 0;
  width: 100%; /* Trải hết chiều ngang ảnh */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent); /* Hiệu ứng mờ tối phía dưới */
  color: white; /* Chữ màu trắng cho nổi */
  padding: 10px 15px; /* Tạo khoảng đệm cho text */
}

/* ====== NÚT MŨI TÊN ĐIỀU HƯỚNG SLIDE ====== */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 50%, 50%; /* Giảm kích thước icon mặc định của Bootstrap */
}

/* Có thể thêm tuỳ chỉnh màu, viền cho nút nếu muốn */
</style>Allowance resets July 18, 2025