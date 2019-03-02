# alarm-clock-fsm-practice
#

## Реализуйте логику работы часов.

В режиме будильника, часы и минуты изменяются независимо и никак друг на друга не влияют (как и в большинстве реальных будильников). То есть если происходит увеличение минут с 59 до 60 (сброс на 00), то цифра с часами остается неизменной.
Интерфейсными методами часов являются:

clickMode() - нажатие на кнопку Mode  
longClickMode() - долгое нажатие на кнопку Mode  
clickH() - нажатие на кнопку H  
clickM() - нажатие на кнопку M  
tick() - при вызове, увеличивает время на одну минуту. Если новое время совпало со временем на будильнике, то часы переключаются в режим будильника.  
isAlarmOn() - показывает включен ли режим будильника  
isAlarmTime() - возвращает true, если время на часах совпадает со временем на будильнике  
minutes() - возвращает минуты, установленные на часах  
hours() - возвращает часы, установленные на часах  
alarmMinutes() - возвращает минуты, установленные на будильнике  
alarmHours() - возвращает часы, установленные на будильнике  
getCurrentMode() - возвращает текущий режим (alarm | clock | bell)  
Основной спецификацией к данной задачe нужно считать тесты.  
#
```AlarmClock.js```  
Реализуйте интерфейсные методы и логику работы часов.
#
```State.js, AlarmState.js, BellState.js, ClockState.js```  
Реализуйте иерархию состояний, в корне которой находится State.
#
 source: https://ru.hexlet.io