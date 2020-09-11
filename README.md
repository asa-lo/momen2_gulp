# momen2_gulp

# Moment 2
## Syfte
*Syftet med detta projekt var att skapa en grundstruktur för webbutveckling kompletterat med automatisering av uppgifter. Det är en webbplats som innehåller HTML, CSS, JavaScript och bilder. Först skapades en grundstruktur med en index.html-fil samt underkataloger för CSS, JavaScript och bilder. Därefter skapades en katalog för publicering (pub) dit färdiga filer flyttas, färdiga för publicering. Samtliga filer som ingår i webbplatsen kopieras till en katalog för publicering. Det finns en automatisk koll på om filer ändras i arbetskatalogen. Om man ändrar i en CSS-fil eller JS-file, slås den ihop med övriga CSS-filer eller JS-filer. Den konkatenerade filen minimeras. När detta händer känner webbserven av att det skett en förändring och signalerar till webbläsaren att uppdatera.*
## Paket som används:
*gult-concat, gulp-minify-es, gulp-uglify, dessa används för att slå samman och minifiera JS-filer och CSS-filer. Browser-sync används för att få en autmatisk reload när man ändrar i filer*
## Beskrivning
*Detta projekt kan köras på vilken dator som helst som har node.js och npm installerat.
Jag har skapat en webbplats med samtliga filer: HTML, CSS, JS samt bilder. Det finns en automatisk koll på om filer ändras i arbetskatalogen. Gemom att skriva "gulp" i terminalen så kan man se webbplatsen i webbläsaren. En mapp skapas där CSS-filer och JS-filer miniferas och slås samman samt där HTML-filer samt bilder kopieras över. Det finns en livereload som körs om någon av resultatfilerna förändras.*
