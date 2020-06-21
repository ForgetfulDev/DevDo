import Vue from "vue";
import { ValidationProvider, extend } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);

// Add a rule.
extend("secret", {
    validate: value => value === "example",
    message: "This is not the magic word"
});

extend("min", {
    validate(value, args) {
        return value.length >= args.length;
    },
    params: ["length"],
    message: `{_field_} must have atleast {length} characters`,
    // This rule reports the `required` state of the field.
    computesRequired: true
});

extend("required", {
    validate(value) {
        return {
            required: true,
            valid: ["", null, undefined].indexOf(value) === -1
        };
    },
    computesRequired: true
});
