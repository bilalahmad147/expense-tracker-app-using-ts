import React from 'react';

const AddTodoForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter Todo" />
                <button>Add Todo</button>
                <button>Delete Todo</button>
            </form>
        </div>
    )
}

export default AddTodoForm;