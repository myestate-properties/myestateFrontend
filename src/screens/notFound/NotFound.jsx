import React, {memo} from 'react'

function NotFound() {
  return (
    <div>
      <h1>Resource Not Found</h1>
      <h6>
        It seems you mispelled the page you are requesting. Please check and try
        again!
      </h6>
    </div>
  );
}

export default memo(NotFound);