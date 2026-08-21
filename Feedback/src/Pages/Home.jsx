export function Home() {
    return (

        <div>

            {/* Hero Section */}

            <section className="bg-primary text-white py-5">

                <div className="container py-5">

                    <div className="row align-items-center">

                        <div className="col-md-7">

                            <span className="badge bg-light text-primary mb-3 px-3 py-2">
                                Event Feedback System
                            </span>

                            <h1 className="display-4 fw-bold">
                                Your Feedback Matters
                            </h1>

                            <p className="lead mt-3">
                                Share your experience with us and help
                                improve the quality of future events.
                            </p>

                            <div className="mt-4">

                                <a href="/feedback" className="btn btn-light btn-lg me-3">
                                    Give Feedback
                                </a>

                                <a href="/events" className="btn btn-outline-light btn-lg">
                                    Explore Events
                                </a>

                            </div>

                        </div>


                        <div className="col-md-5 text-center mt-4 mt-md-0">

                            <div className="bg-white text-primary rounded-4 p-5 shadow">

                                <i className="bi bi-chat-square-heart-fill display-1"></i>

                                <h3 className="fw-bold mt-3">
                                    We Listen
                                </h3>

                                <p className="text-secondary mb-0">
                                    Every response helps us create
                                    better events.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Why Give Feedback */}

            <section className="container py-5">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Why Your Feedback Matters
                    </h2>

                    <p className="text-secondary">
                        Your opinion helps us make every event better.
                    </p>

                </div>


                <div className="row g-4">


                    <div className="col-md-4">

                        <div className="card h-100 border-0 shadow-sm text-center p-4">

                            <i className="bi bi-chat-dots-fill text-primary display-5"></i>

                            <h5 className="fw-bold mt-3">
                                Share Your Experience
                            </h5>

                            <p className="text-secondary">
                                Tell us what you liked and what could
                                be improved.
                            </p>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="card h-100 border-0 shadow-sm text-center p-4">

                            <i className="bi bi-graph-up-arrow text-success display-5"></i>

                            <h5 className="fw-bold mt-3">
                                Help Us Improve
                            </h5>

                            <p className="text-secondary">
                                Your feedback helps organizers improve
                                future events.
                            </p>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="card h-100 border-0 shadow-sm text-center p-4">

                            <i className="bi bi-people-fill text-warning display-5"></i>

                            <h5 className="fw-bold mt-3">
                                Better Events
                            </h5>

                            <p className="text-secondary">
                                Together we can create more engaging
                                and valuable events.
                            </p>

                        </div>

                    </div>


                </div>

            </section>


            {/* Call To Action */}

            <section className="bg-light py-5">

                <div className="container text-center">

                    <h2 className="fw-bold">
                        Attended an Event?
                    </h2>

                    <p className="text-secondary">
                        Take a moment to share your valuable feedback.
                    </p>

                    <a
                        href="/feedback"
                        className="btn btn-primary btn-lg mt-2"
                    >
                        Submit Your Feedback
                    </a>

                </div>

            </section>

        </div>

    );
}