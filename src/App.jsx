import Donatur from "./components/donatur/Donatur";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Kerjasama from "./components/Kerjasama/Kerjasama";
import TimKami from "./components/ourTeam/DonateDoItTeam";
import Yayasan from "./components/yayasan/yayasan";

function App() {
  return (
    <div>
      <Header nama="DonateDoIt"/>
      <Kerjasama
        n1="Afganistan"
        n2="Arab Saudi"
        n3="Armenia"
        n4="Bahrain"
        n5="Azerbaijan"
        n6="Brunei"
        n7="Filipina"
        n8="Gorgia"
        n9="India"
        n10="Irak"
        n11="Iran"
        n12="Palestina"
        n13="Kamboja"
        n14="Kazakhstan"
        n15="Korea Selatan"
        n16="Korea Utara"
        n17="Kuwait"
        n18="Kirgizstan"
        n19="Laos"
        n20="Malaysia"
        n21="Indonesia"
        n22="Maladewa"
        n23="Mesir"
        n24="Mongolia"
        n25="Myanmar"
        n26="Nepal"
        n27="Pakistan"
        n28="Qatar"
        n29="Rusia"
        n30="Singapura"
        n31="Sri Lanka"
        n32="Suriah"
        n33="Thailand"
        n34="Tiongkok"
        n35="Uzbekistan"
        n36="Vietnam"
        n37="Yordania"
        n38="Yaman"
        n39="Belanda"
        n40="Swiss"
        n41="Irlandia"
        n42="Jerman"
        n43="Swiss"
        n44="Irlanda"
        n45="Jerman"
        n46="Islandia Baru"
        n47="Denmark"
      />
      <Donatur
        donatur1="Bagus Purwanto"
        nominal1={20000000}
        donatur2="Ade Nenino"
        nominal2={5000000}
        donatur3="Almamemino Jahen"
        nominal3={2100500}
        donatur4="Mahmud Memo"
        nominal4={3034000}
        donatur5="Ahmad Ahdanoni"
        nominal5={9008000}
        donatur6="Bambang Bambungo"
        nominal6={200000}
        donatur7="Reno Ardianto"
        nominal7={10020000}
        donatur8="Unyil Albab"
        nominal8={8700000}
      />
      <TimKami
        direktur="Rizky Bondowoso"
        sekretaris="Agung Purmana"
        manager="Olga Bisoldona"
        kepalaRelawan="Silvi Anastasya"
        Staff1="Syarif"
        Staff2="Ari"
        Staff3="Fathur"
      />
      <Yayasan
        y1="Baznas"
        y2="Benih Baik"
        y3="Dompet Dhuafa"
        y4="Rumah Yatim"
        y5="Rumah Zakat"
        y6="Wecare.id"
        y7="Human Initiative"
      />
      <Footer nama="DonateDoIt.or.id"/>
    </div>
  );
}

export default App;
