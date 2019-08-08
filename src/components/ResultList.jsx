import React, { Component } from "react";

class ResultList extends Component {
  render() {
    return (
      <div className="">
        <ul className="">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatar}
                  alt="Avatar"
                />
                <div>
                  <p className="BadgesListItem__name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="BadgesListItem__twitter">
                    <i className="fab fa-twitter" /> @{badge.twitter}
                  </p>
                  <p className="BadgesListItem__jobTitle">{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ResultList;
