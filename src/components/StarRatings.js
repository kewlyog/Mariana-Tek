import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRatings = ({ count, rating, color, onRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const getColor = (index) => {
        if (hoverRating >= index) {
            return color.filled;
        } else if (!hoverRating && rating >= index) {
            return color.filled;
        }

        return color.unfilled;
    };

    const starRating = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <FontAwesomeIcon
                    key={idx}
                    className="cursor-pointer"
                    icon="fa-solid fa-star"
                    style={{ color: getColor(idx) }}
                    onClick={() => onRating(idx)}
                    onMouseEnter={() => setHoverRating(idx)}
                    onMouseLeave={() => setHoverRating(0)}
                />
            ));
    }, [count, rating, hoverRating]);

    return (
        <div>
            {starRating}
        </div>
    )
}

StarRatings.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.func,
    color: {
        filled: PropTypes.string,
        unfilled: PropTypes.string,
    }
};

StarRatings.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#f5eb3b",
        unfilled: "#DCDCDC",
    }
};