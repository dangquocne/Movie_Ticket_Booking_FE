<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card radius-10 border-top border-0 border-3 border-warning">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="mb-0">DANH SÁCH VOUCHER</h4>
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#themMoiModal">
            Thêm mới
          </button>
        </div>

        <div class="card-body">
          <div class="table-responsive">
            <table class="table  table-hover text-center align-middle">
              <thead class="bg-dark text-light">
                <tr>
                  <th>#</th>
                  <th>Mã Voucher</th>
                  <th>Thời gian bắt đầu</th>
                  <th>Thời gian kết thúc</th>
                  <th>Số giảm giá</th>
                  <th>Số tiền tối đa</th>
                  <th>Số tiền giảm giá</th>
                  <th>Tình trạng</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list_voucher" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.ma_code }}</td>
                  <td>{{ convertDate(item.thoi_gian_bat_dau) }}</td>
                  <td>{{ convertDate(item.thoi_gian_ket_thuc) }}</td>
                  <td>{{ item.so_giam_gia }}%</td>
                  <td>{{ formatVND(item.so_tien_toi_da) }}</td>
                  <td>{{ formatVND(item.so_tien_giam_gia) }}</td>
                  <td>
                    <button class="btn btn-sm" :class="item.tinh_trang == 1 ? 'btn-success' : 'btn-warning'"
                      @click="doiTrangThai(item)">
                      {{ item.tinh_trang == 1 ? 'Hoạt Động' : 'Tạm Dừng' }}
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-sm btn-primary text-light me-2" data-bs-toggle="modal"
                      data-bs-target="#capNhatModal" @click="chuanBiCapNhat(item)">
                      Cập nhật
                    </button>
                    <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      @click="Object.assign(del_voucher, item)">
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal thêm mới -->
  <div class="modal fade" id="themMoiModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thêm mới voucher</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12 mb-2">
              <label>Mã Voucher</label>
              <input v-model="create_voucher.ma_code" class="form-control" type="text" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Thời gian bắt đầu</label>
              <input v-model="create_voucher.thoi_gian_bat_dau" class="form-control" type="date" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Thời gian kết thúc</label>
              <input v-model="create_voucher.thoi_gian_ket_thuc" class="form-control" type="date" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Số giảm giá (%)</label>
              <input v-model="create_voucher.so_giam_gia" class="form-control" type="number" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Số tiền tối đa</label>
              <input v-model="create_voucher.so_tien_toi_da" class="form-control" type="number" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Số tiền giảm giá</label>
              <input v-model="create_voucher.so_tien_giam_gia" class="form-control" type="number" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Tình trạng</label>
              <select v-model="create_voucher.tinh_trang" class="form-select">
                <option value="1">Hiển thị</option>
                <option value="0">Tạm tắt</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button class="btn btn-primary" @click="themVoucher">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal cập nhật -->
  <div class="modal fade" id="capNhatModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cập nhật voucher</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12 mb-2">
              <label>Mã Voucher</label>
              <input v-model="edit_voucher.ma_code" class="form-control" type="text" disabled />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Thời gian bắt đầu</label>
              <input v-model="edit_voucher.thoi_gian_bat_dau" class="form-control" type="date" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Thời gian kết thúc</label>
              <input v-model="edit_voucher.thoi_gian_ket_thuc" class="form-control" type="date" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Số giảm giá (%)</label>
              <input v-model="edit_voucher.so_giam_gia" class="form-control" type="number" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Số tiền tối đa</label>
              <input v-model="edit_voucher.so_tien_toi_da" class="form-control" type="number" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Số tiền giảm giá</label>
              <input v-model="edit_voucher.so_tien_giam_gia" class="form-control" type="number" />
            </div>
            <div class="col-lg-6 mb-2">
              <label>Tình trạng</label>
              <select v-model="edit_voucher.tinh_trang" class="form-select">
                <option value="1">Hiển thị</option>
                <option value="0">Tạm tắt</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button class="btn btn-success" @click="capNhatVoucher">Cập nhật</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal xóa -->
  <div class="modal fade" id="xoaModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Xóa voucher</h5>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p>Bạn có chắc muốn xóa <b>{{ del_voucher.ma_code }}</b> không?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button class="btn btn-danger" @click="xoaVoucher">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();
const list_voucher = ref([]);
const create_voucher = ref({ tinh_trang: 1 });
const edit_voucher = ref({});
const del_voucher = ref({});

onMounted(() => getVoucher());

function getVoucher() {
  const data = JSON.parse(localStorage.getItem("list_voucher") || "[]");
  if (data.length === 0) {
    list_voucher.value = [
      { ma_code: "SALE50", thoi_gian_bat_dau: "2025-11-01", thoi_gian_ket_thuc: "2025-11-30", so_giam_gia: 50, so_tien_toi_da: 200000, so_tien_giam_gia: 100000, tinh_trang: 1 },
    ];
    saveLocal();
  } else {
    list_voucher.value = data;
  }
}
function saveLocal() {
  localStorage.setItem("list_voucher", JSON.stringify(list_voucher.value));
}
function formatVND(number) {
  if (!number) return "0 ₫";
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(number);
}
function convertDate(date) {
  return new Date(date).toLocaleDateString("vi-VN");
}

