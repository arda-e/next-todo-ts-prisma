interface AttributeProps {
  name: string
  value: string | null
}
const Attribute = ({ name, value = '-' }: AttributeProps) => {
  return (
    <>
      <div className="gap flex flex-col">
        <h3 className="flex grow text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{value}</p>
      </div>
    </>
  )
}
export default Attribute
