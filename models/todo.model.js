import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// define Artist Schema
const TodoSchema = new Schema({
    idx: { type: Number, required: true },
    content: { type: String, required: true, default: '' },
    isSolved: { type: Boolean, required: true, default: false }
});

let TodoModel = mongoose.model('Todo', TodoSchema);

TodoModel.addTodo = data => {
    return TodoModel(data).save();
};

TodoModel.getList = () => {
    return TodoModel.find({});
};

TodoModel.toggleSolve = (id, bool) => {
    return TodoModel.update({ _id: id }, { isSolved: bool });
};

TodoModel.removeTodo = id => {
    return TodoModel.remove({ _id: id });
};

export default TodoModel;
