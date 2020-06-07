import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


class UserSearchForm extends React.Component{
    constructor(){
    super();
        this.state = {
            name: "",
        }
    }

    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ name: "" })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} style={{paddingTop: "4%"}}>
                    <Input 
                        type="text"
                        label="User Search"
                        name="name"
                        placeholder="Github Username"
                        value={this.state.name}
                        onChange={this.inputChange}
                        required
                    />
                    <Button type="submit" variant="outlined" style={{marginLeft: "4%"}}>Search</Button>
                </form>
            </div>
        )
    }
}

export default UserSearchForm;