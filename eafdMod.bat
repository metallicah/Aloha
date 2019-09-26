@echo off
set /p destName=<varData.dat
set /p nameToSnoop=<nameData.dat
echo %destName%:%nameToSnoop%
cd/
:: Create file
echo Creating File
eafd %nameToSnoop% \Users\Jamie\Pictures\Makahehi\Aloha\Snoop\%destName%
cd \Users\Jamie\Pictures\Makahehi\Aloha\
echo Back at %cd%