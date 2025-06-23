function BlankPage() {
    return (
        <>
            <div className="page-header d-print-none" aria-label="Page header">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">Empty page</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl"></div>
            </div>
        </>
    );
}

export default BlankPage;