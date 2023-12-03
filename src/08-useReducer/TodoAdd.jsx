import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

   const {description, onInputChange, onResetForm} = useForm ({
      description: ''
   })

   const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description: description,
    }
    onNewTodo(newTodo);
    onResetForm();
   }

  return (
    <>
    <div className="col-5">
    <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Que hay que hacer?"
            className="form-control col-1"
            name="description"
            value={description}
            onChange={onInputChange}
        />

        <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
    </div>
    </>
  )
}
