const Cardcomponent = ({ image, title, description, buttontext, className }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-3">
      <div className="w-full h-48 flex items-center justify-center">
        <img src={image} className="w-full h-full rounded" alt="image" />
      </div>
      <h1 className="text-2xl font-bold text-grey-700">{title}</h1>
      <p>{description}</p>
      <button className={`${className} text-white px-4 py-2 rounded`}>{buttontext}</button>
    </div>
  )
}
export default Cardcomponent;