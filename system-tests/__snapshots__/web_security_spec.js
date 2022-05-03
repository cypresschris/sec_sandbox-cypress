exports['e2e web security / when enabled / fails'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      FooBrowser 88                                                                    │
  │ Specs:        1 found (web_security.cy.js)                                                     │
  │ Searched:     cypress/e2e/web_security.cy.js                                                   │
  │ Experiments:  experimentalSessionAndOrigin=true                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  web_security.cy.js                                                              (1 of 1)


  web security
    1) fails when clicking <a> to another origin
    2) fails when submitted a form and being redirected to another origin
    3) fails when using a javascript redirect to another origin
    4) fails when doing a CORS request cross-origin
    - finds the correct spec bridge even if a previous spec bridge host is a subset of the current host


  0 passing
  1 pending
  4 failing

  1) web security
       fails when clicking <a> to another origin:
     CypressError: Timed out after waiting \`5000ms\` for your remote page to load on origin(s):

- \`http://localhost:4466\`

A cross-origin request for \`https://www.foo.com:44665/cross_origin\` was detected.

A command that triggers cross-origin navigation must be immediately followed by a \`cy.origin()\` command:

\`cy.origin('https://foo.com:44665', () => {\`
\`  <commands targeting https://www.foo.com:44665 go here>\`
\`})\`

If the cross-origin request was an intermediary state, you can try increasing the \`pageLoadTimeout\` value in \`cypress.config.js\` to wait longer.

Browsers will not fire the \`load\` event until all stylesheets and scripts are done downloading.

When this \`load\` event occurs, Cypress will continue running commands.

https://on.cypress.io/origin
      [stack trace lines]

  2) web security
       fails when submitted a form and being redirected to another origin:
     CypressError: Timed out after waiting \`5000ms\` for your remote page to load on origin(s):

- \`http://localhost:4466\`

A cross-origin request for \`https://www.foo.com:44665/cross_origin\` was detected.

A command that triggers cross-origin navigation must be immediately followed by a \`cy.origin()\` command:

\`cy.origin('https://foo.com:44665', () => {\`
\`  <commands targeting https://www.foo.com:44665 go here>\`
\`})\`

If the cross-origin request was an intermediary state, you can try increasing the \`pageLoadTimeout\` value in \`cypress.config.js\` to wait longer.

Browsers will not fire the \`load\` event until all stylesheets and scripts are done downloading.

When this \`load\` event occurs, Cypress will continue running commands.

https://on.cypress.io/origin
      [stack trace lines]

  3) web security
       fails when using a javascript redirect to another origin:
     CypressError: Timed out after waiting \`5000ms\` for your remote page to load on origin(s):

- \`http://localhost:4466\`

A cross-origin request for \`https://www.foo.com:44665/cross_origin\` was detected.

A command that triggers cross-origin navigation must be immediately followed by a \`cy.origin()\` command:

\`cy.origin('https://foo.com:44665', () => {\`
\`  <commands targeting https://www.foo.com:44665 go here>\`
\`})\`

If the cross-origin request was an intermediary state, you can try increasing the \`pageLoadTimeout\` value in \`cypress.config.js\` to wait longer.

Browsers will not fire the \`load\` event until all stylesheets and scripts are done downloading.

When this \`load\` event occurs, Cypress will continue running commands.

https://on.cypress.io/origin
      [stack trace lines]

  4) web security
       fails when doing a CORS request cross-origin:
     AssertionError: Timed out retrying after 500ms: Expected to find content: 'success!' but never did.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      1                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     web_security.cy.js                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when c     (1280x720)
     licking a to another origin (failed).png                                                       
  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when s     (1280x720)
     ubmitted a form and being redirected to another origin (failed).png                            
  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when u     (1280x720)
     sing a javascript redirect to another origin (failed).png                                      
  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when d     (1280x720)
     oing a CORS request cross-origin (failed).png                                                  


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/web_security.cy.js.mp4              (X second)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  web_security.cy.js                       XX:XX        5        -        4        1        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        5        -        4        1        -  


`

exports['e2e web security / firefox / displays warning when firefox and chromeWebSecurity:false'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (simple_passing.cy.js)                                                     │
  │ Searched:   cypress/e2e/simple_passing.cy.js                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  simple_passing.cy.js                                                            (1 of 1)

Your project has set the configuration option: chromeWebSecurity to false

This option will not have an effect in Firefox. Tests that rely on web security being disabled will not run as expected.


  simple passing spec
    ✓ passes


  1 passing

Warning: We failed processing this video.

This error will not alter the exit code.

TimeoutError: operation timed out
      [stack trace lines]


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     simple_passing.cy.js                                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  simple_passing.cy.js                     XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`

exports['e2e web security / when disabled / passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      FooBrowser 88                                                                    │
  │ Specs:        1 found (web_security.cy.js)                                                     │
  │ Searched:     cypress/e2e/web_security.cy.js                                                   │
  │ Experiments:  experimentalSessionAndOrigin=true                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  web_security.cy.js                                                              (1 of 1)


  web security
    ✓ fails when clicking <a> to another origin
    ✓ fails when submitted a form and being redirected to another origin
    ✓ fails when using a javascript redirect to another origin
    ✓ fails when doing a CORS request cross-origin
    - finds the correct spec bridge even if a previous spec bridge host is a subset of the current host


  4 passing
  1 pending


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      1                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     web_security.cy.js                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/web_security.cy.js.mp4              (X second)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  web_security.cy.js                       XX:XX        5        4        -        1        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        5        4        -        1        -  


`
