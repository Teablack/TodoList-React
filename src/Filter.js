export default function Filter({ label, handleChange }) {
  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange} />
        {label}
      </label>
    </>
  );
}
