import{r as s,e}from"./iframe-IYV0DWV_.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DtIaaII-.js";import{R as C}from"./arrayEqualityCheck-Bd9te8h5.js";import{L as n}from"./Line-B7tqEV9l.js";import{R as A}from"./RechartsHookInspector-F4E7g6Er.js";import{X as p}from"./XAxis-D3Ygop7A.js";import{T as c}from"./Tooltip-B_Wu83_g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CiV29pyr.js";import"./index-C-_sV-M9.js";import"./immer-C5y28x1y.js";import"./hooks-CYsU2mzH.js";import"./axisSelectors-D7Iryj26.js";import"./d3-scale-gSH8fZ7r.js";import"./zIndexSlice-DeGAM3mJ.js";import"./renderedTicksSlice-oy8dviAt.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeU7jjaP.js";import"./chartDataContext-DpSq4A2Y.js";import"./CategoricalChart-C5NFGp4t.js";import"./resolveDefaultProps-DW10euc9.js";import"./Layer-BlQSfqc0.js";import"./ReactUtils--lF51C7F.js";import"./Label-Ue-uNxNq.js";import"./Text-CljAKOCB.js";import"./DOMUtils-lNitbhsw.js";import"./ZIndexLayer-CuF5EOOK.js";import"./ActivePoints-CQCkaYoR.js";import"./Dot-BVl4fcd6.js";import"./types-wRdleKl8.js";import"./RegisterGraphicalItemId-hvr3G_mi.js";import"./ErrorBarContext-BIw-Eurm.js";import"./GraphicalItemClipPath-CJMuL245.js";import"./SetGraphicalItem-DeMSd0nu.js";import"./useAnimationId-Bm2M_Pz2.js";import"./getRadiusAndStrokeWidthFromDot-BrQDVO0Z.js";import"./ActiveShapeUtils-Bagg-bQt.js";import"./isPlainObject-wylrXpJQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxtnmBb5.js";import"./Trapezoid-82F1yuXU.js";import"./Sector-CKN5Z_1V.js";import"./Symbols-3dp5_ZFf.js";import"./symbol-DNJG8l3z.js";import"./step-A9nbxnob.js";import"./Curve-DbGLQtgf.js";import"./index-DlrvcT1S.js";import"./ChartSizeDimensions-qhfaRB1O.js";import"./OffsetShower-CVu4qLNi.js";import"./PlotAreaShower-B-AaQufv.js";import"./CartesianAxis-Bs0B3eSH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D1AjHSpE.js";import"./uniqBy-CrQZW9nB.js";import"./iteratee-B8Y3Nom7.js";import"./Cross-LFLGBECj.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
