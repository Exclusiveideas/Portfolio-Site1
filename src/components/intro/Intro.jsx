import React from 'react'
import './Intro.css'
import me from '../../images/me.jpg'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro__left'>
                <div className='intro__left-wrapper'>
                    <h2 className='intro__intro'>Hello, My name is </h2>
                    <h1 className='intro__name'>John Burton</h1>
                    <div className='intro__title'>
                        <div className='intro__title-wrapper'>
                            <div className='intro__title-item'>Web Developer</div>
                            <div className='intro__title-item'>UI/UX Designer</div>
                            <div className='intro__title-item'>Photographer</div>
                            <div className='intro__title-item'>Writer</div>
                            <div className='intro__title-item'>Content Creator</div>
                        </div>
                    </div>
                    <p className='intro__description'>I design and develop services for customers of all sizes, specializing in creating
                        stylish, modern websites., web services and online stores
                    </p>
                </div>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="black"
                    className="intro-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="scroll">
                        <path
                            id="Vector"
                            d="M40.5 15L34.5 9L28.5 15"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M28.5 24L34.5 30L40.5 24"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <path
                            id="Vector_4"
                            d="M34.5 27V9"
                            strokeWidth="2.9895"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div className='intro__right'>
                <div className='intro__right-bg'>
                    <img src={me} alt="me" className='intro__right-img' />
                </div>
            </div>
        </div>
    )
}

export default Intro