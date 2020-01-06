export const getCurrentTime = () => {
  var date = new Date();
  const [h, m, s] = [date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(), date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()];
  return [h, m, s].join(':');
};

export const timeInSecond = (t) => {
  const [hr, mt, sec] = t.split(':').map(x => +x);
  return hr * 3600 + mt * 60 + sec;
}

export const timeCalculate = (time) => {
  let [a, b, c] = [Math.floor(time / 3600) % 24, Math.floor(Math.floor(time % 3600) / 60), Math.floor(Math.floor(Math.floor(time % 3600) % 60))];
  [a, b, c] = [a < 0 ? 0 : a, b < 0 ? 0 : b, c < 0 ? 0 : c];

  const [lhr, lmt, lsec] = [a < 10 ? '0' + a : a, b < 10 ? '0' + b : b, c < 10 ? '0' + c : c];
  return [lhr, lmt, lsec].map(x => x.toString()).join(':');
}

export const todaysDate = () => new Date().toLocaleDateString().split('/')[1]