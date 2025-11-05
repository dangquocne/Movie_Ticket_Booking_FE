<template>
  <div class="row">
    <!-- FORM THÊM DỊCH VỤ -->
    <div class="col-lg-4">
      <div class="card border-info border-top border-3">
        <div class="card-header">
          <h4 class="card-title my-1">THÊM DỊCH VỤ</h4>
        </div>
        <div class="card-body">
          <div class="mb-2">
            <label class="mb-1">Tên dịch vụ</label>
            <input v-model="create_dich_vu.ten_dich_vu" class="form-control" type="text"
              placeholder="Nhập tên dịch vụ" />
          </div>
          <div class="mb-2">
            <label class="mb-1">Hình ảnh</label>
            <input v-model="create_dich_vu.hinh_anh" class="form-control" type="text"
              placeholder="Nhập link hình ảnh" />
          </div>
          <div class="mb-2">
            <label class="mb-1">Giá dịch vụ</label>
            <input v-model="create_dich_vu.gia" class="form-control" type="number" placeholder="Nhập giá dịch vụ" />
          </div>
          <div class="mb-2">
            <label class="mb-1">Mô tả dịch vụ</label>
            <textarea v-model="create_dich_vu.mo_ta" class="form-control" rows="3"
              placeholder="Nhập mô tả dịch vụ"></textarea>
          </div>
          <div class="mb-2">
            <label class="mb-1">Tình trạng</label>
            <select v-model="create_dich_vu.tinh_trang" class="form-select">
              <option value="1">Hiển thị</option>
              <option value="0">Tạm tắt</option>
            </select>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <button type="button" class="btn btn-sm btn-primary" @click="themDichVu">Thêm Mới</button>
        </div>
      </div>
    </div>

    <!-- DANH SÁCH DỊCH VỤ -->
    <div class="col-lg-8">
      <div class="card border-info border-top border-3">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h4 class="card-title my-1">DANH SÁCH DỊCH VỤ</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="text-center bg-primary text-light">
                <tr>
                  <th>#</th>
                  <th>Tên dịch vụ</th>
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Mô tả</th>
                  <th>Tình trạng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in list_dich_vu" :key="index">
                  <tr>
                    <td class="align-middle text-center">{{ index + 1 }}</td>
                    <td class="align-middle">{{ item.ten_dich_vu }}</td>
                    <td class="align-middle">
                      <img :src="item.hinh_anh" alt="" class="img-fluid">
                    </td>
                    <td class="align-middle ">{{ formatVND(item.gia) }}</td>
                    <td class="align-middle text-wrap">{{ item.mo_ta }}</td>
                    <td @click="doiTrangThai(item)" class="text-center align-middle" style="width: 100px;">
                      <button v-if="item.tinh_trang == 1" class="btn btn-sm btn-success" type="button">
                        <i class="fa-solid fa-square-check"></i> Hiển thị
                      </button>
                      <button v-else class="btn btn-sm btn-warning" type="button">
                        <i class="fa-solid fa-square-xmark"></i> Tạm tắt
                      </button>
                    </td>
                    <td class="text-nowrap align-middle text-center" style="width: 150px;">
                      <button type="button" class="btn btn-sm btn-info text-light" data-bs-toggle="modal"
                        data-bs-target="#capNhatModal" v-on:click="Object.assign(edit_dich_vu, item)">
                        Cập Nhật
                      </button>
                      <button type="button" class="ms-2 btn btn-sm btn-danger" data-bs-toggle="modal"
                        data-bs-target="#xoaModal" v-on:click="Object.assign(del_dich_vu, item)">
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

    <!-- MODAL CẬP NHẬT -->
    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Cập nhật dịch vụ</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <label>Tên dịch vụ</label>
            <input v-model="edit_dich_vu.ten_dich_vu" class="form-control" type="text" />
            <label class="mt-2">Hình ảnh</label>
            <input v-model="edit_dich_vu.hinh_anh" class="form-control" type="text" />
            <label class="mt-2">Giá dịch vụ</label>
            <input v-model="edit_dich_vu.gia" class="form-control" type="number" />
            <label class="mt-2">Mô tả dịch vụ</label>
            <textarea v-model="edit_dich_vu.mo_ta" class="form-control" rows="3"></textarea>
            <label class="mt-2">Tình trạng</label>
            <select v-model="edit_dich_vu.tinh_trang" class="form-select">
              <option value="1">Hiển thị</option>
              <option value="0">Tạm tắt</option>
            </select>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button class="btn btn-success" data-bs-dismiss="modal" @click="capNhatDichVu">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL XÓA -->
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Xóa dịch vụ</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger">
              Bạn có chắc muốn xóa <b>{{ del_dich_vu.ten_dich_vu }}</b> không?
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button class="btn btn-danger" data-bs-dismiss="modal" @click="xoaDichVu">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list_dich_vu: [],
      create_dich_vu: { ten_dich_vu: "", hinh_anh: "", gia: "", mo_ta: "", tinh_trang: 1 },
      edit_dich_vu: {},
      del_dich_vu: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    formatVND(n) {
      return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n || 0);
    },
    saveData() {
      localStorage.setItem("list_dich_vu", JSON.stringify(this.list_dich_vu));
    },
    loadData() {
      const data = localStorage.getItem("list_dich_vu");
      if (data) {
        this.list_dich_vu = JSON.parse(data);
      } else {
        // Dữ liệu mẫu mặc định
        this.list_dich_vu = [
          {
            id: Date.now() + 1,
            ten_dich_vu: "Bắp Rang Bơ",
            hinh_anh: "https://afamilycdn.com/Images/Uploaded/Share/2010/06/07/baprrang.jpg",
            gia: 100000,
            mo_ta: "Bắp rang bơ nóng hổi, giòn rụm, thơm lừng hương bơ - món ăn vặt hoàn hảo cho mỗi buổi xem phim",
            tinh_trang: 1
          },
          {
            id: Date.now() + 2,
            ten_dich_vu: "Nước Ngọt Coca-Cola",
            hinh_anh: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2020/072020/KICHI_VOUCHER_350x495.jpg",
            gia: 200000,
            mo_ta: "Coca-Cola mát lạnh, giải khát tức thì - lựa chọn hoàn hảo khi thưởng thức phim.",
            tinh_trang: 1
          }
        ];
        this.saveData(); // Lưu dữ liệu mẫu vào localStorage
      }
    },

    // ✅ HÀM KIỂM TRA DỮ LIỆU + TRÙNG TÊN
    validateDichVu(dv,isEdit = false) {
      const missing = [];
      if (!dv.ten_dich_vu) missing.push("Tên dịch vụ");
      if (!dv.hinh_anh) missing.push("Hình ảnh");
      if (!dv.gia) missing.push("Giá dịch vụ");
      if (!dv.mo_ta) missing.push("Mô tả");

      if (missing.length === 4) return "⚠️ Vui lòng nhập đầy đủ thông tin!";
      if (missing.length > 0) return `⚠️ Không được để trống: ${missing.join(", ")}`;

      // ✅ Kiểm tra định dạng link hình ảnh
      const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;
      if (!urlPattern.test(dv.hinh_anh.trim())) {
        return "⚠️ Link hình ảnh không hợp lệ! Hãy nhập đường dẫn ảnh có đuôi .jpg, .png, .gif,...";
      }

      // ✅ Kiểm tra giá hợp lệ (phải là số > 0)
      if (isNaN(dv.gia) || dv.gia <= 0) {
        return "⚠️ Giá dịch vụ phải là số lớn hơn 0!";
      }

      // ✅ Kiểm tra trùng tên (không phân biệt hoa thường)
      const ten = dv.ten_dich_vu.trim().toLowerCase();
      const trungTen = this.list_dich_vu.some(
        (item) =>
          item.ten_dich_vu.trim().toLowerCase() === ten &&
          (!isEdit || item.id !== dv.id) // bỏ qua chính nó khi cập nhật
      );
      if (trungTen) {
        return "⚠️ Tên dịch vụ đã tồn tại! Vui lòng nhập tên khác.";
      }

      return null;
    },
    themDichVu() {
      const err = this.validateDichVu(this.create_dich_vu);
      if (err) return this.$toast.error(err);

      const newDV = { ...this.create_dich_vu, id: Date.now() };
      this.list_dich_vu.push(newDV);
      this.saveData();
      this.$toast.success("✅ Thêm dịch vụ thành công!");
      this.create_dich_vu = { ten_dich_vu: "", hinh_anh: "", gia: "", mo_ta: "", tinh_trang: 1 };
    },
    capNhatDichVu() {
      const err = this.validateDichVu(this.edit_dich_vu);
      if (err) return this.$toast.error(err);

      const index = this.list_dich_vu.findIndex(dv => dv.id === this.edit_dich_vu.id);
      if (index !== -1) this.list_dich_vu[index] = { ...this.edit_dich_vu };
      this.saveData();
      this.$toast.success("✅ Cập nhật thành công!");
    },
    xoaDichVu() {
      this.list_dich_vu = this.list_dich_vu.filter(dv => dv.id !== this.del_dich_vu.id);
      this.saveData();
      this.$toast.success("🗑️ Đã xóa dịch vụ!");
    },

    doiTrangThai(dv) {
      dv.tinh_trang = dv.tinh_trang == 1 ? 0 : 1;
      this.saveData();
      this.$toast.info(`Trạng thái đổi sang: ${dv.tinh_trang == 1 ? "Hiển thị" : "Tạm tắt"}`);
    },
  },
};
</script>
