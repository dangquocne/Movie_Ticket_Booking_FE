<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
                <div class="row border rounded shadow bg-white p-4">

                    <!-- Cột thông tin đơn hàng -->
                    <div class="col-md-6 border-end">
                        <h5 class="mb-4 text-muted">Thông tin đơn hàng</h5>
                        <div class="mb-3">
                            <strong>Nhà cung cấp:</strong> <br>
                            <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="momo"
                                width="80">
                        </div>
                        <p class="mb-1"><strong>Mã đơn hàng:</strong> {{ maDonHang }}</p>
                        <p></p>

                        <p class="mb-1"><strong>Mô tả:</strong>{{ moTa }}</p>
                        <p></p>

                        <p class="mb-1"><strong>Số tiền:</strong>{{ formatVND(tongTien) }}</p>
                        <h4 class="text-danger"></h4>

                        <div class="mt-4">
                            <p class="text-muted small">Đơn hàng sẽ hết hạn sau:</p>
                            <div class="d-flex gap-2">
                                <div class="text-center border rounded px-2 py-1">01<br><small>Giờ</small></div>
                                <div class="text-center border rounded px-2 py-1">38<br><small>Phút</small></div>
                                <div class="text-center border rounded px-2 py-1">48<br><small>Giây</small></div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <a href="#" class="text-danger small">Quay về</a>
                        </div>
                    </div>

                    <!-- Cột QR thanh toán -->
                    <div class="col-md-6 text-center">
                        <h5 class="mb-3 text-muted">Quét mã QR để thanh toán</h5>
                        <img src="https://res.cloudinary.com/dvxkhsfyj/image/upload/v1752333923/z6798620744908_7b9689c58c77a9395940ca78a78769cf_yniu4a.jpg"
                            alt="QR MoMo" class="img-fluid rounded border" style="width: 250px;">
                        <p class="mt-3 small">
                            Sử dụng <strong>App MoMo</strong> hoặc ứng dụng hỗ trợ QR để quét mã.
                        </p>
                        <p class="text-muted small">Gặp khó khăn khi thanh toán? <a href="#">Xem hướng dẫn</a></p>

                        <!-- Nút xác nhận thanh toán -->
                        <button class="btn btn-secondary mt-3 me-2" @click="huyThanhToan">
                            Huỷ thanh toán
                        </button>
                        <button class="btn btn-success mt-3" @click="xacNhanThanhToan">
                            Tôi đã thanh toán
                        </button>

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
            maDonHang: '',
            moTa: '',
            tongTien: 0
        }
    },
    mounted() {
        //De tat modal khi load trang
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style = '';
    },
    created() {
        this.maDonHang = this.$route.query.maVe || 'Không rõ';
        this.moTa = this.$route.query.moTa || 'Không có mô tả';
        this.tongTien = this.$route.query.tongTien || 0;
    }, methods: {
        formatVND(amount) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            }).format(amount);
        },
        huyThanhToan() {
            const maVe = this.$route.query.maVe;
            if (!maVe) return alert("Không tìm thấy mã vé!");

            // Lấy danh sách vé từ localStorage
            let danhSachVe = JSON.parse(localStorage.getItem("list_ve")) || [];

            // Tìm và cập nhật trạng thái
            const index = danhSachVe.findIndex(v => v.ma_ve === maVe);
            if (index !== -1) {
                danhSachVe[index].tinh_trang = 2; // 2 = Đã huỷ
                localStorage.setItem("list_ve", JSON.stringify(danhSachVe));
                this.$toast.error("Bạn đã huỷ thanh toán.");
            } else {
                this.$toast.warning("Không tìm thấy vé cần huỷ!");
            }

            // Quay về danh sách vé
            this.$router.push("/");
        },
        xacNhanThanhToan() {
            this.$toast.success("Cảm ơn bạn đã thanh toán!");
            this.$router.push('/chi-tiet-don-hang'); // hoặc nơi bạn hiển thị vé
        }
    }
}
</script>