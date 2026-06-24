import{r as f,R as e}from"./iframe-DI4HGhHh.js";import{g as d}from"./utils-ePvtT4un.js";import{B as s}from"./BarChartArgs-vCvNDsJn.js";import{a as z}from"./assertNotNull-uK_qSLsC.js";import{p as y,r as we}from"./Page-Cj8EiXz7.js";import{B as i}from"./BarChart-w2HIqmHx.js";import{Y as m}from"./YAxis-C1Oi2VZJ.js";import{B as r}from"./Bar-BCtslQcx.js";import{C as u}from"./CartesianGrid-DFT4IhYc.js";import{X as c}from"./XAxis-Dj4RjVoP.js";import{T as g}from"./Tooltip-DGuMnXiM.js";import{L as v}from"./Legend-r05uFuGy.js";import{R as p}from"./zIndexSlice-DLsQIX9Y.js";import{B as Se}from"./Brush-_uzboENN.js";import{E as xe}from"./ErrorBar-BlkipV70.js";import{L as P}from"./AnimatedItems-B_Y2HCHw.js";import{R as Le}from"./ReferenceLine-BHS9LCDX.js";import{R as Te}from"./Rectangle-CdJqIjzl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./immer-CAVNBYxE.js";import"./get-Bfcmt9LS.js";import"./renderedTicksSlice-CGUH_--9.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./CartesianAxis-XgaOnUyy.js";import"./Layer-2I2RJkTJ.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./Label-BOdAN_xF.js";import"./ZIndexLayer-CAI-vp6k.js";import"./types-BM9AiZnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DfACEnFU.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getZIndexFromUnknown-3dpL5-Eh.js";import"./graphicalItemSelectors-COEWuTcX.js";import"./useAnimationId-B5j5oAoh.js";import"./useElementOffset--KSA65z0.js";import"./uniqBy-DHyoL8un.js";import"./iteratee-D86B-dJN.js";import"./Curve-D1vPRm9h.js";import"./step-D4TxsChD.js";import"./path-DyVhHtw_.js";import"./Cross-B3VN6dnN.js";import"./Sector-ohE8-JF6.js";import"./Symbols-Bn-ZN7NN.js";import"./symbol-Bxz5MfJW.js";import"./CSSTransitionAnimate-BuxU0kp1.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const _t={argTypes:s,component:i,docs:{autodocs:!1}},C={render:t=>{const[a,n]=f.useState(null),[l,o]=f.useState(!1),b=h=>{l||n(String(h.dataKey))},k=()=>{l||n(null)},M=h=>{a===String(h.dataKey)?l?(n(null),o(!1)):o(!0):(n(String(h.dataKey)),o(!0))};return e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(m,null),e.createElement(v,{onMouseEnter:b,onMouseOut:k,onClick:M}),e.createElement(r,{hide:a!=null&&a!=="pv",dataKey:"pv",stackId:"a",fill:"#8884d8",activeBar:{fill:"gold"}}),e.createElement(r,{hide:a!=null&&a!=="uv",dataKey:"uv",stackId:"a",fill:"#82ca9d",activeBar:{fill:"silver"}}),e.createElement(g,{shared:!1,defaultIndex:1})))},args:{...d(s),width:500,height:300,data:y,margin:{top:20,right:30,left:20,bottom:5}}},Re=y.map(t=>({...t,pvError:[100,200]})),K={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{type:"number"}),e.createElement(m,{dataKey:"name",type:"category"}),e.createElement(v,null),e.createElement(g,null),e.createElement(r,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),e.createElement(r,{dataKey:"uv",stackId:"a",fill:"#82ca9d"},e.createElement(xe,{dataKey:"pvError",width:5,stroke:"red",direction:"x"})))),args:{...d(s),width:500,height:300,data:Re,margin:{top:20,right:30,left:20,bottom:5},layout:"vertical"}},Ie=[{name:"1",uv:300,pv:456},{name:"2",uv:-145,pv:230},{name:"3",uv:-100,pv:345},{name:"4",uv:-8,pv:450},{name:"5",uv:100,pv:321},{name:"6",uv:9,pv:235},{name:"7",uv:53,pv:267},{name:"8",uv:252,pv:-378},{name:"9",uv:79,pv:-210},{name:"10",uv:294,pv:-23},{name:"12",uv:43,pv:45},{name:"13",uv:-74,pv:90},{name:"14",uv:-71,pv:130},{name:"15",uv:-117,pv:11},{name:"16",uv:-186,pv:107},{name:"17",uv:-16,pv:926},{name:"18",uv:-125,pv:653},{name:"19",uv:222,pv:366},{name:"20",uv:372,pv:486},{name:"21",uv:182,pv:512},{name:"22",uv:164,pv:302},{name:"23",uv:316,pv:425},{name:"24",uv:131,pv:467},{name:"25",uv:291,pv:-190},{name:"26",uv:-47,pv:194},{name:"27",uv:-415,pv:371},{name:"28",uv:-182,pv:376},{name:"29",uv:-93,pv:295},{name:"30",uv:-99,pv:322},{name:"31",uv:-52,pv:246},{name:"32",uv:154,pv:33},{name:"33",uv:205,pv:354},{name:"34",uv:70,pv:258},{name:"35",uv:-25,pv:359},{name:"36",uv:-59,pv:192},{name:"37",uv:-63,pv:464},{name:"38",uv:-91,pv:-2},{name:"39",uv:-66,pv:154},{name:"40",uv:-50,pv:186}],A={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name",tickMargin:30}),e.createElement(m,null),e.createElement(v,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(g,null),e.createElement(Le,{y:0,stroke:"#000"}),e.createElement(Se,{dataKey:"name",height:30,dy:30,stroke:"#8884d8"}),e.createElement(r,{dataKey:"pv",fill:"#8884d8"}),e.createElement(r,{dataKey:"uv",fill:"#82ca9d"}))),args:{...d(s),width:500,height:300,data:Ie,margin:{top:5,right:30,left:20,bottom:35}}},B={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(m,null),e.createElement(v,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(g,{defaultIndex:1}),e.createElement(r,{dataKey:"pv",stackId:"a",fill:"#8884d8",activeBar:{fill:"gold"}}),e.createElement(r,{dataKey:"uv",stackId:"a",fill:"#82ca9d",activeBar:{fill:"silver"}}),e.createElement(Se,{dataKey:"name",height:30,stroke:"#8884d8"}))),args:{...d(s),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5}}},D={render:t=>{const a=y.map(({name:n,uv:l,pv:o})=>({name:n,uv:l,pv:o,label:l>o?"UV greater":"PV greater"}));return e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t,data:a},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(m,null),e.createElement(v,null),e.createElement(g,null),e.createElement(r,{dataKey:"pv",fill:"#8884d8",label:{dataKey:"label",position:"top",fill:"#111"}}),e.createElement(r,{dataKey:"uv",fill:"#82ca9d"})))},args:{...d(s),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5}}},S={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(c,{dataKey:"name",scale:"point",padding:{left:10,right:10}}),e.createElement(m,null),e.createElement(v,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(r,{dataKey:"pv",fill:"#8884d8",background:{fill:"#eee"}}),e.createElement(g,null))),args:{...d(s),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5},barSize:20}},Oe=[{name:"Page D",uv:1397,pv:0},{name:"Page E",uv:0,pv:1},{name:"Page F",uv:1520,pv:1108},{name:"Page G",uv:2,pv:680}],w={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(c,{dataKey:"name"}),e.createElement(m,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(g,null),e.createElement(r,{dataKey:"pv",fill:"purple",minPointSize:a=>a===0?0:2,stackId:"a"}),e.createElement(r,{dataKey:"uv",fill:"green",minPointSize:a=>a===0?0:2,stackId:"a"}),e.createElement(r,{dataKey:"uv",fill:"blue",minPointSize:a=>a===0?0:2}))),args:{...d(s),width:500,height:300,data:Oe,margin:{top:5,right:30,left:20,bottom:5}}},x={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(c,{dataKey:a=>a[0],type:"number",domain:[0,10]}),e.createElement(m,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(r,{dataKey:a=>a[1]}),e.createElement(g,null))),args:{...d(s),width:500,height:300,data:[[4.5,10]],margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},L={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(c,{dataKey:"day"}),e.createElement(m,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(g,null),e.createElement(r,{dataKey:"temperature",fill:"violet",stroke:"indigo"}))),args:{...d(s),width:500,height:300,data:we,margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},Fe=t=>e.createElement(Te,{...t,fill:"red",fillOpacity:.6,stroke:"#111"}),T={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{...t},e.createElement(c,{dataKey:"name"}),e.createElement(m,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(r,{dataKey:"uv",fill:"violet",stroke:"indigo"}),e.createElement(g,{cursor:e.createElement(Fe,null)}))),args:{...d(s),width:500,height:300,data:y,margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},R={render:t=>{const a=[{x:{value:1},name:"x1"},{x:{value:2},name:"x2"},{x:{value:3},name:"x3"}],n=[{y:{value:3},name:"y1"},{y:{value:2},name:"y2"},{y:{value:1},name:"y3"}],l=E=>(z(E.x),E.x.value),o=E=>(z(E.y),E.y.value),[b,k]=f.useState(!1),[M,h]=f.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{k(!1),h(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{k(!0),h(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{h(!1)}},"Hide"),e.createElement(i,{...t,data:b?n:a},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(m,{dataKey:b?o:l}),e.createElement(g,null),e.createElement(v,null),e.createElement(r,{name:"Animated Bar",hide:!M,type:"monotone",dataKey:b?o:l,stroke:"#8884d8",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:1e3})))},args:{...d(s),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},I={render:t=>{const[a,n]=f.useState(!1),[l,o]=f.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{n(!1),o(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{n(!0),o(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{o(!1)}},"Hide"),e.createElement(i,{...t,data:y},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(m,{dataKey:"uv"}),e.createElement(g,null),e.createElement(v,null),e.createElement(r,{name:"Animated Bar 1",hide:!l,dataKey:a?"uv":"pv",stackId:1,stroke:"green",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:3e3}),e.createElement(r,{name:"Animated Bar 2",hide:!l,dataKey:a?"pv":"amt",stackId:1,stroke:"yellow",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:1e3})))},args:{...d(s),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},O={render:t=>{const[a,n]=f.useState([{number:10}]),l=()=>{n([{number:10}])},o=()=>{n([{number:50}])},b=()=>{n([{number:90}]),setTimeout(()=>{n([{number:30}])},150)};return e.createElement("div",{style:{display:"flex",gap:"4rem",alignItems:"center"}},e.createElement(i,{...t,data:a},e.createElement(m,{hide:!0,domain:[0,100]}),e.createElement(r,{dataKey:"number",fill:"chocolate",background:{fill:"bisque"}})),e.createElement("button",{type:"button",onClick:o},"Change data synchronously"),e.createElement("button",{type:"button",onClick:b},"Change data with setTimeout"),e.createElement("button",{type:"button",onClick:l},"Reset"))},args:{...d(s),width:100,height:100}},F={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(i,{width:500,height:250,...t,layout:"vertical"},e.createElement(r,{dataKey:"value",fill:"#aebbae",isAnimationActive:!1},e.createElement(P,{dataKey:"value",position:"insideLeft"}),e.createElement(P,{dataKey:"label",position:"right"})),e.createElement(c,{dataKey:"value",type:"number"}),e.createElement(m,{dataKey:"label",hide:!0,type:"category"}))),args:{...d(s),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:[{label:"World Trade Organization",value:74},{label:"African Development Bank",value:8},{label:"International Bank for Reconstruction and Development",value:5}]}};var W,U,V;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(U=C.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,j;K.parameters={...K.parameters,docs:{...(X=K.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(j=(Y=K.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var G,H,N;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(H=A.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,q,Z;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Z=(q=B.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var J,Q,$;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...($=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var ee,te,ae;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,le;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,me,ce;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ue,ge,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var he,ye,ve;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,fe,Ee;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ee=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};var ke,Ce,Ke;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ke=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ke.source}}};var Ae,Be,De;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(De=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};const qt=["StackedAndDynamic","StackedWithErrorBar","XAxisTickMarginWithBrushDy","StackedWithBrush","HasLabelBasedOnSeparateDataKey","NoPadding","WithMinPointSize","OneDataPointPercentSize","RangedBarChart","CustomCursorBarChart","ChangingDataKey","ChangingDataKeyAndStacked","ChangingData","VerticalWithLabelLists"];export{O as ChangingData,R as ChangingDataKey,I as ChangingDataKeyAndStacked,T as CustomCursorBarChart,D as HasLabelBasedOnSeparateDataKey,S as NoPadding,x as OneDataPointPercentSize,L as RangedBarChart,C as StackedAndDynamic,B as StackedWithBrush,K as StackedWithErrorBar,F as VerticalWithLabelLists,w as WithMinPointSize,A as XAxisTickMarginWithBrushDy,qt as __namedExportsOrder,_t as default};
