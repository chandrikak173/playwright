import {test} from '@playwright/test'

test.describe('test_desc',()=>{

    test.beforeAll('beforeAll',()=>{
        console.log("runs before all the test scripts");
    });

    test.beforeEach('beforeEach',()=>{
        console.log("runs before each test script");
    });

    test.afterEach('afterEach',()=>{
        console.log('Runs after each test script');
        
    });

    test.afterAll('afterAll',()=>{
        console.log('Runs after all the test scripts');
        
    })

    test('test1 @smoke',()=>{

        console.log('test script 1');
    });

    
    test('test2',()=>{

        console.log('test script 2');
    });
    
})