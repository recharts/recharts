import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Legend-XcO656Mc.js";import{n as s,t as c}from"./Tooltip-YHivrOZa.js";import{n as l,t as u}from"./Rectangle-CBdjPRK0.js";import{_ as d,m as f}from"./AnimatedItems-DdWnOKJL.js";import{n as ee,t as p}from"./Brush-BT3Khapq.js";import{n as m,t as h}from"./ReferenceLine-YArZ_BHQ.js";import{n as te,t as g}from"./CartesianGrid-C0BAtXH9.js";import{i as _,n as v,r as y,t as b}from"./Bar-CQB3-sR3.js";import{n as x,t as S}from"./XAxis-BC2eC402.js";import{n as C,t as w}from"./YAxis-Ch1VfSce.js";import{n as ne,t as re}from"./ErrorBar-Clrrz94g.js";import{n as ie,t as T}from"./BarChart-CpIQPN2H.js";import{o as ae,r as E,t as oe}from"./Page-DUsfWi7y.js";import{n as se,t as D}from"./utils-vqcWnakT.js";import{n as O,t as k}from"./BarChartArgs-BTSdCahn.js";import{t as A}from"./assertNotNull-BvM1b6J5.js";var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{j=e(n()),oe(),v(),ie(),_(),ee(),te(),ne(),d(),a(),l(),m(),i(),s(),x(),C(),se(),O(),M={argTypes:k,component:T,docs:{autodocs:!1}},N={render:e=>{let[t,n]=(0,j.useState)(null),[i,a]=(0,j.useState)(!1);return j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`}),j.createElement(w,null),j.createElement(o,{onMouseEnter:e=>{i||n(String(e.dataKey))},onMouseOut:()=>{i||n(null)},onClick:e=>{t===String(e.dataKey)?i?(n(null),a(!1)):a(!0):(n(String(e.dataKey)),a(!0))}}),j.createElement(b,{hide:t!=null&&t!==`pv`,dataKey:`pv`,stackId:`a`,fill:`#8884d8`,activeBar:{fill:`gold`}}),j.createElement(b,{hide:t!=null&&t!==`uv`,dataKey:`uv`,stackId:`a`,fill:`#82ca9d`,activeBar:{fill:`silver`}}),j.createElement(c,{shared:!1,defaultIndex:1})))},args:{...D(k),width:500,height:300,data:E,margin:{top:20,right:30,left:20,bottom:5}}},P=E.map(e=>({...e,pvError:[100,200]})),F={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{type:`number`}),j.createElement(w,{dataKey:`name`,type:`category`}),j.createElement(o,null),j.createElement(c,null),j.createElement(b,{dataKey:`pv`,stackId:`a`,fill:`#8884d8`}),j.createElement(b,{dataKey:`uv`,stackId:`a`,fill:`#82ca9d`},j.createElement(re,{dataKey:`pvError`,width:5,stroke:`red`,direction:`x`})))),args:{...D(k),width:500,height:300,data:P,margin:{top:20,right:30,left:20,bottom:5},layout:`vertical`}},I=[{name:`1`,uv:300,pv:456},{name:`2`,uv:-145,pv:230},{name:`3`,uv:-100,pv:345},{name:`4`,uv:-8,pv:450},{name:`5`,uv:100,pv:321},{name:`6`,uv:9,pv:235},{name:`7`,uv:53,pv:267},{name:`8`,uv:252,pv:-378},{name:`9`,uv:79,pv:-210},{name:`10`,uv:294,pv:-23},{name:`12`,uv:43,pv:45},{name:`13`,uv:-74,pv:90},{name:`14`,uv:-71,pv:130},{name:`15`,uv:-117,pv:11},{name:`16`,uv:-186,pv:107},{name:`17`,uv:-16,pv:926},{name:`18`,uv:-125,pv:653},{name:`19`,uv:222,pv:366},{name:`20`,uv:372,pv:486},{name:`21`,uv:182,pv:512},{name:`22`,uv:164,pv:302},{name:`23`,uv:316,pv:425},{name:`24`,uv:131,pv:467},{name:`25`,uv:291,pv:-190},{name:`26`,uv:-47,pv:194},{name:`27`,uv:-415,pv:371},{name:`28`,uv:-182,pv:376},{name:`29`,uv:-93,pv:295},{name:`30`,uv:-99,pv:322},{name:`31`,uv:-52,pv:246},{name:`32`,uv:154,pv:33},{name:`33`,uv:205,pv:354},{name:`34`,uv:70,pv:258},{name:`35`,uv:-25,pv:359},{name:`36`,uv:-59,pv:192},{name:`37`,uv:-63,pv:464},{name:`38`,uv:-91,pv:-2},{name:`39`,uv:-66,pv:154},{name:`40`,uv:-50,pv:186}],L={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`}),j.createElement(w,null),j.createElement(o,null),j.createElement(c,null),j.createElement(y,{radius:8},j.createElement(b,{dataKey:`pv`,fill:`#8884d8`,stroke:`#3b3477`,strokeWidth:4}),j.createElement(b,{dataKey:`uv`,fill:`#82ca9d`,stroke:`#2f7a52`,strokeWidth:4})))),args:{...D(k),width:500,height:300,data:E,margin:{top:20,right:30,left:20,bottom:5}}},R={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`,tickMargin:30}),j.createElement(w,null),j.createElement(o,{verticalAlign:`top`,wrapperStyle:{lineHeight:`40px`}}),j.createElement(c,null),j.createElement(h,{y:0,stroke:`#000`}),j.createElement(p,{dataKey:`name`,height:30,dy:30,stroke:`#8884d8`}),j.createElement(b,{dataKey:`pv`,fill:`#8884d8`}),j.createElement(b,{dataKey:`uv`,fill:`#82ca9d`}))),args:{...D(k),width:500,height:300,data:I,margin:{top:5,right:30,left:20,bottom:35}}},z={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`}),j.createElement(w,null),j.createElement(o,{verticalAlign:`top`,wrapperStyle:{lineHeight:`40px`}}),j.createElement(c,{defaultIndex:1}),j.createElement(b,{dataKey:`pv`,stackId:`a`,fill:`#8884d8`,activeBar:{fill:`gold`}}),j.createElement(b,{dataKey:`uv`,stackId:`a`,fill:`#82ca9d`,activeBar:{fill:`silver`}}),j.createElement(p,{dataKey:`name`,height:30,stroke:`#8884d8`}))),args:{...D(k),width:500,height:300,data:E,margin:{top:5,right:30,left:20,bottom:5}}},B={render:e=>{let t=E.map(({name:e,uv:t,pv:n})=>({name:e,uv:t,pv:n,label:t>n?`UV greater`:`PV greater`}));return j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,{...e,data:t},j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`}),j.createElement(w,null),j.createElement(o,null),j.createElement(c,null),j.createElement(b,{dataKey:`pv`,fill:`#8884d8`,label:{dataKey:`label`,position:`top`,fill:`#111`}}),j.createElement(b,{dataKey:`uv`,fill:`#82ca9d`})))},args:{...D(k),width:500,height:300,data:E,margin:{top:5,right:30,left:20,bottom:5}}},V={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(S,{dataKey:`name`,scale:`point`,padding:{left:10,right:10}}),j.createElement(w,null),j.createElement(o,null),j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(b,{dataKey:`pv`,fill:`#8884d8`,background:{fill:`#eee`}}),j.createElement(c,null))),args:{...D(k),width:500,height:300,data:E,margin:{top:5,right:30,left:20,bottom:5},barSize:20}},H=[{name:`Page D`,uv:1397,pv:0},{name:`Page E`,uv:0,pv:1},{name:`Page F`,uv:1520,pv:1108},{name:`Page G`,uv:2,pv:680}],U={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(S,{dataKey:`name`}),j.createElement(w,null),j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(c,null),j.createElement(b,{dataKey:`pv`,fill:`purple`,minPointSize:e=>e===0?0:2,stackId:`a`}),j.createElement(b,{dataKey:`uv`,fill:`green`,minPointSize:e=>e===0?0:2,stackId:`a`}),j.createElement(b,{dataKey:`uv`,fill:`blue`,minPointSize:e=>e===0?0:2}))),args:{...D(k),width:500,height:300,data:H,margin:{top:5,right:30,left:20,bottom:5}}},W={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(S,{dataKey:e=>e[0],type:`number`,domain:[0,10]}),j.createElement(w,null),j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(b,{dataKey:e=>e[1]}),j.createElement(c,null))),args:{...D(k),width:500,height:300,data:[[4.5,10]],margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},G={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(S,{dataKey:`day`}),j.createElement(w,null),j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(c,null),j.createElement(b,{dataKey:`temperature`,fill:`violet`,stroke:`indigo`}))),args:{...D(k),width:500,height:300,data:ae,margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},K=e=>j.createElement(u,{...e,fill:`red`,fillOpacity:.6,stroke:`#111`}),q={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,e,j.createElement(S,{dataKey:`name`}),j.createElement(w,null),j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(b,{dataKey:`uv`,fill:`violet`,stroke:`indigo`}),j.createElement(c,{cursor:j.createElement(K,null)}))),args:{...D(k),width:500,height:300,data:E,margin:{top:5,right:30,left:20,bottom:5},barSize:`30%`}},J={render:e=>{let t=[{x:{value:1},name:`x1`},{x:{value:2},name:`x2`},{x:{value:3},name:`x3`}],n=[{y:{value:3},name:`y1`},{y:{value:2},name:`y2`},{y:{value:1},name:`y3`}],r=e=>(A(e.x),e.x.value),i=e=>(A(e.y),e.y.value),[a,s]=(0,j.useState)(!1),[l,u]=(0,j.useState)(!0);return j.createElement(j.Fragment,null,j.createElement(`button`,{type:`button`,onClick:()=>{s(!1),u(!0)}},`Use data1`),j.createElement(`button`,{type:`button`,onClick:()=>{s(!0),u(!0)}},`Use data2`),j.createElement(`button`,{type:`button`,onClick:()=>{u(!1)}},`Hide`),j.createElement(T,{...e,data:a?n:t},j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`,padding:{left:30,right:30}}),j.createElement(w,{dataKey:a?i:r}),j.createElement(c,null),j.createElement(o,null),j.createElement(b,{name:`Animated Bar`,hide:!l,type:`monotone`,dataKey:a?i:r,stroke:`#8884d8`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:1e3})))},args:{...D(k),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},Y={render:e=>{let[t,n]=(0,j.useState)(!1),[r,i]=(0,j.useState)(!0);return j.createElement(j.Fragment,null,j.createElement(`button`,{type:`button`,onClick:()=>{n(!1),i(!0)}},`Use data1`),j.createElement(`button`,{type:`button`,onClick:()=>{n(!0),i(!0)}},`Use data2`),j.createElement(`button`,{type:`button`,onClick:()=>{i(!1)}},`Hide`),j.createElement(T,{...e,data:E},j.createElement(g,{strokeDasharray:`3 3`}),j.createElement(S,{dataKey:`name`,padding:{left:30,right:30}}),j.createElement(w,{dataKey:`uv`}),j.createElement(c,null),j.createElement(o,null),j.createElement(b,{name:`Animated Bar 1`,hide:!r,dataKey:t?`uv`:`pv`,stackId:1,stroke:`green`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:3e3}),j.createElement(b,{name:`Animated Bar 2`,hide:!r,dataKey:t?`pv`:`amt`,stackId:1,stroke:`yellow`,strokeDasharray:`5 5`,label:{fill:`red`},animationDuration:1e3})))},args:{...D(k),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},X={render:e=>{let[t,n]=(0,j.useState)([{number:10}]),r=()=>{n([{number:10}])},i=()=>{n([{number:50}])},a=()=>{n([{number:90}]),setTimeout(()=>{n([{number:30}])},150)};return j.createElement(`div`,{style:{display:`flex`,gap:`4rem`,alignItems:`center`}},j.createElement(T,{...e,data:t},j.createElement(w,{hide:!0,domain:[0,100]}),j.createElement(b,{dataKey:`number`,fill:`chocolate`,background:{fill:`bisque`}})),j.createElement(`button`,{type:`button`,onClick:i},`Change data synchronously`),j.createElement(`button`,{type:`button`,onClick:a},`Change data with setTimeout`),j.createElement(`button`,{type:`button`,onClick:r},`Reset`))},args:{...D(k),width:100,height:100}},Z={render:e=>j.createElement(r,{width:`100%`,height:`100%`},j.createElement(T,{width:500,height:250,...e,layout:`vertical`},j.createElement(b,{dataKey:`value`,fill:`#aebbae`,isAnimationActive:!1},j.createElement(f,{dataKey:`value`,position:`insideLeft`}),j.createElement(f,{dataKey:`label`,position:`right`})),j.createElement(S,{dataKey:`value`,type:`number`}),j.createElement(w,{dataKey:`label`,hide:!0,type:`category`}))),args:{...D(k),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:[{label:`World Trade Organization`,value:74},{label:`African Development Bank`,value:8},{label:`International Bank for Reconstruction and Development`,value:5}]}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <BarStack radius={8}>
            <Bar dataKey="pv" fill="#8884d8" stroke="#3b3477" strokeWidth={4} />
            <Bar dataKey="uv" fill="#82ca9d" stroke="#2f7a52" strokeWidth={4} />
          </BarStack>
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`StackedAndDynamic`,`StackedWithErrorBar`,`BarStackWithStroke`,`XAxisTickMarginWithBrushDy`,`StackedWithBrush`,`HasLabelBasedOnSeparateDataKey`,`NoPadding`,`WithMinPointSize`,`OneDataPointPercentSize`,`RangedBarChart`,`CustomCursorBarChart`,`ChangingDataKey`,`ChangingDataKeyAndStacked`,`ChangingData`,`VerticalWithLabelLists`]})))()}$();export{L as BarStackWithStroke,X as ChangingData,J as ChangingDataKey,Y as ChangingDataKeyAndStacked,q as CustomCursorBarChart,B as HasLabelBasedOnSeparateDataKey,V as NoPadding,W as OneDataPointPercentSize,G as RangedBarChart,N as StackedAndDynamic,z as StackedWithBrush,F as StackedWithErrorBar,Z as VerticalWithLabelLists,U as WithMinPointSize,R as XAxisTickMarginWithBrushDy,Q as __namedExportsOrder,M as default};