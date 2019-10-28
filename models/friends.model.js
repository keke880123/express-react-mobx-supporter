import mongoose from 'mongoose';

const FriendsSchema = mongoose.Schema(
    {
        name: { type: String, required: true, index: true, unique: true }
    },
    { collection: 'friend' }
);

let FriendsModel = mongoose.model('friend', FriendsSchema);

FriendsModel.getAll = () => {
    return FriendsModel.find({});
};

FriendsModel.addFriend = name => {
    // console.log('add friend');
    return FriendsModel({ name: name }).save();
    // return FriendsModel({ name: '산타페' }).save();
};

FriendsModel.removeFriend = name => {
    return FriendsModel.remove({ name: name });
};

export default FriendsModel;

// /i 는 대소문자 구분 없는 검색
// executes, name LIKE john and only selecting the "name" and "friends" fields
// MyModel.find({ name: /john/i }, 'name friends', function (err, docs) { })
