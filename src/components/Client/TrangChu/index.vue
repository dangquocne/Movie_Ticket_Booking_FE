<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">

                <img src="https://files.betacorp.vn/media/images/2025/04/24/1702x621-36-175641-240425-44.jpg"
                    class="d-block w-100" alt="Banner 1">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://files.betacorp.vn/media/images/2025/05/09/1702x621-38-085638-090525-93.jpg"
                    class="d-block w-100" alt="Banner 2">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://files.betacorp.vn/media/images/2025/04/23/lm8-ticketnow-1702x621-102215-230425-53.jpg"
                    class="d-block w-100" alt="Banner 3">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container my-4">
        <!-- Dịch vụ DZCINEMA -->
        <div class="card p-4">
            <h3 class="text-center mb-4">DỊCH VỤ TẠI OIZOIOI CINEMA</h3>
            <div class="row text-center">
                <div class="col-md-3 mb-3">
                    <i class="fa fa-ticket fa-3x text-danger mb-2"></i>
                    <p>
                        <strong>Đặt vé nhanh chóng</strong><br />
                        <span class="text-muted">Chọn ghế trực tuyến, không phải chờ đợi, chỉ với vài thao tác đơn
                            giản.</span>
                    </p>
                </div>
                <div class="col-md-3 mb-3">
                    <i class="fa fa-film fa-3x text-success mb-2"></i>
                    <p>
                        <strong>Kho phim đa dạng</strong><br />
                        <span class="text-muted">Từ bom tấn Hollywood đến phim Việt và hoạt hình cho trẻ em.</span>
                    </p>
                </div>
                <div class="col-md-3 mb-3">
                    <i class="fa fa-clock fa-3x text-warning  mb-2"></i>
                    <p>
                        <strong>Lịch chiếu linh hoạt</strong><br />
                        <span class="text-muted">Các suất chiếu trải dài cả ngày, phù hợp mọi khung giờ rảnh rỗi.</span>
                    </p>
                </div>
                <div class="col-md-3 mb-3">
                    <i class="fa fa-shopping-cart fa-3x text-primary mb-2"></i>
                    <p>
                        <strong>Combo bắp nước ưu đãi</strong><br />
                        <span class="text-muted">Nhiều lựa chọn hấp dẫn, ưu đãi riêng cho thành viên thân thiết.</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- Phim đang chiếu -->
        <h3 class="text-center">PHIM ĐANG CHIẾU</h3>
        <div class="row mt-4">
            <template v-for="(value, index) in list_phim.filter(x => x.tinh_trang === 2).slice(0, 4)" :key="index">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card position-relative shadow-sm">
                        <img :src="value.hinh_anh" class="card-img-top" alt=""
                            style="height: 400px; object-fit: cover;">
                        <div class="card-body">
                            <h6 class="text-truncate card-title text-warning fw-bold">{{ value.ten_phim }}</h6>
                            <p class="text-muted mb-1">{{ value.the_loai }}</p>
                            <div class="d-flex align-items-center mb-2">
                                <span class="text-warning me-1">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                    9.5
                                </span>
                                <span class="ms-auto fw-bold">
                                    <router-link :to="`/chi-tiet-phim/${value.id}`">
                                        <a href="#" class="btn btn-outline-danger w-100">Đặt
                                            vé</a>
                                    </router-link>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div class="text-center mb-4">
            <router-link to="/phim/dang-chieu">
                <button class="btn btn-outline-danger rounded-pill">Xem thêm phim</button>
            </router-link>
        </div>

        <!-- Về chúng tôi -->
        <div class="card p-5 border-0 shadow-sm rounded-4" style="background-color: #000957;">
            <h3 class="text-center text-uppercase fw-bold mb-5 text-light">Về chúng tôi</h3>
            <div class="row align-items-center">
                <!-- Nội dung bên trái -->
                <div class="col-md-7">
                    <h4 class="fw-bold mb-3">
                        <span class="text-danger">Mua vé xem phim </span>
                        <span class="text-primary">Online </span>
                        <span class=" text-light">trên OIZOIOI Cinema</span>
                    </h4>
                    <p class="text-light fs-5 mb-4">
                        Trải nghiệm mua vé trực tuyến dễ dàng, nhiều ưu đãi hấp dẫn và kết nối với các cụm rạp lớn trên
                        toàn quốc.
                    </p>
                    <ul class="list-unstyled fs-5">
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Mua vé Online, trải nghiệm phim hay</span>
                        </li>
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Đặt vé an toàn, tiện lợi trong vài bước</span>
                        </li>
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Tự do chọn chỗ ngồi, combo bắp nước siêu hot</span>
                        </li>
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Lưu lịch sử đặt vé, quản lý vé dễ dàng</span>
                        </li>
                    </ul>
                </div>

                <!-- Ảnh bên phải -->
                <div class="col-md-5 text-center">
                    <img src="https://media.baamboozle.com/uploads/images/55836/1682378705_349492_import-url.png"
                        alt="Mua vé online" class="img-fluid rounded-3 shadow-sm">
                </div>
            </div>
        </div>


        <!-- PHIM SẮP CHIẾU -->
        <h3 class="text-center mb-4">PHIM SẮP CHIẾU</h3>
        <div class="row">
            <template v-for="(value, index) in list_phim.filter(x => x.tinh_trang === 1).slice(0, 4)" :key="index">
                <div class="col-md-3 mb-4 d-flex">
                    <div class="card flex-full w-100" style="background-color: #FFF2F2;">
                        <img :src="value.hinh_anh" class="card-img-top" style="height: 350px;">
                        <div class="card-body">
                            <span class="badge bg-info mb-2">{{ value.ngay_phat_hanh }}</span>
                            <h5 class="card-title text-truncate text-warning">{{ value.ten_phim }}</h5>
                            <p class="card-text">{{ value.the_loai }}</p>
                            <button class="btn btn-outline-danger btn-sm mt-2">Nhắc tôi</button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="text-center">
            <router-link to="/phim/sap-chieu">
                <button class="btn btn-outline-danger rounded-pill ">Xem tất cả phim sắp chiếu</button>
            </router-link>
        </div>

        <!-- BÀI VIẾT -->
        <h3 class="text-center mb-4 mt-4">BÀI VIẾT</h3>
        <div class="row">
            <template v-for="(value, index) in list_bv.slice(0, 6)" :key="index">
                <div class="col-lg-4 mb-4 ">
                    <router-link :to="`/chi-tiet-bai-viet/${value.id}`">
                        <div class="card h-100">
                            <img :src="value.hinh_anh" class="card-img-top" style="height: 250px;">
                            <div class="card-body">
                                <h5 class="card-title text-truncate">{{ value.tieu_de }}
                                </h5>
                                <p class="card-text text-dark">{{ value.mo_ta_ngan }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </template>
        </div>
        <h3 class="text-center mb-4 fw-bold ">Khách Hàng Nói Gì Về OIZOIOI Cinema?</h3>
        <div class="row justify-content-center">
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm " style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Nguyễn Văn A</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">CEO Công ty ABC</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Rạp  OIZOIOI Cinema Trình là gì mà trình ai chấm có không gian hiện đại, âm thanh sống động và dịch vụ tuyệt vời. Tôi và gia
                            đình luôn chọn nơi đây mỗi cuối tuần để thư giãn."
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm " style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Trần Thị B</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Giám đốc XYZ Shop</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Tôi rất thích đặt vé online trên website  OIZOIOI Cinema – giao diện trực quan, thanh toán dễ dàng
                            và đặc biệt là chọn được chỗ ngồi yêu thích."
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm " style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Lê Văn C</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Chủ cửa hàng DEF</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Combo bắp nước giá hợp lý, phim mới cập nhật liên tục, hệ thống ghế ngồi êm ái – OIZOIOI Cinema
                            là lựa chọn hàng đầu của mình khi đi xem phim cùng bạn bè."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_phim: [{
                id: 3,
                ten_phim: "Thám Tử Kiên: Kỳ Án Không Đầu",
                hinh_anh: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/t/t/ttk_poster_official_fa_1638x2048px_1_.jpg",
                dao_dien: "Nguyễn Hữu Tuấn",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-04-19",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Việt - Phụ đề Tiếng Anh",
                the_loai: "Trinh thám, Hồi hộp, Hài hước",
                thoi_luong: 118,
                dien_vien: "Kiều Minh Tuấn; Vân Trang; Hứa Vĩ Văn",
                nha_san_xuat: "CJ HK Entertainment",
                trailer: "https://www.youtube.com/embed/7kO_ALcwNAw?list=RD7kO_ALcwNAw",
                noi_dung: "Thám Tử Kiên là một nhân vật được yêu thích trong tác phẩm điện của ăn khách Người Vợ Cuối Cùng của Victor Vũ, Thám Tử Kiên: Kỳ Không Đầu sẽ là một phim Victor Vũ trở về với thể loại sở trường Kinh Dị - Trinh Thám sau những tác phẩm tình cảm lãng mạn trước đó. Với slogan đầy ám ảnh: “Kẻ chết không siêu thoát, người sống không lối thoát”, Thám Tử Kiên: Kỳ Án Không Đầu ẩn chứa muôn vàn bí ẩn. Một chuỗi án mạng kinh hoàng tại một ngôi làng hẻo lánh - nơi liên tiếp xảy ra tám vụ giết người với cùng một đặc điểm rợn người: tất cả nạn nhân đều không còn đầu.  Thám Tử Kiên phải đối mặt với vụ án khủng khiếp gây hoang mang tột độ cho dân làng. Ai sẽ là nạn nhân tiếp theo trong chuỗi án mạng rùng rợn? Kiên có tìm ra mấu chốt để lần theo dấu vết hung thủ? Thuộc thể loại tâm linh - ly kỳ - phá án, Thám Tử Kiên: Kỳ Án Không Đầu được đạo diễn Victor Vũ kì công nhào nặn, ghi hình tại Tuyên Quang và Cao Bằng cực kì kĩ lưỡng. Dàn diễn viên chính trong phim bao gồm: Quốc Huy vai Thám tử Kiên, Đinh Ngọc Diệp vai Hai Mẫn, Quốc Anh vai Thạc, Anh Phạm vai Tuyết và Minh Anh vai Nga, NSƯT Xuân Trang trong vai Quan Liêm, NSND Mỹ Uyên trong vai Bà Vượng (vợ quan Liêm)."
            },

            {
                id: 4,
                ten_phim: "Yadang: Ba Mặt Lật Kèo",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/5/9/yadang-500_1746783491666.jpg",
                dao_dien: "Han Jae-rim",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-05-11",
                quoc_gia: "Hàn Quốc",
                ngon_ngu: "Tiếng Hàn - Phụ đề Tiếng Anh",
                the_loai: "Tội phạm, Tâm lý, Hành động",
                thoi_luong: 132,
                dien_vien: "Lee Byung-hun; Yoo Ah-in; Kim Tae-ri",
                nha_san_xuat: "CJ Entertainment",
                trailer: "https://www.youtube.com/embed/1sfhCvsEHVo?si=RVLD-bnIDtkbs2PH",
                noi_dung: "Từ giờ trở đi, bạn là kẻ chỉ điểm của tôi. Là “cầu nối” giữa thế giới ngầm và các cơ quan thực thi pháp luật, những kẻ chỉ điểm chuyên nghiệp được gọi là 'yadang' - người cung cấp thông tin bí mật về thế giới ma túy cho các công tố viên và cảnh sát. Khi một kẻ chỉ điểm ma túy “báo tin” về một bữa tiệc có sự tham dự của các VIP nổi tiếng và vô tình vướng vào một âm mưu nguy hiểm, hắn phải làm mọi thứ trong khả năng của mình không chỉ để sống sót,mà còn để phục thù."
            },


            {
                id: 5,
                ten_phim: "Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/5/9/doraemon-the-movie-nobitas-art-world-tales-1_1746800200069.jpg",
                dao_dien: "Kazuaki Imai",
                tinh_trang: 2,
                ngay_phat_hanh: "2025-12-20",
                quoc_gia: "Nhật Bản",
                ngon_ngu: "Tiếng Nhật - Lồng tiếng/Phụ đề Tiếng Việt",
                the_loai: "Hoạt hình, Phiêu lưu, Gia đình",
                thoi_luong: 99,
                dien_vien: "'Wasabi Mizuta; Megumi Ōhara",
                nha_san_xuat: "Shin-Ei Animation, TV Asahi",
                trailer: "https://www.youtube.com/embed/nDR_9NCMIYk?si=QZ032Uf1Ki5bJd9C",
                noi_dung: "Doraemon sử dụng bảo bối đưa nhóm bạn vào một thế giới bên trong tranh vẽ. Tại đây, họ gặp những nhân vật kỳ bí và phải giải mã bí ẩn cổ xưa để trở về thế giới thật, đồng thời cứu lấy thế giới tranh khỏi sự hủy diệt."
            },

            {
                id: 6,
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
                noi_dung: "Lật Mặt 8: Vòng Tay Nắng kể về sự khác biệt quan điểm giữa ba thế hệ ông bà cha mẹ con cháu. Ai cũng đúng ở góc nhìn của mình nhưng đứng trước hoài bão của tuổi trẻ, cuối cùng thì ai sẽ là người phải nghe theo người còn lại? Và nếu ước mơ của những đứa trẻ bị cho là viển vông, thì cơ hội nào và bao giờ tuổi trẻ mới được tự quyết định tương lai của mình?"
            },


            {
                id: 7,
                ten_phim: "Shin Cậu Bé Bút Chì: Bí Ẩn! Học Viện Hoa Lệ Tenkasu",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/4/10/crayon-shinchan-the-movie-school-mystery-the-splendid-tenkasu-academy-2_1744271074944.jpg",
                dao_dien: "Wataru Takahashi",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-07-20",
                quoc_gia: "Nhật Bản",
                ngon_ngu: "Tiếng Nhật - Lồng tiếng/Phụ đề Tiếng Việt",
                the_loai: "Hoạt hình, Hài, Phiêu lưu",
                thoi_luong: 104,
                dien_vien: "Yumiko Kobayashi; Miki Narahashi",
                nha_san_xuat: "Shin-Ei Animation",
                trailer: "https://www.youtube.com/embed/2ck-25PYR-o?si=Ij2QoYnbLVrNX-8u",
                noi_dung: "Phim Shin Cậu Bé Bút Chì: Bí Ẩn! Học Viện Hoa Lệ Tenkasu kể về trải nghiệm học tại Học viện Tenkasu của bé Shin. Shinnosuke và những người bạn của Shin thuộc Đội đặc nhiệm Kasukabe trải qua một tuần ở lại 'Học viện Tư nhân Tenkasu Kasukabe' (Học viện Tenkasu). Đây là trường nội trú ưu tú được quản lý bởi một AI hiện đại - Otsmun.  Tất cả các học sinh ban đầu được trao một huy hiệu với 1000 điểm và điểm của các em sẽ được Otsmun tăng hoặc giảm dựa trên hành vi và kết quả học tập của các em. Tuy nhiên, ai đó đã tấn công Kazama. Đội đặc nhiệm Kasukabe hợp lực với chủ tịch hội học sinh bỏ học của trường, Chishio Atsuki, một cựu vận động viên, để thành lập một nhóm thám tử và giải quyết bí ẩn."
            },

            {
                id: 8,
                ten_phim: "Quái Thú Đại Náo Sở Thú",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/4/16/quai-thu-500_1744775258641.jpg",
                dao_dien: "Brad Peyton",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-09-12",
                quoc_gia: "Hoa Kỳ",
                ngon_ngu: "Tiếng Anh - Phụ đề Tiếng Việt",
                the_loai: "Hành động, Khoa học viễn tưởng",
                thoi_luong: 101,
                dien_vien: "Dwayne Johnson; Naomie Harris",
                nha_san_xuat: "Warner Bros., New Line Cinema",
                trailer: "https://www.youtube.com/embed/IrEin0s_0Ik?si=ABnC-rDFyrrkQgF2",
                noi_dung: "Một thử nghiệm di truyền thất bại khiến nhiều loài động vật tại sở thú đột biến thành quái thú khổng lồ. Một nhà sinh vật học và đội đặc nhiệm phải ngăn chặn thảm họa khi chúng thoát ra và tấn công thành phố."
            },


            {
                id: 9,
                ten_phim: "Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội",
                hinh_anh: "https://cdn.galaxycine.vn/media/2025/5/6/de-men-500_1746513868460.jpg",
                dao_dien: "Trần Vũ Minh",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-07-20",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Nhật - Lồng tiếng/Phụ đề Tiếng Việt",
                the_loai: "Hoạt hình, Phiêu lưu, Hài",
                thoi_luong: 95,
                dien_vien: "Lồng tiếng bởi các nghệ sĩ Việt: Xuân Bắc, Tự Long",
                nha_san_xuat: "Hãng phim hoạt hình Việt Nam",
                trailer: "https://www.youtube.com/embed/Vwwsh0QxwIs?si=wctix0qqNzXst_ww",
                noi_dung: "Dựa trên cảm hứng từ “Dế Mèn Phiêu Lưu Ký”, bộ phim là hành trình phiêu lưu hài hước và xúc động của Dế Mèn khi lạc đến vùng đất Xóm Lầy Lội và kết bạn với các loài sinh vật kỳ quái, đồng thời học được những bài học quý giá về lòng dũng cảm và tình bạn."
            },


            {
                id: 10,
                ten_phim: "Địa Đạo: Mặt Trời Trong Bóng Tối",
                hinh_anh: "https://riocinemas.vn/Areas/Admin/Content/Fileuploads/images/poster%20web/2025/T4/SCDB.jpg",
                dao_dien: "Bùi Thạc Chuyên",
                tinh_trang: 1,
                ngay_phat_hanh: "2025-04-04",
                quoc_gia: "Việt Nam",
                ngon_ngu: "Tiếng Việt - Phụ đề Tiếng Anh",
                the_loai: "Lịch sử, Chiến tranh",
                thoi_luong: 128,
                dien_vien: "Thái Hòa; Quang Tuấn; Diễm Hằng Lamoon; Anh Tú Wilson; Hồ Thu Anh",
                nha_san_xuat: "'Nhà sản xuất Nguyễn Trí Viễn",
                trailer: "https://www.youtube.com/embed/xh6IDHjvytU?si=dTUhWz3bcqFJ2Jod",
                noi_dung: "Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực - Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường."
            },


            ]
            ,
            list_bv: [],
             list_suat_chieu: [
            
                  
                {
                    id: 7,
                    id_phim: 4,
                    ten_phim: 'Yadang: Ba Mặt Lật Kèo',
                    id_phong_chieu: 2,
                    ten_phong: 'Phòng 2',
                    ngay_chieu: '2025-07-15',
                    thoi_gian_bat_dau: '15:20',
                    thoi_gian_ket_thuc: '17:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                 {
                    id: 8,
                    id_phim: 5,
                    ten_phim: 'Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh',
                    id_phong_chieu: 2,
                    ten_phong: 'Phòng 2',
                    ngay_chieu: '2025-07-16',
                    thoi_gian_bat_dau: '19:30',
                    thoi_gian_ket_thuc: '21:00',
                    gia_ve: 450000,
                    tinh_trang: 1
                }
,
                {
                    id: 9,
                    id_phim: 6,
                    ten_phim: 'Lật Mặt 8: Vòng Tay Nắng',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-16',
                    thoi_gian_bat_dau: '21:30',
                    thoi_gian_ket_thuc: '23:30',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                 {
                    id: 10,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-12',
                    thoi_gian_bat_dau: '20:30',
                    thoi_gian_ket_thuc: '22:30',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 10,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-12',
                    thoi_gian_bat_dau: '22:30',
                    thoi_gian_ket_thuc: '00:30',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 12,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-15',
                    thoi_gian_bat_dau: '15:20',
                    thoi_gian_ket_thuc: '17:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
                {
                    id: 12,
                    id_phim: 3,
                    ten_phim: 'Thám Tử Kiên: Kỳ Án Không Đầu',
                    id_phong_chieu: 1,
                    ten_phong: 'Phòng 1',
                    ngay_chieu: '2025-07-15',
                    thoi_gian_bat_dau: '20:20',
                    thoi_gian_ket_thuc: '22:17',
                    gia_ve: 450000,
                    tinh_trang: 1
                },
            ],
           
        }
    },
    mounted() {

        // Lấy dữ liệu từ localStorage cho danh sách phim
        const stored = localStorage.getItem('list_phim');

        const defaultList = this.list_phim.slice(); // clone ra

        if (stored) {
            const storedList = JSON.parse(stored);
            const merged = [...defaultList, ...storedList.filter(storedItem => {
                return !defaultList.some(defaultItem => defaultItem.id === storedItem.id);
            })];

            this.list_phim = merged;
            localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
        } else {
            // localStorage rỗng → lưu list mặc định
            localStorage.setItem('list_phim', JSON.stringify(this.list_phim));
        }


        // Lấy dữ liệu từ localStorage cho danh sách suất chiếu
        const storedSuatChieu = localStorage.getItem('list_suat_chieu');

        const defaultListSuatChieu = this.list_suat_chieu.slice(); // clone danh sách mặc định

        if (storedSuatChieu) {
            const storedList = JSON.parse(storedSuatChieu);

            // Hợp nhất dữ liệu mặc định + localStorage (tránh trùng id)
            const merged = [...defaultListSuatChieu, ...storedList.filter(storedItem => {
                return !defaultListSuatChieu.some(defaultItem => defaultItem.id === storedItem.id);
            })];

            this.list_suat_chieu = merged;
            localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
        } else {
            // Nếu localStorage rỗng, lưu lại mặc định
            localStorage.setItem('list_suat_chieu', JSON.stringify(this.list_suat_chieu));
        }

    },
    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/client/home-page')
                .then((res) => {
                    this.list_phim = res.data.data_phim;
                    this.list_bv = res.data.data_bv;
                })
        }
    }
}
</script>

<style></style>Allowance resets July 18, 2025