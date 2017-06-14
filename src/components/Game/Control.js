export default function Control() {
  const start = () => {
    generation_count = 0;
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
    generation_count += 1;
    dispatchEvent( new CustomEvent( "game_tick"));
  };
  // private init
  const that = {};
  let tick_time = 500;
  let interval_id = 0;
  let generation_count = 0;

  // public export
  that.start = start;
  that.pause = pause;
  that.setTickTime = setTickTime;
  that.getGeneration = x => generation_count;
  return that;
}
