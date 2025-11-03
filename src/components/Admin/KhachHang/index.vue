<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card radius-10 border-top border-0 border-3 border-info">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h4 class="mt-2"><b>DANH SÁCH KHÁCH HÀNG</b></h4>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal" @click="moModalThemMoi">
            <i class="bi bi-person-plus"></i> Thêm Khách Hàng
          </button>
        </div>

        <div class="card-body table-responsive">
          <div class="d-flex gap-2 mb-3">
            <input
              v-model="search_text"
              type="text"
              class="form-control"
              placeholder="Tìm kiếm theo tên, email, số điện thoại..."
            />
            <select v-model="filter_status" class="form-select" style="max-width: 200px;">
              <option value="">Tất cả</option>
              <option value="active">Đã kích hoạt</option>
              <option value="inactive">Chưa kích hoạt</option>
              <option value="blocked">Đã khóa</option>
            </select>
          </div>

          <table class="table table-bordered table-hover">
            <thead>
              <tr class="bg-primary text-light text-nowrap">
                <th class="text-center">#</th>
                <th class="text-center">Họ Và Tên</th>
                <th class="text-center">Email</th>
                <th class="text-center">Số Điện Thoại</th>
                <th class="text-center">Ngày Sinh</th>
                <th class="text-center">Kích Hoạt</th>
                <th class="text-center">Tình Trạng</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list_khach_hang_loc" :key="item.id" class="text-nowrap">
                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ item.ho_va_ten }}</td>
                <td>{{ item.email }}</td>
                <td class="text-center">{{ item.so_dien_thoai }}</td>
                <td class="text-center">{{ item.ngay_sinh }}</td>
                <td class="text-center">
                  <button
                    :class="item.is_active ? 'btn btn-warning w-100 text-light' : 'btn btn-secondary w-100'"
                    @click="toggleKichHoat(item)"
                  >
                    {{ item.is_active ? 'Đã kích hoạt' : 'Chưa kích hoạt' }}
                  </button>
                </td>
                <td class="text-center" @click="doiTrangThai(item)">
                  <button
                    :class="item.is_block ? 'btn btn-danger w-100 text-light' : 'btn btn-info w-100 text-light'"
                  >
                    {{ item.is_block ? 'Đã khóa' : 'Chưa khóa' }}
                  </button>
                </td>
                <td class="text-center" style="width: 200px;">
                  <button
                    class="btn btn-success me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                    @click="edit_khach_hang = { ...item }"
                  >
                    Cập nhật
                  </button>
                  <button
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    @click="del_khach_hang = { ...item }"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
              <tr v-if="!list_khach_hang_loc.length">
                <td colspan="8" class="text-center text-muted py-3">Không có dữ liệu phù hợp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Thêm -->
  <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thêm Khách Hàng</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Họ Và Tên</label>
              <input v-model="create_khach_hang.ho_va_ten" type="text" class="form-control" />
              <small v-if="errors.ho_va_ten" class="text-danger">{{ errors.ho_va_ten }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label>Email</label>
              <input v-model="create_khach_hang.email" type="email" class="form-control" />
              <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label>Số Điện Thoại</label>
              <input v-model="create_khach_hang.so_dien_thoai" type="text" class="form-control" />
              <small v-if="errors.so_dien_thoai" class="text-danger">{{ errors.so_dien_thoai }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label>Ngày Sinh</label>
              <input v-model="create_khach_hang.ngay_sinh" type="date" class="form-control" />
              <small v-if="errors.ngay_sinh" class="text-danger">{{ errors.ngay_sinh }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label>CCCD</label>
              <input v-model="create_khach_hang.cccd" type="text" class="form-control" />
              <small v-if="errors.cccd" class="text-danger">{{ errors.cccd }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label>Mật Khẩu</label>
              <input v-model="create_khach_hang.mat_khau" type="password" class="form-control" />
              <small v-if="errors.mat_khau" class="text-danger">{{ errors.mat_khau }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label>Xác Nhận Mật Khẩu</label>
              <input v-model="create_khach_hang.xac_nhan_mat_khau" type="password" class="form-control" />
              <small v-if="errors.xac_nhan_mat_khau" class="text-danger">{{ errors.xac_nhan_mat_khau }}</small>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button class="btn btn-primary" @click="themKhachHang">Thêm mới</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Cập nhật -->
  <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cập Nhật Thông Tin Khách Hàng</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Họ Và Tên</label>
              <input v-model="edit_khach_hang.ho_va_ten" type="text" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label>Email</label>
              <input v-model="edit_khach_hang.email" type="email" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label>Số Điện Thoại</label>
              <input v-model="edit_khach_hang.so_dien_thoai" type="text" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label>Ngày Sinh</label>
              <input v-model="edit_khach_hang.ngay_sinh" type="date" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label>CCCD</label>
              <input v-model="edit_khach_hang.cccd" type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button class="btn btn-success" @click="capNhatKhachHang">Cập nhật</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Xóa -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Xóa Khách Hàng</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger">
            Bạn có chắc chắn muốn xóa khách hàng <b>{{ del_khach_hang.ho_va_ten }}</b>?
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button class="btn btn-danger" @click="xoaKhachHang">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list_khach_hang: [],
      search_text: "",
      filter_status: "",
      create_khach_hang: {},
      edit_khach_hang: {},
      del_khach_hang: {},
      errors: {},
    };
  },
  mounted() {
    this.layDataKhachHang();
  },
  computed: {
    list_khach_hang_loc() {
      return this.list_khach_hang.filter((kh) => {
        const text = this.search_text.toLowerCase();
        const match =
          kh.ho_va_ten?.toLowerCase().includes(text) ||
          kh.email?.toLowerCase().includes(text) ||
          kh.so_dien_thoai?.toLowerCase().includes(text);
        if (this.filter_status === "active") return match && kh.is_active;
        if (this.filter_status === "inactive") return match && !kh.is_active;
        if (this.filter_status === "blocked") return match && kh.is_block;
        return match;
      });
    },
  },
  methods: {
    moModalThemMoi() {
      this.create_khach_hang = {};
      this.errors = {};
    },
    validateForm(data) {
      const errs = {};
      if (!data.ho_va_ten?.trim()) errs.ho_va_ten = "Vui lòng nhập họ tên!";
      if (!data.email?.trim()) errs.email = "Vui lòng nhập email!";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errs.email = "Email không hợp lệ!";
      if (!data.so_dien_thoai?.trim()) errs.so_dien_thoai = "Vui lòng nhập số điện thoại!";
      else if (!/^(0|\+84)\d{9,10}$/.test(data.so_dien_thoai))
        errs.so_dien_thoai = "Số điện thoại không hợp lệ!";
      if (!data.ngay_sinh) errs.ngay_sinh = "Vui lòng chọn ngày sinh!";
      if (!data.cccd?.trim()) errs.cccd = "Vui lòng nhập CCCD!";
      else if (!/^\d{9,12}$/.test(data.cccd)) errs.cccd = "CCCD không hợp lệ!";
      if (!data.mat_khau?.trim()) errs.mat_khau = "Vui lòng nhập mật khẩu!";
      else if (data.mat_khau.length < 6) errs.mat_khau = "Mật khẩu phải có ít nhất 6 ký tự!";
      if (!data.xac_nhan_mat_khau?.trim())
        errs.xac_nhan_mat_khau = "Vui lòng xác nhận mật khẩu!";
      else if (data.xac_nhan_mat_khau !== data.mat_khau)
        errs.xac_nhan_mat_khau = "Mật khẩu xác nhận không khớp!";
      this.errors = errs;
      return Object.keys(errs).length === 0;
    },
    saveToStorage() {
      localStorage.setItem("list_khach_hang", JSON.stringify(this.list_khach_hang));
    },
    layDataKhachHang() {
      const data = localStorage.getItem("list_khach_hang");
      this.list_khach_hang = data ? JSON.parse(data) : [];
    },
    themKhachHang() {
      if (!this.validateForm(this.create_khach_hang)) return;
      const newKH = {
        id: Date.now(),
        ...this.create_khach_hang,
        is_active: false,
        is_block: false,
      };
      this.list_khach_hang.push(newKH);
      this.saveToStorage();
      this.$toast.success("Thêm khách hàng thành công!");
      const modal = bootstrap.Modal.getInstance(document.getElementById("addModal"));
      modal.hide();
    },
    capNhatKhachHang() {
      const index = this.list_khach_hang.findIndex((kh) => kh.id === this.edit_khach_hang.id);
      if (index !== -1) {
        this.list_khach_hang[index] = { ...this.edit_khach_hang };
        this.saveToStorage();
        this.$toast.success("Cập nhật thành công!");
      }
      const modal = bootstrap.Modal.getInstance(document.getElementById("updateModal"));
      modal.hide();
    },
    xoaKhachHang() {
      this.list_khach_hang = this.list_khach_hang.filter((kh) => kh.id !== this.del_khach_hang.id);
      this.saveToStorage();
      this.$toast.success("Đã xóa khách hàng!");
      const modal = bootstrap.Modal.getInstance(document.getElementById("deleteModal"));
      modal.hide();
    },
    doiTrangThai(item) {
      item.is_block = !item.is_block;
      this.saveToStorage();
      this.$toast.success(item.is_block ? "Đã khóa khách hàng!" : "Đã mở khóa!");
    },
    toggleKichHoat(item) {
      item.is_active = !item.is_active;
      this.saveToStorage();
      this.$toast.success(item.is_active ? "Đã kích hoạt!" : "Đã tắt kích hoạt!");
    },
  },
};
</script>

<style scoped>
.text-danger {
  font-size: 13px;
}
</style>
