import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();


routes.get('/classes',classesController.index);
routes.post('/classes',classesController.create);

routes.get('/connections',connectionsController.index);
routes.post('/connections',connectionsController.create);


export default routes; 


/* 
import express, { request, response } from 'express';

import db from './database/connection';

const routes = express.Router();

import convertHourToMinutes from './utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {

    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const insertedUserIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    // variável com id do usuário inserida
    const user_id = insertedUserIds[0];

    const insertedClassIds =  await db('classes').insert({
        subject,
        cost,
        user_id
    });

    // variável com id da classe inserida
    const class_id = insertedClassIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to),

        };

    });

    await db('class_schedule').insert(classSchedule); 
        
    return response.send();

    

});



export default routes; */