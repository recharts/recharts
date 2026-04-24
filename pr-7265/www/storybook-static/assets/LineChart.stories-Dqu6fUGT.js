import{r as s,e}from"./iframe-37zUUx_E.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-EKX9DCa2.js";import{R as C}from"./arrayEqualityCheck-DutKhOGK.js";import{L as n}from"./Line-oWjuptDx.js";import{R as A}from"./RechartsHookInspector-CDipa0hp.js";import{X as p}from"./XAxis-Blm4GLfV.js";import{T as c}from"./Tooltip-BbvdFyzA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B76xGR1e.js";import"./index-0-WoshO7.js";import"./immer-CUnR0E5N.js";import"./hooks-CAbbZjj1.js";import"./axisSelectors-DkFLtXON.js";import"./d3-scale-E5kHX0Us.js";import"./zIndexSlice-D134Hh5h.js";import"./renderedTicksSlice-5LDn2Ezt.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8ApklZQP.js";import"./chartDataContext-kqFcMPUE.js";import"./CategoricalChart-CHzXuF8K.js";import"./resolveDefaultProps-B9PzFguX.js";import"./Layer-Blxm0j6C.js";import"./ReactUtils-Dqk404a0.js";import"./Label-D6SKAk7k.js";import"./Text-CFCBMdCH.js";import"./DOMUtils-BZYNC1iv.js";import"./ZIndexLayer-AHauez6T.js";import"./ActivePoints-EmSMm9zZ.js";import"./Dot-Dh6UB_x_.js";import"./types-BDojSeLG.js";import"./RegisterGraphicalItemId-BFaPkTpC.js";import"./ErrorBarContext-CVePCcdj.js";import"./GraphicalItemClipPath-Ck6zBYe3.js";import"./SetGraphicalItem-CUypKyA6.js";import"./useAnimationId-C7xf4RxW.js";import"./getRadiusAndStrokeWidthFromDot-VPgWcsDI.js";import"./ActiveShapeUtils-CXWXXwN5.js";import"./isPlainObject-9Se0j9nw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOZsL7-R.js";import"./Trapezoid-C1jYXPge.js";import"./Sector-BbhwdmlG.js";import"./Symbols-DFxZd3eU.js";import"./symbol-B3Zg3PtQ.js";import"./step-T5zqhKew.js";import"./Curve-aM5GtQmw.js";import"./index-cHRr1rY9.js";import"./ChartSizeDimensions-0RPcwWKr.js";import"./OffsetShower-HjsFwihi.js";import"./PlotAreaShower-lKdypGoe.js";import"./CartesianAxis-BBEhLEqn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-ucAko2MZ.js";import"./uniqBy-BhCUt_qQ.js";import"./iteratee-D8tusU-2.js";import"./Cross-Cz1gFwO8.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
