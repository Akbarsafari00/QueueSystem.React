import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(true);
    const [isDefinitions, setIsDefinitions] = useState(false);

    const [isCurrentState, setIsCurrentState] = useState('Dashboard');
    
    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (isCurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (isCurrentState !== 'Definitions') {
            setIsDefinitions(false);
        }
    }, [
        history,
        isDashboard,
        isDefinitions
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "داشبورد",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIsCurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "analytics",
                    label: "داشبورد نوبتدهی",
                    link: "/dashboard-queue",
                    parentId: "dashboard",
                },
               
            ],
        },
        {
            id: "definitions",
            label: "تعاریف",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDefinitions,
            click: function (e) {
                e.preventDefault();
                setIsDefinitions(!isDefinitions);
                setIsCurrentState('Definitions');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "definition-department",
                    label: "دپارتمان",
                    link: "/definitions/departments",
                    parentId: "definitions",
                },
                {
                    id: "definition-department-unit",
                    label: "بخش ها",
                    link: "/definitions/department-units",
                    parentId: "definitions",
                },
            ],
        },
   
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;