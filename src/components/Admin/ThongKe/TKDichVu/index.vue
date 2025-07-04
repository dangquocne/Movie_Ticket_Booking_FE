<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h4 class="fw-bold text-primary">
                        Thống Kê Dịch Vụ Đã Bán
                    </h4>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5 col-md-6">
                                <label for="">Từ ngày</label>
                                <input type="date" class="form-control mt-2 mb-2 w-100">
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <label for="">Đến ngày</label>
                                <input type="date" class="form-control mt-2 mb-2">
                            </div>
                            <div class="col-lg-2 col-md-12">
                                <label for="">&nbsp;</label>
                                <button class="btn btn-primary w-100">Thống Kê</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-5">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered">
                            <thead class="table-light">
                                <tr class="table-warning">
                                    <th class="text-center">Ngày</th>
                                    <th class="text-center">Số Dịch Vụ Đã Bán</th>
                                    <th class="text-center">Đã Thanh Toán</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">Số Đơn Hàng</td>
                                    <td class="text-center">Tổng Giảm Giá</td>
                                    <td class="text-center">Đơn Dùng Voucher</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            Chỗ này sẽ hiển thị chart thống kê
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            day_begin: '',
            day_end: '',
            list_data: []
        }
    },
    methods: {
        loadData() {

        }
    },
};
</script>
<style></style>