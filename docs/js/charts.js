/**
 * @author Francisco Javier González Sabariego
 * 
 * MGráficas del portfolio
 */
document.addEventListener("DOMContentLoaded", () => {
    Chart.defaults.elements.arc.borderWidth = 0;

    const CHART_JS = new Chart(
        document.getElementById('knowledge_js'),
        CHART_CONFIG.config_js
    );
    const CHART_TS = new Chart(
        document.getElementById('knowledge_ts'),
        CHART_CONFIG.config_ts
    );
    const CHART_PHP = new Chart(
        document.getElementById('knowledge_php'),
        CHART_CONFIG.config_php
    );
    const CHART_JAVA = new Chart(
        document.getElementById('knowledge_java'),
        CHART_CONFIG.config_java
    );
    const CHART_PYTHON = new Chart(
        document.getElementById('knowledge_python'),
        CHART_CONFIG.config_python
    );
    const CHART_REACT = new Chart(
        document.getElementById('knowledge_react'),
        CHART_CONFIG.config_react
    );
    const CHART_ANGULAR = new Chart(
        document.getElementById('knowledge_angular'),
        CHART_CONFIG.config_angular
    );
    const CHART_EXPRESS = new Chart(
        document.getElementById('knowledge_express'),
        CHART_CONFIG.config_express
    );
    const CHART_SOCKETIO = new Chart(
        document.getElementById('knowledge_socketio'),
        CHART_CONFIG.config_socketio
    );
    const CHART_MONGOOSE = new Chart(
        document.getElementById('knowledge_mongoose'),
        CHART_CONFIG.config_mongoose
    );

    const CHART_MYSQL = new Chart(
        document.getElementById('knowledge_mysql'),
        CHART_CONFIG.config_mysql
    );
    const CHART_MONGODB = new Chart(
        document.getElementById('knowledge_mongodb'),
        CHART_CONFIG.config_mongodb
    );
});