const express = require('express');
const multer = require('multer');
const { uploadExcel, getHistory } = require('../controllers/fileController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', protect, upload.single('file'), uploadExcel);
router.get('/history', protect, getHistory);

module.exports = router;