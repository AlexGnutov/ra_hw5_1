import PropTypes from "prop-types";

function Card(props) {
    const {image, title, text, buttonCaption, buttonOnClick} = props;

    const onClickHandler = (e) => {
        buttonOnClick(e);
    }

    return (
        <div className={'card-container'}>
            {image ? <img className={'card-image'} alt={''} src={image}/> : null}
            <div className={'card-body'}>
                { title ? <div className={'card-title'}>{title}</div> : null }
                <div className={'card-text'}>{text}</div>
                <button className={'card-button'} type={'button'} onClick={onClickHandler}>{buttonCaption}</button>
            </div>
        </div>
    )
}

Card.defaultProps = {
    imageUrl: null,
    title: null,
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonCaption: PropTypes.string.isRequired,
    buttonOnClick: PropTypes.func.isRequired,
}

export default Card;
