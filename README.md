# Design a Data Share prototype
Prototypes of the Design a Data Share tools and services. These include journeys for both acquirer and supplier personas and may eventually be merged with other prototypes in this repo.

## Stack details

- This was built on GOV.UK Prototype Kit v13.3.0
- As of 22 March 2023, an instance is running on CDDO Heroku: https://dds-e2e.herokuapp.com
- The build makes use of plugins. These are:
  - GOV.UK Prototype Components  1.1.0
  - GOV.UK Frontend  4.5.0  
  - Common Templates 1.0.0
  - Step By Step 2.1.0
  - Task List 1.0.0
  - HMRC Frontend 5.24.0
  - Notifications Node Client  7.0.0
- Any questions about the build should be addressed to dug@humansystems.io

## Purpose of prototype

This build was created in order to test design speculations during an Alpha phase of service design. 

The speculations were ideated after reviewing discovery phase outputs and performing initial rounds of user research in the current phase. The "what if" design speculations build on the central "How might we" user need which is:

> In order to better meet my service users' needs, I need to build data that is not managed by my department into my service 

The prototype acts as stimulus for user research. It was designed to test the following speculations:

- "What if we created an online community hub where the data community could learn about sharing best practise, search for data sets, and find contact details of relevant data owners"
- "What if we didn't build an end-to-end service, but instead provided wizards that helped data acquirers and data suppliers write better responses and better requests? What would happen if those wizards positioned the information that is most often missing from submissions nearer to the start of the flow?"
- "What if we took the impact assessment and the contract that are normally handled at the conclusion of the negotiation process, and moved them to the beginning in a starter-for-ten format? How would civil servants react to that?"
- "What if we created a space that would allow supplier and acquirer to collaborate and manage their documentation in one, secure, shared space? Specifically, would the benefits of an audit trail, centralised storage etc. outweigh the cost of complexity and the overhead of learning a new system?"

The research is currently ongoing.

## Users and journey structure

The flow is designed to test the actions of acquirers, suppliers, and subject matter experts, as they move from finding data, applying for a data share, negotiating the agreement, and supplying the data.

The following diagram shows the data flows supported in the current version of the prototype:

<a href="https://github.com/co-cddo/dds/blob/ea97232c2fa652f865e227b6a863bbec558e8c48/app/assets/images/coordinated-journey-flows-r3.pdf"><img src="https://github.com/co-cddo/dds/blob/7e460729caf68a31fc517f83b414721930949408/app/assets/images/coordinated-journey-flows-r3.jpg" alt="User flows across prototype" style="width: 100%;"></a>


## User journeys for testing

The prototype currently supports testing four user journeys:

1. Acquirer has found data in catalogue
(starts from the catalogue)
2. Acquirer has sourced data herself
(starts from public portal - then clicks "create your data-sharing request")
3. Supplier receives an email from gov.uk telling her a request for data had arrived
(starts from notification email)
4. Supplier checks the progress of the requests she had responded to.
(starts from public portal - then clicks "review your request")





