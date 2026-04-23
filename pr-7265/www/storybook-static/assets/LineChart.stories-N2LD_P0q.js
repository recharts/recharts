import{r as s,e}from"./iframe-CUdKgdkG.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-COjlpfXf.js";import{R as C}from"./arrayEqualityCheck-BSmSVrdu.js";import{L as n}from"./Line-CSFYD9Tk.js";import{R as A}from"./RechartsHookInspector-Cq0IOlAH.js";import{X as p}from"./XAxis-mAd7Kpdc.js";import{T as c}from"./Tooltip-B4ebXyhM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./immer-Cj2VbGf6.js";import"./hooks-CQ9pmujM.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./zIndexSlice-R-FfD4BY.js";import"./renderedTicksSlice-CKVu5O47.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./Layer-DmKN-F8X.js";import"./ReactUtils-C73Q90p0.js";import"./Label-DglRGLXy.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./ZIndexLayer-CDgenCRH.js";import"./ActivePoints-a6uvGFsO.js";import"./Dot-BZIhq4qY.js";import"./types-Du7cRNSr.js";import"./RegisterGraphicalItemId-MhTEXlyY.js";import"./ErrorBarContext-PwkZe7K2.js";import"./GraphicalItemClipPath-doETQzOU.js";import"./SetGraphicalItem-D9_vCp7v.js";import"./useAnimationId-AqfbREG9.js";import"./getRadiusAndStrokeWidthFromDot-D4zfOBB4.js";import"./ActiveShapeUtils-BTsbslWJ.js";import"./isPlainObject-rQI65vsh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfZJm5g2.js";import"./Trapezoid-CeXt5ImY.js";import"./Sector-Criwg8Ev.js";import"./Symbols-DVxfPYYz.js";import"./symbol-CtsFoFGk.js";import"./step-DvWhuTZk.js";import"./Curve-CaswtT1y.js";import"./index-D6AtQ2XN.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./OffsetShower-Ba03E4d5.js";import"./PlotAreaShower-CBo6UyYv.js";import"./CartesianAxis-IOZxWSIl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BW58k6Dr.js";import"./uniqBy-CxeABOap.js";import"./iteratee-9POT8SS0.js";import"./Cross-qqiIKbTo.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
