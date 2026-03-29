import{r as s,e}from"./iframe-DyjRblV4.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-CEYo_BwH.js";import{R as C}from"./arrayEqualityCheck-BCBk4eJo.js";import{L as n}from"./Line-mAT0SQrf.js";import{R as k}from"./RechartsHookInspector-CLSiVssf.js";import{X as p}from"./XAxis-3tj5XX5g.js";import{T as c}from"./Tooltip-B3pmXPWJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFEsmCfM.js";import"./index-OiAZIktC.js";import"./immer-DeoYJGCn.js";import"./hooks-CiwwtQbj.js";import"./axisSelectors-C6wd-jHd.js";import"./d3-scale-BncasbBD.js";import"./zIndexSlice-D853Na5_.js";import"./renderedTicksSlice-bDrbmMTk.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DR7Wyq8A.js";import"./chartDataContext-CG_sj1-6.js";import"./CategoricalChart-DetmSIYy.js";import"./resolveDefaultProps-4AlTuZQw.js";import"./Layer-D5cQtuvM.js";import"./ReactUtils-Q3LPRUl3.js";import"./Label-DnTlQwVU.js";import"./Text-BbnvQ86I.js";import"./DOMUtils-Byght_Oi.js";import"./ZIndexLayer-B-XtZ0gD.js";import"./ActivePoints-GgK6dtPd.js";import"./Dot-DOEX6Lb3.js";import"./types-ffHtiOpO.js";import"./RegisterGraphicalItemId-DvhT43Lq.js";import"./ErrorBarContext-DYFWZfKJ.js";import"./GraphicalItemClipPath-DHsoSQ6I.js";import"./SetGraphicalItem-DjBG-u5C.js";import"./useAnimationId-DZzgYgKg.js";import"./getRadiusAndStrokeWidthFromDot-B3zNGCYt.js";import"./ActiveShapeUtils-DLWy5yPh.js";import"./isPlainObject-B8lTeUZ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-4UGNDp.js";import"./Trapezoid-BpRYxRsm.js";import"./Sector-CxnAykfe.js";import"./Symbols-BQK3uzvy.js";import"./symbol-5KBLnT74.js";import"./step-B9ndRdpI.js";import"./Curve-Cf07iBBR.js";import"./index-B9JdmiBC.js";import"./ChartSizeDimensions-BWUwefGk.js";import"./OffsetShower-DxfCy4YL.js";import"./PlotAreaShower-DD9Xt5FU.js";import"./CartesianAxis-D4rKauGt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BrnMwT_8.js";import"./uniqBy-CRPdqXmG.js";import"./iteratee-DQuCOy5T.js";import"./Cross-CEcmPXJ_.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
