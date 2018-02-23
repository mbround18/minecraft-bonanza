var displayFirstLoadNotification = true;

function check_tab_states() {
  if ( $( "#home-tab" ).hasClass( "uk-active" ) ) {
    $('#home-tab-content').show();
    $('#map-tab-content').hide();
  } else {
    $('#home-tab-content').hide();
    $('#map-tab-content').show();

    if ( displayFirstLoadNotification ) {
      UIkit.notification({
        message: 'On initial load, map usage may be sluggish! After a moment or two this should clear up..',
        status: 'warning',
        pos: 'bottom-right',
        timeout: 5000
      });
      displayFirstLoadNotification = false;
    }
  }
}

$(document).ready(function () {
  setInterval(function(){ check_tab_states(); }, 1000);
  check_tab_states();
});

