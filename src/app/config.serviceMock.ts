import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigServiceMock {
  
  constructor( ) { }
  
  dummyData = [
    {
      "kind": "books#volumes",
      "totalItems": 1,
      "items": [
        {
          "kind": "books#volume",
          "id": "gTdDCgAAQBAJ",
          "etag": "UROhQ8TbycE",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/gTdDCgAAQBAJ",
          "volumeInfo": {
            "title": "'Til Death Do Us Part",
            "authors": [
              "Amanda Quick"
            ],
            "publisher": "Penguin",
            "publishedDate": "2016-04-19",
            "description": "The author of the New York Times bestseller Garden of Lies returns to Victorian London in an all-new novel of deadly obsession. Calista Langley operates an exclusive “introduction” agency in Victorian London, catering to respectable ladies and gentlemen who find themselves alone in the world. But now, a dangerously obsessed individual has begun sending her trinkets and gifts suitable only for those in deepest mourning—a black mirror, a funeral wreath, a ring set with black jet stone. Each is engraved with her initials. Desperate for help and fearing that the police will be of no assistance, Calista turns to Trent Hastings, a reclusive author of popular crime novels. Believing that Calista may be taking advantage of his lonely sister, who has become one of her clients, Trent doesn’t trust her. Scarred by his past, he’s learned to keep his emotions at bay, even as an instant attraction threatens his resolve. But as Trent and Calista comb through files of rejected clients in hopes of identifying her tormentor, it becomes clear that the danger may be coming from Calista’s own secret past—and that only her death will satisfy the stalker...",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9780698193611"
              },
              {
                "type": "ISBN_10",
                "identifier": "069819361X"
              }
            ],
            "readingModes": {
              "text": true,
              "image": false
            },
            "pageCount": 352,
            "printType": "BOOK",
            "categories": [
              "Fiction"
            ],
            "averageRating": 4.0,
            "ratingsCount": 5,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.3.3.0.preview.2",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=gTdDCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=gTdDCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.co.in/books?id=gTdDCgAAQBAJ&printsec=frontcover&dq=isbn:069819361X&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.co.in/books?id=gTdDCgAAQBAJ&dq=isbn:069819361X&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Til_Death_Do_Us_Part.html?hl=&id=gTdDCgAAQBAJ"
          },
          "saleInfo": {
            "country": "IN",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "IN",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.co.in/books/download/Til_Death_Do_Us_Part-sample-epub.acsm?id=gTdDCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
              "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=gTdDCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "The author of the New York Times bestseller The Girl Who Knew Too Much returns to Victorian London in a novel of deadly obsession."
          }
        }
      ]
    }]
  
  getBookDetails(url) {
    return this.dummyData;    
  }
}
