import "./todoFooter.css";

function TodoFooter({todos, onClearCompleted}) {


    const CompletedSize = todos.filter((todo) => todo.isCompleted).length;    
    return (
        <div className="footerDiv">
            <span className="footerSpan" >{CompletedSize}/{todos.length} Completed</span>
            <button className="footerBtn" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )

}

export default TodoFooter;