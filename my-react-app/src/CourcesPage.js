import React from 'react';
class CourcesPage extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            course:{
                title:""

            }
        };
    }

    render() {
        return (
            <form action="">

                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
            </form>
        )
    }

}

export default CourcesPage;


