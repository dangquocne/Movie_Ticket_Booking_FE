<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h4 class="fw-bold text-primary">
                        Thống Kê Chi Tiêu Khách Hàng
                    </h4>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5 col-md-6">
                                <label for="">Từ ngày</label>
                                <input v-model="day_begin" type="date" class="form-control mt-2 mb-2 w-100">
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <label for="">Đến ngày</label>
                                <input v-model="day_end" type="date" class="form-control mt-2 mb-2">
                            </div>
                            <div class="col-lg-2 col-md-12">
                                <label for="">&nbsp;</label>
                                <button @click="loadData()" class="btn btn-primary w-100">Thống Kê</button>
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
                                    <th class="text-center">Tên Khách Hàng</th>
                                    <th class="text-center">Số Đơn Hàng</th>
                                    <th class="text-center">Tổng Chi Tiêu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">1</td>
                                    <td class="text-end">1</td>
                                    <td class="text-end">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
            day_begin: '',
            day_end: '',
            list_data: [],
        }
    },
    methods: {
        formatVND(number) {
            return new Intl.NumberFormat("vi-VI", { style: "currency", currency: "VND" }).format(number,);
        },
        loadData() {

        }
    },
};
</script>
<style></style>