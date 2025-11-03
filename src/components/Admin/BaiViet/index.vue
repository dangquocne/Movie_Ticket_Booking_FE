<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2">DANH SÁCH BÀI VIẾT</h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm bài viết
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
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
                            <tr v-for="(item, index) in list_bai_viet" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.tieu_de }}</td>
                                <td>{{ item.mo_ta_ngan }}</td>
                                <td>{{ item.noi_dung }}</td>
                                <td>
                                    <img :src="item.hinh_anh" style="height: 70px; width: 120px; object-fit: cover;" />
                                </td>
                                <td>{{ item.tag }}</td>
                                <td @click="doiTrangThai(item)">
                                    <button :class="item.tinh_trang == 1 ? 'btn btn-success' : 'btn btn-warning'">
                                        {{ item.tinh_trang == 1 ? 'Hiển Thị' : 'Tạm Tắt' }}
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-info text-light me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" @click="edit_bai_viet = { ...item, index }">Cập
                                        nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        @click="del_bai_viet = { ...item }">Xóa</button>
                                </td>
                            </tr>
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
            this.list_bai_viet = JSON.parse(localStorage.getItem('bai_viet')) || [];
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
        capNhatBaiViet() {
            if (!this.validate(this.edit_bai_viet)) return;

            const index = this.edit_bai_viet.index;
            if (index !== undefined && index !== -1) {
                this.list_bai_viet[index] = { ...this.edit_bai_viet };
                delete this.list_bai_viet[index].index; // xóa key tạm không cần lưu
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
