const Employee = require('../model/employee');
let fs = require('fs');
const path = require('path');

const getAllEmployees = async (req, res) => {
  const employees = await Employee.findAndCountAll();
  res.send(employees.rows);
};

const getEmployee = async (req, res) => {
  const id = req.params.id;
  await Employee.findOne({ where: { id: id } }).then((item) => {
    if (item != null) {
      res.send(item);
    } else {
      res.sendStatus(404);
    }
  });
};

const saveEmployee = async (req, res) => {

  let extension;

  const employee = getObjectFromFields(req);

  if (req.files.image) {
    extension = path.extname(req.files.image.name);
    employee.profilePicture = 'profilePicture' + extension;
  }
  else {
    employee.profilePicture = null;
  }

  await Employee.create(employee).then((item) => {
    if (req.files.image) {
      let id = item.id;
      let folder = path.join(__dirname, '..', 'uploads', id + '');
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
      }
      let oldpath = req.files.image.path;
      let newpath = path.join(__dirname, '..', 'uploads', id + '', 'profilePicture' + extension);

      fs.readFile(oldpath, function (err, data) {
        if (err)
          res.sendStatus(404);
        else {
          fs.writeFile(newpath, data, function (erro) {
            if (erro)
              console.log("error : " + erro);
            else {
              res.send({ id });
            }
          });
        }
      });
    }
    else {
      res.sendStatus(201);
    }

  });

};

const updateEmployee = async (req, res) => {
  const id = req.params.id;
  await Employee.findByPk(id).then((item) => {
    if (item != null) {
      item
        .update(getObjectFromFields(req))
        .then(() => {

          if (req.files.image) {

            let oldpath = req.files.image.path;
            let extension = path.extname(req.files.image.name);
            let id = req.fields.id;
            let folder = path.join(__dirname, '..', 'uploads', id + '');
            if (!fs.existsSync(folder)) {
              fs.mkdirSync(folder);
            }
            let newpath = path.join(__dirname, '..', 'uploads', id + '', 'profilePicture' + extension);

            fs.readFile(oldpath, function (err, data) {
              if (err)
                res.sendStatus(404);
              else {
                fs.writeFile(newpath, data, function (erro) {
                  if (erro)
                    console.log("error : " + erro);
                  else
                    res.sendStatus(201);
                });
              }
            });
          }
          else res.sendStatus(204);
        });
    } else {
      res.sendStatus(404);
    }
  });
};

const getObjectFromFields = (req) => {
  return {
    firstName: req.fields.firstName,
    lastName: req.fields.lastName,
    status: req.fields.status,
    jobName: req.fields.jobName,
    email: req.fields.email,
    phone: req.fields.phone,
    startDate: req.fields.startDate,
    endDate: req.fields.endDate
  }
}

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  await Employee.findByPk(id).then((item) => {
    if (item != null) {
      item.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
};

module.exports = {
  getAllEmployees,
  getEmployee,
  saveEmployee,
  updateEmployee,
  deleteEmployee
};