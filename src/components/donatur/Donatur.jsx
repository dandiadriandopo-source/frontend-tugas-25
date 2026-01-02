function Donatur({
  donatur1,
  donatur2,
  donatur3,
  donatur4,
  donatur5,
  donatur6,
  donatur7,
  donatur8,
  nominal1,
  nominal2,
  nominal3,
  nominal4,
  nominal5,
  nominal6,
  nominal7,
  nominal8
}) {
  return (
    <div>
        <h1>Muzzakki DonateDoIt</h1>
      <ol>
        <li>Nama: {donatur1} - Rp{nominal1}</li>
        <li>Nama: {donatur2} - Rp{nominal2}</li>
        <li>Nama: {donatur3} - Rp{nominal3}</li>
        <li>Nama: {donatur4} - Rp{nominal4}</li>
        <li>Nama: {donatur5} - Rp{nominal5}</li>
        <li>Nama: {donatur6} - Rp{nominal6}</li>
        <li>Nama: {donatur7} - Rp{nominal7}</li>
        <li>Nama: {donatur8} - Rp{nominal8}</li>
      </ol>
    </div>
  );
}

export default Donatur
