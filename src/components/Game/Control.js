export default function Control() {
  const start = () => {
    tick();
    interval_id = setInterval( tick, tick_time);
  };
  const pause = () => {
    if( interval_id){
      clearInterval( interval_id);
      interval_id = 0;
    }
  };
  const setTickTime = ( new_time_ms) => {
    tick_time = new_time_ms;
  };
  const tick = () => {
    dispatchEvent( Event( "game_tick"));
  };
  // private init
  const that = {};
  let tick_time = 1000;
  let interval_id = 0;

  // public export
  that.start = start;
  that.pause = pause;
  that.setTickTime = setTickTime;
  return that;
}
