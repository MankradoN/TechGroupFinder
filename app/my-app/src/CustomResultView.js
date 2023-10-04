import React from 'react';

const CustomResultView = ({ result }) => {
  const {
    name,
    city,
    organization_logo,
    technology_focus,
    website,
    twitter,
    notes,
    diversity_focus,
    parent_organization,
    url,
    global_org_url_from_parent_organization,
    donate,
    region,
    meetup,
    github,
    links,
    id,
  } = result;

  return (
    <li className="sui-result">

      <div className="sui-result__body">
        <div className="sui-result__image">
          <img src={organization_logo.raw} alt="" />
        </div>
        <div style={{ paddingTop: '8%' }}>
        <div className="sui-result__header">
        <a className="sui-result__title sui-result__title-link" href={url.raw} target="_blank" rel="noopener noreferrer">
          {name.raw}
        </a>
      </div>
        <ul className="sui-result__details">
          <li><span className="sui-result__value"> {city.raw}</span></li>
        </ul>
      </div>
      </div>
    </li>
  );
};

export default CustomResultView;
