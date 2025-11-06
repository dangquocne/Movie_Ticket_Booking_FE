<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2">DANH SÁCH BÀI VIẾT</h4>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm bài viết
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table  table-hover">
                        <thead>
                            <tr class="bg-dark text-light text-nowrap">
                                <th>#</th>
                                <th>Tiêu Đề</th>
                                <th>Mô Tả Ngắn</th>
                                <th>Nội Dung</th>
                                <th>Hình Ảnh</th>
                                <th>Tag</th>
                                <th>Trạng Thái</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in list_bai_viet" :key="index">
                                <tr class="">
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle text-wrap">{{ item.tieu_de }}</td>
                                    <td class="align-middle text-wrap">{{ item.mo_ta_ngan }}</td>
                                    <td class="align-middle text-center" style="width: 100px;">
                                        {{ item.noi_dung }}
                                    </td>
                                    <td class="align-middle text-center text-nowrap" style="width: 250px;">
                                        <img :src="item.hinh_anh" alt="Hình Ảnh" class="img-fluid rounded"
                                            style="height: 100px; object-fit: cover; width: 100%;">
                                    </td>
                                    <td class="align-middle text-wrap">{{ item.tag }}</td>
                                    <td @click="doiTrangThai(item)" class="align-middle text-center text-nowrap"
                                        style="width: 100px;">
                                        <button v-if="item.tinh_trang == 1" class="btn btn-success w-100"
                                            style="color: white;">
                                            Hiển Thị
                                        </button>
                                        <button v-else class="btn btn-warning w-100" style="color: white;">
                                            Tạm Tắt
                                        </button>
                                    </td>
                                    <td class="align-middle text-center text-nowrap" style="width: 150px;">
                                        <button class="btn btn-info text-light me-2" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" @click="editBaiViet(item, index)">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                            v-on:click="Object.assign(del_bai_viet, item)">
                                            Xóa Bỏ
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

    <!-- Modal Thêm -->
    <div class="modal fade" id="addModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Thêm Bài Viết Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tiêu đề</label>
                        <input v-model="create_bai_viet.tieu_de" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label>Mô tả ngắn</label>
                        <textarea v-model="create_bai_viet.mo_ta_ngan" class="form-control"></textarea>
                    </div>
                    <div class="mb-2">
                        <label>Nội dung</label>
                        <textarea v-model="create_bai_viet.noi_dung" class="form-control"></textarea>
                    </div>
                    <div class="mb-2">
                        <label>Hình ảnh</label>
                        <input v-model="create_bai_viet.hinh_anh" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label>Tag</label>
                        <input v-model="create_bai_viet.tag" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label>Trạng thái</label>
                        <select v-model="create_bai_viet.tinh_trang" class="form-select">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Tắt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button class="btn btn-primary" @click="themBaiViet">Thêm mới</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Cập Nhật Bài Viết</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tiêu đề</label>
                        <input v-model="edit_bai_viet.tieu_de" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label>Mô tả ngắn</label>
                        <textarea v-model="edit_bai_viet.mo_ta_ngan" class="form-control"></textarea>
                    </div>
                    <div class="mb-2">
                        <label>Nội dung</label>
                        <textarea v-model="edit_bai_viet.noi_dung" class="form-control"></textarea>
                    </div>
                    <div class="mb-2">
                        <label>Hình ảnh</label>
                        <input v-model="edit_bai_viet.hinh_anh" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label>Tag</label>
                        <input v-model="edit_bai_viet.tag" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label>Trạng thái</label>
                        <select v-model="edit_bai_viet.tinh_trang" class="form-select">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Tắt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button class="btn btn-success" @click="capNhatBaiViet">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Xóa Bài Viết</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <p>Bạn có chắc muốn xóa "<b>{{ del_bai_viet.tieu_de }}</b>" không?</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button class="btn btn-danger" @click="xoaBaiViet">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list_bai_viet: [],
            create_bai_viet: { tinh_trang: 1 },
            edit_bai_viet: {},
            del_bai_viet: {}
        }
    },
    mounted() {
        this.getBaiViet();
    },
    methods: {
        getBaiViet() {
            const data = localStorage.getItem('bai_viet');
            if (data) {
                this.list_bai_viet = JSON.parse(data);
            } else {
                // Dữ liệu mẫu mặc định
                this.list_bai_viet = [
                    {
                        tieu_de: "Top 5 bộ phim Việt đáng mong chờ trong năm 2025",
                        mo_ta_ngan: "Danh sách những bộ phim Việt hứa hẹn sẽ gây bão phòng vé năm 2025 với nội dung hấp dẫn và dàn diễn viên chất lượng.",
                        noi_dung: "Nội dung chi tiết bài viết 2",
                        hinh_anh: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/phim_thang_3_2025_01_b87d97a30c.jpg",
                        tag: "phim Việt, 2025, điện ảnh",
                        tinh_trang: 1
                    },
                    {
                        tieu_de: "Bài viết 2",
                        mo_ta_ngan: "Mô tả ngắn bài viết 2",
                        noi_dung: "Nội dung chi tiết bài viết 2",
                        hinh_anh: "https://maac.edu.vn/wp-content/uploads/2022/06/Post_MAAC_5HangPhim_1400x527.jpg",
                        tag: "sự kiện",
                        tinh_trang: 1
                    }
                ];
                this.saveToStorage(); // lưu dữ liệu mẫu vào localStorage
            }
        },
        saveToStorage() {
            localStorage.setItem('bai_viet', JSON.stringify(this.list_bai_viet));
        },
        validate(bv) {
            // Kiểm tra nếu tất cả trường đều trống
            if (
                !bv.tieu_de &&
                !bv.mo_ta_ngan &&
                !bv.noi_dung &&
                !bv.hinh_anh &&
                !bv.tag
            ) {
                this.$toast.error("Không được để trống toàn bộ các trường!");
                return false;
            }
            // Kiểm tra chi tiết từng trường
            if (!bv.tieu_de) { this.$toast.error("Tiêu đề không được để trống!"); return false; }
            if (!bv.mo_ta_ngan) { this.$toast.error("Mô tả ngắn không được để trống!"); return false; }
            if (!bv.noi_dung) { this.$toast.error("Nội dung không được để trống!"); return false; }
            if (!bv.hinh_anh) { this.$toast.error("Hình ảnh không được để trống!"); return false; }
            if (!bv.tag) { this.$toast.error("Tag không được để trống!"); return false; }
            return true;
        },
        themBaiViet() {
            if (!this.validate(this.create_bai_viet)) return;
            this.list_bai_viet.push({ ...this.create_bai_viet });
            this.saveToStorage();
            this.$toast.success("Thêm bài viết thành công!");
            this.create_bai_viet = { tinh_trang: 1 };
            bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
        },
         editBaiViet(item, index) {
        this.edit_bai_viet = { ...item, index }; // copy dữ liệu + lưu index
    },
    capNhatBaiViet() {
        if (!this.validate(this.edit_bai_viet)) return;

        const index = this.edit_bai_viet.index;
        if (index !== undefined && index !== -1) {
            const updatedItem = { ...this.edit_bai_viet };
            delete updatedItem.index; // xóa key tạm
            this.list_bai_viet.splice(index, 1, updatedItem); // cập nhật tại vị trí index
            this.saveToStorage();
            this.$toast.success("Cập nhật thành công!");
            bootstrap.Modal.getInstance(document.getElementById('updateModal')).hide();
        } else {
            this.$toast.error("Không tìm thấy bài viết cần cập nhật!");
        }
    }
        ,
        xoaBaiViet() {
            this.list_bai_viet = this.list_bai_viet.filter(x => x.tieu_de !== this.del_bai_viet.tieu_de);
            this.saveToStorage();
            this.$toast.success("Đã xóa bài viết!");
            bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
        },
        doiTrangThai(item) {
            item.tinh_trang = item.tinh_trang == 1 ? 0 : 1;
            this.saveToStorage();
            this.$toast.success("Đã đổi trạng thái!");
        }
    }
}
</script>
