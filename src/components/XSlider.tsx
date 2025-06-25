import { ReactNode } from "react";

type XSliderProps = {
    sliderStyle?: string,
    itemStyle?: string,
    list: ReactNode[];
};
/**
 * 
 * @param list List of items in the Scroll
 * @param scrollStyle Style of whole section
 * @param itemStyle Style of every item in the Scroll
 */
export const XSlider = ({ list,sliderStyle: scrollStyle,itemStyle }: XSliderProps) => {
return (
    <ul className={`flex flex-row overflow-y-auto hide-scrollbar ${scrollStyle}`}>
        {list.map((item, index) => (
            <li key={index} className={`flex min-w-[64px] ${itemStyle}`}>
            {item}
            </li>
        ))}
    </ul>
)
}
