export default function Footer() {
    return (
        <>
            <footer className="footer footer-transparent d-print-none">
                <div className="container-xl">
                    <div className="row text-center align-items-center flex-row-reverse">
                        <div className="col-lg-auto ms-lg-auto">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item">
                                    <a
                                        href="https://docs.tabler.io"
                                        target="_blank"
                                        className="link-secondary"
                                        rel="noopener"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="./license.html" className="link-secondary">
                                        License
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://github.com/tabler/tabler"
                                        target="_blank"
                                        className="link-secondary"
                                        rel="noopener"
                                    >
                                        Source code
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item">
                                    Copyright © 2025
                                    <a href="." className="link-secondary">
                                        Tabler
                                    </a>
                                    . All rights reserved.
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="./changelog.html"
                                        className="link-secondary"
                                        rel="noopener"
                                    >
                                        {" "}
                                        v1.3.2{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}