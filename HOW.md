# How the prototype has been setup

This prototype has been created using the [GOV UK prototyping kit](https://prototype-kit.service.gov.uk/docs/create-new-prototype), and organised in a way that allows for different versions to exist. The different versions are:

- WIP, Work in progress - Where designers create new designs and explore design iterations of existing designs. 
- UR, user research - Where user research go to find research stimulus.
- DEV, development reference: Where developers go to see how the design looks (and works to some degree) when creating the real service.

The folder structure

The view folder has been structured to keep the different versions separated.

- views
	- UR views
	- All includes
	- **WIP (folder)**
		- WIP views
		- **_design (folder)**
			- Design exploration (folders and files)
	- **DEV (folder)**
		- DEV views

Within the **WIP** you’ll also find a **_design** folder that contains the design exploration work carried out by the different Interaction Designers on the project. These are linked to from the WIP index.html, and also the two files (ben.html and adam.html) found in at the root of the views folder.

The includes folder, within views, contains components that have been separated by duplicating and adding a prefix.

## How to keep the versions separated

When working on the prototype aim to keep the versions separate by using prefixes, things like CSS, JS, routes names and variables can be prefixed with the prototype it belongs to and the name of the sub-service it has been created for i.e. a CSS class might look like  “WIP-LEARN_custom-header” or a JS route might look like “/WIP/learn_check-age” or “/bMVP_wip--review-permission”. If what you’re creating is going to be used across the whole of that version, just reference the prototype version i.e. A CSS class might look like “WIP_dashboard-table” or a route might be “/WIP/permissions-route”.

Currently all prototypes reference the same assets found in the following folders: 
- images
- documents
- staticdata
- javascript

There wasn’t an need to create variations between prototypes but if this changes in the future consider adding sub-folders for each prototype version, and/or sub-service files/folders (See the ‘routes’ folder for reference).

**Important: It's not recommended to create completely global styles, routes or JS. This can easily lead to clashes between version that go unnoticed **

## Moving designs between versions

It’s not an exact science when to move work between prototypes, but in general things should move once a review has been carried out by at least a Product Owner to say that the work is ready, and where it should go, i.e. "This is now ready to be user tested, so it’s time to update the UR version".

Sometime you might skip a step and move things from WIP straight to DEV, in which case you must make sure the UR prototype is updated as well so it stays in-sync.

To move work from one prototype to the next you will need two powerful tools:
- Copy and paste
- Find and replace

It can be a bit tricky if you have parts of a page that are ready to move and other parts that are not, but in a simple case you’ll just be doing the following:
1. Copy the HTML from one version folder and paste it into the one you’re updating.
2. Scan through the HTML page and removing or changing the prefixes. i.e. If you’re moving work from WIP to UR, you’ll need to remove prefixes like “/WIP” and ‘_WIP’. If you’re moving work into DEV you need to add or change prefixes to “/DEV’ etc.
3. Add new routes created in one prototype to the version you’re updating. Then be sure to change all variables and paths with the old prefixes i.e. When moving routes form “routes/request/**wip.js**” to “routes/request/**dev.js**” you’d scan through an switch out any reference to “WIP” with ‘DEV’.
4. Follow step 3 for all other asset types, i.e. new JS, new SASS/CSS etc.
5. Test! Things will break, links will be missed. So good to run through the updated version a few times and share with your team to help highlight any broken journeys. 

## Separate settings

Each version has its own Settings screen and stores it’s settings separately. This is so you can add, remove, amend setting in any version without affecting the others.

The defaults for the different setting are set in the “session-data-defaults.js” file.