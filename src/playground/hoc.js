import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return ((props)=>(
        <div>
            { props.isAdmin &&  <p>This is private Info</p>}
            <WrappedComponent {...props} />
        </div>
    ))
}

const requireAuthentication = (WrappedComponent) =>{
    return((props)=>(
        <div>
            { props.isAuthenticate ? (
                <WrappedComponent {...props} />
            ):(
                <p>Not Authenticate</p>
            )}
            
        </div>
    ))
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin= {true} info='There are the details.' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticate={false} info='There are the details.' />, document.getElementById('app'))