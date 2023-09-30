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
  } = result;

  return (
    <div className="result-item">
      <div className="result-header">
        <img src={organization_logo.raw} alt={name.raw} className="logo" />
        <div className="name">{name.raw}</div>
        <div className="city">City: {city.raw}</div>
      </div>
      <div className="result-details">
        <div className="technology-focus">Technology Focus: {technology_focus.raw.join(', ')}</div>
        <div className="website">Website: <a href={website.raw}>{website.raw}</a></div>
        <div className="twitter">Twitter: <a href={`https://twitter.com/${twitter.raw}`}>{twitter.raw}</a></div>
        <div className="notes">Notes: {notes.raw}</div>
        <div className="diversity-focus">Diversity Focus: {diversity_focus.raw.join(', ')}</div>
        <div className="parent-organization">Parent Organization: {parent_organization.raw}</div>
        <div className="url">URL: <a href={url.raw}>{url.raw}</a></div>
        <div className="global-org-url">Global Org URL from Parent Organization: <a href={global_org_url_from_parent_organization.raw}>{global_org_url_from_parent_organization.raw}</a></div>
        <div className="donate">Donate: {donate.raw}</div>
        <div className="region">Region: {region.raw}</div>
        <div className="meetup">Meetup: {meetup.raw}</div>
        <div className="github">GitHub: <a href={`https://github.com/${github.raw}`}>{github.raw}</a></div>
        {Array.isArray(links.raw) && (
          <div className="links">
            Links:
            <ul>
              {links.raw.map((link, index) => (
                <li key={index}><a href={link}>{link}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomResultView;
