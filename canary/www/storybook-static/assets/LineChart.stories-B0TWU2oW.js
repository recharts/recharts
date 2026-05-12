import{r as s,e}from"./iframe-m4iUvHHE.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-OazyYQzk.js";import{R as C}from"./arrayEqualityCheck-h_ZmhyNH.js";import{L as n}from"./Line-B2TAto9y.js";import{R as A}from"./RechartsHookInspector-DquHYSn_.js";import{X as p}from"./XAxis-D0aRIGij.js";import{T as c}from"./Tooltip-BAvz0IgL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-F72CiqvA.js";import"./index-CrxMp6gE.js";import"./immer-g1bGLmSg.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./Layer-CcrS99IB.js";import"./ReactUtils-BGxD9cqm.js";import"./Label-BCusTt26.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./ZIndexLayer-DebxKBww.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./types-ipm49NW_.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./ErrorBarContext-CisfXBtR.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./ActiveShapeUtils-DWhLewKE.js";import"./isPlainObject-BVIwbHuq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNlZhouO.js";import"./Trapezoid-BQrLMZHr.js";import"./Sector-0LK2YG6H.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";import"./step-BaU1N5Sx.js";import"./Curve-lACOSqJl.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";import"./CartesianAxis-CqSuAZnU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-6zzYdDiL.js";import"./uniqBy-DhVYOpcE.js";import"./iteratee-Cfg_AXlo.js";import"./Cross-CuBoQy-M.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
