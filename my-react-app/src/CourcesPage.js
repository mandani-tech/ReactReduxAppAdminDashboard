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

    handleChange = event=>{
        const course = {...this.state.course, title: event.target.value};
        this.setState({course: course})
    };

    handleSubmit =event =>{
        event.preventDefault();
    alert (this.state.course.title)
};

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>

                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                <input type="submit" value="Save"/>
            </form>
        )
    }

}

export default CourcesPage;


