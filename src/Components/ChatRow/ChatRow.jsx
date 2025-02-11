import { Person, SmartToy } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import './ChatRow.css';

export default function ChatRow({ dir, msg, bg, anim, profile }) {

    const [msgb, setmsgb] = useState(true);

    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })

    useEffect(() => {

        anim === false && setmsgb(false);
        
        setTimeout(() => {
            setmsgb(false);
        }, 1500)
    }, [anim])

    return (
        <div className="chatrow">
            <div className={`chatrow__con ${dir}`}>
                <div className="p__icon">
                    { profile === false ? <Person sx={{ fontSize: '20px', color: '#a1a1a1' }} /> : <SmartToy sx={{ fontSize: '20px', color: '#a1a1a1' }} />}
                </div>
                <div className="msg__con" style={{ background: bg ? bg : '#FFF', width: isMobile && '150px' }}>
                    { msgb ? (
                        <>
                            <div className="ball"></div>
                            <div className="ball"></div>
                            <div className="ball"></div>
                        </>
                    ) : (
                        msg.map((val) => {
                            return val;
                        })
                    ) }
                </div>
            </div>
        </div>
    )
}
