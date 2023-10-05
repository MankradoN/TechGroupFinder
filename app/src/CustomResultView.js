const CustomResultView = ({
    result,
    onClickLink
  }) => (
    <li className="sui-result">

      <div className="sui-result__body">
        <div className="sui-result__image">
          <img src={result.organization_logo.raw} alt="" />
        </div>
        <div className="sui-result__header">
        <h2>
          <a onClick={onClickLink}
           href={result.url.raw} 
           className="custom-link"
           style={{
            color: 'black',
            textDecoration: 'none',
            transition: 'color 0.3s' 
          }}
          onMouseOver={(e) => e.target.style.color = 'grey'}
          onMouseOut={(e) => e.target.style.color = 'blue'}
           >
            {result.name.snippet}
          </a>
          <div className="sui-result__body"><li><h6>{result.city.raw}</h6></li></div>
        </h2>
        
      </div>
      
      </div>
      
    </li>
  );
  
export default CustomResultView;