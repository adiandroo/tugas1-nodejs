const { response } = require('express');

// initiate express router
let router = require('express').Router();

// set default API respose
router.get('/', function(req, res) {
    res.json({
        Nama : 'Richard Muhammad',
        TanggalLahir : '14 Januari 1994',
        JenisKelamin : 'Laki - Laki',
        Hobi : 'Membaca Buku'
    });
});

// export API
module.exports = router;