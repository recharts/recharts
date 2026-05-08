import{r as s,e}from"./iframe-CrHrvGFA.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-C-15oDjF.js";import{R as C}from"./arrayEqualityCheck-D7V7-zfy.js";import{L as n}from"./Line-DGT2_2aD.js";import{R as A}from"./RechartsHookInspector-DW_mvAVM.js";import{X as p}from"./XAxis-D0X6vRGT.js";import{T as c}from"./Tooltip-wythYipx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BB1RiCRS.js";import"./index-BkAWwSZa.js";import"./immer-BCwItB4q.js";import"./hooks-C-ZW7Hvz.js";import"./axisSelectors-apUKQ5p6.js";import"./d3-scale-aLx8KFU7.js";import"./zIndexSlice-BPhJKxcZ.js";import"./renderedTicksSlice-BKLazWGY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BtNZYkZt.js";import"./chartDataContext-CBLNwLu7.js";import"./CategoricalChart-Ds9PKqQr.js";import"./resolveDefaultProps-CHUiU1F7.js";import"./Layer-VGdDjG6T.js";import"./ReactUtils-B0mFaADN.js";import"./Label-DZt9DpVA.js";import"./Text-DPhEVUwO.js";import"./DOMUtils-C8jm054W.js";import"./ZIndexLayer-CaiMnAVk.js";import"./ActivePoints-CvrGo7z5.js";import"./Dot-2YvQxSoM.js";import"./types-C-thJRzw.js";import"./RegisterGraphicalItemId-BTCsPxG4.js";import"./ErrorBarContext-CFytyOKJ.js";import"./GraphicalItemClipPath-BlrVoPx6.js";import"./SetGraphicalItem-trN_YbRB.js";import"./useAnimationId-gwH5_ERq.js";import"./getRadiusAndStrokeWidthFromDot-5JZDbfVs.js";import"./ActiveShapeUtils-D6tcxPOv.js";import"./isPlainObject--NGRnfHf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTNp-Bxb.js";import"./Trapezoid-KpxrlCw6.js";import"./Sector-DuGIl3xX.js";import"./Symbols-DPG6nOF1.js";import"./symbol-DBDK4FNb.js";import"./step-B-10frX1.js";import"./Curve-DoNjcFRC.js";import"./index-CpHQapov.js";import"./ChartSizeDimensions-DZ9MktBW.js";import"./OffsetShower-C2k5oquR.js";import"./PlotAreaShower-DFoVEO8k.js";import"./CartesianAxis-C6mIt3Wc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BFgL1_u4.js";import"./uniqBy-CV0OTDDr.js";import"./iteratee-BfhY7p5d.js";import"./Cross-BAQorZkW.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
