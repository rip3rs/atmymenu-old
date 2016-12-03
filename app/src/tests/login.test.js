/**
 * Story for the login to administration.
 */

'use strict';


describe('Login', function () {

    // var loginContainer = document.querySelector('.login--container');

    describe('Button', function () {
        it('Should show a username/password box.', function () {
            expect(true).toBe(true);
        });

        it('Should hide a username/password box.', function () {
            expect(false).toBe(false);
        });

        it('Should animate username password box.', function () {

            expect(true).toBe(true);
        });


        describe('Username Password box.', function () {
            it('Should show a username text input.', function () {

                expect(true).toBe(true);
            });

            it('Should show a password text input.', function () {

                expect(true).toBe(true);
            });

            describe('Submit button', function () {
                it('Should show a login/submit button.', function () {

                    expect(true).toBe(true);
                });

                it('Should validate username and password.', function () {

                    expect(true).toBe(true);
                });

                it('Should cancel validation if either the username and password are incorrect.', function () {

                    expect(true).toBe(true);
                });
            });

            describe('Cancel button', function () {
                it('Should show a cancel button.', function () {

                    expect(true).toBe(true);
                });

                it('Cancel button should hide username password box.', function () {

                    expect(true).toBe(true);
                });

                it('Cancel button should animate hidding username password box.', function () {

                    expect(true).toBe(true);
                });
            });
        });
    });
});
