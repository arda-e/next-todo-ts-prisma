interface AttributeProps {
  name: string
  value: string | null
}
const Attribute = ({ name, value = '-' }: AttributeProps) => {
  return (
    <>
      <div className="flex gap flex-col">
        <h3 className="flex grow font-semibold text-lg">{name}</h3>
        <p className="text-gray-500">{value}</p>
      </div>
    </>
  )
}
export default Attribute
