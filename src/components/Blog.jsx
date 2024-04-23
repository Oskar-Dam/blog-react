/* eslint-disable react/prop-types */
function Blog(props) {
    const {email, name, body} = props.blog;
  return (
    <div className="blog-item">
         <label>{email}</label>   
         <label>{name}</label> 
         <p>{body}</p>  
    </div>
  )
}

export default Blog