import{r as s,e}from"./iframe-DCkCb3cL.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BdCmXomq.js";import{R as C}from"./arrayEqualityCheck-Cyv8hSdj.js";import{L as n}from"./Line-DajRYZAP.js";import{R as A}from"./RechartsHookInspector-GywlJnGS.js";import{X as p}from"./XAxis-DjeZloTX.js";import{T as c}from"./Tooltip-CB-Jt-mW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ysnAkpcY.js";import"./index-DmTf6G0P.js";import"./immer-CJIR5Dxo.js";import"./hooks-rTm4XK8H.js";import"./axisSelectors-DLVZqdCy.js";import"./d3-scale-cKex8xs_.js";import"./zIndexSlice-C2SLAmdu.js";import"./renderedTicksSlice-dBR_dEs7.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-U8I4mwYO.js";import"./chartDataContext-BB8jRTpM.js";import"./CategoricalChart-sLprv-i8.js";import"./resolveDefaultProps-Brvb-unE.js";import"./Layer-DdpUaJ6z.js";import"./ReactUtils-UnUZnhmf.js";import"./Label-DgXvgibU.js";import"./Text-C0rSCzeg.js";import"./DOMUtils-D_52ZroA.js";import"./ZIndexLayer-DmR4HC_4.js";import"./ActivePoints-Be0P0LgS.js";import"./Dot-H-WiFDrq.js";import"./types-BN3BphoZ.js";import"./RegisterGraphicalItemId-D6ZXTRMS.js";import"./ErrorBarContext-B-qZZjga.js";import"./GraphicalItemClipPath-CSx6dkEB.js";import"./SetGraphicalItem-DyLJ3K98.js";import"./useAnimationId-CqiSzw9P.js";import"./getRadiusAndStrokeWidthFromDot-DH5ceNx-.js";import"./ActiveShapeUtils-6FenCz6m.js";import"./isPlainObject-De9uXPg3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2C1fB0K.js";import"./Trapezoid-D7d51r_V.js";import"./Sector-BrEwMQo2.js";import"./Symbols-3b29A3qW.js";import"./symbol-CfRPBnBt.js";import"./step-CFTOTHh4.js";import"./Curve-0mQU3lN2.js";import"./index-tKLwA4MY.js";import"./ChartSizeDimensions-3SLqT2DF.js";import"./OffsetShower-DuCJOCxi.js";import"./PlotAreaShower-DYkpYr6V.js";import"./CartesianAxis-2U-Fs3nY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BQGFrKFv.js";import"./uniqBy-BVL3Qfi6.js";import"./iteratee-BloYz32V.js";import"./Cross-DK5aaWmu.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
