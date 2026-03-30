import{r as s,e}from"./iframe-DggZKTRy.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-nUo-bpQw.js";import{R as C}from"./arrayEqualityCheck-DnZLtMf6.js";import{L as n}from"./Line-02UcdPyY.js";import{R as A}from"./RechartsHookInspector-DY7Qg7TT.js";import{X as p}from"./XAxis-Dbhs6mKo.js";import{T as c}from"./Tooltip-lD9ERrLH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./immer-DqkR2i4r.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./resolveDefaultProps-DXkRukFF.js";import"./Layer-BuKRQch4.js";import"./ReactUtils-D9Ez5HAk.js";import"./Label-Dxk2zJHG.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./ZIndexLayer-D85cG2g2.js";import"./ActivePoints-DUFygyVE.js";import"./Dot-9vL981FZ.js";import"./types-CBaBaM7i.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./ErrorBarContext-YFVjhS9M.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./useAnimationId-C-Fijf5f.js";import"./getRadiusAndStrokeWidthFromDot-CUJVymlV.js";import"./ActiveShapeUtils-DDWUau3o.js";import"./isPlainObject-CasrDXFD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-mU1cjLaJ.js";import"./Trapezoid-CpShvAQC.js";import"./Sector-BKRhbQqJ.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";import"./step-IN4trDru.js";import"./Curve-DpzeZUSQ.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./OffsetShower-C9Cav-aa.js";import"./PlotAreaShower-t65TdSVB.js";import"./CartesianAxis-BXbHKKX1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CmFu-JrW.js";import"./uniqBy-Bv-E6IG_.js";import"./iteratee-BGmnQGqa.js";import"./Cross-BxnCNss0.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