// --- Validate theo style "bài viết" ---
function validate(data, isEdit = false) {
  if (
    !data.ma_code &&
    !data.thoi_gian_bat_dau &&
    !data.thoi_gian_ket_thuc &&
    !data.so_giam_gia &&
    !data.so_tien_toi_da &&
    !data.so_tien_giam_gia
  ) {
    proxy.$toast.error("Không được để trống toàn bộ các trường!");
    return false;
  }
  if (!data.ma_code) return proxy.$toast.error("Mã voucher không được để trống!"), false;
  if (!data.thoi_gian_bat_dau) return proxy.$toast.error("Chưa chọn thời gian bắt đầu!"), false;
  if (!data.thoi_gian_ket_thuc) return proxy.$toast.error("Chưa chọn thời gian kết thúc!"), false;
  if (!data.so_giam_gia) return proxy.$toast.error("Số giảm giá không được để trống!"), false;
  if (!data.so_tien_toi_da) return proxy.$toast.error("Số tiền tối đa không được để trống!"), false;
  if (!data.so_tien_giam_gia) return proxy.$toast.error("Số tiền giảm giá không được để trống!"), false;


  // / ✅ Kiểm tra trùng mã code (không phân biệt hoa thường)
  const ma = data.ma_code.trim().toLowerCase();
  const trungMa = list_voucher.value.some(
    (v) => v.ma_code.trim().toLowerCase() === ma && (!isEdit || v.ma_code !== data.ma_code)
  );
  if (trungMa) {
    proxy.$toast.error("⚠️ Mã voucher đã tồn tại! Vui lòng nhập mã khác.");
    return false;
  }

  // ✅ Kiểm tra định dạng và giá trị hợp lệ
  if (isNaN(data.so_giam_gia) || data.so_giam_gia <= 0 || data.so_giam_gia > 100) {
    return proxy.$toast.error("⚠️ Số giảm giá phải là số từ 1 đến 100!"), false;
  }

  if (isNaN(data.so_tien_toi_da) || data.so_tien_toi_da <= 0) {
    return proxy.$toast.error("⚠️ Số tiền tối đa phải là số lớn hơn 0!"), false;
  }

  if (isNaN(data.so_tien_giam_gia) || data.so_tien_giam_gia <= 0) {
    return proxy.$toast.error("⚠️ Số tiền giảm giá phải là số lớn hơn 0!"), false;
  }

  if (Number(data.so_tien_giam_gia) > Number(data.so_tien_toi_da)) {
    return proxy.$toast.error("⚠️ Số tiền giảm giá không được lớn hơn số tiền tối đa!"), false;
  }

  // ✅ Kiểm tra ngày hợp lệ
  const start = new Date(data.thoi_gian_bat_dau);
  const end = new Date(data.thoi_gian_ket_thuc);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (start < today) {
    return proxy.$toast.error("⚠️ Thời gian bắt đầu không được trước ngày hôm nay!"), false;
  }
  if (end <= start) {
    return proxy.$toast.error("⚠️ Thời gian kết thúc phải sau thời gian bắt đầu!"), false;
  }
  return true;
}

function themVoucher() {
  if (!validate(create_voucher.value)) return;
  list_voucher.value.push({ ...create_voucher.value });
  saveLocal();
  proxy.$toast.success("Thêm voucher thành công!");
  create_voucher.value = { tinh_trang: 1 };
  bootstrap.Modal.getInstance(document.getElementById("themMoiModal")).hide();
}

function chuanBiCapNhat(item) {
  Object.assign(edit_voucher.value, item);
}

function capNhatVoucher() {
  if (!validate(edit_voucher.value)) return;
  const index = list_voucher.value.findIndex(v => v.ma_code === edit_voucher.value.ma_code);
  if (index !== -1) {
    list_voucher.value[index] = { ...edit_voucher.value };
    saveLocal();
    proxy.$toast.success("Cập nhật thành công!");
    bootstrap.Modal.getInstance(document.getElementById("capNhatModal")).hide();
  } else {
    proxy.$toast.error("Không tìm thấy voucher cần cập nhật!");
  }
}

function xoaVoucher() {
  list_voucher.value = list_voucher.value.filter(v => v.ma_code !== del_voucher.value.ma_code);
  saveLocal();
  proxy.$toast.success("Đã xóa voucher!");
  bootstrap.Modal.getInstance(document.getElementById("xoaModal")).hide();
}

function doiTrangThai(item) {
  item.tinh_trang = item.tinh_trang == 1 ? 0 : 1;
  saveLocal();
  proxy.$toast.success("Đã đổi trạng thái!");
}
</script>
