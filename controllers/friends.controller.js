import Friends from '../models/friends.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const friends = await Friends.getAll();
        logger.info('select all friends');
        res.send(friends);
    } catch (err) {
        logger.error('error in select all friends : ', err);
        res.send('got error in select all friends');
    }
};

controller.addFriend = async (req, res) => {
    const friendName = req.body.name;
    console.log('name', friendName);
    try {
        const savedFriend = await Friends.addFriend(friendName);
        logger.info('saved friends : ', savedFriend);
        res.send('saved friend : ' + savedFriend);
    } catch (err) {
        logger.error('error in saved friends : ', friendName);
        res.send('error in saved friends : ' + friendName);
    }
};

controller.removeFriend = async (req, res) => {
    const friendName = req.body.name;
    try {
        const removedFriend = await Friends.removeFriend(friendName);
        logger.info('removed friends : ', removedFriend);
        res.send('removed friend : ', removedFriend);
    } catch (err) {
        logger.error('error in removed friends : ', friendName);
        res.send('error in removed friends : ' + friendName);
    }
};

export default controller;
