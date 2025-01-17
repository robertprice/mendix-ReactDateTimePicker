/**
 * This file was generated from ReactDateTimePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type ReadOnlyStyleEnum = "control" | "text";

export type PickerEnum = "datetimepicker" | "datepicker" | "timepicker";

export interface ReactDateTimePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    readOnlyStyle: ReadOnlyStyleEnum;
    dateTimeAttribute: EditableValue<Date>;
    placeholder?: DynamicValue<string>;
    invalidDateAttribute?: EditableValue<boolean>;
    onChangeAction?: ActionValue;
    closeOnSelect: boolean;
    disablePast: boolean;
    minDateAttribute?: EditableValue<Date>;
    maxDateAttribute?: EditableValue<Date>;
    initialViewDateAttribute?: EditableValue<Date>;
    locale?: DynamicValue<string>;
    picker: PickerEnum;
    dateFormat?: DynamicValue<string>;
    timeFormat?: DynamicValue<string>;
    minHours: number;
    maxHours: number;
    hourStep: number;
    minMinutes: number;
    maxMinutes: number;
    minuteStep: number;
    minSeconds: number;
    maxSeconds: number;
    secondStep: number;
}

export interface ReactDateTimePickerPreviewProps {
    class: string;
    style: string;
    readOnlyStyle: ReadOnlyStyleEnum;
    dateTimeAttribute: string;
    placeholder: string;
    invalidDateAttribute: string;
    onChangeAction: {} | null;
    closeOnSelect: boolean;
    disablePast: boolean;
    minDateAttribute: string;
    maxDateAttribute: string;
    initialViewDateAttribute: string;
    locale: string;
    picker: PickerEnum;
    dateFormat: string;
    timeFormat: string;
    minHours: number | null;
    maxHours: number | null;
    hourStep: number | null;
    minMinutes: number | null;
    maxMinutes: number | null;
    minuteStep: number | null;
    minSeconds: number | null;
    maxSeconds: number | null;
    secondStep: number | null;
}
