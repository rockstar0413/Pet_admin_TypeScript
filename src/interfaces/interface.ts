export type DogType = {
    breederDOB: string,
    breederDesc:string,
    breederGender:string,
    breederName:string,
    breederPhoto:string,
    petTypeId:{
        petTypeId:string,
        petTypeDadCalled:string,
        petTypemomCalled:string,
        _id:string
    },
    _id:string
}

export type BreedInfoType = {
    image: string,
    title: string,
    description:string
}

export interface IFollower{
    username: string
    requestedOn:string
    estimatedFinish:string
    additionalData:string
    followersCount:string
    emailCount:number
    status:number
}

export interface IFollowerDetails{
    username: string
    fullName:string
    userID:string
    followers:string
    FBID:string
    businessAccount:string
    professionalAccount:string
    jonedRecently:string
    privateAccount:string
    verifiedAccount:string
    linkedToFB:string
    externalURL:string
    bio:string
}

export interface ICall{
    username: string
    email:string
    ipAddress:string
    country:string
}
