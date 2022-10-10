export class InfoNextHourModel {
    constructor(
        private precipitationAmount: Number,
        private symbolCode: String
    ) { }

    static fromMap(m: any): InfoNextHourModel {
        var details = 0.0;
        var summary = "";

        try {
            details = m.details.precipitation_amount
        } catch (e) { }

        try {
            summary = m.summary.symbol_code
        } catch (e) { }

        return new InfoNextHourModel(
            details,
            summary
        );
    }
}   