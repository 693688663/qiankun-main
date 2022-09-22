/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-09-22 15:41:39
 * @Description: 文件介绍
 */

import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
  initGlobalState
} from 'qiankun';
const microAppStart = () => {
  registerMicroApps([
    {
      name: 'app2', // app name registered
      entry: '//localhost:8012/',
      container: '#qiankundom',
      activeRule: '',
    },
    {
      name: 'rds', // app name registered
      // entry: process.env.VUE_APP_QINKUN_DBASS_ACTIVE_URL,
      entry: '//localhost:60014',
      container: '#qiankundom',
      activeRule: '/rds',
      // loader: loadingFn,
      // props: {
      //   userInfo: getUserInfo
      // }
    },
  ], {
    beforeLoad: [
      (app) => {
        console.log(1);
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
      }
    ],
    beforeMount: [
      (app) => {
        console.log(2);
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      }
    ],
    afterUnmount: [
      (app) => {
        console.log(3);
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
        // resetRouter();
      }
    ]

  })

  const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
  });

  onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev), true);

  setGlobalState({
    ignore: 'master',
    user: {
      name: 'master',
    },
  });
  // setDefaultMountApp('/home/taobao');
  start()
  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
  });
}
export default microAppStart