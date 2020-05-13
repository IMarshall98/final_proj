# final_proj
Final Project for INST 377 (LitterTrak API)

## PG County Litter

Our project is titled LitterTrak. This app serves to make the information from the LitterTrak API more  clear and manageable. It will provide the amount and type of trash, the location, the watershed that would’ve  likely been affected by the trash,  and who cleaned it up. Our app can be found at https://github.com/IMarshall98/final_proj
In terms of target browsers, we aimed to make the app as widely usable as possible. To do this we aimed primarily at desktop based web browsers like google chrome and microsoft edge. We intended the app to be usable on mobile devices as well given that this is where most internet activity takes place in the current day. We decided to focus more on safari browsers for  IOS devices over android.
The user manual can be found in the user.md section
The developer manual can be found below

Our project is intended to visualize the litter problem throughout PG County, Maryland using a map with points that represent litter (furniture, bed frames, trash bags with trash in them, and other forms of litter). This could be used for people who want to see which areas of PG County have litter problems and want to help clean the area up. 


## Developer Manual

Install the application and dependencies by going to https://github.com/IMarshall98/final_proj and cloning/ downloading the repository. For any missing dependencies, run an npm install on your systems command prompt. 

Simply install the application through the link we provided above and run in any browsers. 

Since it is a web based application, we used Go-Live plug-in in VS studio to run our test and debug. 

When pulling information from our PG county API we used mainly focused on Latitude and longitude coordinates, so that we could visualize the highest concentrations of litter in the county.

In terms of bugs and future implementations for LitterTrak we would focus on representing data on the visual map. This was the focal point of our original project proposal but it turned out to be a much more difficult task than initially intended. We still have trouble rendering the correct map markers on the map even though we had it working at one point. We will continue to keep working on this as well as implement the capability for many more map markers to be displayed. In addition to map markers we would also like to implement other visualisations of litter data in the county.
