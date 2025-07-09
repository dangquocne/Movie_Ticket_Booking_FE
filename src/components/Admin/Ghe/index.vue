<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    <h4 class="my-1">THÊM GHẾ MỚI</h4>
                </div>
                <div class="card-body">
                    <div class="col-md-12 mb-2">
                        <label>Tên Ghế</label>
                        <input type="text" class="form-control mt-1" v-model="create_ghe.ten_ghe"
                            placeholder="Nhập tên ghế" />
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Giá Ghế</label>
                        <input type="text" class="form-control mt-1" v-model="create_ghe.gia_ghe"
                            placeholder="Nhập giá ghế" />
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Phòng Chiếu</label>
                        <select class="form-select mt-1" v-model="create_ghe.id_phong_chieu">
                            <option value="">Chọn Phòng Chiếu</option>
                            <template v-for="(value, index) in list_phong_chieu" :key="index">
                                <option :value="value.id">{{ value.ten_phong }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Tình Trạng</label>
                        <select class="form-select mt-1" v-model="create_ghe.tinh_trang">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn  btn-primary" v-on:click="themGhe()">Thêm ghế</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="my-1">DANH SÁCH GHẾ</h4>
                </div>
                <div class="card-body table-responsive">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search....">
                        <button class="btn  btn-success input-group-text" style="width: 100px;">Tìm kiếm</button>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="bg-primary text-light text-nowrap">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Ghế</th>
                                    <th class="text-center">Giá Ghế</th>
                                    <th class="text-center">Phòng Chiếu</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in list_ghe" :key="index">
                                    <tr class="text-nowrap">
                                        <th class="align-middle text-center" style="width: 30px;">{{ index + 1 }}</th>
                                        <td class="align-middle text-center">{{ item.ten_ghe }}</td>
                                        <td class="align-middle text-center">{{ item.gia_ghe }}</td>
                                        <td class="align-middle">{{ getTenPhong(item.id_phong_chieu) }}</td>
                                        <td @click="doiTrangThai(item)" class="align-middle text-center"
                                            style="width: 150px;">
                                            <button v-if="item.tinh_trang == 1" class="btn  btn-success w-100"
                                                style="color: white;">
                                                Hoạt Động
                                            </button>
                                            <button v-else class="btn  btn-warning w-100" style="color: white;">
                                                Tạm Dừng
                                            </button>
                                        </td>
                                        <td class="align-middle text-center" style="width: 150px;">
                                            <button class="btn  btn-info text-light me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal" @click="edit_ghe = item">
                                                Cập nhật
                                            </button>
                                            <button class="btn  btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal" @click="del_ghe = item">
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

    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Thông Tin Ghế</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label>Tên Ghế</label>
                        <input type="text" class="form-control mt-1" v-model="edit_ghe.ten_ghe"
                            placeholder="Nhập tên ghế" />
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Giá Ghế</label>
                        <input type="text" class="form-control mt-1" v-model="edit_ghe.gia_ghe"
                            placeholder="Nhập tên ghế" />
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Phòng Chiếu</label>
                        <select class="form-select mt-1" v-model="edit_ghe.id_phong_chieu">
                            <option value="">Chọn Phòng Chiếu</option>
                            <template v-for="(value, index) in list_phong_chieu" :key="index">
                                <option :value="value.id">{{ value.ten_phong }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Tình Trạng</label>
                        <select class="form-select mt-1" v-model="edit_ghe.tinh_trang">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn  btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn  btn-primary" data-bs-dismiss="modal" v-on:click="capNhatGhe()">
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
                    <h5 class="modal-title">Xóa Ghế</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa ghế
                        <strong>{{ del_ghe.ten_ghe }}</strong> tại phòng <strong>{{ del_ghe.ten_phong }}</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn  btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn  btn-danger" data-bs-dismiss="modal" v-on:click="xoaGhe()">
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
            list_phong_chieu: [],
            list_ghe: [{
                id: 1,
                ten_ghe: 'A1',
                gia_ghe: 45000,
                id_phong_chieu: 1,
                ten_phong: 'Phòng 1',
                tinh_trang: '1'
            }],

            create_ghe: {
                tinh_trang: '1'
            },
            edit_ghe: {},
            del_ghe: {},
        };
    },

    mounted() {
        // this.layDataGhe();
        // this.layDataPhong();
        //lấy danh sách phòng từ localStorage
        const stored = localStorage.getItem('list_phong_chieu');
        if (stored) {
            this.list_phong_chieu = JSON.parse(stored);
        }

        //lấy danh sách ghế từ localStorage
        const storedGhe = localStorage.getItem('list_ghe');
        if (storedGhe) {
            this.list_ghe = JSON.parse(storedGhe);
        }

        
    },
    methods: {

        themGhe() {
            // Kiểm tra thông tin cơ bản
            if (!this.create_ghe.ten_ghe) {
                alert("Vui lòng nhập đầy đủ tên ghế!");
                return;
            }

            // Tạo bản sao của ghế vừa nhập, kèm ID tạm
            const newGhe = {
                ...this.create_ghe,
                id: Date.now(), // ID giả, để phân biệt
            };

            // Thêm ghế vào danh sách
            this.list_ghe.push(newGhe);

            // Lưu vào localStorage
            localStorage.setItem('list_ghe', JSON.stringify(this.list_ghe));

            // Reset form nhập
            this.create_ghe = {};

            // Ẩn modal (nếu dùng Bootstrap)
            const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
            modal?.hide?.();

            // Thông báo đơn giản
            this.$toast.success("Ghế đã được thêm thành công!");
            console.log("Ghế đã được thêm:", newGhe);
        },

        getTenPhong(id) {
            const phong = this.list_phong_chieu.find(p => p.id === id);
            return phong ? phong.ten_phong : "Không rõ";
        },

        capNhatGhe() {
            // Tìm vị trí ghế cần cập nhật trong list_ghe bằng id
            const index = this.list_ghe.findIndex(ghe => ghe.id === this.edit_ghe.id);

            if (index !== -1) {
                // Cập nhật lại toàn bộ thông tin
                this.list_ghe[index] = { ...this.edit_ghe };

                localStorage.setItem('list_ghe', JSON.stringify(this.list_ghe));
                this.$toast?.success?.("Cập nhật ghế thành công!");
            } else {
                alert("⚠ Không tìm thấy ghế để cập nhật.");
            }

            // Xóa form tạm nếu cần
            this.edit_ghe = {};
        },

        xoaGhe() {
            // Kiểm tra xem del_ghe có tồn tại trong list không
            const index = this.list_ghe.findIndex(ghe => ghe.id === this.del_ghe.id);

            // Nếu tìm thấy, xóa ghế khỏi danh sách
            if (index !== -1) {
                this.list_ghe.splice(index, 1); // Xóa tại vị trí index
                localStorage.setItem('list_ghe', JSON.stringify(this.list_ghe));
                this.$toast?.success?.("Đã xóa ghế khỏi danh sách!");

            } else {
                alert("⚠ Không tìm thấy ghế để xóa.");
            }

            // Reset lại del_ghe
            this.del_ghe = {};
        },
        doiTrangThai(item) {
            // Chuyển trạng thái: 0 -> 1 -> 2 -> 0
            item.tinh_trang = (item.tinh_trang + 1) % 2;
            localStorage.setItem('list_ghe', JSON.stringify(this.list_ghe));
        },


    },
};
</script>

<style></style>