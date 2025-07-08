<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://pbs.twimg.com/media/GDV8gAmXUAAKimD.jpg:large" class="d-block w-100"
                    style="width: 100%; height: 250px; object-fit: cover;">
            </div>
            <div class="carousel-item ">
                <img src="https://sadesign.vn/pictures/picfullsizes/2024/12/03/aly1733193356.jpg" class="d-block w-100"
                    style="width: 100%; height: 250px; object-fit: cover;">
            </div>
            <div class="carousel-item ">
                <img src="https://www.elleman.vn/app/uploads/2018/04/25/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg"
                    class="d-block w-100 img-fluid" style="width: 100%; height: 250px; object-fit: cover;">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="text-center mb-3">
                <h4 class="text-uppercase fs-3 text-dark">Phim Sắp Chiếu</h4>
            </div>
            <template v-for="(value, index) in list_phim" :key="index">
                <template v-if="value.tinh_trang == 1">
                    <div class="col-lg-3 col-md-4 rounded mb-3" style="flex: 0 0 auto;">
                        <div class="card rounded position-relative"
                            style="transition: transform 0.3s ease, box-shadow 0.3s ease; overflow: hidden; height: 100%;"
                            onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)'; this.querySelector('.btn-overlay').style.opacity = '1'"
                            onmouseout="this.style.transform='none'; this.style.boxShadow='none'; this.querySelector('.btn-overlay').style.opacity = '0'">

                            <div class="card-img-top">
                                <img :src="value.hinh_anh" class="img-fluid" :class="img - fluid" alt=""
                                    style="height: 500px; object-fit: cover;">
                            </div>

                            <div class="btn-overlay text-center position-absolute w-100"
                                style="top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0; transition: opacity 0.3s ease;">
                                <router-link :to="`/chi-tiet-phim/${value.id}`">
                                    <button class="btn btn-warning p-2 " style="width: 170px;"><i
                                            class="fa-solid fa-ticket"></i>Mua
                                        vé</button>
                                </router-link>
                                <br>
                                <router-link :to="`/chi-tiet-phim/${value.id}`">
                                    <button class="btn btn-outline-light p-2 mt-2" style="width: 170px;"><i
                                            class="fa-solid fa-circle-play"></i>Trailer</button>
                                </router-link>
                            </div>
                            <span class="text-truncate fs-6 fw-bold px-2 pt-2 pb-0">{{ value.ten_phim }}</span>
                        </div>
                    </div>
                </template>
            </template>




        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_phim: [ {id: 7,
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
        noi_dung: "Phim Shin Cậu Bé Bút Chì: Bí Ẩn! Học Viện Hoa Lệ Tenkasu kể về trải nghiệm học tại Học viện Tenkasu của bé Shin. Shinnosuke và những người bạn của Shin thuộc Đội đặc nhiệm Kasukabe trải qua một tuần ở lại 'Học viện Tư nhân Tenkasu Kasukabe' (Học viện Tenkasu). Đây là trường nội trú ưu tú được quản lý bởi một AI hiện đại - Otsmun.  Tất cả các học sinh ban đầu được trao một huy hiệu với 1000 điểm và điểm của các em sẽ được Otsmun tăng hoặc giảm dựa trên hành vi và kết quả học tập của các em. Tuy nhiên, ai đó đã tấn công Kazama. Đội đặc nhiệm Kasukabe hợp lực với chủ tịch hội học sinh bỏ học của trường, Chishio Atsuki, một cựu vận động viên, để thành lập một nhóm thám tử và giải quyết bí ẩn."},
    
        {id: 8,
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
        noi_dung: "Một thử nghiệm di truyền thất bại khiến nhiều loài động vật tại sở thú đột biến thành quái thú khổng lồ. Một nhà sinh vật học và đội đặc nhiệm phải ngăn chặn thảm họa khi chúng thoát ra và tấn công thành phố."},
    
    
        {id: 9,
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
        noi_dung: "Dựa trên cảm hứng từ “Dế Mèn Phiêu Lưu Ký”, bộ phim là hành trình phiêu lưu hài hước và xúc động của Dế Mèn khi lạc đến vùng đất Xóm Lầy Lội và kết bạn với các loài sinh vật kỳ quái, đồng thời học được những bài học quý giá về lòng dũng cảm và tình bạn."},
   
   
         {id: 10,
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
        noi_dung: "Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực - Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường."},
    ]
        };
    },
    mounted() {
        //         const stored = localStorage.getItem('list_phim');
        //   if (stored) {
        //     this.list_phim = JSON.parse(stored);
        //   }

        const stored = localStorage.getItem('list_phim');
        if (stored) {
            const storedList = JSON.parse(stored);

            // Hợp nhất dữ liệu mặc định + dữ liệu từ localStorage
            const defaultList = this.list_phim;

            // Loại bỏ các phim trùng id (tránh lặp)
            const merged = [...defaultList, ...storedList.filter(storedItem => {
                return !defaultList.some(defaultItem => defaultItem.id === storedItem.id);
            })];

            this.list_phim = merged;
            localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
        }

    },
    //     methods: {
    //       
    //     },
};
</script>
<style></style>