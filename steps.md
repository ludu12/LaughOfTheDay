# Steps

1. Github
    - Login to [Github](https://github.com/login)
    - Navigate to the [https://github.com/ludu12/puzzle-it-react-app](https://github.com/ludu12/puzzle-it-react-app)

2. S3 Bucket 
    - Login to [AWS console](https://aws.amazon.com/console/)
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

3. Fetching data  
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
