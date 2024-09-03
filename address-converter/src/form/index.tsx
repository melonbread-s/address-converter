const FormComponent = (): JSX.Element => {
    
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        <form action={search}>
            <input name="query" />
            <button type="submit">Submit</button>
        </form>
    );
};
  
export default FormComponent;
  