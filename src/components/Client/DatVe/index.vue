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
                                            <th class="text-center" @click="chonGhe(ghe)">
                                                <div class="ghe border border-dark rounded shadow-sm p-2 bg-light"
                                                    :class="{ chon: gheDaChon(ghe) }">
                                                    <div class="fw-bold fs-6 text-secondary">{{ ghe.ten_ghe }} - {{
                                                        ghe.gia_ghe }}</div>
                                                    <i class="fa-solid fa-couch m-2 text-secondary" ></i>
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
                                <div class="rounded me-2" style="width: 20px; height: 20px; background-color: #d6d6d6;">
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
            <div class="col-lg-6">
                <div class="card radius-10 border-top border-0 border-5 border-warning">
                    <div class="card-body">
                        <div class="d-flex mb-2">
                            <img src="https://riocinemas.vn/Areas/Admin/Content/Fileuploads/images/poster%20web/2025/T4/SCDB.jpg"
                                alt="Poster phim" class="img-fluid rounded me-3"
                                style="width: 150px; height: 270px; object-fit: cover;">
                            <div>
                                <h6 class="mb-1 fw-bold">Địa Đạo: Mặt Trời Trong Bóng Tối </h6>
                                <p class="mb-1 text-muted small">Tiếng Việt - Phụ đề Tiếng Anh</p>
                            </div>
                        </div>
                        <p class="mb-3">Suất chiếu: <strong>19:20</strong> -
                            <strong>2025-04-04</strong>
                        </p>
                        <hr class="my-2" style="border: 1px dashed;">
                        <!-- v-for ghế  -->
                        <!-- <template v-for="(value, index) in list_ben_phai" :key="index"> -->
                        <!-- <template v-if="value.type == 1"> -->
                        <div class="d-flex justify-content-between align-items-center">
                            <div>Ghế A3</div>
                            <div class="d-flex align-items-center">
                                <div class="me-2">15000VND</div>
                                <i @click="xoaBo(value)" class="fa-solid fa-rectangle-xmark fa-2x text-danger"></i>
                            </div>
                        </div>
                        <hr class="my-2" style="border: 1px dashed;">
                        <!-- </template>
                        </template> -->

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
                            <strong class="text-danger">15000VND</strong>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-lg-6">
                                <button class="btn btn-outline-dark w-100 me-2"> Quay Lại</button>
                            </div>
                            <div class="col-lg-6">
                                <button v-on:click="thanhToan()" class="btn btn-warning w-100" data-bs-toggle="modal"
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
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông Tin Đặt Vé</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Phim</label>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->

</template>

<script>
function chonGhe(element) {
    element.classList.toggle('chon');
}


import axios from 'axios'
export default {

    props:["id_suat_chieu"],

    data() {
        return {
            //   ready: false,
            list_ghe: [
            ],
            list_phong_chieu: [],
            idPhongDangChon: null, // ID của phòng đang chọn
            list_ghe_chon: [], // ← ghế được chọn

        };
    },
    mounted() {
        // Giả lập dữ liệu hoặc luôn bật ready để test giao diện
        const storedPhong = localStorage.getItem('list_phong_chieu');
        if (storedPhong) {
            this.list_phong_chieu = JSON.parse(storedPhong);
            if (this.list_phong_chieu.length > 0) {
                this.idPhongDangChon = this.list_phong_chieu[0].id; // lấy phòng đầu tiên
            }
        }

        //lấy danh sách ghế từ localStorage
        const storedGhe = localStorage.getItem('list_ghe');
        if (storedGhe) {
            this.list_ghe = JSON.parse(storedGhe);
        }
        console.log("ID suất chiếu được chọn:", this.id_suat_chieu);
    },
    computed: {
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


        }
    },
    methods: {
       gheDaChon(ghe) {
    return this.list_ghe_chon.includes(ghe);
  },
  chonGhe(ghe) {
    const index = this.list_ghe_chon.indexOf(ghe);
    if (index === -1) {
      this.list_ghe_chon.push(ghe);
    } else {
      this.list_ghe_chon.splice(index, 1);
    }
    console.log(this.list_ghe_chon);
  }
    },
}




//    
</script>
<style >
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
</style>