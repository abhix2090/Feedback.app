import axios from "axios";
import { useEffect, useState } from "react";

export function Feedback() {

    const [message, setMessage] = useState("");
    const [feedbackList, setFeedbackList] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        event: "",
        rating: "",
        comments: ""
    });


    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }


    async function handleSubmit(e) {

        e.preventDefault();

        if (
    formData.name === "" ||
    formData.email === "" ||
    formData.event === "" ||
    formData.rating === "" ||
    formData.comments === ""
) {
    setMessage("Please fill all fields.");
    return;
}

        try {

            const response = await axios.post(
                "http://127.0.0.1:5000/feedback",
                formData
            );

            setMessage(response.data.message);

            setFormData({
                name: "",
                email: "",
                event: "",
                rating: "",
                comments: ""
            });

            loadFeedback();

        } catch (error) {

            setMessage("Failed to submit feedback");

            console.error(error);

        }

    }


    async function loadFeedback() {

        try {

            const response = await axios.get(
                "http://127.0.0.1:5000/feedback"
            );

            setFeedbackList(response.data);

        } catch (error) {

            console.error("Error loading feedback:", error);

        }

    }


    useEffect(() => {

        loadFeedback();

    }, []);


    return (

        <div className="container py-5">

            {/* Page Heading */}

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    Event Feedback
                </h1>

                <p className="text-secondary">
                    Share your experience with us.
                </p>

            </div>


            {/* Feedback Form */}

            <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-6">

                    <div className="card shadow-sm">

                        <div className="card-body p-4">

                            {/* Success Message */}

                            {message && (

                                <div className="alert alert-success mb-4">

                                    {message}

                                </div>

                            )}


                            <form onSubmit={handleSubmit}>

                                {/* Name */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />

                                </div>


                                {/* Email */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />

                                </div>


                                {/* Event */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Event
                                    </label>

                                    <select
                                        name="event"
                                        className="form-select"
                                        value={formData.event}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select an event
                                        </option>

                                        <option value="Python Workshop">
                                            Python Workshop
                                        </option>

                                        <option value="React Workshop">
                                            React Workshop
                                        </option>

                                        <option value="AI & Machine Learning">
                                            AI & Machine Learning
                                        </option>

                                    </select>

                                </div>


                                {/* Rating */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Rating
                                    </label>

                                    <select
                                        name="rating"
                                        className="form-select"
                                        value={formData.rating}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select rating
                                        </option>

                                        <option value="5">
                                            ⭐⭐⭐⭐⭐ Excellent
                                        </option>

                                        <option value="4">
                                            ⭐⭐⭐⭐ Very Good
                                        </option>

                                        <option value="3">
                                            ⭐⭐⭐ Good
                                        </option>

                                        <option value="2">
                                            ⭐⭐ Average
                                        </option>

                                        <option value="1">
                                            ⭐ Poor
                                        </option>

                                    </select>

                                </div>


                                {/* Comments */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Comments
                                    </label>

                                    <textarea
                                        name="comments"
                                        className="form-control"
                                        rows="4"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        placeholder="Write your feedback..."
                                    ></textarea>

                                </div>


                                {/* Submit Button */}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >

                                    Submit Feedback

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>


            {/* Submitted Feedback */}

            <div className="mt-5">

                <h2 className="fw-bold mb-4">
                    Submitted Feedback
                </h2>


                {feedbackList.length === 0 ? (

                    <div className="alert alert-info">

                        No feedback submitted yet.

                    </div>

                ) : (

                    <div className="row g-4">

                        {feedbackList.map((feedback) => (

                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={feedback.id}
                            >

                                <div className="card h-100 shadow-sm">

                                    <div className="card-body">

                                        <h5 className="fw-bold">
                                            {feedback.name}
                                        </h5>


                                        <p className="text-secondary mb-2">

                                            {feedback.email}

                                        </p>


                                        <p className="mb-2">

                                            <strong>
                                                Event:
                                            </strong>{" "}

                                            {feedback.event}

                                        </p>


                                        <p className="mb-2">

                                            <strong>
                                                Rating:
                                            </strong>{" "}

                                            {"⭐".repeat(
                                                Number(feedback.rating)
                                            )}

                                        </p>


                                        <p className="mb-0">

                                            <strong>
                                                Comments:
                                            </strong>{" "}

                                            {feedback.comments}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}