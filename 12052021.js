void main() {



    // Chuong Trinh In Lich Tra Tien goc + lai hang thang

    final lai_Suat = 0.08 / 12.0;

    final thogianVay = 12;

    double goc = 100000000;



    printPayShedule(goc, laiSuat, thogianVay);





}





void printPayShedule(double goc, double laiSuat, int thoiGianVay) {

    print('Lich Trinh');

    print(goc);

    print(laiSuat);

    print(thoiGianVay);



    double gocConLai = goc;



    double gocHangThang = goc / thoiGianVay;







    // Dung Cau Truc Lap

    for (int i = 0; i < thoiGianVay; i++) {



        double laiPhaiTra = gocConLai * laiSuat;

        double tienPhaiTraHangThang = laiPhaiTra + gocHangThang;



        gocConLai = gocConLai - gocHangThang;



        print('Tien goc:' + gocConLai.toString() + ' Goc:' + gocHangThang.toString() + 'Lai:' + laiPhaiTra.toString() + ' Goc + Lai: ' + tienPhaiTraHangThang.toString());

    }



}