# Step cheatsheet

**Policy for S3:**
```
{
   "Version": "2008-10-17",
    "Id": "PolicyForPublicWebsiteContent",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource":"your_arn_listed_on_policy_site/*"
        }
    ]
}
```

**Fetching data:**
```
import axios from 'axios';
const LAMBDA_URL = 'https://ld5whwmgo8.execute-api.ca-central-1.amazonaws.com/prod/getPhoto';

...
const fetchData = async () => {
    const response = await axios.get(LAMBDA_URL);
    const pictureArray = response.data.Items.map((photo) => photo.Name);

    setPictureList(pictureArray);
    setPicture(pictureArray[0]);
};

fetchData();
```

**Lambda function:**
```
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'ca-central-1'});

exports.handler = function (event, context, callback) {

    let scanParams = { 
        TableName:  "photo-names",
        Limit: 20
    }
    
    docClient.scan(scanParams, function(error, data){
        if(error){
            callback(error, null)
        }else{
            callback(null, data)
        }
    });
};
```

