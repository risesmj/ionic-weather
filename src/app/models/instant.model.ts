import { NumericValueAccessor } from "@ionic/angular";

export class InstantModel {

    constructor(
        private airPressureAtSeaLevel: Number,
        private airTemperature: Number,
        private cloudAreaFraction: Number,
        private relativeHumidity: Number,
        private windFromDirection: Number,
        private windSpeed: Number,
    ) { }


    static fromMap(m: any): InstantModel {
        var airPressureAtSeaLevel = 0.0;
        var airTemperature = 0.0;
        var cloudAreaFraction = 0.0;
        var relativeHumidity = 0.0;
        var windFromDirection = 0.0;
        var windSpeed = 0.0;

        try {
            airPressureAtSeaLevel = m.air_pressure_at_sea_level;
        } catch (e) { }

        try {
            airTemperature = m.air_temperature;
        } catch (e) { }

        try {
            cloudAreaFraction = m.cloud_area_fraction;
        } catch (e) { }

        try {
            relativeHumidity = m.relative_humidity;
        } catch (e) { }

        try {
            windFromDirection = m.wind_from_direction;
        } catch (e) { }

        try {
            windSpeed = m.wind_speed;
        } catch (e) { }

        return new InstantModel(
            airPressureAtSeaLevel,
            airTemperature,
            cloudAreaFraction,
            relativeHumidity,
            windFromDirection,
            windSpeed
        );
    }
}