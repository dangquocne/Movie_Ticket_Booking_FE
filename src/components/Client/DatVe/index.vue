<template>
    <!-- <div v-if="ready">\ -->
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-borderless table-hover ">
                            <tbody>
                                <tr>
                                    <th colspan="100%" class="bg-dark text-light fs-4 p-2 text-center radius-15">MÀN
                                        HÌNH</th>
                                </tr>
                                <tr>
                                    <th>
                                        <p class="mt-5"></p>
                                    </th>
                                </tr>
                                <template v-for="(row, rowIndex) in gheTheoHang" :key="rowIndex">
                                    <tr>
                                        <template v-for="(ghe, colIndex) in row" :key="colIndex">
                                            <th class="text-center" @click="!gheBiDat(ghe) && chonGhe(ghe)">
                                                <div class="ghe border border-dark rounded shadow-sm p-2 bg-light"
                                                    :class="{
                                                        chon: gheDaChon(ghe),
                                                        'bg-light text-secondary': !gheBiDat(ghe),
                                                        'bg-warning text-white': gheBiDat(ghe)
                                                    }">
                                                    <div class="fw-bold fs-6 text-secondary">{{ ghe.ten_ghe }} - {{
                                                        ghe.gia_ghe }}</div>
                                                    <i class="fa-solid fa-couch m-2 text-secondary"></i>
                                                </div>
                                            </th>
                                        </template>
                                    </tr>
                                </template>



                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="p-1 radius-15 " style="background-color: #f97316;"></div>
                <div class="row my-3 d-flex justify-content-between">
                    <div class="col-lg-4">
                        <div class="d-flex align-items-center gap-3 mt-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded me-2" style="width: 20px; height: 20px; background-color: #092665;">
                                </div>
                                <span>Ghế đã bán</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="rounded me-2" style="width: 20px; height: 20px; background-color: #f97316;">
                                </div>
                                <span>Ghế đang chọn</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto mb-2 ms-auto">
                            <button class="btn  btn-dark text-light me-2"   @click="openModal = true">Xem phòng 3D</button>
                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="card radius-10 border-top border-0 border-5 border-success">
                    <div class="card-body">
                        <div class="mb-3">
                            <h4>Danh Sách Dịch Vụ</h4>
                        </div>
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://afamilycdn.com/Images/Uploaded/Share/2010/06/07/baprrang.jpg"
                                        alt="..." class="card-img " style="height: 180px; object-fit: cover;">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Bắp Rang Bơ</h5>
                                        <p class="card-text">Bắp rang bơ nóng hổi, giòn rụm, thơm lừng hương bơ - món ăn
                                            vặt hoàn hảo cho mỗi buổi xem phim.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="card-text fw-bold mb-0">Giá: 45000</p>
                                            <button @click="themDichvu(value)" class="btn btn-outline-primary">Thêm dịch
                                                vụ</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://afamilycdn.com/Images/Uploaded/Share/2010/06/07/baprrang.jpg"
                                        alt="..." class="card-img " style="height: 180px; object-fit: cover;">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Bắp Rang Bơ</h5>
                                        <p class="card-text">Bắp rang bơ nóng hổi, giòn rụm, thơm lừng hương bơ - món ăn
                                            vặt hoàn hảo cho mỗi buổi xem phim.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="card-text fw-bold mb-0">Giá: 45000</p>
                                            <button @click="themDichvu(value)" class="btn btn-outline-primary">Thêm dịch
                                                vụ</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Poster + Tên phim -->
            <div class="col-lg-6">
                <div class="card radius-10 border-top border-0 border-5 border-warning">
                    <div class="card-body">
                        <div class="d-flex mb-2" v-if="phimDangChon">
                            <img :src="phimDangChon.hinh_anh" alt="Poster phim" class="img-fluid rounded me-3"
                                style="width: 150px; height: 270px; object-fit: cover;">
                            <div>
                                <h6 class="mb-1 fw-bold">{{ phimDangChon.ten_phim }}</h6>
                                <p class="mb-1 text-muted small">{{ phimDangChon.ngon_ngu }}</p>
                            </div>
                        </div>
                        <p class="mb-3" v-if="suatChieuDangChon">
                            Suất chiếu: <strong>{{ formatTime(suatChieuDangChon.thoi_gian_bat_dau) }}-{{
                                formatTime(suatChieuDangChon.thoi_gian_ket_thuc) }}</strong> -
                            <strong>{{ formatDate(suatChieuDangChon.ngay_chieu) }}</strong>
                        </p>
                        <hr class="my-2" style="border: 1px dashed;">

                        <!-- v-for ghế  -->
                        <template v-for="(ghe, index) in list_ghe_chon" :key="index">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Ghế: {{ ghe.ten_ghe }}</div>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">{{ formatVND(ghe.gia_ghe) }}</div>
                                    <i @click="xoaBo(ghe)" class="fa-solid fa-rectangle-xmark fa-2x text-danger"></i>
                                </div>
                            </div>
                            <hr class="my-2" style="border: 1px dashed;">
                        </template>

                        <!-- v-for dịch vụ -->
                        <!-- <template v-for="(value, index) in list_ben_phai" :key="index">
                            <template v-if="value.type == 2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>{{ value.ten_ghe }}</div>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">{{ formatVND(value.gia_ve) }}</div>
                                        <i @click="xoaBo(value)"
                                            class="fa-solid fa-rectangle-xmark fa-2x text-danger"></i>
                                    </div>
                                </div>
                                <hr class="my-2" style="border: 1px dashed;">
                            </template>
                        </template> -->
                        <div class="d-flex justify-content-start mt-1">
                            <input type="text" class="form-control me-4" placeholder="Nhập vào mã voucher">
                            <button v-on:click="thongTinVoucher()" class="btn btn-info text-light text-nowrap">Áp
                                Dụng</button>
                        </div>
                        <hr class="my-2" style="border: 1px dashed;">
                        <div class="d-flex justify-content-between">
                            <strong>Tổng cộng</strong>
                            <strong class="text-danger">{{ formatVND(tongTien) }}</strong>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-lg-6">
                                <router-link to="/">
                                    <button class="btn btn-outline-dark w-100 me-2"> Quay Lại</button>
                                </router-link>
                            </div>
                            <div class="col-lg-6">
                                <button class="btn btn-warning w-100" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Thanh Toán </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <!-- Modal Thanh Toán-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header bg-primary text-white rounded-top-4">
                    <h5 class="modal-title fw-bold text-white">THANH TOÁN</h5>
                    <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>

                <div class="modal-body px-4 py-3">
                    <h6 class="fw-semibold mb-3 text-dark">Thông tin đặt vé</h6>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Tên Phim:</div>
                        <div class="col-7 text-end fw-semibold" v-if="phimDangChon">{{ phimDangChon?.ten_phim ||
                            "Khôngcó"
                            }}
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Suất Chiếu:</div>
                        <div class="col-7 text-end fw-semibold" v-if="suatChieuDangChon">
                            {{ formatTime(suatChieuDangChon?.thoi_gian_bat_dau) }} - {{
                                formatTime(suatChieuDangChon?.thoi_gian_ket_thuc) }} -
                            {{ formatDate(suatChieuDangChon.ngay_chieu) }}
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Rạp:</div>
                        <div class="col-7 text-end">OIZOIOI Cinema</div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Số lượng vé: {{ list_ghe_chon.length }}</div>
                        <div class="col-7 text-end">Ghế: <strong>{{ danhSachGheChon }}</strong></div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Chi phí:</div>
                        <div class="col-7 text-end text-orange fw-semibold">{{ formatVND(tongTien) }}</div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Giảm giá:</div>
                        <div class="col-7 text-end">0 VNĐ</div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-5 text-muted">Tổng Thanh Toán:</div>
                        <div class="col-7 text-end text-success fw-bold">{{ formatVND(tongTien) }}</div>
                    </div>

                    <hr class="my-3" />
                    <h6 class="fw-semibold mt-3 text-dark">Phương thức thanh toán</h6>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="pttt" id="tienmat" value="Tiền mặt"
                            v-model="phuongThucThanhToan">
                        <label class="form-check-label" for="tienmat">
                            <img src="https://media.istockphoto.com/id/953963418/vi/vec-to/tay-c%E1%BA%A7m-ti%E1%BB%81n-%C4%91%C6%B0a-ti%E1%BB%81n-gi%E1%BA%A5y-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-thanh-to%C3%A1n-b%E1%BA%B1ng-ti%E1%BB%81n-m%E1%BA%B7t.jpg?s=612x612&w=0&k=20&c=RqAmWavXOiJQj1S-I0vjfCnAPIVXJ3aL8aAv1OEId8c="
                                width="24" class="me-1" />
                            Thanh toán bằng tiền mặt
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="pttt" id="banking" value="Banking"
                            v-model="phuongThucThanhToan">
                        <label class="form-check-label" for="banking">
                            <img src="https://img.icons8.com/color/48/000000/bank-cards.png" width="24" class="me-1" />
                            Internet Banking / Thẻ tín dụng
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="pttt" id="momo" value="MoMo"
                            v-model="phuongThucThanhToan">
                        <label class="form-check-label" for="momo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcw-qI8sQ7DqG05x0-uQ2EhrqHggZuzIMorw&s"
                                width="24" class="me-1" />
                            Thanh toán qua MoMo QR
                        </label>
                    </div>

                </div>

                <div class="modal-footer px-4 py-3">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quay lại</button>
                    <button type="button" class="btn btn-warning px-4" @click="thanhToan">Tiếp tục</button>
                </div>
            </div>
        </div>
    </div>

   <!-- ✅ Modal Tour 3D -->
