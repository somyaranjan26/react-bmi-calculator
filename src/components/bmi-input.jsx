export const BMIInput = (props) => {
return (
<input 
    type="text" 
    placeholder={ props.placeholder }
    value={props.value} 
    onChange={props.change}
    className="mt-1 appearance-none block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                focus:outline-none focus:ring-pink-700 focus:border-pink-700 sm:text-md"
/>
)
}