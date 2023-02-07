import React, { useEffect } from 'react';

const JQueryScripts = () => {
  useEffect(() => {
    window.$ = $;
    window.jQuery = $;
    require('/public/assets/js/functions-min.js');
  }, []);
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.jQuery || document.write('<script src="/public/assets/js/vendor/jquery-2.2.4.min.js"></script>');
          `,
        }}
      />
    </>
  );
};

export default JQueryScripts;
