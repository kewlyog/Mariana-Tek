import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

export const Star = ({ stars }) => {

    const starsHalf = stars / 2;

    const ratingStar = Array.from({ length: 5 }, (_, index) => {
        let number = index; // + 0.5;
        // debugger;
        return <span key={index}>
            {
                starsHalf >= index + 1
                    ? (<FaStar className='icon' />)
                    : starsHalf >= number
                        ? (<FaStarHalfAlt className='icon' />)
                        : (<AiOutlineStar className='icon' />)
            }
        </span>
    });

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 1rem;
      color: #f0582b;
    }

    .empty-icon {
      font-size: 1.5rem;
    }
  }
`;
