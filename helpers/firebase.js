const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "rs-project-9abdc",
        "private_key_id": "4f9dae7b850e635464c5b1c7ff569542c7920278",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDpwmnAwZZe8L1H\n9ddURNyAK9j9Io7NeHWQoAsRwXmvFAgu8pA0FS9zDvu0RaIEGCdjYg9rNcQ8fQ9w\nhed3zUIfY0LEvzFv7NNa/dfGtxbaajU09EeGk1JJ/WNz5zodc1+uxGMnL1gfT1pe\nBG5ZGAldxoGP9+scCOvr+Sd4QNShvq0QlRSPXhiKXuP/YPGpj8/j/9la1CXe58N3\n+1EG7WsFlMb50WDnXxnCqSTMSylLQoPVFsxBW57tkkO6l5CvnZigMyrgsSmPNBuM\n3ku7yiA+sjeubDlFQ1hOVi3XIn53BBwQj5ZzARG8X66xrfFagn7B3ud9W1bUZsJR\nH673nmLPAgMBAAECggEAFI/EnESVpNWUMLI6i0ULXZLTIWEFd/ldOKgl5nKYRi2C\n6BjvVPAlc6ohEHhXifiomPX/2TRU2zqSPcQ+2gDfYhdpwMNN5pnJoDqtMjjZ9Rhb\n2cPq+WFtXui/nhWmvP8bBCpuIPzpyXHsxvxTddlxaXg+iUVgvt83W/2shR1ewWNI\nlTAniTRXRu356tjgaqOu8pcx/kXECEzD+YE5c+U3tPLETgcKJg5X55hPJr2tsjc/\n1HxzWuxfPTa/DOuic1lQVeNREjUY8Uhc9ZVt3/CL1TXmNt8SRCY7cvW996POubsT\nBQEBCL2zBTxAJq4nb2A82ohc8IqmsDOHagYpWzg6MQKBgQD638a98VXBV7uILexs\np2AYpyyhDx3HY7IQfD1izd/tgoEKA/NROZz4bQR0wpPFfVeRDm0I61wV8RDJeSjO\nLf8ohoEPPid/D1ystT9BvaiFQGB6apve/MHgOaoUbJBsFGultBs2x/46QnJSdNcS\n9bESeCk85Av9HmrcZ3NsG06BywKBgQDuiR3TszTB3qaEuem7POtnf1e1dmKDKOZ2\nVskFDux30gOqc4NmpB1Y0Xlmkb8+3HirJGHUD7Jnul4Oto1Afm6UX4VzHHJBj2K/\nE2/fJtmVw5f1t96/7KWbFLVLiVdCP5S6c15JRJKWc0xcydZj0VZXlsc++MbX6VcS\nKdjf8i3yjQKBgQCvnrOMCEPWA0qefDeDoG/fEjhlzyUzjZD7hV2bqy9VHwSiND3C\n4KgIKJjz+7pih+oi+4xMsCZYndb4kz6DhyOWBQKX3xTbF6/ynzbXGKO+FGD1kWfo\nY9x80SFFBvLbFjh9WWWrpblMo3NQUca12RTKLx//Jk1WNlLsU+czCLKenQKBgAUn\nYUWZsaIetWpYufwZrNxnm/WHwUkkMRaNeXpqgCF2oC2moUguc5PfssfMjl1FVjYc\nayCx1iD3neCjgRnLoYgDKFb8XlucRX3rZZdkt37M4xOkDWQIMOvQ3rnrFb+QsB33\nMCpVGPW3OAcpNUCi3UK3N0bdCS7RE9iInu73xJZhAoGBAI9yTFZQYOttX0f5m/5j\nPq4Pm5lODxveYq4eD0nZI9eB4POWanEfC8DXTNGAocw+gvzFX7ddgzsOQrRYN95t\ntYP3dxQMJhcvDzSLo3dC9kKCwNJV79STpSCJ7cai/SrBLdeDWSjtgOGsB/OatuHw\nmDvqGs2dqYkiZYQ++B5B/ISs\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-2jg5q@rs-project-9abdc.iam.gserviceaccount.com",
        "client_id": "100691432537856119637",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2jg5q%40rs-project-9abdc.iam.gserviceaccount.com"
      }
      ),
    storageBucket: "gs://rs-project-9abdc.appspot.com"
    })

    // Cloud storage
    const bucket = admin.storage().bucket()

module.exports = {
            bucket
        }