import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
    const {days} = props;
    const arrDays = days.map(dayItem =>
        // create compont daylistitem
        <DayListItem key={dayItem.id}
          name={dayItem.name}
          spots={dayItem.spots}
          selected={dayItem.name === props.day}
          setDay={props.setDay}
        />);
    return (
    <ul>
        {arrDays}
    </ul>
);
}
