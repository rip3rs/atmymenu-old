(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


'use strict';


describe('Article', function () {


    describe('Buttons', function () {
        it('Should only show if loged in.', function () {

            expect(true).toBe(true);
        });


        describe('Edit button', function () {
            it('should show input text field.', function () {

                expect(true).toBe(true);
            });

            it('should animate input text field and admin buttons.', function () {

                expect(true).toBe(true);
            });

            it('should change to save button.', function () {

                expect(true).toBe(true);
            });
        });


        describe('Save button', function () {
            it('should hide input text field', function () {

                expect(true).toBe(true);
            });

            it('should animate hide input text field and admin buttons', function () {

                expect(true).toBe(true);
            });

            it('should show a "done" icon when erything went okay.', function () {

                expect(true).toBe(true);
            });

            it('should show a "error" icon when there was a problem.', function () {

                expect(true).toBe(true);
            });
        });


        describe('Delete button', function () {
            it('should delete the article.', function () {

                expect(true).toBe(true);
            });

            it('should animate the deletion of the row.', function () {

                expect(true).toBe(true);
            });
        });
    });
});

},{}],2:[function(require,module,exports){


'use strict';


describe('test///', function () {
    it('testin moar..', function () {

        expect(true).toBe(true);
    });
});

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc3JjL3Rlc3RzL2lucHV0LnRlc3QuanMiLCJhcHAvc3JjL3Rlc3RzL3Rlc3RzLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuXG4ndXNlIHN0cmljdCc7XG5cblxuZGVzY3JpYmUoJ0FydGljbGUnLCBmdW5jdGlvbiAoKSB7XG5cblxuICAgIGRlc2NyaWJlKCdCdXR0b25zJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdCgnU2hvdWxkIG9ubHkgc2hvdyBpZiBsb2dlZCBpbi4nLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGRlc2NyaWJlKCdFZGl0IGJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0KCdzaG91bGQgc2hvdyBpbnB1dCB0ZXh0IGZpZWxkLicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdzaG91bGQgYW5pbWF0ZSBpbnB1dCB0ZXh0IGZpZWxkIGFuZCBhZG1pbiBidXR0b25zLicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdzaG91bGQgY2hhbmdlIHRvIHNhdmUgYnV0dG9uLicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgZGVzY3JpYmUoJ1NhdmUgYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXQoJ3Nob3VsZCBoaWRlIGlucHV0IHRleHQgZmllbGQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBleHBlY3QodHJ1ZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnc2hvdWxkIGFuaW1hdGUgaGlkZSBpbnB1dCB0ZXh0IGZpZWxkIGFuZCBhZG1pbiBidXR0b25zJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgZXhwZWN0KHRydWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoJ3Nob3VsZCBzaG93IGEgXCJkb25lXCIgaWNvbiB3aGVuIGVyeXRoaW5nIHdlbnQgb2theS4nLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBleHBlY3QodHJ1ZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdCgnc2hvdWxkIHNob3cgYSBcImVycm9yXCIgaWNvbiB3aGVuIHRoZXJlIHdhcyBhIHByb2JsZW0uJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgZXhwZWN0KHRydWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBkZXNjcmliZSgnRGVsZXRlIGJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0KCdzaG91bGQgZGVsZXRlIHRoZSBhcnRpY2xlLicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KCdzaG91bGQgYW5pbWF0ZSB0aGUgZGVsZXRpb24gb2YgdGhlIHJvdy4nLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBleHBlY3QodHJ1ZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiXG5cbid1c2Ugc3RyaWN0JztcblxuXG5kZXNjcmliZSgndGVzdC8vLycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgndGVzdGluIG1vYXIuLicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBleHBlY3QodHJ1ZSkudG9CZSh0cnVlKTtcbiAgICB9KTtcbn0pO1xuIl19
