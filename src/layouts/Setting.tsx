import { IconDeviceFloppy, IconPaint, IconRefresh } from "@tabler/icons-react";

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
                    <IconPaint stroke={1.5} size={20} />
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
                                <IconRefresh stroke={1.5} size={20} className="me-1" />
                                Reset changes
                            </button>
                            <a
                                href="#"
                                className="btn btn-primary w-100"
                                data-bs-dismiss="offcanvas"
                            >
                                <IconDeviceFloppy stroke={1.5} size={20} className="me-1" />
                                Save settings
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}   