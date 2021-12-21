export default function Filter(props) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={props.hide}
          onChange={props.handleChange}
        />
        hide completed
      </label>
    </>
  );
}
