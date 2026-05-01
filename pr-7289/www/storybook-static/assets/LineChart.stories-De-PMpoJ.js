import{r as s,e}from"./iframe-BLDR2_i0.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CoUxRJbJ.js";import{R as C}from"./arrayEqualityCheck-CvNQEz9w.js";import{L as n}from"./Line-D-dTaVGT.js";import{R as A}from"./RechartsHookInspector-B1GuqCEe.js";import{X as p}from"./XAxis-DtQQBd2y.js";import{T as c}from"./Tooltip-C2VwN8xA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ct1BBYFn.js";import"./index-CFbRxLRx.js";import"./immer-BKFNBdyg.js";import"./hooks-CtJRBtxo.js";import"./axisSelectors-BB17965m.js";import"./d3-scale-BhFvmkin.js";import"./zIndexSlice-yBBB4uSb.js";import"./renderedTicksSlice-BSzl6y0x.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LlNtHt9D.js";import"./chartDataContext-Bphfe7Jq.js";import"./CategoricalChart-DdO_PfYZ.js";import"./resolveDefaultProps-BRIlCLrP.js";import"./Layer-Bg4znOhy.js";import"./ReactUtils-BZwBYxFJ.js";import"./Label-BeUhNh6s.js";import"./Text-Z-_UHMZw.js";import"./DOMUtils-CzTi80AG.js";import"./ZIndexLayer-7ToExptV.js";import"./ActivePoints-rdhL3F9r.js";import"./Dot-DzHpuORN.js";import"./types-DW7k3YBY.js";import"./RegisterGraphicalItemId-BAO_-1Fe.js";import"./ErrorBarContext-DJptcZIz.js";import"./GraphicalItemClipPath-iX6Zf2o8.js";import"./SetGraphicalItem-DTwOd3dX.js";import"./useAnimationId-CuonZP-E.js";import"./getRadiusAndStrokeWidthFromDot-BdzGGcnE.js";import"./ActiveShapeUtils-Bx3IdaBV.js";import"./isPlainObject-Bgs7IkK4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFLqOtC4.js";import"./Trapezoid-DytqB0t5.js";import"./Sector-DJtO2zeV.js";import"./Symbols-BPbqFGSD.js";import"./symbol-BlMgqIva.js";import"./step-CJMvDBr8.js";import"./Curve-Dso7sD8l.js";import"./index-CTEoDz69.js";import"./ChartSizeDimensions-CoOcLq9u.js";import"./OffsetShower-C2FYUo8c.js";import"./PlotAreaShower-toIN3X0K.js";import"./CartesianAxis-BPi0jvIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BZPwPb6Z.js";import"./uniqBy-B3VFxQDg.js";import"./iteratee-BJQ0nu2N.js";import"./Cross-D3Vs3zNI.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
