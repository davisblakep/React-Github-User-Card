import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


class UserSearchForm extends React.Component{
    constructor(){
    super();
        this.state = {

        }
    }

    

    render(){
        console.log("User search form props", this.props)
        return(
            <div style={{textAlign: "center"}}>
                <form onSubmit={this.props.onSubmit} style={{paddingTop: "4%"}}>
                    <Input 
                        type="text"
                        label="User Search"
                        name="name"
                        placeholder="Github Username"
                        value={this.props.userSearch}
                        onChange={this.props.inputChange}
                        required
                    />
                    <Button type="submit" variant="outlined" style={{marginLeft: "4%"}}>Search</Button>
                </form>
            </div>
        )
    }
}

export default UserSearchForm;