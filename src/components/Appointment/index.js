import React from "react";

import "components/Appointment/styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  const {
    time,
    interview,onEdit, 
    onDelete,
    onAdd
  } = props;

  const headerProps = {
    time
  }

  let renderProps;
  if (interview) {
    renderProps = {
      student: interview.student,
      interviewer: interview.interviewer,
      onEdit,
      onDelete
    }
  };

  const deleteProps = { 
    onAdd
  }
  
  
  return (
    <article className="appointment">
      <Header {...headerProps} />
      {interview ? <Show {...renderProps} /> : <Empty {...deleteProps} />}
    </article>
  );
}