import { useState } from "react";
import { store } from '../../store';
import { useSnapshot } from "valtio";

const brakesCalipersData = [
	'#d42112', '#f39b1e', '#d3cc2b', '#92d0f7'
]

const BrakesCalipers = () => {
	const { caliperColor } = useSnapshot(store)
	const [selectedCaliperColor, setSelectedCaliperColor] = useState(caliperColor)
	const handleClick = (color) => {
		store.caliperColor = color
		setSelectedCaliperColor(color)
	}
	return (
		<div className="w-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
			{brakesCalipersData.map((color) => (
				<div
					key={color}
					className={`w-[80px] md:w-[120px] aspect-square p-2 rounded-full cursor-pointer transition-all duration-200 border-2 border-transparent ${selectedCaliperColor === color ? 'border-neutral-600 ' : ''}`}
					onClick={() => handleClick(color)}
				>
					<div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
				</div>
			))}
		</div>
	)
};

export default BrakesCalipers;