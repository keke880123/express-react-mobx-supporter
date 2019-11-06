import mongoose from 'mongoose';
// var NumberInt = require('mongoose-int32');

const Schema = mongoose.Schema;
/*
    db 수정
    idx: Number, // 순서
    type: String // text or img
    content: String // 텍스트 or Url
    isSolved: Boolean // checkbox checked
*/
// define Artist Schema
const TodoSchema = new Schema({
    // _id
    idx: { type: Number, required: true },
    type: { type: String, required: true, default: 'text' },
    content: { type: String, required: true, default: '' },
    isSolved: { type: Number, required: true, default: 0 },
    test: { type: Number, default: 0 }
});

let TodoModel = mongoose.model('Todo', TodoSchema);

/*  
    {
        idx: 1,
        type: 'text',
        content: 'text',
        isSovled: true
    }
*/
TodoModel.addTodo = data => {
    return TodoModel(data).save();
};

TodoModel.getList = () => {
    return TodoModel.find({});
};

TodoModel.toggleSolve = id => {
    // console.log('id', id);
    return TodoModel.findOneAndUpdate({ _id: id }, { $bit: { isSolved: { xor: 1 } } }, { new: true, passRawResult: true });
    // return TodoModel.update({ _id: id }, { isSolved: true });
};

TodoModel.removeTodo = id => {
    return TodoModel.remove({ _id: id });
};

export default TodoModel;
