export default function dateUpdates() {
  Date.prototype.toMonthString = function () {
    switch (this.getMonth()) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
    }
  };
  Date.prototype.getContactMonth = function () {
    switch (this.getMonth()) {
      case 0:
        return "F";
      case 1:
        return "G";
      case 2:
        return "H";
      case 3:
        return "J";
      case 4:
        return "K";
      case 5:
        return "M";
      case 6:
        return "N";
      case 7:
        return "Q";
      case 8:
        return "U";
      case 9:
        return "V";
      case 10:
        return "X";
      case 11:
        return "Z";
    }
  };
  Date.prototype.getFullDate = function () {
    const thisDate = this.getDate().toString();
    if (thisDate.length === 1) {
      return "0" + thisDate;
    }
    return thisDate;
  };

  Date.prototype.getFullMonth = function () {
    const thisMonth = (this.getMonth() + 1).toString();
    if (thisMonth.length === 1) {
      return "0" + thisMonth;
    }
    return thisMonth;
  };
  Date.prototype.filterDatesUpdate = function () {
    const thisDay = this.getDay();
    const thisDate = this.getDate();
    let that = new Date(this);
    switch (thisDay) {
      default:
        that.setDate(thisDate + 1);
        break;
    }
    return that;
  };
  Date.prototype.filterDatesUpdateFutures = function () {
    const thisDay = this.getDay();
    const thisDate = this.getDate();
    let that = new Date(this);
    switch (thisDay) {
      case 1:
      case 2:
      case 3:
      case 4:
        that.setDate(thisDate + 1);
        break;
      case 5:
        that.setDate(thisDate + 3);
      default:
        break;
    }
    return that;
  };
}
