<template>

	<div class="container mt-5">
		<div class="row">
			<div class="col-lg-4">
				<div class="card">
					<div class="card-body text-center">
						<div class="d-flex  justify-content-start text-center">
							<img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg"
								alt="Admin" class="rounded-circle p-1 bg-primary ms-5" width="100">
							<div class="fs-4 fw-bold mt-4 ms-3">{{ user.ho_va_ten || 'Không có tên!' }}</div>
						</div>
						<hr>
						<div class="fs-6">Tổng chi tiêu 2025</div>
						<button class="btn btn-primary me-2">Follow</button>
						<button class="btn btn-outline-primary">Message</button>
					</div>
				</div>
			</div>
			<div class="col-lg-8">
				<div class="card">
					<div class="card-body">
						<ul class="nav nav-tabs nav-primary nav-fill text-center" role="tablist">
							<li class="nav-item " role="presentation">
								<a class="nav-link active" data-bs-toggle="tab" href="#profile" role="tab"
									aria-selected="true">
									<div class="d-flex align-items-center">
										<div class="tab-icon"><i class="bx bx-home font-18 me-1"></i>
										</div>
										<div class="tab-title">Thông Tin Cá Nhân</div>
									</div>
								</a>
							</li>
							<li class="nav-item" role="presentation">
								<a class="nav-link" data-bs-toggle="tab" href="#changepassword" role="tab"
									aria-selected="false" tabindex="-1">
									<div class="d-flex align-items-center">
										<div class="tab-icon"><i class="bx bx-user-pin font-18 me-1"></i>
										</div>
										<div class="tab-title">Đổi Mật Khẩu</div>
									</div>
								</a>
							</li>
							<li class="nav-item" role="presentation">
								<a class="nav-link" data-bs-toggle="tab" href="#history" role="tab"
									aria-selected="false" tabindex="-1">
									<div class="d-flex align-items-center">
										<div class="tab-icon"><i class="fa-solid fa-clock-rotate-left me-1"></i>
										</div>
										<div class="tab-title">Lịch Sử Giao Dịch</div>
									</div>
								</a>
							</li>
						</ul>
						<div class="tab-content py-3">
							<div class="tab-pane fade active show" id="profile" role="tabpanel">
								<!--  -->
								<div class="card">
									<div class="row g-0">
										<div class="col-lg-6 ">
											<div class="card-body">
												<div class="">
													<div class="mb-3 mt-2">
														<input v-model="user.id" type="text" class="form-control"
															hidden="true" placeholder="Nhập Họ tên">
														<label class="form-label">Họ tên</label>
														<input v-model="user.ho_va_ten" type="text" class="form-control"
															placeholder="Nhập Họ tên">
													</div>
													<div class="mb-3 mt-2">
														<label class="form-label">Ngày sinh</label>
														<input v-model="user.ngay_sinh" type="date" class="form-control"
															placeholder="Nhập mật khẩu mới">
													</div>
													<div class="mb-3">
														<label class="form-label">Email</label>
														<input v-model="user.email" type="text"
															class="form-control text-secondary" readonly
															placeholder="Xác Nhận Mật Khẩu">
													</div>

												</div>
											</div>

										</div>
										<div class="col-lg-6 ">
											<div class="card-body">
												<div class="">
													<div class="mb-3 mt-2">
														<label class="form-label">Só điện thoại</label>
														<input v-model="user.so_dien_thoai" type="number"
															class="form-control">
													</div>
													<div class="mb-3 mt-2">
														<label class="form-label">Số CCCD</label>
														<input v-model="user.cccd" type="number" class="form-control">
													</div>
													<div class="mb-3">
														<label class="form-label">Quê quán</label>
														<input v-model="user.que_quan" type="text" class="form-control"
															placeholder="Nhập quê quán">
													</div>


												</div>
											</div>

										</div>
										<div class="d-grid gap-2">
											<button type="button" class="btn btn-primary"
												@click="capNhatUser">Lưu</button>
										</div>

									</div>
								</div>
								<!--  -->
							</div>
							<div class="tab-pane fade" id="changepassword" role="tabpanel">
								<div class="card">
									<div class="row g-0">
										<div class="col-lg-6 border-end">
											<div class="card-body">
												<div class="">
													<div class="mb-3 mt-2">
														<label class="form-label">Mật Khẩu Hiện Tại</label>
														<input type="text" class="form-control" v-model="currentPass"
															placeholder="Nhập mật khẩu cũ">
													</div>
													<div class="mb-3 mt-2">
														<label class="form-label">Mật Khẩu Mới</label>
														<input type="text" class="form-control" v-model="newPass"
															placeholder="Nhập mật khẩu mới">
													</div>
													<div class="mb-3">
														<label class="form-label">Xác Nhận Mật Khẩu</label>
														<input type="text" class="form-control" v-model="passConfirm"
															placeholder="Xác Nhận Mật Khẩu">
													</div>
													<div v-if="passWordError" class="text-danger small mt-2">
														{{ passWordError }}
													</div>
													<div class="d-grid gap-2">
														<button type="button" class="btn btn-primary mt-2"
															@click="doiMatKhau">Đổi Mật
															Khẩu</button>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<img src="https://cdn.tgdd.vn/Files/2019/12/07/1225665/huong-dan-thay-doi-mat-khau-tai-khoan-google-don-gian-tren-dien-thoai-may-tinh-7.jpg"
												class="card-img login-img" alt="..." style="height: 325px;">
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="history" role="tabpanel">
								<template v-for="(item, index) in listVeTheoNguoiDung" :key="index">
									<div class="container my-4">
										<div class="d-flex bg-white p-3 rounded border align-items-start"
											style="max-width: 600px;">
											<!-- Poster -->
											<img :src="item.hinh_anh" alt="Poster" class="me-3 rounded"
												style="width: 120px; height: 180px; object-fit: cover;">

											<!-- Thông tin vé -->
											<div class="flex-grow-1 small text-dark">
												<hr class="mt-0 mb-2" />
												<p class="mb-1"><strong>Ngày đặt:</strong> {{ item.ngay_dat }}</p>
												<p class="mb-1"><strong>Mã đặt vé:</strong> {{ item.ma_ve }}</p>
												<p class="mb-1">
													<strong>Trạng thái:</strong>

													<span v-if="item.tinh_trang == 0" class="text-warning fw-semibold"
														style="color: white;">
														Chưa thanh toán
													</span>
													<span v-else-if="item.tinh_trang == 1"
														class="text-success fw-semibold" style="color: white;">
														Đã thanh toán
													</span>
													<span v-else class="text-danger fw-semibold" style="color: white;">
														Đã huỷ
													</span>
												</p>
												<p class="mb-1"><strong>Chi phí:</strong> {{ formatVND(item.gia_ve) }}
												</p>
												<p class="mb-0">
													<strong>Mô tả đặt vé:</strong> Phim: <strong>{{ item.ten_phim
													}}</strong>,<br />
													Suất chiếu: <strong>{{ item.suat_chieu }}</strong>,<br />
													Ghế: <strong>[{{ item.ghe }}]</strong>,<br />
													Rạp: <strong>OIZOIOI Cinema</strong>.
												</p>
											</div>
										</div>
									</div>
								</template>



							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
