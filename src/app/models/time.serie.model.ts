import { InfoNextHourModel } from "./info.next.hour.model";
import { InstantModel } from "./instant.model";

export class TimeSerieModel {

    constructor(
        private instant: InstantModel,
        private nextOneHour: InfoNextHourModel,
        private nextSixHour: InfoNextHourModel,
        private nextTwelvenHour: InfoNextHourModel,
        private time: String
    ) {
    }

    static fromMap(m: any): TimeSerieModel {
        return new TimeSerieModel(
            InstantModel.fromMap(m.instant.details),
            InfoNextHourModel.fromMap(m.next_1_hours),
            InfoNextHourModel.fromMap(m.next_6_hours),
            InfoNextHourModel.fromMap(m.next_12_hours),
            m.time
        );
    }
}