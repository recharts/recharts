import{r as s,e}from"./iframe-BB47BP_R.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DrFdoDpx.js";import{R as C}from"./arrayEqualityCheck-DsmpO4hY.js";import{L as n}from"./Line-bLTmUZ5A.js";import{R as A}from"./RechartsHookInspector-Bw_zVSe3.js";import{X as p}from"./XAxis-DQxW9k0r.js";import{T as c}from"./Tooltip-Bf8VcYzC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dv8Lspfl.js";import"./index-hrFcE4SI.js";import"./immer-BPWc-cD_.js";import"./hooks-0PGFTC0L.js";import"./axisSelectors-DwtBuocC.js";import"./d3-scale-DgdfyRiI.js";import"./zIndexSlice-BL1P8vjr.js";import"./renderedTicksSlice-CRYHzUP0.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-iArLd4YM.js";import"./chartDataContext-CX2kZkbq.js";import"./CategoricalChart-nIJc5rAa.js";import"./resolveDefaultProps-ChHsTaSR.js";import"./Layer-CRK7-uYr.js";import"./ReactUtils-EZ_AUGtU.js";import"./Label-C6JmnJH6.js";import"./Text-BaUe6hyp.js";import"./DOMUtils-nrc65p4C.js";import"./ZIndexLayer-DNdZ_4fl.js";import"./ActivePoints-uz5dhsjB.js";import"./Dot-CtP3KVPS.js";import"./types-DuFBytmr.js";import"./RegisterGraphicalItemId-BStK0gR5.js";import"./ErrorBarContext-zf4eWKzk.js";import"./GraphicalItemClipPath-4XrHnf0Z.js";import"./SetGraphicalItem-BjF_TCCf.js";import"./useAnimationId-CZw8U2vZ.js";import"./getRadiusAndStrokeWidthFromDot-Dy6dZFhg.js";import"./ActiveShapeUtils-C06yHpcU.js";import"./isPlainObject-DJ4Ss-Vn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCPvPDZL.js";import"./Trapezoid-Bue5bot_.js";import"./Sector-pI1eovgo.js";import"./Symbols-BE9_Ndbl.js";import"./symbol-CvKjPx-j.js";import"./step-CIqLegi0.js";import"./Curve-DocFTLoT.js";import"./index-C_6qwcxC.js";import"./ChartSizeDimensions-BMFZIPSb.js";import"./OffsetShower-CPW2UGpW.js";import"./PlotAreaShower-CjbeU8IP.js";import"./CartesianAxis-BRoz3wmQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D2HSTUn5.js";import"./uniqBy-De_iXMly.js";import"./iteratee-DT1-JJ0T.js";import"./Cross-CuqZpVCY.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
