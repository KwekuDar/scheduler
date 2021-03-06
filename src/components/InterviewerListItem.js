import React from "react";
import 'components/InterviewerListItem.scss';
import classNames from 'classnames';


export default function InterviewerListItem(props){

    const interviewClass = classNames("interviewers__item",
    {"interviewers__item--selected": props.selected
    })

    //const imageClass = classNames("interviewers__item-image",
    //{"interviewers__item--selected-image": props.selected
    //})

    return(
    <li className={interviewClass} selected={props.selected} onClick={props.setInterviewer}>
        <img
            className="interviewers__item-image"
            src={props.avatar}
            alt={props.name}
        />
        {props.selected && props.name}
    </li>
    )
}