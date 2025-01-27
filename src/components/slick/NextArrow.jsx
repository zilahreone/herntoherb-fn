export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className='next-btn'
        onClick={onClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </>
  )
}
