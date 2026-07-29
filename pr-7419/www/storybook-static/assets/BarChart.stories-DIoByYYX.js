import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{At as r,B as i,O as a,P as o,Q as s,R as c,Rt as l,Vn as u,W as d,ct as f,kn as p,ot as m,t as h,xn as g}from"./iframe-BqVvK_R4.js";import{t as _}from"./data-J2vpPkF6.js";import{o as v,r as y}from"./Page-C0w_0_Yr.js";import{n as b,t as x}from"./utils-4uF5A2JM.js";import{n as S,t as C}from"./BarChartArgs-f-9wms1F.js";import{n as w,t as T}from"./assertNotNull-yYG3ZHnW.js";var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{E=t(n()),_(),h(),b(),S(),w(),D={argTypes:C,component:a,docs:{autodocs:!1}},O={render:e=>{let[t,n]=(0,E.useState)(null),[r,o]=(0,E.useState)(!1);return E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{dataKey:`name`}),E.createElement(c,null),E.createElement(p,{onMouseEnter:e=>{r||n(String(e.dataKey))},onMouseOut:()=>{r||n(null)},onClick:e=>{t===String(e.dataKey)?r?(n(null),o(!1)):o(!0):(n(String(e.dataKey)),o(!0))}}),E.createElement(d,{hide:t!=null&&t!==`pv`,dataKey:`pv`,stackId:`a`,fill:`#8884d8`,activeBar:{fill:`gold`}}),E.createElement(d,{hide:t!=null&&t!==`uv`,dataKey:`uv`,stackId:`a`,fill:`#82ca9d`,activeBar:{fill:`silver`}}),E.createElement(l,{shared:!1,defaultIndex:1})))},args:{...x(C),width:500,height:300,data:y,margin:{top:20,right:30,left:20,bottom:5}}},k=y.map(e=>({...e,pvError:[100,200]})),A={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{type:`number`}),E.createElement(c,{dataKey:`name`,type:`category`}),E.createElement(p,null),E.createElement(l,null),E.createElement(d,{dataKey:`pv`,stackId:`a`,fill:`#8884d8`}),E.createElement(d,{dataKey:`uv`,stackId:`a`,fill:`#82ca9d`},E.createElement(o,{dataKey:`pvError`,width:5,stroke:`red`,direction:`x`})))),args:{...x(C),width:500,height:300,data:k,margin:{top:20,right:30,left:20,bottom:5},layout:`vertical`}},j=[{name:`1`,uv:300,pv:456},{name:`2`,uv:-145,pv:230},{name:`3`,uv:-100,pv:345},{name:`4`,uv:-8,pv:450},{name:`5`,uv:100,pv:321},{name:`6`,uv:9,pv:235},{name:`7`,uv:53,pv:267},{name:`8`,uv:252,pv:-378},{name:`9`,uv:79,pv:-210},{name:`10`,uv:294,pv:-23},{name:`12`,uv:43,pv:45},{name:`13`,uv:-74,pv:90},{name:`14`,uv:-71,pv:130},{name:`15`,uv:-117,pv:11},{name:`16`,uv:-186,pv:107},{name:`17`,uv:-16,pv:926},{name:`18`,uv:-125,pv:653},{name:`19`,uv:222,pv:366},{name:`20`,uv:372,pv:486},{name:`21`,uv:182,pv:512},{name:`22`,uv:164,pv:302},{name:`23`,uv:316,pv:425},{name:`24`,uv:131,pv:467},{name:`25`,uv:291,pv:-190},{name:`26`,uv:-47,pv:194},{name:`27`,uv:-415,pv:371},{name:`28`,uv:-182,pv:376},{name:`29`,uv:-93,pv:295},{name:`30`,uv:-99,pv:322},{name:`31`,uv:-52,pv:246},{name:`32`,uv:154,pv:33},{name:`33`,uv:205,pv:354},{name:`34`,uv:70,pv:258},{name:`35`,uv:-25,pv:359},{name:`36`,uv:-59,pv:192},{name:`37`,uv:-63,pv:464},{name:`38`,uv:-91,pv:-2},{name:`39`,uv:-66,pv:154},{name:`40`,uv:-50,pv:186}],M={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{dataKey:`name`,tickMargin:30}),E.createElement(c,null),E.createElement(p,{verticalAlign:`top`,wrapperStyle:{lineHeight:`40px`}}),E.createElement(l,null),E.createElement(m,{y:0,stroke:`#000`}),E.createElement(f,{dataKey:`name`,height:30,dy:30,stroke:`#8884d8`}),E.createElement(d,{dataKey:`pv`,fill:`#8884d8`}),E.createElement(d,{dataKey:`uv`,fill:`#82ca9d`}))),args:{...x(C),width:500,height:300,data:j,margin:{top:5,right:30,left:20,bottom:35}}},N={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{dataKey:`name`}),E.createElement(c,null),E.createElement(p,{verticalAlign:`top`,wrapperStyle:{lineHeight:`40px`}}),E.createElement(l,{defaultIndex:1}),E.createElement(d,{dataKey:`pv`,stackId:`a`,fill:`#8884d8`,activeBar:{fill:`gold`}}),E.createElement(d,{dataKey:`uv`,stackId:`a`,fill:`#82ca9d`,activeBar:{fill:`silver`}}),E.createElement(f,{dataKey:`name`,height:30,stroke:`#8884d8`}))),args:{...x(C),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5}}},P={render:e=>{let t=y.map(({name:e,uv:t,pv:n})=>({name:e,uv:t,pv:n,label:t>n?`UV greater`:`PV greater`}));return E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,{...e,data:t},E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{dataKey:`name`}),E.createElement(c,null),E.createElement(p,null),E.createElement(l,null),E.createElement(d,{dataKey:`pv`,fill:`#8884d8`,label:{dataKey:`label`,position:`top`,fill:`#111`}}),E.createElement(d,{dataKey:`uv`,fill:`#82ca9d`})))},args:{...x(C),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5}}},F={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(i,{dataKey:`name`,scale:`point`,padding:{left:10,right:10}}),E.createElement(c,null),E.createElement(p,null),E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(d,{dataKey:`pv`,fill:`#8884d8`,background:{fill:`#eee`}}),E.createElement(l,null))),args:{...x(C),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5},barSize:20}},I=[{name:`Page D`,uv:1397,pv:0},{name:`Page E`,uv:0,pv:1},{name:`Page F`,uv:1520,pv:1108},{name:`Page G`,uv:2,pv:680}],L={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(i,{dataKey:`name`}),E.createElement(c,null),E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(l,null),E.createElement(d,{dataKey:`pv`,fill:`purple`,minPointSize:e=>e===0?0:2,stackId:`a`}),E.createElement(d,{dataKey:`uv`,fill:`green`,minPointSize:e=>e===0?0:2,stackId:`a`}),E.createElement(d,{dataKey:`uv`,fill:`blue`,minPointSize:e=>e===0?0:2}))),args:{...x(C),width:500,height:300,data:I,margin:{top:5,right:30,left:20,bottom:5}}},R={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(i,{dataKey:e=>e[0],type:`number`,domain:[0,10]}),E.createElement(c,null),E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(d,{dataKey:e=>e[1]}),E.createElement(l,null))),args:{...x(C),width:500,height:300,data:[[4.5,10]],margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},z={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(i,{dataKey:`day`}),E.createElement(c,null),E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(l,null),E.createElement(d,{dataKey:`temperature`,fill:`violet`,stroke:`indigo`}))),args:{...x(C),width:500,height:300,data:v,margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},B=e=>E.createElement(g,{...e,fill:`red`,fillOpacity:.6,stroke:`#111`}),V={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,e,E.createElement(i,{dataKey:`name`}),E.createElement(c,null),E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(d,{dataKey:`uv`,fill:`violet`,stroke:`indigo`}),E.createElement(l,{cursor:E.createElement(B,null)}))),args:{...x(C),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},H={render:e=>{let t=[{x:{value:1},name:`x1`},{x:{value:2},name:`x2`},{x:{value:3},name:`x3`}],n=[{y:{value:3},name:`y1`},{y:{value:2},name:`y2`},{y:{value:1},name:`y3`}],r=e=>(T(e.x),e.x.value),o=e=>(T(e.y),e.y.value),[u,f]=(0,E.useState)(!1),[m,h]=(0,E.useState)(!0);return E.createElement(E.Fragment,null,E.createElement(`button`,{type:`button`,onClick:()=>{f(!1),h(!0)}},`Use data1`),E.createElement(`button`,{type:`button`,onClick:()=>{f(!0),h(!0)}},`Use data2`),E.createElement(`button`,{type:`button`,onClick:()=>{h(!1)}},`Hide`),E.createElement(a,{...e,data:u?n:t},E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{dataKey:`name`,padding:{left:30,right:30}}),E.createElement(c,{dataKey:u?o:r}),E.createElement(l,null),E.createElement(p,null),E.createElement(d,{name:`Animated Bar`,hide:!m,type:`monotone`,dataKey:u?o:r,stroke:`#8884d8`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:1e3})))},args:{...x(C),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},U={render:e=>{let[t,n]=(0,E.useState)(!1),[r,o]=(0,E.useState)(!0);return E.createElement(E.Fragment,null,E.createElement(`button`,{type:`button`,onClick:()=>{n(!1),o(!0)}},`Use data1`),E.createElement(`button`,{type:`button`,onClick:()=>{n(!0),o(!0)}},`Use data2`),E.createElement(`button`,{type:`button`,onClick:()=>{o(!1)}},`Hide`),E.createElement(a,{...e,data:y},E.createElement(s,{strokeDasharray:`3 3`}),E.createElement(i,{dataKey:`name`,padding:{left:30,right:30}}),E.createElement(c,{dataKey:`uv`}),E.createElement(l,null),E.createElement(p,null),E.createElement(d,{name:`Animated Bar 1`,hide:!r,dataKey:t?`uv`:`pv`,stackId:1,stroke:`green`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:3e3}),E.createElement(d,{name:`Animated Bar 2`,hide:!r,dataKey:t?`pv`:`amt`,stackId:1,stroke:`yellow`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:1e3})))},args:{...x(C),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},W={render:e=>{let[t,n]=(0,E.useState)([{number:10}]),r=()=>{n([{number:10}])},i=()=>{n([{number:50}])},o=()=>{n([{number:90}]),setTimeout(()=>{n([{number:30}])},150)};return E.createElement(`div`,{style:{display:`flex`,gap:`4rem`,alignItems:`center`}},E.createElement(a,{...e,data:t},E.createElement(c,{hide:!0,domain:[0,100]}),E.createElement(d,{dataKey:`number`,fill:`chocolate`,background:{fill:`bisque`}})),E.createElement(`button`,{type:`button`,onClick:i},`Change data synchronously`),E.createElement(`button`,{type:`button`,onClick:o},`Change data with setTimeout`),E.createElement(`button`,{type:`button`,onClick:r},`Reset`))},args:{...x(C),width:100,height:100}},G={render:e=>E.createElement(u,{width:`100%`,height:`100%`},E.createElement(a,{width:500,height:250,...e,layout:`vertical`},E.createElement(d,{dataKey:`value`,fill:`#aebbae`,isAnimationActive:!1},E.createElement(r,{dataKey:`value`,position:`insideLeft`}),E.createElement(r,{dataKey:`label`,position:`right`})),E.createElement(i,{dataKey:`value`,type:`number`}),E.createElement(c,{dataKey:`label`,hide:!0,type:`category`}))),args:{...x(C),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:[{label:`World Trade Organization`,value:74},{label:`African Development Bank`,value:8},{label:`International Bank for Reconstruction and Development`,value:5}]}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
    const [locked, setLocked] = useState<boolean>(false);
    const onLegendMouseEnter = (payload: LegendPayload) => {
      if (!locked) {
        setFocusedDataKey(String(payload.dataKey));
      }
    };
    const onLegendMouseOut = () => {
      if (!locked) {
        setFocusedDataKey(null);
      }
    };
    const onLegendClick = (payload: LegendPayload) => {
      if (focusedDataKey === String(payload.dataKey)) {
        if (locked) {
          setFocusedDataKey(null);
          setLocked(false);
        } else {
          setLocked(true);
        }
      } else {
        setFocusedDataKey(String(payload.dataKey));
        setLocked(true);
      }
    };
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
          <Bar hide={focusedDataKey != null && focusedDataKey !== 'pv'} dataKey="pv" stackId="a" fill="#8884d8" activeBar={{
          fill: 'gold'
        }} />
          <Bar hide={focusedDataKey != null && focusedDataKey !== 'uv'} dataKey="uv" stackId="a" fill="#82ca9d" activeBar={{
          fill: 'silver'
        }} />
          <Tooltip shared={false} defaultIndex={1} />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d">
            <ErrorBar dataKey="pvError" width={5} stroke="red" direction="x" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pvErrorData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    },
    layout: 'vertical'
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickMargin={30} />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{
          lineHeight: '40px'
        }} />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} dy={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: dataForBrush,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 35
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{
          lineHeight: '40px'
        }} />
          <Tooltip defaultIndex={1} />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" activeBar={{
          fill: 'gold'
        }} />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" activeBar={{
          fill: 'silver'
        }} />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const dataWithLabel = pageData.map(({
      name,
      uv,
      pv
    }) => ({
      name,
      uv,
      pv,
      label: uv > pv ? 'UV greater' : 'PV greater'
    }));
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args} data={dataWithLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" label={{
          dataKey: 'label',
          position: 'top',
          fill: '#111'
        }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" scale="point" padding={{
          left: 10,
          right: 10
        }} />
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{
          fill: '#eee'
        }} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    barSize: 20
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="pv" fill="purple" minPointSize={value => value === 0 ? 0 : 2} stackId="a" />
          <Bar dataKey="uv" fill="green" minPointSize={value => value === 0 ? 0 : 2} stackId="a" />
          <Bar dataKey="uv" fill="blue" minPointSize={value => value === 0 ? 0 : 2} />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: dataWithSmallValuesAndZero,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey={v => v[0]} type="number" domain={[0, 10]} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={v => v[1]} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: [[4.5, 10]],
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="temperature" fill="violet" stroke="indigo" />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: rangeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%'
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="uv" fill="violet" stroke="indigo" />
          <Tooltip cursor={<MyCustomCursor />} />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    type MockDataType = {
      x?: {
        value: number;
      };
      y?: {
        value: number;
      };
      name: string;
    };
    const data1: ReadonlyArray<MockDataType> = [{
      x: {
        value: 1
      },
      name: 'x1'
    }, {
      x: {
        value: 2
      },
      name: 'x2'
    }, {
      x: {
        value: 3
      },
      name: 'x3'
    }];
    const data2: ReadonlyArray<MockDataType> = [{
      y: {
        value: 3
      },
      name: 'y1'
    }, {
      y: {
        value: 2
      },
      name: 'y2'
    }, {
      y: {
        value: 1
      },
      name: 'y3'
    }];
    const dataKey1 = (d: MockDataType) => {
      assertNotNull(d.x);
      return d.x.value;
    };
    const dataKey2 = (d: MockDataType) => {
      assertNotNull(d.y);
      return d.y.value;
    };
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <BarChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} />
          <Tooltip />
          <Legend />
          <Bar name="Animated Bar" hide={!visible} type="monotone" dataKey={useData2 ? dataKey2 : dataKey1} stroke="#8884d8" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={1000} />
        </BarChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <BarChart {...args} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey="uv" />
          <Tooltip />
          <Legend />
          <Bar name="Animated Bar 1" hide={!visible} dataKey={useData2 ? 'uv' : 'pv'} stackId={1} stroke="green" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={3000} />
          <Bar name="Animated Bar 2" hide={!visible} dataKey={useData2 ? 'pv' : 'amt'} stackId={1} stroke="yellow" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={1000} />
        </BarChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    type MyDataShape = Array<{
      number: number;
    }>;
    const [data, setData] = useState<MyDataShape>([{
      number: 10
    }]);
    const reset = () => {
      setData([{
        number: 10
      }]);
    };
    const changeSynchronously = () => {
      setData([{
        number: 50
      }]);
    };
    const changeAsynchronously = () => {
      setData([{
        number: 90
      }]);
      setTimeout(() => {
        setData([{
          number: 30
        }]);
      }, 150);
    };
    return <div style={{
      display: 'flex',
      gap: '4rem',
      alignItems: 'center'
    }}>
        <BarChart {...args} data={data}>
          <YAxis hide domain={[0, 100]} />
          <Bar dataKey="number" fill="chocolate" background={{
          fill: 'bisque'
        }} />
        </BarChart>

        <button type="button" onClick={changeSynchronously}>
          Change data synchronously
        </button>

        <button type="button" onClick={changeAsynchronously}>
          Change data with setTimeout
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 100,
    height: 100
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={250} {...args} layout="vertical">
          <Bar dataKey="value" fill="#aebbae" isAnimationActive={false}>
            <LabelList dataKey="value" position="insideLeft" />
            <LabelList dataKey="label" position="right" />
          </Bar>

          <XAxis dataKey="value" type="number" />
          <YAxis dataKey="label" hide type="category" />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    data: [{
      label: 'World Trade Organization',
      value: 74
    }, {
      label: 'African Development Bank',
      value: 8
    }, {
      label: 'International Bank for Reconstruction and Development',
      value: 5
    }]
  }
}`,...G.parameters?.docs?.source}}},K=[`StackedAndDynamic`,`StackedWithErrorBar`,`XAxisTickMarginWithBrushDy`,`StackedWithBrush`,`HasLabelBasedOnSeparateDataKey`,`NoPadding`,`WithMinPointSize`,`OneDataPointPercentSize`,`RangedBarChart`,`CustomCursorBarChart`,`ChangingDataKey`,`ChangingDataKeyAndStacked`,`ChangingData`,`VerticalWithLabelLists`]}))();export{W as ChangingData,H as ChangingDataKey,U as ChangingDataKeyAndStacked,V as CustomCursorBarChart,P as HasLabelBasedOnSeparateDataKey,F as NoPadding,R as OneDataPointPercentSize,z as RangedBarChart,O as StackedAndDynamic,N as StackedWithBrush,A as StackedWithErrorBar,G as VerticalWithLabelLists,L as WithMinPointSize,M as XAxisTickMarginWithBrushDy,K as __namedExportsOrder,D as default};