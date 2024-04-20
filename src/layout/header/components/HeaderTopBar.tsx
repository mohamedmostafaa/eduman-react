import React,{useState} from 'react';

const HeaderTopBar = () => {
    const [isActiveF, setActiveF] = useState(true);

    const handleToggleF = () => {
        setActiveF(!isActiveF);
    };
    return (
        <div className={`header-note-area p-relative d-none d-md-block ${isActiveF ? "danger" : "eduman-header-notice-hide"}`}>
        <div className="container-fluid">
            <div className="note-text text-center">
                <p>Enroll now and get <span>40% off</span> any course. Courses from <span>$5. 99</span>.</p>
            </div>
        </div>
        <div className="eduman-header-notice-action-close">
            <button onClick={handleToggleF}><i className="fal fa-times"></i></button>
        </div>
    </div>
    );
};

export default HeaderTopBar;