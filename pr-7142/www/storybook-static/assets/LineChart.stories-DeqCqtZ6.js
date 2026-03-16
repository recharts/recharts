import{r as s,e}from"./iframe-BuJLGa6N.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-C0YBifoq.js";import{R as C}from"./arrayEqualityCheck-CfOAsDPD.js";import{L as n}from"./Line-DDBsSeKz.js";import{R as k}from"./RechartsHookInspector-BakXEIZz.js";import{X as p}from"./XAxis-DPYriBmx.js";import{T as c}from"./Tooltip-BP0M5Jmr.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-zGeEQO-1.js";import"./index-CNZpMZb7.js";import"./immer-Cs2StgEe.js";import"./hooks-Bfg6Hj5B.js";import"./axisSelectors-vZNfkK00.js";import"./d3-scale-C2CClwD1.js";import"./zIndexSlice-CtkE_I8o.js";import"./renderedTicksSlice-DMmH3DTh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DcpXVgwl.js";import"./chartDataContext-DXuqrhw-.js";import"./CategoricalChart-DkSrZf16.js";import"./resolveDefaultProps-PPT4dvVD.js";import"./Layer-CLRnIkGN.js";import"./ReactUtils-Di8J4KTy.js";import"./Label-DCa5EEbs.js";import"./Text-OPrfWidj.js";import"./DOMUtils-DdVykUsy.js";import"./ZIndexLayer-BMsw-0Pa.js";import"./ActivePoints-Czt_wSo-.js";import"./Dot-B4FiKnl2.js";import"./types-DMmD0s4W.js";import"./RegisterGraphicalItemId-CZEhY4ID.js";import"./ErrorBarContext-DcDtiioO.js";import"./GraphicalItemClipPath-D_CU0iam.js";import"./SetGraphicalItem-DGBCZizG.js";import"./useAnimationId-CMTxjP3y.js";import"./getRadiusAndStrokeWidthFromDot-DYi0rXYC.js";import"./ActiveShapeUtils-CXfOhm2i.js";import"./isPlainObject-Crq8bwtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cp8-G3K2.js";import"./Trapezoid-3-ecroEI.js";import"./Sector-CuxgId53.js";import"./Symbols-BJaoORbT.js";import"./symbol-SMqn5J9_.js";import"./step-8Y20vsos.js";import"./Curve-D9cP6KBy.js";import"./index-Bq1Ak5OA.js";import"./ChartSizeDimensions-DBM4r-MV.js";import"./OffsetShower-9LIODqLQ.js";import"./PlotAreaShower-BBiCyrXZ.js";import"./CartesianAxis-C6pdCV3P.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BrFb8VVi.js";import"./uniqBy-iRT60m2x.js";import"./iteratee-BDAL2q7w.js";import"./Cross-C-tDAxe1.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
