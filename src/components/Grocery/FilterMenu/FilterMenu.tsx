const FilterMenu = () => {
    return (
        <>
            <aside
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvas_filter"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Filter by</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <article className="offcanvas-body">
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" />
                        <div className="form-check-label">All sizes</div>
                    </label>
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" />
                        <div className="form-check-label">Large size</div>
                    </label>
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" />
                        <div className="form-check-label">Medium size</div>
                    </label>
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" />
                        <div className="form-check-label">Small size</div>
                    </label>

                    <hr />

                    <label className="form-check mb-2">
                        <input
                            className="form-check-input"
                            name="filter123"
                            type="radio"
                        />
                        <div className="form-check-label">Cheapest</div>
                    </label>
                    <label className="form-check mb-2">
                        <input
                            className="form-check-input"
                            name="filter123"
                            type="radio"
                        />
                        <div className="form-check-label">Best match</div>
                    </label>
                    <label className="form-check mb-2">
                        <input
                            className="form-check-input"
                            name="filter123"
                            type="radio"
                        />
                        <div className="form-check-label">Best rated</div>
                    </label>
                    <label className="form-check mb-2">
                        <input
                            className="form-check-input"
                            name="filter123"
                            type="radio"
                        />
                        <div className="form-check-label">Newest</div>
                    </label>
                    <hr />

                    <button
                        type="button"
                        className="btn btn-light w-100"
                        data-bs-dismiss="offcanvas"
                    >
                        Apply filter
                    </button>
                </article>
            </aside>
        </>
    );
};

export default FilterMenu;
