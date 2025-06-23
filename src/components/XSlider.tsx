import { ReactNode } from "react";

type XSliderProps = {
    scrollStyle?: string,
    itemStyle?: string,
    list: ReactNode[];
};
/**
 * 
 * @param list List of items in the Scroll
 * @param scrollStyle Style of whole section
 * @param itemStyle Style of every item in the Scroll
 * @returns 
 */
export const XSlider = ({ list,scrollStyle ='',itemStyle ='' }: XSliderProps) => {
return (
    <ul className={`flex flex-row overflow-y-auto hide-scrollbar ${scrollStyle}`}>
        {list.map((item, index) => (
            <li key={index} className={`flex items-center  justify-center min-w-[100px] ${itemStyle}`}>
            {item}
        </li>
        ))}
    </ul>
)
}
