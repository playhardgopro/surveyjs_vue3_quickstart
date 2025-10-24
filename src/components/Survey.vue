<script setup lang="ts">
import { Model } from "survey-core";
import { json } from "../../data/survey_json.js";

const survey = new Model(json);
</script>

<template>
  <div>
    <div style="color: red; font-size: 24px; text-align: center;">
      survey.isLastPage: {{ survey.isLastPage }}
    </div>

    <SurveyComponent :model="survey"></SurveyComponent>
  </div>
</template>