<div v-if="openModal" class="modal-3d-overlay" @click.self="closeModal">
  <div class="modal-3d-content">
    <div class="modal-3d-header bg-black text-white position-relative d-flex align-items-center justify-content-center">
      <h5 class="m-0 text-center w-100 text-warning fw-bold">3D TOUR PHÒNG CHIẾU</h5>
      <button
        class="btn btn-sm btn-light position-absolute end-0 me-3 px-3 py-1 fw-semibold"
        @click="closeModal"
      >
        Đóng
      </button>
    </div>

    <div class="image-container" ref="panoContainer"></div>
  </div>
</div>

 
   

</template>

<script >


import axios from 'axios'
export default {

    props: ["id_suat_chieu"],

    data() {
        return {


            list_ghe: [],
            list_phong_chieu: [],
            idPhongDangChon: null, // ID của phòng đang chọn
            suatChieuDangChon: null, // Suất chiếu đang chọn
            phimDangChon: null, // Phim đang chọn
            list_ghe_chon: [], // ← ghế được chọn
            phuongThucThanhToan: "Tiền mặt", // Mặc định
            user_login: null,
            daDatVe: false, // Biến để kiểm tra đã đặt vé hay chưa
            gheDaDat: [],
             openModal: false, // ✅ thêm biến mở modal 3D

        };
    },
    mounted() {

        this.loadGheDaDat(); // Tải danh sách ghế đã đặt từ localStorage

        // Lấy thông tin người dùng từ localStorage

        const user = localStorage.getItem("user_login");
        if (user) {
            this.user_login = JSON.parse(user);
        }

        // Lấy danh sách phòng chiếu từ localStorage
        const storedPhong = localStorage.getItem('list_phong_chieu');
        if (storedPhong) {
            this.list_phong_chieu = JSON.parse(storedPhong);
            if (this.list_phong_chieu.length > 0) {
                // this.idPhongDangChon = this.list_phong_chieu[0].id; // lấy phòng đầu tiên
            }
        }

        //lấy danh sách ghế từ localStorage
        const storedGhe = localStorage.getItem('list_ghe');
        if (storedGhe) {
            this.list_ghe = JSON.parse(storedGhe);
        }

        //lấy danh sách phim từ localStorage
        const listPhim = JSON.parse(localStorage.getItem("list_phim") || "[]");

        //Lấy danh sách suất chiếu từ localStorage
        // và tìm ID suất chiếu hiện tại để lấy ID phòng đang chọn
        // Và tìm suất chiếu hiện tại
        const storedSuatChieu = localStorage.getItem("list_suat_chieu");
        if (storedSuatChieu) {
            const list = JSON.parse(storedSuatChieu);
            const suat = list.find(s => s.id == this.id_suat_chieu);
            if (suat) {
                this.suatChieuDangChon = suat;
                this.idPhongDangChon = suat.id_phong_chieu;

                // 👇 tìm phim theo id_phim
                const phim = listPhim.find(p => p.id == suat.id_phim);
                if (phim) {
                    this.phimDangChon = phim;
                }
            }
        }
        console.log("ID suất chiếu được chọn:", this.id_suat_chieu);




        //De tat modal khi load trang
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style = '';
    },
    computed: {

        // Lấy danh sách ghế theo hàng ngang
        gheTheoHang() {
            const phong = this.list_phong_chieu.find(p => p.id == this.idPhongDangChon);
            if (!phong) return [];

            const gheCuaPhong = this.list_ghe.filter(g => g.id_phong_chieu == phong.id);
            const soGheMoiHang = phong.hang_ngang;
            const result = [];

            for (let i = 0; i < gheCuaPhong.length; i += soGheMoiHang) {
                result.push(gheCuaPhong.slice(i, i + soGheMoiHang));
            }

            return result;


        },

        //tinh tổng tiền từ danh sách ghế đã chọn
        tongTien() {
            return this.list_ghe_chon.reduce((total, ghe) => total + ghe.gia_ghe, 0);

        },


        // Lấy danh sách ghế đã chọn
        danhSachGheChon() {
            const gheChon = this.list_ghe.filter(g => this.list_ghe_chon.includes(g));
            return gheChon.map(g => g.ten_ghe).join(",");
        },


    },
    watch: {
        // Theo dõi sự thay đổi của id_suat_chieu
        suatChieuDangChon(newVal) {
            if (newVal && newVal.id) {
                this.loadGheDaDat();
            }
        },

          openModal(newVal) {
            if (newVal) {
                this.loadPanorama()
            }
        }


    },
    methods: {  // === TOUR 3D ===
        closeModal() {
            this.openModal = false
        },
        loadPanorama() {
            const threeScript = document.createElement('script')
            threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js'
            threeScript.onload = () => {
                const panoScript = document.createElement('script')
                panoScript.src = '/js/panolens.min.js'
                panoScript.onload = () => this.initPanorama()
                document.body.appendChild(panoScript)
            }
            document.body.appendChild(threeScript)
        },
        initPanorama() {    
            const panorama = new PANOLENS.ImagePanorama('/images/pretville_cinema.jpg')
            const viewer = new PANOLENS.Viewer({
                container: this.$refs.panoContainer,
                autoRotate: true,
                autoRotateSpeed: 0.3,
                controlBar: true
            })
            viewer.add(panorama)

            const video = document.createElement('video')
            video.src = '/videos/muado.mp4'
            video.loop = true
            video.muted = true
            video.autoplay = true
            video.playsInline = true
            video.crossOrigin = 'anonymous'
            video.addEventListener('canplay', () => video.play())

            // const texture = new THREE.VideoTexture(video)
            texture.minFilter = THREE.LinearFilter
            texture.magFilter = THREE.LinearFilter
            texture.format = THREE.RGBFormat

            const geometry = new THREE.PlaneGeometry(2400, 1000)
            const material = new THREE.MeshBasicMaterial({ map: texture })
            const screen = new THREE.Mesh(geometry, material)
            screen.position.set(150, 200, -2400)
            panorama.add(screen)
        },






        //hien thị danh sách ghế đã chọn
        gheDaChon(ghe) {
            return this.list_ghe_chon.includes(ghe);
        },

        //chon ghế
        chonGhe(ghe) {
            const index = this.list_ghe_chon.indexOf(ghe);
            if (index === -1) {
                this.list_ghe_chon.push(ghe);
            } else {
                this.list_ghe_chon.splice(index, 1);
            }
            console.log(this.list_ghe_chon);
        },


        formatDate(dateStr) {
            return new Date(dateStr).toLocaleDateString("vi-VN");
        },
        formatTime(timeStr) {
            return timeStr.slice(0, 5);
        },
        formatVND(value) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            }).format(value);
        },


        //thanh toán
        thanhToan() {

            if (!this.list_ghe_chon || this.list_ghe_chon.length === 0) {
                alert("Vui lòng chọn ghế trước khi thanh toán!");
                return;
            }

            const ve = {
                ma_ve: "VE" + new Date().getTime(), // Mã vé là timestamp
                khach_hang: this.user_login, // Tùy theo hệ thống
                ten_phim: this.phimDangChon?.ten_phim || "Không rõ",
                id_suat_chieu: this.suatChieuDangChon.id,
                suat_chieu: this.suatChieuDangChon
                    ? `${this.formatTime(this.suatChieuDangChon.thoi_gian_bat_dau)} - ${this.formatTime(this.suatChieuDangChon.thoi_gian_ket_thuc)} - ${this.formatDate(this.suatChieuDangChon.ngay_chieu)}`
                    : "Không rõ",
                ghe: this.list_ghe_chon.map(g => g.ten_ghe).join(", "),
                gia_ve: this.tongTien,
                ngay_dat: new Date().toLocaleString(),
                // trang_thai: this.phuongThucThanhToan === "Tiền mặt" ? "Chưa thanh toán" : "Đã thanh toán",
                tinh_trang: this.phuongThucThanhToan === "Tiền mặt" ? 0 : 1,
                phuong_thuc: this.phuongThucThanhToan,

            };

            // Lưu vào localStorage
            let danhSachVe = JSON.parse(localStorage.getItem("list_ve")) || [];
            danhSachVe.push(ve);
            localStorage.setItem("list_ve", JSON.stringify(danhSachVe));
            this.daDatVe = true;


            // Optional: thông báo và điều hướng
            if (this.phuongThucThanhToan === "Tiền mặt") {
                this.$toast.success("Đặt vé thành công. Vui lòng thanh toán tại quầy!");


                // Đóng modal
                const modalEl = document.getElementById('exampleModal');
                const modalInstance = bootstrap.Modal.getInstance(modalEl);
                if (modalInstance) {
                    modalInstance.hide();
                }

            } else if (this.phuongThucThanhToan === "MoMo") {
                // Điều hướng sang giao diện quét mã
                this.$router.push({
                    path: '/thanh-toan-momo',
                    query: {
                        maVe: ve.ma_ve,
                        tongTien: ve.gia_ve,
                        moTa: ve.ten_phim,

                    }
                });
            }
        },


        //Hiển thị ghế đã đặt theo suất chiếu
        loadGheDaDat() {
            const danhSachVe = JSON.parse(localStorage.getItem("list_ve")) || [];
            let gheDaDat = [];

            if (!this.suatChieuDangChon || !this.suatChieuDangChon.id) {
                this.gheDaDat = [];
                return;
            }

            const idSuat = this.suatChieuDangChon.id;

            danhSachVe.forEach(ve => {
                if (ve.id_suat_chieu === idSuat) {
                    const gheTrongVe = ve.ghe.split(",").map(g => g.trim());
                    gheDaDat = gheDaDat.concat(gheTrongVe);
                }
            });

            this.gheDaDat = [...new Set(gheDaDat)];
        },

        // Cập nhật trạng thái ghế đã đặt
        gheBiDat(ghe) {
            return this.gheDaDat.includes(ghe.ten_ghe);
        },

        
        xoaBo(ghe) {
            this.list_ghe_chon = this.list_ghe_chon.filter(g => g.ten_ghe !== ghe.ten_ghe);
        },


        
    },
}




//    
</script>
<style>
.ghe {
    cursor: pointer;
    background-color: #f1f1f1;
    transition: 0.3s;
}

.ghe.chon {
    border: 2px solid #f97316 !important;
    background-color: #fff7ed !important;
}

.ghe.chon i {
    color: #f97316 !important;
}

.bg-warning {
    background-color: #092665 !important;
}




/* ✅ Style modal 3D */
.modal-3d-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-3d-content {
  background: #000a0e;
  border: 2px solid #ebb47a;
  border-radius: 12px;
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-3d-header {
  padding: 12px 16px;
  border-bottom: 2px solid #ebb47a;
}

.modal-3d-header h5 {
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.image-container {
  flex: 1;
  border-top: 2px solid #ebb47a;
  background: #000;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

</style>