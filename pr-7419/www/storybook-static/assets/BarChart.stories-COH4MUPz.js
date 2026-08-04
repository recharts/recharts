import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-BB3DFUdX.js";import{n as a,t as o}from"./Legend-qtjl04WH.js";import{n as s,t as c}from"./Tooltip-DEy1nQtc.js";import{n as l,t as u}from"./Rectangle-CI5vV_uC.js";import{_ as d,m as f}from"./AnimatedItems-GRt3IPcf.js";import{n as p,t as m}from"./Brush-DgNPJMd-.js";import{n as ee,t as te}from"./ReferenceLine-EwmK7hoX.js";import{n as h,t as g}from"./CartesianGrid-CBbBEirB.js";import{n as _,t as v}from"./Bar-9gdJPG3q.js";import{n as y,t as b}from"./XAxis-DWz4LzmB.js";import{n as x,t as S}from"./YAxis-DyGSk49m.js";import{n as C,t as w}from"./ErrorBar-Do6d28nE.js";import{n as T,t as E}from"./BarChart-D1hrmUPr.js";import{o as ne,r as D,t as re}from"./Page-DUsfWi7y.js";import{n as ie,t as O}from"./utils-vqcWnakT.js";import{n as k,t as A}from"./BarChartArgs-BTSdCahn.js";import{t as j}from"./assertNotNull-BvM1b6J5.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{M=e(n()),re(),_(),T(),p(),h(),C(),d(),a(),l(),ee(),i(),s(),y(),x(),ie(),k(),N={argTypes:A,component:E,docs:{autodocs:!1}},P={render:e=>{let[t,n]=(0,M.useState)(null),[i,a]=(0,M.useState)(!1);return M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{dataKey:`name`}),M.createElement(S,null),M.createElement(o,{onMouseEnter:e=>{i||n(String(e.dataKey))},onMouseOut:()=>{i||n(null)},onClick:e=>{t===String(e.dataKey)?i?(n(null),a(!1)):a(!0):(n(String(e.dataKey)),a(!0))}}),M.createElement(v,{hide:t!=null&&t!==`pv`,dataKey:`pv`,stackId:`a`,fill:`#8884d8`,activeBar:{fill:`gold`}}),M.createElement(v,{hide:t!=null&&t!==`uv`,dataKey:`uv`,stackId:`a`,fill:`#82ca9d`,activeBar:{fill:`silver`}}),M.createElement(c,{shared:!1,defaultIndex:1})))},args:{...O(A),width:500,height:300,data:D,margin:{top:20,right:30,left:20,bottom:5}}},F=D.map(e=>({...e,pvError:[100,200]})),I={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{type:`number`}),M.createElement(S,{dataKey:`name`,type:`category`}),M.createElement(o,null),M.createElement(c,null),M.createElement(v,{dataKey:`pv`,stackId:`a`,fill:`#8884d8`}),M.createElement(v,{dataKey:`uv`,stackId:`a`,fill:`#82ca9d`},M.createElement(w,{dataKey:`pvError`,width:5,stroke:`red`,direction:`x`})))),args:{...O(A),width:500,height:300,data:F,margin:{top:20,right:30,left:20,bottom:5},layout:`vertical`}},L=[{name:`1`,uv:300,pv:456},{name:`2`,uv:-145,pv:230},{name:`3`,uv:-100,pv:345},{name:`4`,uv:-8,pv:450},{name:`5`,uv:100,pv:321},{name:`6`,uv:9,pv:235},{name:`7`,uv:53,pv:267},{name:`8`,uv:252,pv:-378},{name:`9`,uv:79,pv:-210},{name:`10`,uv:294,pv:-23},{name:`12`,uv:43,pv:45},{name:`13`,uv:-74,pv:90},{name:`14`,uv:-71,pv:130},{name:`15`,uv:-117,pv:11},{name:`16`,uv:-186,pv:107},{name:`17`,uv:-16,pv:926},{name:`18`,uv:-125,pv:653},{name:`19`,uv:222,pv:366},{name:`20`,uv:372,pv:486},{name:`21`,uv:182,pv:512},{name:`22`,uv:164,pv:302},{name:`23`,uv:316,pv:425},{name:`24`,uv:131,pv:467},{name:`25`,uv:291,pv:-190},{name:`26`,uv:-47,pv:194},{name:`27`,uv:-415,pv:371},{name:`28`,uv:-182,pv:376},{name:`29`,uv:-93,pv:295},{name:`30`,uv:-99,pv:322},{name:`31`,uv:-52,pv:246},{name:`32`,uv:154,pv:33},{name:`33`,uv:205,pv:354},{name:`34`,uv:70,pv:258},{name:`35`,uv:-25,pv:359},{name:`36`,uv:-59,pv:192},{name:`37`,uv:-63,pv:464},{name:`38`,uv:-91,pv:-2},{name:`39`,uv:-66,pv:154},{name:`40`,uv:-50,pv:186}],R={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{dataKey:`name`,tickMargin:30}),M.createElement(S,null),M.createElement(o,{verticalAlign:`top`,wrapperStyle:{lineHeight:`40px`}}),M.createElement(c,null),M.createElement(te,{y:0,stroke:`#000`}),M.createElement(m,{dataKey:`name`,height:30,dy:30,stroke:`#8884d8`}),M.createElement(v,{dataKey:`pv`,fill:`#8884d8`}),M.createElement(v,{dataKey:`uv`,fill:`#82ca9d`}))),args:{...O(A),width:500,height:300,data:L,margin:{top:5,right:30,left:20,bottom:35}}},z={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{dataKey:`name`}),M.createElement(S,null),M.createElement(o,{verticalAlign:`top`,wrapperStyle:{lineHeight:`40px`}}),M.createElement(c,{defaultIndex:1}),M.createElement(v,{dataKey:`pv`,stackId:`a`,fill:`#8884d8`,activeBar:{fill:`gold`}}),M.createElement(v,{dataKey:`uv`,stackId:`a`,fill:`#82ca9d`,activeBar:{fill:`silver`}}),M.createElement(m,{dataKey:`name`,height:30,stroke:`#8884d8`}))),args:{...O(A),width:500,height:300,data:D,margin:{top:5,right:30,left:20,bottom:5}}},B={render:e=>{let t=D.map(({name:e,uv:t,pv:n})=>({name:e,uv:t,pv:n,label:t>n?`UV greater`:`PV greater`}));return M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,{...e,data:t},M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{dataKey:`name`}),M.createElement(S,null),M.createElement(o,null),M.createElement(c,null),M.createElement(v,{dataKey:`pv`,fill:`#8884d8`,label:{dataKey:`label`,position:`top`,fill:`#111`}}),M.createElement(v,{dataKey:`uv`,fill:`#82ca9d`})))},args:{...O(A),width:500,height:300,data:D,margin:{top:5,right:30,left:20,bottom:5}}},V={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(b,{dataKey:`name`,scale:`point`,padding:{left:10,right:10}}),M.createElement(S,null),M.createElement(o,null),M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(v,{dataKey:`pv`,fill:`#8884d8`,background:{fill:`#eee`}}),M.createElement(c,null))),args:{...O(A),width:500,height:300,data:D,margin:{top:5,right:30,left:20,bottom:5},barSize:20}},H=[{name:`Page D`,uv:1397,pv:0},{name:`Page E`,uv:0,pv:1},{name:`Page F`,uv:1520,pv:1108},{name:`Page G`,uv:2,pv:680}],U={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(b,{dataKey:`name`}),M.createElement(S,null),M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(c,null),M.createElement(v,{dataKey:`pv`,fill:`purple`,minPointSize:e=>e===0?0:2,stackId:`a`}),M.createElement(v,{dataKey:`uv`,fill:`green`,minPointSize:e=>e===0?0:2,stackId:`a`}),M.createElement(v,{dataKey:`uv`,fill:`blue`,minPointSize:e=>e===0?0:2}))),args:{...O(A),width:500,height:300,data:H,margin:{top:5,right:30,left:20,bottom:5}}},W={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(b,{dataKey:e=>e[0],type:`number`,domain:[0,10]}),M.createElement(S,null),M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(v,{dataKey:e=>e[1]}),M.createElement(c,null))),args:{...O(A),width:500,height:300,data:[[4.5,10]],margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},G={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(b,{dataKey:`day`}),M.createElement(S,null),M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(c,null),M.createElement(v,{dataKey:`temperature`,fill:`violet`,stroke:`indigo`}))),args:{...O(A),width:500,height:300,data:ne,margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},K=e=>M.createElement(u,{...e,fill:`red`,fillOpacity:.6,stroke:`#111`}),q={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,e,M.createElement(b,{dataKey:`name`}),M.createElement(S,null),M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(v,{dataKey:`uv`,fill:`violet`,stroke:`indigo`}),M.createElement(c,{cursor:M.createElement(K,null)}))),args:{...O(A),width:500,height:300,data:D,margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},J={render:e=>{let t=[{x:{value:1},name:`x1`},{x:{value:2},name:`x2`},{x:{value:3},name:`x3`}],n=[{y:{value:3},name:`y1`},{y:{value:2},name:`y2`},{y:{value:1},name:`y3`}],r=e=>(j(e.x),e.x.value),i=e=>(j(e.y),e.y.value),[a,s]=(0,M.useState)(!1),[l,u]=(0,M.useState)(!0);return M.createElement(M.Fragment,null,M.createElement(`button`,{type:`button`,onClick:()=>{s(!1),u(!0)}},`Use data1`),M.createElement(`button`,{type:`button`,onClick:()=>{s(!0),u(!0)}},`Use data2`),M.createElement(`button`,{type:`button`,onClick:()=>{u(!1)}},`Hide`),M.createElement(E,{...e,data:a?n:t},M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{dataKey:`name`,padding:{left:30,right:30}}),M.createElement(S,{dataKey:a?i:r}),M.createElement(c,null),M.createElement(o,null),M.createElement(v,{name:`Animated Bar`,hide:!l,type:`monotone`,dataKey:a?i:r,stroke:`#8884d8`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:1e3})))},args:{...O(A),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},Y={render:e=>{let[t,n]=(0,M.useState)(!1),[r,i]=(0,M.useState)(!0);return M.createElement(M.Fragment,null,M.createElement(`button`,{type:`button`,onClick:()=>{n(!1),i(!0)}},`Use data1`),M.createElement(`button`,{type:`button`,onClick:()=>{n(!0),i(!0)}},`Use data2`),M.createElement(`button`,{type:`button`,onClick:()=>{i(!1)}},`Hide`),M.createElement(E,{...e,data:D},M.createElement(g,{strokeDasharray:`3 3`}),M.createElement(b,{dataKey:`name`,padding:{left:30,right:30}}),M.createElement(S,{dataKey:`uv`}),M.createElement(c,null),M.createElement(o,null),M.createElement(v,{name:`Animated Bar 1`,hide:!r,dataKey:t?`uv`:`pv`,stackId:1,stroke:`green`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:3e3}),M.createElement(v,{name:`Animated Bar 2`,hide:!r,dataKey:t?`pv`:`amt`,stackId:1,stroke:`yellow`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:1e3})))},args:{...O(A),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},X={render:e=>{let[t,n]=(0,M.useState)([{number:10}]),r=()=>{n([{number:10}])},i=()=>{n([{number:50}])},a=()=>{n([{number:90}]),setTimeout(()=>{n([{number:30}])},150)};return M.createElement(`div`,{style:{display:`flex`,gap:`4rem`,alignItems:`center`}},M.createElement(E,{...e,data:t},M.createElement(S,{hide:!0,domain:[0,100]}),M.createElement(v,{dataKey:`number`,fill:`chocolate`,background:{fill:`bisque`}})),M.createElement(`button`,{type:`button`,onClick:i},`Change data synchronously`),M.createElement(`button`,{type:`button`,onClick:a},`Change data with setTimeout`),M.createElement(`button`,{type:`button`,onClick:r},`Reset`))},args:{...O(A),width:100,height:100}},Z={render:e=>M.createElement(r,{width:`100%`,height:`100%`},M.createElement(E,{width:500,height:250,...e,layout:`vertical`},M.createElement(v,{dataKey:`value`,fill:`#aebbae`,isAnimationActive:!1},M.createElement(f,{dataKey:`value`,position:`insideLeft`}),M.createElement(f,{dataKey:`label`,position:`right`})),M.createElement(b,{dataKey:`value`,type:`number`}),M.createElement(S,{dataKey:`label`,hide:!0,type:`category`}))),args:{...O(A),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:[{label:`World Trade Organization`,value:74},{label:`African Development Bank`,value:8},{label:`International Bank for Reconstruction and Development`,value:5}]}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`StackedAndDynamic`,`StackedWithErrorBar`,`XAxisTickMarginWithBrushDy`,`StackedWithBrush`,`HasLabelBasedOnSeparateDataKey`,`NoPadding`,`WithMinPointSize`,`OneDataPointPercentSize`,`RangedBarChart`,`CustomCursorBarChart`,`ChangingDataKey`,`ChangingDataKeyAndStacked`,`ChangingData`,`VerticalWithLabelLists`]})))()}$();export{X as ChangingData,J as ChangingDataKey,Y as ChangingDataKeyAndStacked,q as CustomCursorBarChart,B as HasLabelBasedOnSeparateDataKey,V as NoPadding,W as OneDataPointPercentSize,G as RangedBarChart,P as StackedAndDynamic,z as StackedWithBrush,I as StackedWithErrorBar,Z as VerticalWithLabelLists,U as WithMinPointSize,R as XAxisTickMarginWithBrushDy,Q as __namedExportsOrder,N as default};