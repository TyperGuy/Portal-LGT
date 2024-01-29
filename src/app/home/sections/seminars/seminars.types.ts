export interface file{
    metadata: {
        tags: []
    },
    sys: {
        space: {
            sys: {
                type: string,
                linkType: string,
                id: string
            }
        },
        id: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        environment:{
            sys: {
                id: string,
                type:string,
                linkType: string
            }
        },
        revision: number,
        locale: string
    },
    fields: {
        title: string,
        description: string,
        file: {
            url: string,
            details: {
                size: number,
                image: {
                    width: number,
                    height: number
                }
            },
            fileName: string,
            contentType: string
        }
    }
}

export interface seminarType{
title:string,
description:string,
cover:file,
date:string,
time:string
address:string,
objectives:string[],
video:string,
targetAudience:string[],
program:file
}

export interface contentfullResponseType{
    metadata: { tags: [] },
    sys: {
      space: [Object],
      id: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      environment: [Object],
      revision: 1,
      contentType: [Object],
      locale: string
    },
    fields: seminarType
 }



