import DataDonasi from "./component/dataDonasi/DataDonasi"
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"
import Yayasan from "./component/yayasan/Yayasan"

function App() {

  return (
    <>
    <Header nama={"DonateDoIt"}/>

    <h1>Data Riwayat Muzzakki</h1>
    <DataDonasi nama={"Dede Pardede"} nominal={34000000} tanggal={"09-07-2025"} img={"https://picsum.photos/100/100"}/>
    <DataDonasi nama={"Bagus Purwanto"} nominal={900000} tanggal={"11-12-2025"} img={"https://picsum.photos/100/100"}/>
    <DataDonasi nama={"Nana Shimura"} nominal={24500000} tanggal={"10-10-2025"} img={"https://picsum.photos/100/100"}/>
    <DataDonasi nama={"Shigaraki Tomura"} nominal={300000} tanggal={"13-9-2025"} img={"https://picsum.photos/100/100"}/>
    <DataDonasi nama={"Tom Holan"} nominal={100000000} tanggal={"30-2-2025"} img={"https://picsum.photos/100/100"}/>
    <DataDonasi nama={"Herry Maguaire"} nominal={3450000} tanggal={"10-6-2025"} img={"https://picsum.photos/100/100"}/>

    <Yayasan nama={"Baznas"} domisili={"Depok"}/>
    <Footer nama={"DonateDoIt"}/>
    </>
  )
}

export default App
