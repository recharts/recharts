import{r as s,e}from"./iframe-DzQrtuqC.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B8cdQSZS.js";import{R as C}from"./arrayEqualityCheck-CcYQ3TlE.js";import{L as n}from"./Line-Crc5gtVU.js";import{R as A}from"./RechartsHookInspector-CgIXv1De.js";import{X as p}from"./XAxis-1ARD5tua.js";import{T as c}from"./Tooltip-CzufazAx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-12D3Dnhb.js";import"./index-BWU1iYbm.js";import"./immer-BG5eRMY4.js";import"./hooks-D1HOa-TD.js";import"./axisSelectors-C3BshaU1.js";import"./d3-scale-CxHdo-Jz.js";import"./zIndexSlice-B16G16Z8.js";import"./renderedTicksSlice-rqGxM86U.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLLa3Dnc.js";import"./chartDataContext-BI_W2HnQ.js";import"./CategoricalChart-BSh5BNmY.js";import"./resolveDefaultProps-cBec3zUl.js";import"./Layer-OTa1RIrC.js";import"./ReactUtils-QGOY_45A.js";import"./Label-1lnwpSMQ.js";import"./Text-Boh5u1VK.js";import"./DOMUtils-Bn_VANWj.js";import"./ZIndexLayer-DjjOHeZ_.js";import"./ActivePoints-C5TcXqSX.js";import"./Dot-DPafLRI7.js";import"./types-BgvOUMxI.js";import"./RegisterGraphicalItemId-DtvVzUCB.js";import"./ErrorBarContext-BM7URJDC.js";import"./GraphicalItemClipPath-eGbWt4-y.js";import"./SetGraphicalItem-Bcmgk1GN.js";import"./useAnimationId-KT1IxfUT.js";import"./getRadiusAndStrokeWidthFromDot-DbVHh2EC.js";import"./ActiveShapeUtils-B77F2Y7E.js";import"./isPlainObject-C8qmWClL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6c5ofir.js";import"./Trapezoid-rdFilDCH.js";import"./Sector-lNcT2dw2.js";import"./Symbols-CrC1lk7K.js";import"./symbol-BXGJBtQL.js";import"./step-B5omXXrI.js";import"./Curve-DTTWJNZu.js";import"./index-DkvclcRw.js";import"./ChartSizeDimensions-BpnzS4UN.js";import"./OffsetShower-5gMBmZb0.js";import"./PlotAreaShower-BdP0xDxN.js";import"./CartesianAxis-kUZksY3_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DuP6OLBs.js";import"./uniqBy-Bat9ka49.js";import"./iteratee-Cilelzxb.js";import"./Cross-DQAy_m1j.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
