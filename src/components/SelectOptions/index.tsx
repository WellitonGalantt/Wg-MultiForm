import './style.css';

type ComponetProps ={
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: ()=> void;
}

function SelectOptions({title, description, icon, selected, onClick}:ComponetProps){

  return(
    <>
      <div onClick={onClick} className={selected && 'select-box-todo select' || "select-box-todo"}>
        <span>{icon}</span>
        <div className="select-box-description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default SelectOptions;