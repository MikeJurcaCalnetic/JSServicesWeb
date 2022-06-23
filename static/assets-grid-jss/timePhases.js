export default function timePhases() {
  const timePhasesObj = {};
  const currentDay = new Date();
  const currentTime =
    currentDay.getHours() +
    ":" +
    currentDay.getMinutes() +
    ":" +
    currentDay.getSeconds();
  const currentDayNum = currentDay.getDate();

  timePhasesObj["dailyrst"] = timePhaseDailyRst(currentTime);
  timePhasesObj["daily24"] = timePhaseDaily24(currentTime);
  timePhasesObj["weekly"] = timePhasesWeekly(currentDay);
  timePhasesObj["monthly"] = timePhasesMonthly(currentDayNum);

  function timePhaseDailyRst(time) {
    if ("8:30:00" <= time && time <= "9:29:59")
      return { value: "INITIATION", bg: "255,255,0" };
    if ("9:30:00" <= time && time <= "10:29:59")
      return { value: "DISCOVERY", bg: "255,204,204" };
    if ("10:30:00" <= time && time <= "14:29:59")
      return { value: "EXPANSION", bg: "204,153,255" };
    if ("14:30:00" <= time && time <= "15:14:59")
      return { value: "SETTLEMENT", bg: "255,0,0" };
    return { value: "", bg: "255,255,255" };
  }

  function timePhaseDaily24(time) {
    if ("17:00:00" <= time && time <= "20:59:59")
      return { value: "INITIATION", bg: "255,255,0" };
    if (("21:00:00" <= time && "24:00:00" >= time) || time <= "0:59:59")
      return { value: "DISCOVERY", bg: "255,204,204" };
    if ("1:00:00" <= time && time <= "11:59:59")
      return { value: "EXPANSION", bg: "204,153,255" };
    if ("12:30:00" <= time && time <= "15:59:59")
      return { value: "SETTLEMENT", bg: "255,0,0" };
    return { value: "", bg: "255,255,255" };
  }
  function timePhasesWeekly(currentDay) {
    let thisDate = currentDay.getDate();
    let dayNumber = currentDay.getDay();
    let appliedToDate = currentDay;

    if (dayNumber != 5) {
      thisDate += 1;
    }
    if (dayNumber == 5) {
      thisDate += 2;
    }

    appliedToDate.setDate(thisDate);
    let appliedToDay = appliedToDate.getDay();

    if (appliedToDay == 6 || appliedToDay == 0)
      return { value: "INITIATION", bg: "255,255,0" };
    if (appliedToDay == 1) return { value: "DISCOVERY", bg: "255,204,204" };
    if (appliedToDay == 2 || appliedToDay == 3)
      return { value: "EXPANSION", bg: "204,153,255" };
    if (appliedToDay == 4) return { value: "SETTLEMENT", bg: "255,0,0" };
    if (appliedToDay == 5) return { value: "CLOSED", bg: "255,255,255" };

    return { value: "NA", bg: "255,255,255" };
  }

  function timePhasesMonthly(currentDate) {
    if (currentDate <= 7) return { value: "INITIATION", bg: "255,255,0" };
    if (currentDate > 7 && currentDate <= 14)
      return { value: "DISCOVERY", bg: "255,204,204" };
    if (currentDate > 14 && currentDate <= 24)
      return { value: "EXPANSION", bg: "204,153,255" };
    if (currentDate > 7) return { value: "SETTLEMENT", bg: "255,0,0" };
  }

  return timePhasesObj;
}
