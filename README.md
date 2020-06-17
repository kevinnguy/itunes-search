# iTunes Search

## Instructions
1. Clone this repo
2. Install the node modules with npm: `npm i`
3. Run the app in iOS simulator: `npm run ios`
4. Run jest tests: `npm test`

## Screenshots
<img src="https://github.com/kevinnguy/itunes-search/blob/master/screenshots/4.png?raw=true">

## Requirements
Using the following API documentation:
https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 
Build an application that:

• Displays a list of search results. 
• Shows the album art work in the search results as well as the artist name, song title, and album title. 
• You must be able to select the song and navigate to a detail view. 
• The detail view must show a larger album image as well as the artist name, album title, song name and any other information the developer deems important. 
 
What I’m looking for:

·      Architecture design and patterns. 
·      Design and responsiveness. 
·      Handling of network latency and issues with network responsiveness. 
·      Repeat Searches
·      Elegant handling of errors
 
 
Special Notes

·      It should be in all swift but if they want to do a combination of swift and objective c that is fine also. All objective c will receive a fail.
·      Bonus points for blending react native and native components
·      Spend no more than 4 hours
·      Overuse of third-party frameworks will be frowned upon. 
·      Be prepared to defend your decisions. 
·      Writing UI and Unit tests is a must. The more coverage the better.
·      Roll your own networking and view architecture, take some time to think of and attempt to handle edge cases with networking.
·      Cache the results



- Adding navigation, user should be able to come back to the list from the song detail screen.
  - react-navigation v5 API changes 

- Adding error handling, show error and retry button on screen when network call fails.
  - UI implementation

- Adding the keyboard handling, when pressing return key, the search should start.
  - 

- Adding pagination functionality on search API.


- Adding favorites/ Favorites screen in another tab or something.
  - setting state

- Adding lookup API.
  - https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/LookupExamples.html#//apple_ref/doc/uid/TP40017632-CH7-SW1
  - https://itunes.apple.com/lookup?id=909253
