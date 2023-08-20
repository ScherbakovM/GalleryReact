import { animate, motion } from "framer-motion"
import { useRef } from "react"
import { useState } from "react";
export const Component = ({ isVisible }) => {

    const [active, setActive] = useState(false);

    function openSquare() {
        setActive(!active)
    }

    const componentRef = useRef();
    return (
        <motion.div
            ref={componentRef}
            title="потяните вниз"
            className="qwerty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                drag
                dragConstraints={false}
                dragSnapToOrigin={true}
                onDragStart={openSquare}
                dragElastic={false}
                className={active ? "elem open" : "elem"} >
                <div className={active ? "descriptionMenu open" : "descriptionMenu"}>Menu</div>
                <ul className={active ? "menu open" : "menu"} >
                    <li className="menuLi">О нас</li>
                    <li className="menuLi">Услуги</li>
                    <li className="menuLi">Вопросы</li>
                    <li className="menuLi">Контакты</li>
                </ul>
            </motion.div>
        </motion.div>
    )

}