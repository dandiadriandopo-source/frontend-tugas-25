function DataDonasi({nama, nominal, tanggal, img}){
    return(
        <div>
            <img src={img} alt="gambar" />
            <ul>
                <li>nama: {nama}</li>
                <li>nominal: Rp{nominal}</li>
                <li>tanggal: {tanggal}</li>
            </ul>
        </div>
    )
}

export default DataDonasi