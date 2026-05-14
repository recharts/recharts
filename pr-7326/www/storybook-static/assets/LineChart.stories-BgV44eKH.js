import{r as s,e}from"./iframe-BH41_KsK.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BdnxEPzC.js";import{R as C}from"./arrayEqualityCheck-CGbsBh9H.js";import{L as n}from"./Line-C-svjPgG.js";import{R as A}from"./RechartsHookInspector-DcrWhI6K.js";import{X as p}from"./XAxis-CohOmQtN.js";import{T as c}from"./Tooltip-CEdHYHgy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5rnF5yF.js";import"./index-Bz_RkPth.js";import"./immer-ZwRip_iH.js";import"./hooks-DSeH88Zv.js";import"./axisSelectors-C71PNMoj.js";import"./d3-scale-DNp6AOXD.js";import"./zIndexSlice-Dbf9wnDO.js";import"./renderedTicksSlice-3bqcLC8e.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DMgQ1LDd.js";import"./chartDataContext-DMreHK63.js";import"./CategoricalChart-Cd1ApljN.js";import"./resolveDefaultProps-C5jg0EzG.js";import"./Layer-C2G5KafR.js";import"./ReactUtils-DkBJREDm.js";import"./Label-CXdyAx7z.js";import"./Text-DDTyrmBt.js";import"./DOMUtils-BSZC47d4.js";import"./ZIndexLayer-CP6TEiwa.js";import"./ActivePoints-C4m1trAF.js";import"./Dot-_SaUOdRl.js";import"./types-BL4s3hIy.js";import"./RegisterGraphicalItemId-r9QXM6NT.js";import"./ErrorBarContext-zSTRxri5.js";import"./GraphicalItemClipPath-Bh82AnDN.js";import"./SetGraphicalItem-DdDIdBuP.js";import"./useAnimationId-BwPLyDxM.js";import"./getRadiusAndStrokeWidthFromDot-av-B5cKk.js";import"./ActiveShapeUtils-mHpAd-Np.js";import"./isPlainObject-BU-7yv7P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B9TxAhtg.js";import"./Trapezoid-uwg0MM0K.js";import"./Sector-CWlkVSPf.js";import"./Symbols-DfJpNQwy.js";import"./symbol-aaNUhI62.js";import"./step-DW6seU4F.js";import"./Curve-CO9gbDjZ.js";import"./index-Dm7aDTFq.js";import"./ChartSizeDimensions-DM4vIE32.js";import"./OffsetShower-U9U3cZHq.js";import"./PlotAreaShower-D2pJ4Br5.js";import"./CartesianAxis-DLqmQhKV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Cuf0LXOB.js";import"./uniqBy-6xFv1rvL.js";import"./iteratee-Y_N2yMWH.js";import"./Cross-BOW0T4uq.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
