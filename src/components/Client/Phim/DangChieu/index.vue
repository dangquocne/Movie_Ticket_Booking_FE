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
                <h4 class="text-uppercase fs-3 text-dark">Phim Đang Chiếu</h4>
            </div>
            <template v-for="(value, index) in list_phim" :key="index">
            <template v-if="value.tinh_trang == 2">
            <div class="col-lg-3 col-md-4 rounded mb-3" style="flex: 0 0 auto;">
                <div class="card rounded position-relative"
                    style="transition: transform 0.3s ease, box-shadow 0.3s ease; overflow: hidden; height: 100%;"
                    onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)'; this.querySelector('.btn-overlay').style.opacity = '1'"
                    onmouseout="this.style.transform='none'; this.style.boxShadow='none'; this.querySelector('.btn-overlay').style.opacity = '0'">

                    <div class="card-img-top">
                        <img :src="value.hinh_anh" class="img-fluid"
                            :class="img-fluid" alt="" style="height: 500px; object-fit: cover;">
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
            list_phim: [ {id: 3,
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
        trailer: "https://www.youtube.com/embed/xh6IDHjvytU?si=dTUhWz3bcqFJ2Jod",
        noi_dung: "Thám Tử Kiên là một nhân vật được yêu thích trong tác phẩm điện của ăn khách Người Vợ Cuối Cùng của Victor Vũ, Thám Tử Kiên: Kỳ Không Đầu sẽ là một phim Victor Vũ trở về với thể loại sở trường Kinh Dị - Trinh Thám sau những tác phẩm tình cảm lãng mạn trước đó. Với slogan đầy ám ảnh: “Kẻ chết không siêu thoát, người sống không lối thoát”, Thám Tử Kiên: Kỳ Án Không Đầu ẩn chứa muôn vàn bí ẩn. Một chuỗi án mạng kinh hoàng tại một ngôi làng hẻo lánh - nơi liên tiếp xảy ra tám vụ giết người với cùng một đặc điểm rợn người: tất cả nạn nhân đều không còn đầu.  Thám Tử Kiên phải đối mặt với vụ án khủng khiếp gây hoang mang tột độ cho dân làng. Ai sẽ là nạn nhân tiếp theo trong chuỗi án mạng rùng rợn? Kiên có tìm ra mấu chốt để lần theo dấu vết hung thủ? Thuộc thể loại tâm linh - ly kỳ - phá án, Thám Tử Kiên: Kỳ Án Không Đầu được đạo diễn Victor Vũ kì công nhào nặn, ghi hình tại Tuyên Quang và Cao Bằng cực kì kĩ lưỡng. Dàn diễn viên chính trong phim bao gồm: Quốc Huy vai Thám tử Kiên, Đinh Ngọc Diệp vai Hai Mẫn, Quốc Anh vai Thạc, Anh Phạm vai Tuyết và Minh Anh vai Nga, NSƯT Xuân Trang trong vai Quan Liêm, NSND Mỹ Uyên trong vai Bà Vượng (vợ quan Liêm)."},]
   ,    
    list_suat_chieu: [
                {
                    id: 5,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-09',
                    thoi_gian_bat_dau: '15:20',
                    thoi_gian_ket_thuc: '17:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                }
            ],
    }
    },
    mounted() {
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

      const storedSuatChieu = localStorage.getItem('list_suat_chieu');
  if (storedSuatChieu) {
    const storedList = JSON.parse(storedSuatChieu);

    // Hợp nhất dữ liệu mặc định + dữ liệu từ localStorage
    const defaultList = this.list_suat_chieu;

    // Loại bỏ các phim trùng id (tránh lặp)
    const merged = [...defaultList, ...storedList.filter(storedItem => {
      return !defaultList.some(defaultItem => defaultItem.id === storedItem.id);
    })];

    this.list_suat_chieu = merged;
    localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
    }

    },
    methods: {
      
    },
};
</script>
<style></style>