export default {
	props: ['email'],
	data() {
		return {
			currentPass: '',
			newPass: '',
			passConfirm: '',
			user: {},
			listVeTheoNguoiDung: [],
			passWordError: ''
		};
	},
	mounted() {
		const listSuatChieu = JSON.parse(localStorage.getItem("list_suat_chieu") || "[]");
		const listPhim = JSON.parse(localStorage.getItem("list_phim") || "[]");
		const userlogin = JSON.parse(localStorage.getItem('user_login'));

		if (userlogin) {
			this.user = userlogin;
		} else {
			console.warn("⚠ Không tìm thấy user_login trong localStorage");
			return;
		}

		// 🔹 Lấy vé theo người dùng
		const allVe = JSON.parse(localStorage.getItem("list_ve") || "[]");
		this.listVeTheoNguoiDung = allVe.filter(v => v.khach_hang?.email === userlogin.email).map(v => {
			const suat = listSuatChieu.find(s => s.id == v.id_suat_chieu);
			if (suat) {
				const phim = listPhim.find(p => p.id == suat.id_phim);
				if (phim) {
					v.hinh_anh = phim.hinh_anh;
					v.ten_phim = phim.ten_phim;
				}
			}
			return v;
		});
	},

	methods: {
		formatVND(value) {
			return new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND'
			}).format(value);
		},

		// ✅ Cập nhật thông tin user
		capNhatUser() {
			let danhSachUser = JSON.parse(localStorage.getItem('list_khach_hang')) || [];
			const index = danhSachUser.findIndex(u => u.id === this.user.id);

			if (index !== -1) {
				danhSachUser[index] = { ...this.user };
				localStorage.setItem('list_khach_hang', JSON.stringify(danhSachUser));
				localStorage.setItem('user_login', JSON.stringify(this.user));
				this.$toast?.success?.("Cập nhật thông tin thành công!");
			} else {
				this.$toast?.error?.("Không tìm thấy người dùng để cập nhật!");
			}
		},

		// ✅ Đổi mật khẩu user
		doiMatKhau() {
			if (!this.currentPass || !this.newPass || !this.passConfirm) {
				this.passWordError = "Vui lòng nhập đầy đủ mật khẩu!";
				return;
			}

			let danhSachUser = JSON.parse(localStorage.getItem('list_khach_hang')) || [];
			const index = danhSachUser.findIndex(u => u.id === this.user.id);

			if (index === -1) {
				this.$toast?.error?.("Không tìm thấy người dùng!");
				return;
			}

			// So sánh đúng field: `mat_khau`
			if (this.currentPass !== this.user.mat_khau) {
				this.passWordError = "Mật khẩu hiện tại không đúng!";
				return;
			}

			if (this.newPass !== this.passConfirm) {
				this.passWordError = "Mật khẩu xác nhận không khớp!";
				return;
			}

			this.user.mat_khau = this.newPass;
			this.passWordError = '';

			danhSachUser[index] = { ...this.user };
			localStorage.setItem('list_khach_hang', JSON.stringify(danhSachUser));
			localStorage.setItem('user_login', JSON.stringify(this.user));

			this.$toast?.success?.("Đổi mật khẩu thành công!");

			this.currentPass = '';
			this.newPass = '';
			this.passConfirm = '';
		}
	}
}
</script>

<style></style>