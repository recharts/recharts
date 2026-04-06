import{r as s,e}from"./iframe-B8SpPQoN.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Dg0s5s-H.js";import{R as C}from"./arrayEqualityCheck-2MTTUHAP.js";import{L as n}from"./Line-CRgpnWFr.js";import{R as A}from"./RechartsHookInspector-C-uKGE-C.js";import{X as p}from"./XAxis-Cin7z-gi.js";import{T as c}from"./Tooltip-DoxFd_h5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BPCT0kIp.js";import"./index-0MgJGhOu.js";import"./immer-DXJ0Fvyi.js";import"./hooks-D1vO-Uu8.js";import"./axisSelectors-7IbcFarQ.js";import"./d3-scale-CgZuTiLl.js";import"./zIndexSlice-D7POqXab.js";import"./renderedTicksSlice-DVrFbe8I.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B4UYsacS.js";import"./chartDataContext-5xAcHE6X.js";import"./CategoricalChart-BwxXShMz.js";import"./resolveDefaultProps-DzQ1rR94.js";import"./Layer-qfrTI4Q6.js";import"./ReactUtils-Dvtx4mkZ.js";import"./Label-D7a9N5YB.js";import"./Text-CvYPnnR9.js";import"./DOMUtils-7jDgYM5P.js";import"./ZIndexLayer-ORGjuoDq.js";import"./ActivePoints-E4Qj7MWm.js";import"./Dot-BgTtenPT.js";import"./types-ro_75Oqz.js";import"./RegisterGraphicalItemId-rH65yuEl.js";import"./ErrorBarContext-UPy6xw3i.js";import"./GraphicalItemClipPath-DEUbhDcY.js";import"./SetGraphicalItem-DEk7bfFl.js";import"./useAnimationId-BPBgs8nb.js";import"./getRadiusAndStrokeWidthFromDot-1d1rwIAq.js";import"./ActiveShapeUtils-CAMIqiYR.js";import"./isPlainObject-D7MEnopY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CmJKdPc2.js";import"./Trapezoid-B4rCe4Ap.js";import"./Sector-WPeAUgwy.js";import"./Symbols-Dk8MuMBV.js";import"./symbol-BupuQwEg.js";import"./step-oz_v09YS.js";import"./Curve-Cnx0u3AQ.js";import"./index-emaQayzG.js";import"./ChartSizeDimensions-B4hjUxAl.js";import"./OffsetShower-DFaIhHkZ.js";import"./PlotAreaShower-Yg7RB84W.js";import"./CartesianAxis-CtyZJFvD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D_wecJQa.js";import"./uniqBy-C7608wgp.js";import"./iteratee-C9ah-un7.js";import"./Cross-CAEHDx54.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
