<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH SUẤT CHIẾU</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm suất chiếu
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control"
                            placeholder="Tìm theo tên phim, phòng hoặc ngày chiếu..." v-model="searchQuery" />
                        <button class="btn btn-success input-group-text" style="width: 150px;">Tìm kiếm</button>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="bg-primary text-light text-nowrap">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Phim</th>
                                    <th class="text-center">Phòng Chiếu</th>
                                    <th class="text-center">Ngày Chiếu</th>
                                    <th class="text-center">Giờ Bắt Đầu</th>
                                    <th class="text-center">Giờ Kết Thúc</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in filteredSuatChieu" :key="item.id">
                                    <tr class="text-nowrap">
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle text-wrap">{{ getTenPhim(item.id_phim) }}</td>
                                        <td class="align-middle text-center">{{ getTenPhong(item.id_phong_chieu) }}</td>
                                        <td class="align-middle text-center">{{ item.ngay_chieu }}</td>
                                        <td class="align-middle text-center">{{ item.thoi_gian_bat_dau }}</td>
                                        <td class="align-middle text-center">{{ item.thoi_gian_ket_thuc }}</td>
                                        <td v-on:click="doiTrangThaiSuatChieu(item)" class="align-middle text-center">
                                            <button v-if="item.tinh_trang == 1" class="btn btn-success w-100"
                                                style="color: white;">
                                                Hoạt Động
                                            </button>
                                            <button v-else class="btn btn-danger w-100" style="color: white;">
                                                Đã Hủy
                                            </button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <!-- <button class="btn btn-primary text-light me-2" data-bs-toggle="modal"
                                                data-bs-target="#taoVeModal" @click="info_ve = item">
                                                Tạo vé
                                            </button> -->
                                            <button class="btn btn-info text-light me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal" @click="edit_suat_chieu = item">
                                                Cập nhật
                                            </button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal" @click="del_suat_chieu = item">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Thêm Mới -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Suất Chiếu Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phim</label>
                            <select class="form-select" v-model="create_suat_chieu.id_phim">
                                <option v-for="phim in list_phim" :key="phim.id" :value="phim.id">{{ phim.ten_phim }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phòng Chiếu</label>
                            <select class="form-select" v-model="create_suat_chieu.id_phong_chieu">
                                <option v-for="phong in list_phong_chieu" :key="phong.id" :value="phong.id">{{
                                    phong.ten_phong
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Giờ Bắt Đầu</label>
                            <input type="time" class="form-control" v-model="create_suat_chieu.thoi_gian_bat_dau" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Giờ Kết Thúc</label>
                            <input type="time" class="form-control" v-model="create_suat_chieu.thoi_gian_ket_thuc" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Chiếu</label>
                            <input type="date" class="form-control" v-model="create_suat_chieu.ngay_chieu" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tình Trạng</label>
                            <select class="form-select" v-model="create_suat_chieu.tinh_trang">
                                <option value="1">Hoạt Động</option>
                                <option value="0">Đã Hủy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" v-on:click="themSuatChieu()">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Thông Tin Suất Chiếu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phim</label>
                            <select class="form-select" v-model="edit_suat_chieu.id_phim">
                                <option v-for="phim in list_phim" :key="phim.id" :value="phim.id">{{ phim.ten_phim }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phòng Chiếu</label>
                            <select class="form-select" v-model="edit_suat_chieu.id_phong_chieu">
                                <option v-for="phong in list_phong_chieu" :key="phong.id" :value="phong.id">{{
                                    phong.ten_phong
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Giờ Bắt Đầu</label>
                            <input type="time" class="form-control" v-model="edit_suat_chieu.thoi_gian_bat_dau" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Giờ Kết Thúc</label>
                            <input type="time" class="form-control" v-model="edit_suat_chieu.thoi_gian_ket_thuc" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Chiếu</label>
                            <input type="date" class="form-control" v-model="edit_suat_chieu.ngay_chieu" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tình Trạng</label>
                            <select class="form-select" v-model="edit_suat_chieu.tinh_trang">
                                <option value="1">Hoạt Động</option>
                                <option value="0">Đã Hủy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        v-on:click="capNhatSuatChieu()">
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Xóa Suất Chiếu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa suất chiếu phim
                        <strong>{{ del_suat_chieu.ten_phim }}</strong> vào ngày <strong>{{ del_suat_chieu.ngay_chieu
                            }}</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaSuatChieu()">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Tạo Vé -->
    <div class="modal fade" id="taoVeModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tạo Vé Cho Suất Chiếu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn tạo vé cho phim
                        <strong>{{ info_ve.ten_phim }}</strong> vào ngày <strong>{{ info_ve.ngay_chieu
                            }}</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="taoVeAuto()">
                        Xác nhận
                    </button>
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
            list_suat_chieu: [
                {
                    id: 4,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-08',
                    thoi_gian_bat_dau: '13:20',
                    thoi_gian_ket_thuc: '15:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                }
            ],
            list_phim: [],
            list_phong_chieu: [],
            create_suat_chieu: {
                id_phim: '',
                id_phong_chieu: '',
                ngay_chieu: '',
                thoi_gian_bat_dau: '',
                thoi_gian_ket_thuc: '',
                gia_ve: '',
                tinh_trang: 1
            },
            edit_suat_chieu: {},
            del_suat_chieu: {},
            info_ve: {},
            searchQuery: "",
        };
    },
    mounted() {

        //lấy danh sách suất chiếu từ localStorage
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


        //lấy danh sách phòng chiếu từ localStorage
        const storedPhong = localStorage.getItem('list_phong_chieu');
        if (storedPhong) {
            this.list_phong_chieu = JSON.parse(storedPhong);
        }

        //lấy danh sách ghế từ localStorage
        const storedphim = localStorage.getItem('list_phim');
        if (storedphim) {
            this.list_phim = JSON.parse(storedphim);
        }
    },
    computed: {
    filteredSuatChieu() {
        const q = this.searchQuery.trim().toLowerCase();
        if (!q) return this.list_suat_chieu;
        return this.list_suat_chieu.filter((suat) => {
            const phim = this.getTenPhim(suat.id_phim).toLowerCase();
            const phong = this.getTenPhong(suat.id_phong_chieu).toLowerCase();
            return (
                phim.includes(q) ||
                phong.includes(q) ||
                suat.ngay_chieu.toLowerCase().includes(q)
            );
        });
    },
},
    methods: {
        themSuatChieu() {
            const sc = this.create_suat_chieu;

            // Kiểm tra nếu người dùng chưa nhập gì
            if (
                !sc.id_phim &&
                !sc.id_phong_chieu &&
                !sc.ngay_chieu &&
                !sc.thoi_gian_bat_dau &&
                !sc.thoi_gian_ket_thuc
            ) {
                this.$toast.error("⚠️ Vui lòng nhập đầy đủ thông tin suất chiếu!");
                return;
            }

            // Kiểm tra từng trường cụ thể
            if (!sc.id_phim) {
                this.$toast.error("⚠️ Vui lòng chọn phim!");
                return;
            }
            if (!sc.id_phong_chieu) {
                this.$toast.error("⚠️ Vui lòng chọn phòng chiếu!");
                return;
            }
            if (!sc.ngay_chieu) {
                this.$toast.error("⚠️ Vui lòng chọn ngày chiếu!");
                return;
            }
            if (!sc.thoi_gian_bat_dau) {
                this.$toast.error("⚠️ Vui lòng nhập giờ bắt đầu!");
                return;
            }
            if (!sc.thoi_gian_ket_thuc) {
                this.$toast.error("⚠️ Vui lòng nhập giờ kết thúc!");
                return;
            }

            // Validate giờ bắt đầu < giờ kết thúc
            if (sc.thoi_gian_bat_dau >= sc.thoi_gian_ket_thuc) {
                this.$toast.error("⚠️ Giờ bắt đầu phải nhỏ hơn giờ kết thúc!");
                return;
            }

            // Tạo suất chiếu mới
            const newSuatChieu = {
                ...sc,
                id: Date.now(),
            };

            // Thêm vào danh sách
            this.list_suat_chieu.push(newSuatChieu);

            // Lưu localStorage
            localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));

            // Reset form
            this.create_suat_chieu = {
                id_phim: '',
                id_phong_chieu: '',
                ngay_chieu: '',
                thoi_gian_bat_dau: '',
                thoi_gian_ket_thuc: '',
                gia_ve: '',
                tinh_trang: 1
            };

            // Ẩn modal (Bootstrap)
            const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
            modal?.hide?.();

            this.$toast.success("✅ Thêm suất chiếu thành công!");
        },

        getTenPhong(id) {
            const phong = this.list_phong_chieu.find(p => p.id === id);
            return phong ? phong.ten_phong : "Không rõ";
        },
        getTenPhim(id) {
            const phim = this.list_phim.find(p => p.id === id);
            return phim ? phim.ten_phim : "Không rõ";
        },

        capNhatSuatChieu() {
            // Tìm vị trí suất chiếu cần cập nhật trong list_suat_chieu bằng id
            const index = this.list_suat_chieu.findIndex(suatChieu => suatChieu.id === this.edit_suat_chieu.id);

            if (index !== -1) {
                // Cập nhật lại toàn bộ thông tin
                this.list_suat_chieu[index] = { ...this.edit_suat_chieu };

                localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
                this.$toast?.success?.("Cập nhật suất chiếu thành công!");
            } else {
                alert("⚠ Không tìm thấy suất chiếu để cập nhật.");
            }

            // Xóa form tạm nếu cần
            this.edit_suat_chieu = {};
        },

        xoaSuatChieu() {
            // Kiểm tra xem del_suat_chieu có tồn tại trong list không
            const index = this.list_suat_chieu.findIndex(suatChieu => suatChieu.id === this.del_suat_chieu.id);

            // Nếu tìm thấy, xóa suất chiếu khỏi danh sách
            if (index !== -1) {
                this.list_suat_chieu.splice(index, 1); // Xóa tại vị trí index
                localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
                this.$toast?.success?.("Đã xóa suất chiếu khỏi danh sách!");

            } else {
                alert("⚠ Không tìm thấy suất chiếu để xóa.");
            }

            // Reset lại del_suat_chieu
            this.del_suat_chieu = {};
        },
    },
};
</script>

<style></style>