const xlsx = require('xlsx');
const fs = require('fs');
const File = require('../models/File');

exports.uploadExcel = async (req, res) => {
  const workbook = xlsx.readFile(req.file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);
  const fileRecord = await File.create({ user: req.user.id, filename: req.file.filename, data });
  res.json(fileRecord);
};

exports.getHistory = async (req, res) => {
  const history = await File.find({ user: req.user.id });
  res.json(history);
};