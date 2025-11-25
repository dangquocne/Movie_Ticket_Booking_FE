  <template>
    <div class="row">
      <div class="col-lg-12">
        <div class="card radius-10 border-top border-0 border-3 border-dark">
          <div class="card-header d-flex justify-content-between">
            <h4 class="mt-2"><b>DANH SÁCH NHÂN VIÊN</b></h4>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal" @click="resetForm">
              Thêm nhân viên
            </button>
          </div>

          <div class="card-body table-responsive">
            <div class="input-group mb-3">
              <input v-model="search" type="text" class="form-control" placeholder="Tìm kiếm nhân viên..." />
            </div>

            <table class="table table-hover">
              <thead>
                <tr class="bg-dark text-light text-nowrap">
                  <th class="text-center">#</th>
                  <th class="text-center">Họ Và Tên</th>
                  <th class="text-center">Email</th>
                  <th class="text-center">Số Điện Thoại</th>
                  <th class="text-center">Địa Chỉ</th>
                  <th class="text-center">Ngày Sinh</th>
                  <th class="text-center">Chức Vụ</th>
                  <th class="text-center">Tình Trạng</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in filteredNhanVien" :key="item.id">
                  <tr class="text-nowrap">
                    <th class="align-middle text-center">{{ index + 1 }}</th>
                    <td class="align-middle">{{ item.ho_va_ten }}</td>
                    <td class="align-middle">{{ item.email }}</td>
                    <td class="align-middle text-center">{{ item.so_dien_thoai }}</td>
                    <td class="align-middle">{{ item.dia_chi }}</td>
                    <td class="align-middle text-center">{{ item.ngay_sinh }}</td>
                    <td class="align-middle">{{ getTenChucVu(item.chuc_vu_id) }}</td>
                    <td @click="doiTrangThai(item)" class="align-middle text-center">
                      <button
                        :class="item.tinh_trang == 1 ? 'btn btn-info w-100 text-white' : 'btn btn-warning w-100 text-white'">
                        {{ item.tinh_trang == 1 ? 'Hoạt động' : 'Tạm tắt' }}
                      </button>
                    </td>
                    <td class="align-middle text-center">
                      <button class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#updateModal"
                        @click="Object.assign(edit_nhan_vien, item)">
                        Cập nhật
                      </button>
                      <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"
                        @click="Object.assign(del_nhan_vien, item)">
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

    <!-- Modal Thêm -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Thêm Nhân Viên Mới</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- Họ tên -->
              <div class="col-md-6 mb-3">
                <label>Họ Và Tên</label>
                <input v-model="create_nhan_vien.ho_va_ten" type="text" class="form-control" />
                <small v-if="errors.ho_va_ten" class="text-danger">{{ errors.ho_va_ten }}</small>
              </div>

              <!-- Email -->
              <div class="col-md-6 mb-3">
                <label>Email</label>
                <input v-model="create_nhan_vien.email" type="email" class="form-control" />
                <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
              </div>

              <!-- Số điện thoại -->
              <div class="col-md-6 mb-3">
                <label>Số Điện Thoại</label>
                <input v-model="create_nhan_vien.so_dien_thoai" type="text" class="form-control" />
                <small v-if="errors.so_dien_thoai" class="text-danger">{{ errors.so_dien_thoai }}</small>
              </div>

              <!-- Ngày sinh -->
              <div class="col-md-6 mb-3">
                <label>Ngày Sinh</label>
                <input v-model="create_nhan_vien.ngay_sinh" type="date" class="form-control" />
              </div>

              <!-- Địa chỉ -->
              <div class="col-md-6 mb-3">
                <label>Địa Chỉ</label>
                <input v-model="create_nhan_vien.dia_chi" type="text" class="form-control" />
              </div>

              <!-- Chức vụ -->
              <div class="col-md-6 mb-3">
                <label>Chức Vụ</label>
                <select v-model="create_nhan_vien.chuc_vu_id" class="form-select">
                  <option disabled value="">-- Chọn chức vụ --</option>
                  <option v-for="cv in list_chuc_vu" :key="cv.id" :value="cv.id">{{ cv.ten_chuc_vu }}</option>
                </select>
                <small v-if="errors.chuc_vu_id" class="text-danger">{{ errors.chuc_vu_id }}</small>
              </div>

              <!-- Mật khẩu -->
              <div class="col-md-6 mb-3">
                <label>Mật khẩu</label>
                <input v-model="create_nhan_vien.mat_khau" type="password" class="form-control" />
                <small v-if="errors.mat_khau" class="text-danger">{{ errors.mat_khau }}</small>
              </div>

              <!-- Xác nhận mật khẩu -->
              <div class="col-md-6 mb-3">
                <label>Xác Nhận Mật Khẩu</label>
                <input v-model="create_nhan_vien.xac_nhan_mat_khau" type="password" class="form-control" />
                <small v-if="errors.xac_nhan_mat_khau" class="text-danger">{{ errors.xac_nhan_mat_khau }}</small>
              </div>

              <!-- Role ẩn -->
              <input v-model="create_nhan_vien.role" type="hidden" />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button class="btn btn-primary" @click="themNhanVien">Thêm mới</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Cập Nhật Nhân Viên</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label>Họ Và Tên</label>
                <input v-model="edit_nhan_vien.ho_va_ten" type="text" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label>Email</label>
                <input v-model="edit_nhan_vien.email" type="email" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label>Số Điện Thoại</label>
                <input v-model="edit_nhan_vien.so_dien_thoai" type="text" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label>Ngày Sinh</label>
                <input v-model="edit_nhan_vien.ngay_sinh" type="date" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label>Địa Chỉ</label>
                <input v-model="edit_nhan_vien.dia_chi" type="text" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label>Chức Vụ</label>
                <select v-model="edit_nhan_vien.chuc_vu_id" class="form-select">
                  <option disabled value="">-- Chọn chức vụ --</option>
                  <option v-for="cv in list_chuc_vu" :key="cv.id" :value="cv.id">{{ cv.ten_chuc_vu }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button class="btn btn-success" @click="capNhatNhanVien" data-bs-dismiss="modal">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Xóa Nhân Viên</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger">
              Bạn có chắc chắn muốn xóa nhân viên <strong>{{ del_nhan_vien.ho_va_ten }}</strong>?
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button class="btn btn-danger" @click="xoaNhanVien" data-bs-dismiss="modal">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      list_nhan_vien: [],
      list_chuc_vu: [],
      create_nhan_vien: { tinh_trang: 1 },
      edit_nhan_vien: {},
      del_nhan_vien: {},
      search: "",
      errors: {}
    };
  },
  computed: {
    filteredNhanVien() {
      if (!this.search) return this.list_nhan_vien;
      return this.list_nhan_vien.filter(nv =>
        nv.ho_va_ten.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  mounted() {
    // Load list nhân viên từ localStorage
    this.list_nhan_vien = JSON.parse(localStorage.getItem("list_nhan_vien") || "[]");

    // Nếu chưa có dữ liệu, thêm nhân viên mẫu
    if (this.list_nhan_vien.length === 0) {
      const nhanVienMau = {
        id: Date.now(),
        ho_va_ten: "Nguyễn Văn Admin",
        email: "admin@gmail.com",
        mat_khau: "12345",
        chuc_vu_id: 1, // Quản lý
        role: "ROLE_ADMIN", // Role admin để login vào trang admin
        tinh_trang: 1, // Hoạt động
        dia_chi: "Hà Nội",
        ngay_sinh: "1990-01-01",
        so_dien_thoai: "0987654321"
      };

      this.list_nhan_vien.push(nhanVienMau);
      localStorage.setItem("list_nhan_vien", JSON.stringify(this.list_nhan_vien));
    }

    // Load list chức vụ
    this.list_chuc_vu = JSON.parse(localStorage.getItem("list_chuc_vu") || "[]");
    if (this.list_chuc_vu.length === 0) {
      this.list_chuc_vu = [
        { id: 1, ten_chuc_vu: "Quản lý" },
        { id: 2, ten_chuc_vu: "Nhân viên" },
      ];
      localStorage.setItem("list_chuc_vu", JSON.stringify(this.list_chuc_vu));
    }
  },
  methods: {
    resetForm() {
      this.create_nhan_vien = { tinh_trang: 1 };
      this.errors = {};
    },
    getTenChucVu(id) {
      const cv = this.list_chuc_vu.find(c => c.id == id);
      return cv ? cv.ten_chuc_vu : "Không rõ";
    },
    validateForm(data) {
      const errs = {};
      if (!data.ho_va_ten?.trim()) errs.ho_va_ten = "Vui lòng nhập họ tên!";
      if (!data.email?.trim()) errs.email = "Vui lòng nhập email!";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Email không hợp lệ!";
      else if (this.list_nhan_vien.some(nv => nv.email === data.email))
        errs.email = "Email này đã tồn tại!";
      if (!data.so_dien_thoai?.trim()) errs.so_dien_thoai = "Vui lòng nhập số điện thoại!";
      else if (!/^(0|\+84)\d{9,10}$/.test(data.so_dien_thoai)) errs.so_dien_thoai = "Số điện thoại không hợp lệ!";
      if (!data.mat_khau?.trim()) errs.mat_khau = "Vui lòng nhập mật khẩu!";
      else if (data.mat_khau.length < 6) errs.mat_khau = "Mật khẩu phải ít nhất 6 ký tự!";
      if (data.xac_nhan_mat_khau !== data.mat_khau) errs.xac_nhan_mat_khau = "Mật khẩu xác nhận không khớp!";
      if (!data.chuc_vu_id) errs.chuc_vu_id = "Vui lòng chọn chức vụ!";
      this.errors = errs;
      return Object.keys(errs).length === 0;
    },
    themNhanVien() {
      if (!this.validateForm(this.create_nhan_vien)) return;
      // Gán role mặc định nếu chưa có
      if (!this.create_nhan_vien.role) {
        this.create_nhan_vien.role = "ROLE_ADMIN";
      }

      const newNV = { ...this.create_nhan_vien, id: Date.now() };
      delete newNV.xac_nhan_mat_khau;
      this.list_nhan_vien.push(newNV);
      localStorage.setItem("list_nhan_vien", JSON.stringify(this.list_nhan_vien));
      this.$toast.success("Thêm nhân viên thành công!");
      this.resetForm();
      const modal = bootstrap.Modal.getInstance(document.getElementById("addModal"));
      modal.hide();
    },
    capNhatNhanVien() {
      const index = this.list_nhan_vien.findIndex(nv => nv.id === this.edit_nhan_vien.id);
      if (index !== -1) {
        this.list_nhan_vien[index] = { ...this.edit_nhan_vien };
        localStorage.setItem("list_nhan_vien", JSON.stringify(this.list_nhan_vien));
        this.$toast.success("Cập nhật nhân viên thành công!");
      }
      this.edit_nhan_vien = {};
    },
    xoaNhanVien() {
      this.list_nhan_vien = this.list_nhan_vien.filter(nv => nv.id !== this.del_nhan_vien.id);
      localStorage.setItem("list_nhan_vien", JSON.stringify(this.list_nhan_vien));
      this.$toast.success("Xóa nhân viên thành công!");
      this.del_nhan_vien = {};
    },
    doiTrangThai(item) {
      item.tinh_trang = item.tinh_trang == 1 ? 0 : 1;
      localStorage.setItem("list_nhan_vien", JSON.stringify(this.list_nhan_vien));
    }
  }
};
</script>

<style scoped>
.text-danger {
  font-size: 13px;
}
</style>
