import { Link } from "react-router-dom";

export function Events() {
    const events = [
        {
            id: 1,
            title: "Python Workshop",
            date: "25 August 2026",
            category: "Programming",
            attendees: "50+ Participants",
            description:
                "Learn Python programming from the basics to practical applications and real-world projects.",
            icon: "bi-code-slash"
        },
        {
            id: 2,
            title: "React Development Workshop",
            date: "30 August 2026",
            category: "Web Development",
            attendees: "40+ Participants",
            description:
                "Learn modern React development and build interactive web applications using components and APIs.",
            icon: "bi-braces"
        },
        {
            id: 3,
            title: "AI & Machine Learning Seminar",
            date: "5 September 2026",
            category: "Artificial Intelligence",
            attendees: "100+ Participants",
            description:
                "Explore the fundamentals of Artificial Intelligence and Machine Learning and discover real-world applications.",
            icon: "bi-robot"
        }
    ];

    return (
        <div className="bg-light min-vh-100">

            {/* Header */}
            <section className="bg-primary text-white py-5">
                <div className="container text-center">

                    <span className="badge bg-light text-primary px-3 py-2 mb-3">
                        <i className="bi bi-calendar-check me-2"></i>
                        Events
                    </span>

                    <h1 className="display-5 fw-bold">
                        Upcoming Events
                    </h1>

                    <p className="lead mb-0">
                        Discover upcoming events and share your experience
                        with us.
                    </p>

                </div>
            </section>

            {/* Events */}
            <div className="container py-5">

                <div className="row g-4">

                    {events.map((event) => (

                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={event.id}
                        >

                            <div className="card h-100 border-0 shadow-sm">

                                {/* Icon */}
                                <div className="card-body">

                                    <div className="d-flex justify-content-between align-items-start mb-3">

                                        <div
                                            className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "55px",
                                                height: "55px"
                                            }}
                                        >
                                            <i
                                                className={`bi ${event.icon} fs-3`}
                                            ></i>
                                        </div>

                                        <span className="badge bg-primary-subtle text-primary">
                                            {event.category}
                                        </span>

                                    </div>

                                    {/* Title */}
                                    <h4 className="fw-bold">
                                        {event.title}
                                    </h4>

                                    {/* Date */}
                                    <p className="text-primary fw-semibold mb-2">
                                        <i className="bi bi-calendar-event me-2"></i>
                                        {event.date}
                                    </p>

                                    {/* Attendees */}
                                    <p className="text-secondary small mb-3">
                                        <i className="bi bi-people me-2"></i>
                                        {event.attendees}
                                    </p>

                                    {/* Description */}
                                    <p className="text-secondary">
                                        {event.description}
                                    </p>

                                    {/* Button */}
                                    <Link
                                        to="/feedback"
                                        className="btn btn-primary w-100 mt-3"
                                    >
                                        <i className="bi bi-chat-square-text me-2"></i>
                                        Give Feedback
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom message */}
                <div className="text-center mt-5">

                    <h4 className="fw-bold">
                        Attended one of these events?
                    </h4>

                    <p className="text-secondary">
                        Your feedback helps us improve future events.
                    </p>

                    <Link
                        to="/feedback"
                        className="btn btn-outline-primary"
                    >
                        Submit Your Feedback
                    </Link>

                </div>

            </div>

        </div>
    );
}