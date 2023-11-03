# backendless-test-task
This project is a test task for the JavaScript developer position at Backendless

Task: https://docs.google.com/document/d/1ZsCmCjY2tErDPjqsMOhoO8ctA0LHIVHhVnvXSBur0ts/edit#heading=h.ug9dy4iwegjt

Some of the css styles was taken from the special resources with collection of css styles. Css code was added only for acceptable appearance

During the development process I've encountered some troubles:
1) Webpack didn't allow me to use dynamic import with expression(Critical dependency warning)
   I solved it with setting up the babel plugin: 
plugins: ["@babel/plugin-syntax-dynamic-import"],
2) For state management I used context Api even though for the task it's too comprehensive. But that's will reduce potential work in case of enhancing the project
3) For styling was used Css modules because it helps to avoid naming collision

Work of lazy loading(loaded only default tab):
![image](https://github.com/Andrei-Bondarev/backendless-test-task/assets/82459651/8cbda3e0-e7a1-479c-94d5-87749c04abec)

After loading other tabs:
![image](https://github.com/Andrei-Bondarev/backendless-test-task/assets/82459651/62dc944d-8361-4936-9f98-851f6f641bb7)


Tab with order=0(the first tab) showed as a default:
![image](https://github.com/Andrei-Bondarev/backendless-test-task/assets/82459651/3c40890d-2369-430a-af93-4fab4f39a8ee)

