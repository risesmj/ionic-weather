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
            InstantModel.fromMap(m.data.instant.details),
            InfoNextHourModel.fromMap(m.data.next_1_hours),
            InfoNextHourModel.fromMap(m.data.next_6_hours),
            InfoNextHourModel.fromMap(m.data.next_12_hours),
            m.time
        );
    }
}