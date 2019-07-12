import {Log, COLOR} from 'probe.gl';

export const log = new Log({id: 'graph.gl'}).enable();

log.log({color: COLOR.CYAN}, 'Initialize graph.gl logger.')();
