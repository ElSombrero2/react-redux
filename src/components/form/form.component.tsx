import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '../../store/feature/person.slice'

export function Form(): JSX.Element{

    const dispatch = useDispatch()
    const form = useRef()
    
    const submit = (e) => {
        e.preventDefault()
        const elem: HTMLFormElement = form.current
        const nom = elem?.elements['nom'].value
        const prenom = elem?.elements['prenom'].value
        dispatch(addPerson({nom, prenom}))
        elem.reset()
    }

    return (
        <form ref={form} onSubmit={submit}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" name="nom" type="text" />
                </div>
            </div>

            <div className="field">
                <label className="label">Firstname</label>
                <div className="control">
                  <input className="input" name="prenom" type="text" />
                </div>
            </div>
              <div className="field">
                <button className="button is-primary">Ajouter</button>
            </div>
        </form>
    )
}  