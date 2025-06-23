export default function Setting() {
    return (
        <>
            <div className="settings">
                <a
                    href="#"
                    className="btn btn-floating btn-icon btn-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSettings"
                    aria-controls="offcanvasSettings"
                    aria-label="Theme Builder"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-1"
                    >
                        <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                        <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                        <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                        <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                    </svg>
                </a>
                <form
                    className="offcanvas offcanvas-start offcanvas-narrow"
                    tabIndex={-1}
                    id="offcanvasSettings"
                >
                    <div className="offcanvas-header">
                        <h2 className="offcanvas-title">Theme Builder</h2>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body d-flex flex-column">
                        <div>
                            <div className="mb-4">
                                <label className="form-label">Color mode</label>
                                <p className="form-hint">Choose the color mode for your app.</p>
                                <label className="form-check">
                                    <div className="form-selectgroup-item">
                                        <input
                                            type="radio"
                                            name="theme"
                                            defaultValue="light"
                                            className="form-check-input"
                                            defaultChecked={true}

                                        />
                                        <div className="form-check-label">Light</div>
                                    </div>
                                </label>
                                <label className="form-check">
                                    <div className="form-selectgroup-item">
                                        <input
                                            type="radio"
                                            name="theme"
                                            defaultValue="dark"
                                            className="form-check-input"
                                        />
                                        <div className="form-check-label">Dark</div>
                                    </div>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Color scheme</label>
                                <p className="form-hint">The perfect color mode for your app.</p>
                                <div className="row g-2">
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="blue"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-blue" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="azure"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-azure" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="indigo"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-indigo" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="purple"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-purple" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="pink"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-pink" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="red"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-red" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="orange"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-orange" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="yellow"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-yellow" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="lime"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-lime" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="green"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-green" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="teal"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-teal" />
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-colorinput">
                                            <input
                                                name="theme-primary"
                                                type="radio"
                                                defaultValue="cyan"
                                                className="form-colorinput-input"
                                            />
                                            <span className="form-colorinput-color bg-cyan" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Font family</label>
                                <p className="form-hint">
                                    Choose the font family that fits your app.
                                </p>
                                <div>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-font"
                                                defaultValue="sans-serif"
                                                className="form-check-input"
                                                defaultChecked={true}

                                            />
                                            <div className="form-check-label">Sans-serif</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-font"
                                                defaultValue="serif"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Serif</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-font"
                                                defaultValue="monospace"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Monospace</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-font"
                                                defaultValue="comic"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Comic</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Theme base</label>
                                <p className="form-hint">Choose the gray shade for your app.</p>
                                <div>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-base"
                                                defaultValue="slate"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Slate</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-base"
                                                defaultValue="gray"
                                                className="form-check-input"
                                                defaultChecked={true}

                                            />
                                            <div className="form-check-label">Gray</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-base"
                                                defaultValue="zinc"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Zinc</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-base"
                                                defaultValue="neutral"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Neutral</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-base"
                                                defaultValue="stone"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">Stone</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Corner Radius</label>
                                <p className="form-hint">
                                    Choose the border radius factor for your app.
                                </p>
                                <div>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-radius"
                                                defaultValue={0}
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">0</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-radius"
                                                defaultValue="0.5"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">0.5</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-radius"
                                                defaultValue={1}
                                                className="form-check-input"
                                                defaultChecked={true}

                                            />
                                            <div className="form-check-label">1</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-radius"
                                                defaultValue="1.5"
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">1.5</div>
                                        </div>
                                    </label>
                                    <label className="form-check">
                                        <div className="form-selectgroup-item">
                                            <input
                                                type="radio"
                                                name="theme-radius"
                                                defaultValue={2}
                                                className="form-check-input"
                                            />
                                            <div className="form-check-label">2</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto space-y">
                            <button type="button" className="btn w-100" id="reset-changes">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-1"
                                >
                                    <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
                                </svg>
                                Reset changes
                            </button>
                            <a
                                href="#"
                                className="btn btn-primary w-100"
                                data-bs-dismiss="offcanvas"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-1"
                                >
                                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                </svg>
                                Save settings
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}   