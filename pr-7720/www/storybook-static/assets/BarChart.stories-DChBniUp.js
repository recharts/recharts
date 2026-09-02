import{R as e,r as f}from"./iframe-BQrvPSLN.js";import{g as l}from"./utils-ePvtT4un.js";import{B as o}from"./BarChartArgs-vCvNDsJn.js";import{a as z}from"./assertNotNull-uK_qSLsC.js";import{p as h,r as Re}from"./Page-Cj8EiXz7.js";import{B as s}from"./BarChart-COVkfzlQ.js";import{R as p}from"./zIndexSlice-7Hw-ZWkF.js";import{C as u}from"./CartesianGrid-BoCTC1f5.js";import{X as c}from"./XAxis-COEcW9k3.js";import{Y as d}from"./YAxis-BdyzdtnU.js";import{L as y}from"./Legend-B9VGxu5U.js";import{T as g}from"./Tooltip-Bj971vpB.js";import{a as Oe,B as r}from"./Bar-D7G2Zpdi.js";import{B as Te}from"./Brush-DGX6n7xf.js";import{E as Ie}from"./ErrorBar-BY4v2nId.js";import{L as P}from"./AnimatedItems-DoNW6X9C.js";import{R as Fe}from"./ReferenceLine-U-5W8IO1.js";import{R as We}from"./Rectangle-HVKv7_Bo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-rztmSPpu.js";import"./throttle-0gn-kluv.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./CartesianAxis-wwQP6TZJ.js";import"./Layer-BL59xEeu.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./Label-fnZYxsAf.js";import"./ZIndexLayer-B-lyDO19.js";import"./types-DmUtaJkc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dopogqan.js";import"./symbol-CmH2wsGM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bi53hePS.js";import"./uniqBy-CbDZKJB_.js";import"./iteratee-zdI_LkTN.js";import"./useAnimationId-DGJmUGW3.js";import"./Curve-BvFQjNVt.js";import"./step-Dz5dQj2m.js";import"./Cross-BpKvfUtK.js";import"./Sector-BE6y_5ku.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./tooltipContext-C1brBf56.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./ErrorBarContext-M_C8hAbg.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getZIndexFromUnknown-DnK5vjN2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DgC6dd13.js";import"./CSSTransitionAnimate-3-n7H4CI.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const na={argTypes:o,component:s,docs:{autodocs:!1}},C={render:t=>{const[a,n]=f.useState(null),[m,i]=f.useState(!1),b=v=>{m||n(String(v.dataKey))},k=()=>{m||n(null)},M=v=>{a===String(v.dataKey)?m?(n(null),i(!1)):i(!0):(n(String(v.dataKey)),i(!0))};return e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,null),e.createElement(y,{onMouseEnter:b,onMouseOut:k,onClick:M}),e.createElement(r,{hide:a!=null&&a!=="pv",dataKey:"pv",stackId:"a",fill:"#8884d8",activeBar:{fill:"gold"}}),e.createElement(r,{hide:a!=null&&a!=="uv",dataKey:"uv",stackId:"a",fill:"#82ca9d",activeBar:{fill:"silver"}}),e.createElement(g,{shared:!1,defaultIndex:1})))},args:{...l(o),width:500,height:300,data:h,margin:{top:20,right:30,left:20,bottom:5}}},Me=h.map(t=>({...t,pvError:[100,200]})),K={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"name",type:"category"}),e.createElement(y,null),e.createElement(g,null),e.createElement(r,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),e.createElement(r,{dataKey:"uv",stackId:"a",fill:"#82ca9d"},e.createElement(Ie,{dataKey:"pvError",width:5,stroke:"red",direction:"x"})))),args:{...l(o),width:500,height:300,data:Me,margin:{top:20,right:30,left:20,bottom:5},layout:"vertical"}},ze=[{name:"1",uv:300,pv:456},{name:"2",uv:-145,pv:230},{name:"3",uv:-100,pv:345},{name:"4",uv:-8,pv:450},{name:"5",uv:100,pv:321},{name:"6",uv:9,pv:235},{name:"7",uv:53,pv:267},{name:"8",uv:252,pv:-378},{name:"9",uv:79,pv:-210},{name:"10",uv:294,pv:-23},{name:"12",uv:43,pv:45},{name:"13",uv:-74,pv:90},{name:"14",uv:-71,pv:130},{name:"15",uv:-117,pv:11},{name:"16",uv:-186,pv:107},{name:"17",uv:-16,pv:926},{name:"18",uv:-125,pv:653},{name:"19",uv:222,pv:366},{name:"20",uv:372,pv:486},{name:"21",uv:182,pv:512},{name:"22",uv:164,pv:302},{name:"23",uv:316,pv:425},{name:"24",uv:131,pv:467},{name:"25",uv:291,pv:-190},{name:"26",uv:-47,pv:194},{name:"27",uv:-415,pv:371},{name:"28",uv:-182,pv:376},{name:"29",uv:-93,pv:295},{name:"30",uv:-99,pv:322},{name:"31",uv:-52,pv:246},{name:"32",uv:154,pv:33},{name:"33",uv:205,pv:354},{name:"34",uv:70,pv:258},{name:"35",uv:-25,pv:359},{name:"36",uv:-59,pv:192},{name:"37",uv:-63,pv:464},{name:"38",uv:-91,pv:-2},{name:"39",uv:-66,pv:154},{name:"40",uv:-50,pv:186}],A={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,null),e.createElement(y,null),e.createElement(g,null),e.createElement(Oe,{radius:8},e.createElement(r,{dataKey:"pv",fill:"#8884d8",stroke:"#3b3477",strokeWidth:4}),e.createElement(r,{dataKey:"uv",fill:"#82ca9d",stroke:"#2f7a52",strokeWidth:4})))),args:{...l(o),width:500,height:300,data:h,margin:{top:20,right:30,left:20,bottom:5}}},B={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name",tickMargin:30}),e.createElement(d,null),e.createElement(y,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(g,null),e.createElement(Fe,{y:0,stroke:"#000"}),e.createElement(Te,{dataKey:"name",height:30,dy:30,stroke:"#8884d8"}),e.createElement(r,{dataKey:"pv",fill:"#8884d8"}),e.createElement(r,{dataKey:"uv",fill:"#82ca9d"}))),args:{...l(o),width:500,height:300,data:ze,margin:{top:5,right:30,left:20,bottom:35}}},D={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,null),e.createElement(y,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(g,{defaultIndex:1}),e.createElement(r,{dataKey:"pv",stackId:"a",fill:"#8884d8",activeBar:{fill:"gold"}}),e.createElement(r,{dataKey:"uv",stackId:"a",fill:"#82ca9d",activeBar:{fill:"silver"}}),e.createElement(Te,{dataKey:"name",height:30,stroke:"#8884d8"}))),args:{...l(o),width:500,height:300,data:h,margin:{top:5,right:30,left:20,bottom:5}}},S={render:t=>{const a=h.map(({name:n,uv:m,pv:i})=>({name:n,uv:m,pv:i,label:m>i?"UV greater":"PV greater"}));return e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t,data:a},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(d,null),e.createElement(y,null),e.createElement(g,null),e.createElement(r,{dataKey:"pv",fill:"#8884d8",label:{dataKey:"label",position:"top",fill:"#111"}}),e.createElement(r,{dataKey:"uv",fill:"#82ca9d"})))},args:{...l(o),width:500,height:300,data:h,margin:{top:5,right:30,left:20,bottom:5}}},w={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(c,{dataKey:"name",scale:"point",padding:{left:10,right:10}}),e.createElement(d,null),e.createElement(y,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(r,{dataKey:"pv",fill:"#8884d8",background:{fill:"#eee"}}),e.createElement(g,null))),args:{...l(o),width:500,height:300,data:h,margin:{top:5,right:30,left:20,bottom:5},barSize:20}},Pe=[{name:"Page D",uv:1397,pv:0},{name:"Page E",uv:0,pv:1},{name:"Page F",uv:1520,pv:1108},{name:"Page G",uv:2,pv:680}],x={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(c,{dataKey:"name"}),e.createElement(d,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(g,null),e.createElement(r,{dataKey:"pv",fill:"purple",minPointSize:a=>a===0?0:2,stackId:"a"}),e.createElement(r,{dataKey:"uv",fill:"green",minPointSize:a=>a===0?0:2,stackId:"a"}),e.createElement(r,{dataKey:"uv",fill:"blue",minPointSize:a=>a===0?0:2}))),args:{...l(o),width:500,height:300,data:Pe,margin:{top:5,right:30,left:20,bottom:5}}},L={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(c,{dataKey:a=>a[0],type:"number",domain:[0,10]}),e.createElement(d,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(r,{dataKey:a=>a[1]}),e.createElement(g,null))),args:{...l(o),width:500,height:300,data:[[4.5,10]],margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},T={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(c,{dataKey:"day"}),e.createElement(d,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(g,null),e.createElement(r,{dataKey:"temperature",fill:"violet",stroke:"indigo"}))),args:{...l(o),width:500,height:300,data:Re,margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},Ue=t=>e.createElement(We,{...t,fill:"red",fillOpacity:.6,stroke:"#111"}),R={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{...t},e.createElement(c,{dataKey:"name"}),e.createElement(d,null),e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(r,{dataKey:"uv",fill:"violet",stroke:"indigo"}),e.createElement(g,{cursor:e.createElement(Ue,null)}))),args:{...l(o),width:500,height:300,data:h,margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},O={render:t=>{const a=[{x:{value:1},name:"x1"},{x:{value:2},name:"x2"},{x:{value:3},name:"x3"}],n=[{y:{value:3},name:"y1"},{y:{value:2},name:"y2"},{y:{value:1},name:"y3"}],m=E=>(z(E.x),E.x.value),i=E=>(z(E.y),E.y.value),[b,k]=f.useState(!1),[M,v]=f.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{k(!1),v(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{k(!0),v(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{v(!1)}},"Hide"),e.createElement(s,{...t,data:b?n:a},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(d,{dataKey:b?i:m}),e.createElement(g,null),e.createElement(y,null),e.createElement(r,{name:"Animated Bar",hide:!M,type:"monotone",dataKey:b?i:m,stroke:"#8884d8",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:1e3})))},args:{...l(o),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},I={render:t=>{const[a,n]=f.useState(!1),[m,i]=f.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{n(!1),i(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{n(!0),i(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{i(!1)}},"Hide"),e.createElement(s,{...t,data:h},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,null),e.createElement(y,null),e.createElement(r,{name:"Animated Bar 1",hide:!m,dataKey:a?"uv":"pv",stackId:1,stroke:"green",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:3e3}),e.createElement(r,{name:"Animated Bar 2",hide:!m,dataKey:a?"pv":"amt",stackId:1,stroke:"yellow",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:1e3})))},args:{...l(o),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},F={render:t=>{const[a,n]=f.useState([{number:10}]),m=()=>{n([{number:10}])},i=()=>{n([{number:50}])},b=()=>{n([{number:90}]),setTimeout(()=>{n([{number:30}])},150)};return e.createElement("div",{style:{display:"flex",gap:"4rem",alignItems:"center"}},e.createElement(s,{...t,data:a},e.createElement(d,{hide:!0,domain:[0,100]}),e.createElement(r,{dataKey:"number",fill:"chocolate",background:{fill:"bisque"}})),e.createElement("button",{type:"button",onClick:i},"Change data synchronously"),e.createElement("button",{type:"button",onClick:b},"Change data with setTimeout"),e.createElement("button",{type:"button",onClick:m},"Reset"))},args:{...l(o),width:100,height:100}},W={render:t=>e.createElement(p,{width:"100%",height:"100%"},e.createElement(s,{width:500,height:250,...t,layout:"vertical"},e.createElement(r,{dataKey:"value",fill:"#aebbae",isAnimationActive:!1},e.createElement(P,{dataKey:"value",position:"insideLeft"}),e.createElement(P,{dataKey:"label",position:"right"})),e.createElement(c,{dataKey:"value",type:"number"}),e.createElement(d,{dataKey:"label",hide:!0,type:"category"}))),args:{...l(o),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:[{label:"World Trade Organization",value:74},{label:"African Development Bank",value:8},{label:"International Bank for Reconstruction and Development",value:5}]}};var U,V,X;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(V=C.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,j,G;K.parameters={...K.parameters,docs:{...(Y=K.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(j=K.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,N,_;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(N=A.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var q,Z,J;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,$,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,se;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,ce,ue;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,pe,he;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,ve,be;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Ee,ke;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ce,Ke,Ae;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ae=(Ke=I.parameters)==null?void 0:Ke.docs)==null?void 0:Ae.source}}};var Be,De,Se;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Se=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var we,xe,Le;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Le=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Le.source}}};const oa=["StackedAndDynamic","StackedWithErrorBar","BarStackWithStroke","XAxisTickMarginWithBrushDy","StackedWithBrush","HasLabelBasedOnSeparateDataKey","NoPadding","WithMinPointSize","OneDataPointPercentSize","RangedBarChart","CustomCursorBarChart","ChangingDataKey","ChangingDataKeyAndStacked","ChangingData","VerticalWithLabelLists"];export{A as BarStackWithStroke,F as ChangingData,O as ChangingDataKey,I as ChangingDataKeyAndStacked,R as CustomCursorBarChart,S as HasLabelBasedOnSeparateDataKey,w as NoPadding,L as OneDataPointPercentSize,T as RangedBarChart,C as StackedAndDynamic,D as StackedWithBrush,K as StackedWithErrorBar,W as VerticalWithLabelLists,x as WithMinPointSize,B as XAxisTickMarginWithBrushDy,oa as __namedExportsOrder,na as default};
