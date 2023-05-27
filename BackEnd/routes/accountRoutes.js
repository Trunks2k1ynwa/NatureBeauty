const { Router } = require('express');
const {
  getAllAccounts,
  getAccount,
  updateAccount,
  deleteAccount,
  deleteMe,
  getMe,
  createAccount,
  updateMe,
  getMyOrder,
  updateInfoMe,
} = require('./../controllers/accountController');
const {
  forgotPassword,
  login,
  signup,
  logout,
  protect,
  resetPassword,
  restrictTo,
  updatePassword,
} = require('../controllers/authController');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch('/updateMyPassword', updatePassword);
router
  .route('/me')
  .get(getMe, getAccount)
  .patch(getMe, updateMe)
  .delete(getMe, deleteMe);

router.route('/updateInfoMe').patch(getMe, updateInfoMe);
router.route('/orderme').get(getMe, getMyOrder);

router.use(restrictTo('admin'));

router
  .route('/')
  .get(getAllAccounts)
  .post(createAccount);

router
  .route('/:id')
  .get(getAccount)
  .patch(updateAccount)
  .delete(deleteAccount);

module.exports = router;
