// A spinning circle shown while data is loading.
// role="status" makes screen readers announce the label.
function Spinner({ label = 'Loading…' }) {
  return (
    <div className="spinner-wrap" role="status">
      <span className="spinner" aria-hidden="true"></span>
      <span>{label}</span>
    </div>
  )
}

export default Spinner
