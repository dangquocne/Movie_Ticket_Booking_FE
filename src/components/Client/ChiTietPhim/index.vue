<template>
    <!-- Trailer Section -->
    <div v-if="phim">

        <div class="">
            <div class="ratio ratio-16x9 shadow-lg overflow-hidden" style="height: 450px; object-fit: cover; ">
                <!-- <input type="hidden" v-model="phim.id"> -->
                <iframe :src="phim.trailer" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>

        <!-- Movie Details Container -->
        <div class="container py-5">
            <div class="row g-4">
                <!-- Poster Section -->
                <div class="col-md-4">
                    <img :src="phim.hinh_anh" alt="Movie Poster" class="img-fluid rounded shadow-lg mb-4">
                    <div class="d-grid gap-3">
                        <button class="btn btn-warning py-3 fw-bold" data-bs-toggle="modal"
                            data-bs-target="#buyTicketModal">
                            <i class="fa-solid fa-ticket"></i> Mua Vé
                        </button>
                    </div>
                </div>

                <!-- Movie Information Section -->
                <div class="col-md-8">
                    <div class="mb-4">
                        <h1 class="fw-bold text-dark mb-3">{{ phim.ten_phim }}</h1>
                        <div class="d-flex flex-wrap gap-2 mb-3">
                            <span class="badge bg-primary rounded-pill px-3 py-2">
                                {{ phim.the_loai }}
                            </span>
                        </div>
                    </div>

                    <div class="row g-3">
                        <!-- Detailed Information -->
                        <div class="col-lg-6">
                            <h4 class="fw-bold mb-3 border-bottom pb-2">Thông tin chi tiết</h4>
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                        <span class="fw-bold text-dark">Đạo diễn:</span>
                                        <span>{{ phim.dao_dien }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                        <span class="fw-bold text-dark">Quốc gia:</span>
                                        <span>{{ phim.quoc_gia }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                        <span class="fw-bold text-dark">Ngày phát hành:</span>
                                        <span>{{ phim.ngay_phat_hanh }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2 border-bottom pb-2">
                                        <span class="fw-bold text-dark">Ngôn ngữ:</span>
                                        <span>{{ phim.ngon_ngu }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span class="fw-bold text-dark">Thời lượng:</span>
                                        <span>{{ phim.thoi_luong }} phút</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cast and Producer -->
                        <div class="col-lg-6">
                            <h4 class="fw-bold mb-3 border-bottom pb-2">Diễn viên chính</h4>
                            <div class="card shadow-sm mb-4">
                                <div class="card-body">
                                    <p class="mb-0">{{ phim.dien_vien }}</p>
                                </div>
                            </div>
                            <h4 class="fw-bold mb-3 border-bottom pb-2">Nhà sản xuất</h4>
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <p class="mb-0">Nhà sản xuất {{ phim.nha_san_xuat }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Synopsis -->
                    <div class="mt-4">
                        <h4 class="fw-bold mb-3 border-bottom pb-2">Nội dung phim</h4>
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <p class="fs-7 lh-base text-dark text-justify">
                                    {{ phim.noi_dung }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Comments and Ratings Section -->
        <div class="row g-4 mt-5">
            <!-- Comment Section -->
            <div class="col-lg-8">
                <div class="bg-white rounded shadow-sm p-4 h-100">
                    <h5 class="fs-5 fw-bold mb-4 border-bottom pb-2">Bình Luận</h5>
                    <div class="mb-4">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <img src="https://i.pravatar.cc/48?img=1" alt="User Avatar" class="rounded-circle"
                                    width="48" height="48">
                            </div>
                            <div class="col">
                                <textarea class="form-control" rows="3" placeholder="Viết bình luận của bạn..."
                                    required></textarea>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-danger px-4 py-2 fw-semibold">Gửi</button>
                            </div>
                        </div>
                    </div>
                    <div class="border-top pt-4">
                        <div class="mb-4">
                            <div class="d-flex align-items-start gap-3">
                                <img src="https://i.pravatar.cc/48?img=12" alt="User Avatar" class="rounded-circle"
                                    width="48" height="48">
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h6 class="fw-bold mb-0">Nguyễn Văn A</h6>
                                        <small class="text-muted">07/05/2025</small>
                                    </div>
                                    <p class="mb-0 text-secondary">
                                        Ưu đãi quá tuyệt vời! Đã lên lịch đi xem phim với bạn gái cuối tuần này. Cảm ơn
                                        DZ!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex align-items-start gap-3">
                                <img src="https://i.pravatar.cc/48?img=32" alt="User Avatar" class="rounded-circle"
                                    width="48" height="48">
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h6 class="fw-bold mb-0">Trần Thị B</h6>
                                        <small class="text-muted">06/05/2025</small>
                                    </div>
                                    <p class="mb-0 text-secondary">
                                        Rất thích chương trình này. Tiết kiệm được một khoản khi đi xem phim cùng gia
                                        đình. Mong DZ có nhiều ưu đãi như vậy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ratings Section -->
            <div class="col-lg-4">
                <div class="bg-white rounded shadow-sm p-4 h-100">
                    <h5 class="fs-5 fw-bold mb-4 border-bottom pb-2">Đánh Giá Phim</h5>
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="d-flex align-items-center gap-3">
                                <div class="text-center">
                                    <h3 class="fw-bold text-success mb-0">4.2</h3>
                                    <p class="text-muted small mb-0">/5 (DZCinema)</p>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="progress" style="height: 8px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 84%;"
                                            aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="text-muted small mt-1">Dựa trên 567 đánh giá</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <select class="form-select" aria-label="Rating select">
                                    <option selected>Chọn điểm số</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-success px-4 py-2 fw-semibold">Gửi đánh
                                    giá</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Movies Section -->
        <div class="bg-white rounded shadow-sm p-3 p-md-4 mt-3">
            <h4>Các phim đang chiếu khác</h4>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-img-top">
                            <img src="https://cdn.galaxycine.vn/media/2025/4/14/duoi-day-ho-500_1744615807716.jpg"
                                class="img-fluid" alt="">
                        </div>
                        <div class="card-img-overlay text-center" style="margin-top: 200px;">
                            <div class="col">
                                <button class="btn btn-warning p-2 " style="width: 170px;"><i
                                        class="fa-solid fa-ticket"></i>Mua
                                    vé</button>
                                <br>
                                <button class="btn btn-outline-light p-2 mt-2" style="width: 170px;"><i
                                        class="fa-solid fa-circle-play"></i>Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-img-top">
                            <img src="https://cdn.galaxycine.vn/media/2024/11/22/elio-500_1732249578811.jpg"
                                class="img-fluid" alt="">
                        </div>
                        <div class="card-img-overlay text-center" style="margin-top: 200px;">
                            <div class="col">
                                <button class="btn btn-warning p-2 " style="width: 170px;"><i
                                        class="fa-solid fa-ticket"></i>Mua
                                    vé</button>
                                <br>
                                <button class="btn btn-outline-light p-2 mt-2" style="width: 170px;"><i
                                        class="fa-solid fa-circle-play"></i>Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-img-top">
                            <img src="https://cdn.galaxycine.vn/media/2025/3/18/toi-do-500_1742267857122.jpg"
                                class="img-fluid" alt="">
                        </div>
                        <div class="card-img-overlay text-center" style="margin-top: 200px;">
                            <div class="col">
                                <button class="btn btn-warning p-2 " style="width: 170px;"><i
                                        class="fa-solid fa-ticket"></i>Mua
                                    vé</button>
                                <br>
                                <button class="btn btn-outline-light p-2 mt-2" style="width: 170px;"><i
                                        class="fa-solid fa-circle-play"></i>Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-img-top">
                            <img src="https://cdn.galaxycine.vn/media/2025/5/6/ballerine-500_1746502453050.jpg"
                                class="img-fluid" alt="">
                        </div>
                        <div class="card-img-overlay text-center" style="margin-top: 200px;">
                            <div class="col">
                                <button class="btn btn-warning p-2 " style="width: 170px;"><i
                                        class="fa-solid fa-ticket"></i>Mua
                                    vé</button>
                                <br>
                                <button class="btn btn-outline-light p-2 mt-2" style="width: 170px;"><i
                                        class="fa-solid fa-circle-play"></i>Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal Ticket (unchanged) -->
        <div class="modal fade" id="buyTicketModal" tabindex="-1" aria-labelledby="movieScheduleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-light border-bottom">
                        <h4 class="modal-title fs-3 fw-bold text-dark" id="movieScheduleModalLabel">
                            Lịch chiếu: {{ phim.ten_phim }}
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="mb-4">
                            <h5 class="fw-semibold mb-3 text-dark">Chọn ngày xem</h5>
                            <div class="d-flex flex-wrap gap-2 overflow-auto pb-2">
                                <button v-for="(value, index) in ngayChieu" :key="index"
                                    class="btn btn-outline-secondary btn-sm px-3 py-2"
                                    :class="{ 'btn-primary': selectedDate === value.ngay_chieu }"
                                    @click="selectedDate = value.ngay_chieu">
                                    {{ formatDate(value.ngay_chieu) }}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h5 class="fw-semibold mb-3 text-dark">Suất chiếu</h5>
                            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                                <div class="col" v-for="(value, index) in suatChieuTheoNgay" :key="index">
                                    <button class="btn btn-outline-primary w-100 py-2"
                                     @click="selectedSuatChieu = value.id">
                                        {{ formatTime(value.thoi_gian_bat_dau) }} - {{
                                        formatTime(value.thoi_gian_ket_thuc) }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-top">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <router-link :to="selectedSuatChieu ? `/client/dat-ve/${selectedSuatChieu}` : '#'">
                            <button type="button" class="btn btn-primary" :disabled="!selectedSuatChieu">
                                Tiếp tục đặt vé
                            </button>
                        </router-link>
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
            list_suat_chieu: [],
            phim: {},
            ngayChieu: [],
            suatChieuTheoNgay: [],
            selectedDate: null,
            selectedSuatChieu: null

        };
    },
    mounted() {
        const id = this.$route.params.id;
        const stored = localStorage.getItem('list_phim');
        if (stored) {
            const list = JSON.parse(stored);
            this.phim = list.find(p => p.id == id);
        }

        //lấy danh sách suất chiếu từ localStorage
        const storedSuatChieu = localStorage.getItem('list_suat_chieu');
        if (storedSuatChieu) {
            this.list_suat_chieu = JSON.parse(storedSuatChieu);
        }

        // Lọc ngày chiếu duy nhất của phim hiện tại
        const ngaySet = new Set();
        this.list_suat_chieu.forEach(sc => {
            if (sc.id_phim == this.phim.id) {
                ngaySet.add(sc.ngay_chieu);
            }
        });
        this.ngayChieu = Array.from(ngaySet).map(ngay => ({ ngay_chieu: ngay }));

    },
    watch: {
        selectedDate(newDate) {
            // Khi chọn ngày, lọc lại danh sách suất chiếu theo ngày đó và theo phim hiện tại
            this.suatChieuTheoNgay = this.list_suat_chieu.filter(
                sc => sc.ngay_chieu === newDate && sc.id_phim === this.phim.id
            );
        },
        selectedSuatChieu(newSuatChieu) {
            // Khi chọn suất chiếu, lưu lại suất chiếu đã chọn
            this.selectedSuatChieu = newSuatChieu;
        }
    },
    methods: {

        formatDate(dateStr) {
            return new Date(dateStr).toLocaleDateString("vi-VN");
        },
        formatTime(timeStr) {
            return timeStr.slice(0, 5);
        },



    },
}
</script>
