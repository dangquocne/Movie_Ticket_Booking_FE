<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h4 class="fw-bold text-primary">
                        Thống Kê Doanh Thu Đơn Hàng
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
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered">
                            <thead class="table-light">
                                <tr class="text-center table-warning">
                                    <th>Ngày</th>
                                    <th>Đơn Hàng</th>
                                    <th>Tổng Doanh Thu (VND)</th>
                                    <th>Tổng Giảm Giá (VND)</th>
                                    <th>Doanh Thu Thực (VND)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">25/06/2025</td>
                                    <td class="text-end">50</td>
                                    <td class="text-end">{{ formatVND(5000000) }}</td>
                                    <td class="text-end">{{ formatVND(500000) }}</td>
                                    <td class="text-end">{{ formatVND(4500000) }}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
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
        formatVND(number) {
            return new Intl.NumberFormat("vi-VI", { style: "currency", currency: "VND" }).format(number,);
        },
        loadData() {

        }
    },
}
</script>
<style></style>