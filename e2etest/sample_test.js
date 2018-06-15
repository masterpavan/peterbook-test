module.exports = {

    'Incorrect Login Test' : function (client) {
        client.url('http://localhost:3000/login');

        // Check if the localhost was sucessfully loaded
        client.waitForElementVisible('body', 1000);
        client.assert.title('React Social Network');

        // Pause to fully load the page
        client.pause(2000);
        
        // Check if the page is fully loaded
        client.assert.visible('h2.zoomOutLCorner');
        
        // Login with invalid credentials
        client.setValue('input[name=emailInput]', 'hduwadi@ucsd.edu');
        client.setValue('input[name=passwordInput]', '1234564');
        client.useXpath();
        client.click('//*[@id="master"]/div[3]/div/div/div/form/div/div[5]/div[2]/button');
        
        // Wait for the login process to load
        client.pause(2000);
        
        // If we see login button again, then it was not a valid login credentials
        client.waitForElementVisible('//*[@id="master"]/div[3]/div/div/div/form/div/div[5]/div[2]/button', 2000);
        
        // Close the Browser
        client.end();
    },

    'Correct Login Test' : function (client) {
        client.url('http://localhost:3000/login');

        client.useCss();

        // Check if the localhost was sucessfully loaded
        client.waitForElementVisible('body', 1000);
        client.assert.title('React Social Network');

        // Pause to fully load the page
        client.pause(2000);
        
        // Check if the page is fully loaded
        client.assert.visible('h2.zoomOutLCorner');
        
        // Login with invalid credentials
        client.setValue('input[name=emailInput]', 'hduwadi@ucsd.edu');
        client.setValue('input[name=passwordInput]', '123456');
        client.useXpath();
        client.click('//*[@id="master"]/div[3]/div/div/div/form/div/div[5]/div[2]/button');
        
        // Wait for the login process to load
        client.pause(2000);

        // Get the Post new post tag to verify that we've sucessfully logged in.
        client.waitForElementVisible('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[1]/div[1]/div/div[2]/h3', 1000);
        client.useCss();
        
        client.verify.containsText('[class^="MuiTypography-root-"]', 'PeterBook');
    },

    // Continue with other testing; login has already been Done

    'Like/Dislike A Post' : function (client) {
        // Need this check to get access to the posts part of the page 
        client.useXpath()
        client.assert.visible('//*[@id="master"]/div[3]/div/div/div/div/ul');
        
        client.pause(2000);
        
        // Get the post that doesn't have like, and like it
        client.expect.element('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[3]/div[1]/button/span[1]/span/span[1]/input').to.not.be.selected;
        client.click('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[3]/div[1]/button/span[1]/span/span[1]/input');
        client.expect.element('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[3]/div[1]/button/span[1]/span/span[1]/input').to.be.selected;
        
        client.pause(1000);
        
        // Shouldn't like your own post, so canceled the like.
        client.click('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[3]/div[1]/button/span[1]/span/span[1]/input');
        client.expect.element('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[3]/div[1]/button/span[1]/span/span[1]/input').to.not.be.selected;
    },

    'AddAComment' : function (client) {
        client.pause(1000);

        // Random click in the page
        client.click('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[2]/div/div[1]');
        
        // Click the comment button
        client.click('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[3]/div[2]/button');

        client.click('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[4]/div[3]/div/div/div[1]/div[2]/span[2]/div/div');

        client.useCss()
        client.waitForElementVisible('[class^="Textarea-textarea-"]', 2000);
        client.setValue('[class^="Textarea-textarea-"]', 'testComment');
        client.useXpath()
        client.click('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[3]/div[2]/div[4]/div[2]/div/div/div[2]/button');
        
        client.pause(5000);

        client.end();
    },

        'Add a post' : function (client) {

        client.url('http://localhost:3000/login');

        client.useCss();

        // Check if the localhost was sucessfully loaded
        client.waitForElementVisible('body', 1000);
        client.assert.title('React Social Network');

        // Pause to fully load the page
        client.pause(2000);
        
        // Check if the page is fully loaded
        client.assert.visible('h2.zoomOutLCorner');
        
        // Login with invalid credentials
        client.setValue('input[name=emailInput]', 'hduwadi@ucsd.edu');
        client.setValue('input[name=passwordInput]', '123456');
        client.useXpath();
        client.click('//*[@id="master"]/div[3]/div/div/div/form/div/div[5]/div[2]/button');
        
        // Wait for the login process to load
        client.pause(2000);

        // Get the Post new post tag to verify that we've sucessfully logged in.
        client.waitForElementVisible('//*[@id="master"]/div[3]/div/main/div/div/div/div/div[1]/div[1]/div/div[2]/h3', 1000);
        client.useCss();
        
        client.verify.containsText('[class^="MuiTypography-root-"]', 'PeterBook');

        //
        client.pause(1000);

        // Click 'What's new with you' button to create a post
        client.useXpath();
        client.click('//*[@id="master"]/div[3]/div/main/div/div/div[1]/div/div[1]/div[1]/div/div[2]/h3');
        client.pause(1000);

        // Write a string on a post
        client.useCss();
        client.waitForElementVisible('[class^="Textarea-textarea-"]', 2000);
        client.setValue('[class^="Textarea-textarea-"]', 'e2e testing');

        // Click post button to create a post
        client.useXpath();
        client.click('/html/body/div[3]/div[2]/div[2]/button[2]/span');
        client.pause(1000);
        
        // Check if the page is loaded correctly
        client.useCss();
        client.assert.visible('[class^="MuiTypography-root-"]');

        ///*[@id="master"]/div[3]/div/main/div/div/div[1]/div/div[2]/div/div[1]
        client.pause(3000);
        client.end();
    }


  };
