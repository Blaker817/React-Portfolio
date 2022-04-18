import { useState } from "react"
function Contact() {
    const [info, setInfo] = useState({ email: '', name: '', message: '' })
    const [hasError, setHasError] = useState(false)
    const handleBlur = (property) => {
        if (property==="email"){
if (!info.email.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ))
  {setHasError
(true)
return}
        }
if (info[property])
{setHasError(false)} else { setHasError(true)}
       
    }
    const handleChange = (e) =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }
    return (
        <div className="p-3 row justify-content-center  " >
            <div className="col-8">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onBlur = {() => handleBlur("email")} value={info.email} onChange={handleChange} required="required"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name"  onBlur={() => handleBlur("name")} value={info.name} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="3" name="message" onBlur={() =>handleBlur("message")} value={info.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                {hasError &&
                    <div> a valid entry for this field is required
                    </div>}
            </div>

        </div>
    );
}

export default Contact;