<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH PHIM</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm phim
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search....">
                        <button class="btn btn-success input-group-text" style="width: 110px;">Tìm kiếm</button>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="bg-primary text-light text-nowrap">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Phim</th>
                                    <th class="text-center">Hình Ảnh</th>
                                    <th class="text-center">Đạo Diễn</th>
                                    <th class="text-center">Ngày Phát Hành</th>
                                    <th class="text-center">Quốc Gia</th>
                                    <th class="text-center">Trạng Thái</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in list_phim" :key="index">
                                    <tr>
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle text-wrap">{{ item.ten_phim }}</td>
                                        <td class="align-middle">
                                            <img :src="item.hinh_anh" alt="Hình Ảnh" class="img-fluid"
                                                style="width: 100px; height: 100px; object-fit: cover;">
                                        </td>
                                        <td class="align-middle">{{item.dao_dien}}</td>
                                        <td class="align-middle text-center">{{item.ngay_phat_hanh}}</td>
                                        <td class="align-middle text-center">{{item.quoc_gia}}</td>
                                        <td @click="doiTrangThai(item)" class="align-middle text-center text-nowrap"
                                            style="width: 140px;">
                                            <!-- Ví dụ: 1 = Sắp chiếu, 2 = Đang chiếu, 0 = Ngừng chiếu -->
                                            <button v-if="item.tinh_trang == 0" class="btn btn-danger w-100"
                                                style="color: white;">
                                                Ngừng Chiếu
                                            </button>
                                            <button v-if="item.tinh_trang == 1" class="btn btn-warning w-100"
                                                style="color: white;">
                                                Sắp Chiếu
                                            </button>
                                            <button v-if="item.tinh_trang == 2" class="btn btn-warning w-100"
                                                style="color: white;">
                                                Đang Chiếu
                                            </button>

                                        </td>
                                        <td class="align-middle text-center text-nowrap" style="width: 200px;">
                                            <button class="btn btn-secondary me-2"
                                                @click="Object.assign(obj_phim_chi_tiet, item)" style="color: white;"
                                                data-bs-toggle="modal" data-bs-target="#chiTietModal">
                                                Chi Tiết
                                            </button>
                                            <button class="btn btn-info text-light me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal"
                                                v-on:click="Object.assign(edit_phim, item)">
                                                Cập nhật
                                            </button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"
                                                v-on:click="Object.assign(del_phim, item)">
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
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Phim Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tên Phim</label>
                            <input v-model="create_phim.ten_phim" type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Hình Ảnh</label>
                            <input v-model="create_phim.hinh_anh" type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Đạo Diễn</label>
                            <input v-model="create_phim.dao_dien" type="text" class="form-control" />
                        </div>
                        <div class="col-md-5 mb-3">
                            <label class="form-label">Diễn Viên</label>
                            <input v-model="create_phim.dien_vien" type="text" class="form-control" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Nhà Sản Xuất</label>
                            <input v-model="create_phim.nha_san_xuat" type="text" class="form-control" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Quốc Gia</label>
                            <input v-model="create_phim.quoc_gia" type="text" class="form-control">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Ngôn Ngữ</label>
                            <input v-model="create_phim.ngon_ngu" type="text" class="form-control">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Ngày Phát Hành</label>
                            <input v-model="create_phim.ngay_phat_hanh" type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thể Loại</label>
                            <input v-model="create_phim.the_loai" type="text" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Thời Lượng</label>
                            <input v-model="create_phim.thoi_luong" type="number" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Trạng Thái</label>
                            <select v-model="create_phim.tinh_trang" class="form-select">
                                <option value="0">Ngừng Chiếu</option>
                                <option value="1">Sắp Chiếu</option>
                                <option value="2">Đang Chiếu</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Mô Tả</label>
                            <textarea v-model="create_phim.noi_dung" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Trailer</label>
                            <input v-model="create_phim.trailer" class="form-control" rows="3" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="themPhim">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Thông Tin Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tên Phim</label>
                            <input v-model="edit_phim.ten_phim" type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Hình Ảnh</label>
                            <input v-model="edit_phim.hinh_anh" type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Đạo Diễn</label>
                            <input v-model="edit_phim.dao_dien" type="text" class="form-control" />
                        </div>
                        <div class="col-md-5 mb-3">
                            <label class="form-label">Diễn Viên</label>
                            <input v-model="edit_phim.dien_vien" type="text" class="form-control" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Nhà Sản Xuất</label>
                            <input v-model="edit_phim.nha_san_xuat" type="text" class="form-control" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Quốc Gia</label>
                            <input v-model="edit_phim.quoc_gia" type="text" class="form-control">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Ngôn Ngữ</label>
                            <input v-model="edit_phim.ngon_ngu" type="text" class="form-control">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Ngày Phát Hành</label>
                            <input v-model="edit_phim.ngay_phat_hanh" type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thể Loại</label>
                            <input v-model="edit_phim.the_loai" type="text" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Thời Lượng</label>
                            <input v-model="edit_phim.thoi_luong" type="number" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Trạng Thái</label>
                            <select v-model="edit_phim.tinh_trang" class="form-select">
                                <option value="0">Ngừng Chiếu</option>
                                <option value="1">Sắp Chiếu</option>
                                <option value="2">Đang Chiếu</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Mô Tả</label>
                            <textarea v-model="edit_phim.noi_dung" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Trailer</label>
                            <input v-model="edit_phim.trailer" class="form-control" rows="3" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" v-on:click="capNhatPhim()">
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
                    <h5 class="modal-title">Xóa Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa phim
                        <strong>{{ del_phim.ten_phim }}</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="xoaPhim()">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal chi tiết -->
    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Chi Tiết Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ratio ratio-16x9 shadow-lg overflow-hidden" style="height: 400px;">
                                <iframe :src="obj_phim_chi_tiet.trailer" title="YouTube video player"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-lg-4 text-center mb-3 shadow-lg overflow-hidden rounded">
                            <img :src="obj_phim_chi_tiet.hinh_anh" alt="Hình Ảnh" class="img-fluid rounded mt-3"
                                style="max-height: 300px;">
                        </div>
                        <div class="col-lg-8 shadow-sm overflow-hidden">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th style="width: 35%">Tên Phim</th>
                                        <td>{{ obj_phim_chi_tiet.ten_phim }}</td>
                                    </tr>
                                    <tr>
                                        <th>Đạo Diễn</th>
                                        <td>{{ obj_phim_chi_tiet.dao_dien }}</td>
                                    </tr>
                                    <tr>
                                        <th>Diễn Viên</th>
                                        <td>{{ obj_phim_chi_tiet.dien_vien }}</td>
                                    </tr>
                                    <tr>
                                        <th>Nhà Sản Xuất</th>
                                        <td>{{ obj_phim_chi_tiet.nha_san_xuat }}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày Phát Hành</th>
                                        <td>{{ obj_phim_chi_tiet.ngay_phat_hanh }}</td>
                                    </tr>
                                    <tr>
                                        <th>Thể Loại</th>
                                        <td>{{ obj_phim_chi_tiet.the_loai }}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngôn Ngữ</th>
                                        <td>{{ obj_phim_chi_tiet.ngon_ngu }}</td>
                                    </tr>
                                    <tr v-if="obj_phim_chi_tiet.thoi_luong">
                                        <th>Thời Lượng</th>
                                        <td>{{ obj_phim_chi_tiet.thoi_luong }} phút</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-lg-12 shadow-lg overflow-hidden rounded">
                            <h5 class="mt-2">Nội dung phim</h5>
                            <p>{{ obj_phim_chi_tiet.noi_dung }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
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
             list_phim: [
                {id: 1,
        ten_phim: "Địa Đạo: Mặt Trời Trong Bóng Tối",
        hinh_anh: "https://riocinemas.vn/Areas/Admin/Content/Fileuploads/images/poster%20web/2025/T4/SCDB.jpg",
        dao_dien: "Bùi Thạc Chuyên",
        tinh_trang: 2,
        ngay_phat_hanh: "2025-04-04",
        quoc_gia: "Việt Nam",
        ngon_ngu: "Tiếng Việt - Phụ đề Tiếng Anh",
        the_loai: "Lịch sử, Chiến tranh",
        thoi_luong: 128,
        dien_vien: "Thái Hòa; Quang Tuấn; Diễm Hằng Lamoon; Anh Tú Wilson; Hồ Thu Anh",
        nha_san_xuat: "'Nhà sản xuất Nguyễn Trí Viễn",
        trailer: "https://www.youtube.com/embed/xh6IDHjvytU?si=dTUhWz3bcqFJ2Jod",
        noi_dung: "Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực - Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường."},
               {id: 2,
        ten_phim: "Lật Mặt 8: Vòng Tay Nắng",
        hinh_anh: "https://image-worker.momocdn.net/img/77210013985876184-lm81.png?size=M&referer=cinema.momocdn.net",
        dao_dien: "Lý Hải",
        tinh_trang: 2,
        ngay_phat_hanh: "2025-07-05",
        quoc_gia: "Việt Nam",
        ngon_ngu: "Tiếng Việt",
        the_loai: "Hành Động",
        thoi_luong: 120,
        dien_vien: "Quốc Cường; Huy Khánh; Trần Kim Hải; Trúc Anh",
        nha_san_xuat: "Hãng phim Lý Hải Production",
        trailer: "https://www.youtube.com/embed/W_0AMP9yO1w?si=wkt6Dg7fNWqE4tJH",
        noi_dung: "Lật Mặt 8: Vòng Tay Nắng kể về sự khác biệt quan điểm giữa ba thế hệ ông bà cha mẹ con cháu. Ai cũng đúng ở góc nhìn của mình nhưng đứng trước hoài bão của tuổi trẻ, cuối cùng thì ai sẽ là người phải nghe theo người còn lại? Và nếu ước mơ của những đứa trẻ bị cho là viển vông, thì cơ hội nào và bao giờ tuổi trẻ mới được tự quyết định tương lai của mình?"},
    ],
            obj_phim_chi_tiet: {},
            create_phim: {},
            edit_phim: {},
            del_phim: {}
        };
    },
    mounted() {
        // this.list_phim;
        const stored = localStorage.getItem('list_phim');
  if (stored) {
    this.list_phim = JSON.parse(stored);
  }
    },
    methods: {
      themPhim() {
        // Kiểm tra thông tin cơ bản
        if (!this.create_phim.ten_phim || !this.create_phim.hinh_anh) {
            alert("Vui lòng nhập đầy đủ tên phim và hình ảnh!");
            return;
        }

        // Tạo bản sao của phim vừa nhập, kèm ID tạm
        const newPhim = {
            ...this.create_phim,
            id: Date.now(), // ID giả, để phân biệt
        };

        // Thêm phim vào danh sách
        this.list_phim.push(newPhim);

         // Lưu vào localStorage
        localStorage.setItem('list_phim', JSON.stringify(this.list_phim));

        // Reset form nhập
        this.create_phim = {};

        // Ẩn modal (nếu dùng Bootstrap)
        const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
        modal?.hide?.();

        // Thông báo đơn giản
        this.$toast.success("Phim đã được thêm thành công!");
        console.log("Phim đã được thêm:", newPhim);
    },


     xoaPhim() {
        // Kiểm tra xem del_phim có tồn tại trong list không
        const index = this.list_phim.findIndex(phim => phim.ten_phim === this.del_phim.ten_phim);

        // Nếu tìm thấy, xóa phim khỏi danh sách
        if (index !== -1) {
            this.list_phim.splice(index, 1); // Xóa tại vị trí index
            localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
            this.$toast?.success?.("Đã xóa phim khỏi danh sách!");
            
        } else {
            alert("⚠ Không tìm thấy phim để xóa.");
        }

        // Reset lại del_phim
        this.del_phim = {};
    },
    doiTrangThai(item) {
    // Chuyển trạng thái: 0 -> 1 -> 2 -> 0
    item.tinh_trang = (item.tinh_trang + 1) % 3;
     localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
  },



      capNhatPhim() {
    // Tìm vị trí phim cần cập nhật trong list_phim bằng id
    const index = this.list_phim.findIndex(phim => phim.id === this.edit_phim.id);
    
    if (index !== -1) {
      // Cập nhật lại toàn bộ thông tin
      this.list_phim[index] = { ...this.edit_phim };

       localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
      this.$toast?.success?.("Cập nhật phim thành công!");
    } else {
      alert("⚠ Không tìm thấy phim để cập nhật.");
    }

    // Xóa form tạm nếu cần
    this.edit_phim = {};
  }
    },
};
</script>

<style></style>
