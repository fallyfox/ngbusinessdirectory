import * as yup from "yup";

export const rules = yup.object().shape({
    business_name:yup.string("business name must be a string").required("business name is mandatory").min(6,"business name must be at least 6 characters"),
    category:yup.string().notOneOf(["none"]),
    sub_category:yup.string().notOneOf(["none"]),
    state:yup.string().notOneOf(["none"]),
    lga:yup.string().notOneOf(["none"]),
    business_description:yup.string().required().min(20),
    website: yup.string().url().nullable(),
});