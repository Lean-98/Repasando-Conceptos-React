import { Children, useState } from 'react';
import '../components/twiterFollowCard.css';

export const TwitterFollowCard = ({ children , userName, initialIsFollowing }) => {
  const srcName = `https://unavatar.io/${userName}`;

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "twFollow__button twFollow__button--Isfollowing"
    : "twFollow__button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <article className="twFollow__card">
        <header className="twFollow__header">
          <img className="twFollow__avatar" src={srcName} alt="ProDev" />

          <div className="twFollow__info">
            <strong className="twFollow__name">{children}</strong>
            <span className="twFollow__user">@{userName}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="twFollow__button--text">{text}</span>
            <span className="twFollow__button--stopFollow">Dejar de Seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
};
