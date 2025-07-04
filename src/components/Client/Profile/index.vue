<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-lg-4">
				<div class="card">
					<div class="card-body text-center">
						<div class="d-flex  justify-content-start text-center">
							<img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg"
								alt="Admin" class="rounded-circle p-1 bg-primary ms-5" width="100">
							<div class="fs-4 fw-bold mt-4 ms-3">John Doe</div>
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
								<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
									stumptown
									aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles
									vegan
									helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu
									banh
									mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
									Seitan
									aliquip quis cardigan american apparel, butcher voluptate nisi.</p>
							</div>
							<div class="tab-pane fade" id="changepassword" role="tabpanel">
								<div class="card">
									<div class="row g-0">
										<div class="col-lg-6 border-end">
											<div class="card-body">
												<div class="">
													<div class="mb-3 mt-2">
														<label class="form-label">Mật Khẩu Hiện Tại</label>
														<input type="text" class="form-control"
															placeholder="Nhập mật khẩu cũ">
													</div>
													<div class="mb-3 mt-2">
														<label class="form-label">Mật Khẩu Mới</label>
														<input type="text" class="form-control"
															placeholder="Nhập mật khẩu mới">
													</div>
													<div class="mb-3">
														<label class="form-label">Xác Nhận Mật Khẩu</label>
														<input type="text" class="form-control"
															placeholder="Xác Nhận Mật Khẩu">
													</div>
													<div class="d-grid gap-2">
														<button type="button" class="btn btn-primary">Đổi Mật
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
								<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's
									organic
									lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
									pitchfork
									tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
									helvetica.
									DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
									Williamsburg banh
									mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice
									blog.
									Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown.
									Pitchfork sustainable tofu synth chambray yr.</p>
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

}
</script>
<style></style>