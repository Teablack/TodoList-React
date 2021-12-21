export default function TodoItem({ item, handleChange }) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        visibility={item.hide && item.completed}
        onChange={(e) => handleChange(item.id)}
      />
      <p style={item.completed ? completedStyle : null}>{item.text}</p>
    </div>
  );
}
