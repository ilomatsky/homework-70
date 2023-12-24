import ButtonSpinner from '../Spinner/ButtonSpinner';

const Form = () => {
  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit contact' : 'Add new contact'}</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={dish.name}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          required
          type="number"
          name="phone"
          id="phone"
          className="form-control"
          value={dish.description}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={dish.price}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          required
          type="url"
          name="photo"
          id="photo"
          className="form-control"
          value={dish.image}
          onChange={changeDish}
        />
      </div>

      <button type="submit" className="btn btn-info mt-2" disabled={isLoading}>
        {isLoading && <ButtonSpinner/>}
        {isEdit ? 'Done' : 'Add'}
      </button>
    </form>
  );
};

export default Form;