<template>
    <div class="container">
        <div class="commitment">
            <div class="margin">
                <FullCalendar :options="calendarOptions" />
            </div>
        </div>
    </div>

</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default{
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                timeZone: 'local',
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                height: '85vh',
                width: '100vh',
                headerToolbar: {
                    left: 'prev,next,add',
                    center: 'title',
                    right: 'dayGridYear,dayGridMonth,dayGridWeek,dayGridDay,today'
                },
                dayMaxEvents: true,
                selectable: true,
                editable: true,
                weekNumbers: true,
                //events:[],
                eventClick: function(info) {
                    var eventObj = info.event;

                    if (eventObj.url) {
                        alert(
                        'Clicked ' + eventObj.title + '.\n' +
                        'Will open ' + eventObj.url + ' in a new tab'
                        );

                        window.open(eventObj.url);

                        info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
                    } else {
                        alert('Clicked ' + eventObj.title);
                    }
                },
                customButtons: {
                    add: {
                        text: '+',
                        click: () =>{
                            var dateStStr = prompt('Insira uma data de inicio no formato: YYYY-MM-DD');
                            var dateFinStr = prompt('Insira uma data de fim no formato: YYYY-MM-DD');
                            var titleStr = prompt('Titulo: ');
                            var hourStr = prompt('Horas: THH:MM:SS');
                            var dateStStr = new Date(dateStStr + 'T00:00:00'); // will be in local time
                            var dateFinStr = new Date(dateFinStr + 'T00:00:00');// will be in local time 

                            if (!isNaN(dateStStr.valueOf()) && !isNaN(dateFinStr.valueOf())) { // valid?
                                calendar.addEvent({
                                    title: titleStr,
                                    start: dateStStr,
                                    end: dateFinStr,
                                    allDay: false
                                });
                                alert('Great. Now, update your database...');
                            } else {
                                alert('Invalid date.');
                            }
                        }
                    }
                },
                events: [
                    { // this object will be "parsed" into an Event Object
                        title: 'teste', // a property!
                        start: '2024-04-08', // a property!
                        end: '2024-04-09' // a property! ** see important note below about 'end' **
                    },
                    { // this object will be "parsed" into an Event Object
                        title: 'teste', // a property!
                        start: '2024-05-01', // a property!
                        end: '2024-05-05' // a property! ** see important note below about 'end' **
                    },
                    { // this object will be "parsed" into an Event Object
                        title: 'teste', // a property!
                        start: '2024-05-01', // a property!
                        end: '2024-05-05' // a property! ** see important note below about 'end' **
                    },
                    { // this object will be "parsed" into an Event Object
                        title: 'teste', // a property!
                        start: '2024-05-01', // a property!
                        end: '2024-05-05' // a property! ** see important note below about 'end' **
                    },
                    { // this object will be "parsed" into an Event Object
                        title: 'teste', // a property!
                        start: '2024-05-01', // a property!
                        end: '2024-05-05' // a property! ** see important note below about 'end' **
                    },
                    { // this object will be "parsed" into an Event Object
                        title: 'teste', // a property!
                        start: '2024-05-01', // a property!
                        end: '2024-05-05' // a property! ** see important note below about 'end' **
                    }
                ]

            }
        }
    },
    methods:{
        teste(){
            console.log(testado);
        }
    }
}
</script>

<style lang="scss">
@media(max-width: 1023px) {
    @import "./scss/SchedulesSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/SchedulesLarge.scss";
}
</style>