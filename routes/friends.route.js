import express from 'express';
import friendController from '../controllers/friends.controller';
const router = express.Router();

router.get('/', (req, res) => {
    friendController.getAll(req, res);
});

router.post('/', (req, res) => {
    friendController.addFriend(req, res);
});

router.delete('/', (req, res) => {
    friendController.removeFriend(req, res);
});

export default router;
