import{r as s,e}from"./iframe-CpushxGE.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Kdwl-iY5.js";import{R as C}from"./arrayEqualityCheck-VmHOknUh.js";import{L as n}from"./Line-bs4retuD.js";import{R as A}from"./RechartsHookInspector-h4ARZYih.js";import{X as p}from"./XAxis-3mUHVa_Q.js";import{T as c}from"./Tooltip-BgOQGlV-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvBLK8o3.js";import"./index-CwlbuTCS.js";import"./immer-Cv3ASI8f.js";import"./hooks-CALuMaxS.js";import"./axisSelectors-BUlu_9c5.js";import"./d3-scale-CLRxj8Kp.js";import"./zIndexSlice-BHiqQbmT.js";import"./renderedTicksSlice-x6hn4tz0.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B5J4yM2Q.js";import"./chartDataContext-BCzU7NnM.js";import"./CategoricalChart-CsJClX-e.js";import"./resolveDefaultProps-B56n8ket.js";import"./Layer-CGETD00I.js";import"./ReactUtils-DYxQvQT8.js";import"./Label-Cxa0XqXu.js";import"./Text-y4JjiomS.js";import"./DOMUtils-CJKLrICw.js";import"./ZIndexLayer-B2YDg5m4.js";import"./ActivePoints-CwpA1DJv.js";import"./Dot-BwRmgNs_.js";import"./types-CPRA2Aat.js";import"./RegisterGraphicalItemId-CT6Zr_oQ.js";import"./ErrorBarContext-CLrRGRfs.js";import"./GraphicalItemClipPath-BjHOIpZc.js";import"./SetGraphicalItem-BLLA-ZWB.js";import"./useAnimationId-CaEP2jnF.js";import"./getRadiusAndStrokeWidthFromDot-C3UHG55r.js";import"./ActiveShapeUtils-DlpM3N5z.js";import"./isPlainObject-DBfMrsvU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CagKfqqY.js";import"./Trapezoid-Cc12cYdx.js";import"./Sector-V5LdKq7s.js";import"./Symbols-Dka0CVy4.js";import"./symbol-B3B4BbBB.js";import"./step-C3JKHl5Q.js";import"./Curve-CXWLomdX.js";import"./index-B4LfVqDu.js";import"./ChartSizeDimensions-sbCQr6f5.js";import"./OffsetShower-BnOXM9oT.js";import"./PlotAreaShower-wypqhv64.js";import"./CartesianAxis-C6WYLYP9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Ccd-OoSx.js";import"./uniqBy-bRpf7OJ5.js";import"./iteratee-BUEQrhsa.js";import"./Cross-BThC6qqJ.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
