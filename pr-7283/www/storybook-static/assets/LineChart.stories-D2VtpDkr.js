import{r as s,e}from"./iframe-Y_Pa4XUD.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-pVi02pZg.js";import{R as C}from"./arrayEqualityCheck-ufqgmavw.js";import{L as n}from"./Line-DsGJIENB.js";import{R as A}from"./RechartsHookInspector-CoUZ_IKN.js";import{X as p}from"./XAxis-Bv1vfoF0.js";import{T as c}from"./Tooltip-Dfduu8ww.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8CMlo1v.js";import"./index-BJNVUtSj.js";import"./immer-fIOXVJOd.js";import"./hooks-CIr5CD4S.js";import"./axisSelectors-BmerCj2n.js";import"./d3-scale-ByVEmPR9.js";import"./zIndexSlice-CTCYCdxd.js";import"./renderedTicksSlice-CQWIZJ1K.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ds9j1WCi.js";import"./chartDataContext-DAoPlUXM.js";import"./CategoricalChart-C8vuTQEv.js";import"./resolveDefaultProps-B_hVYzQT.js";import"./Layer-Cvh40WqM.js";import"./ReactUtils-BE45q0BU.js";import"./Label-DoWUrSWO.js";import"./Text-mkkNE3Pk.js";import"./DOMUtils-DN2B9zoo.js";import"./ZIndexLayer-DHPXYj4K.js";import"./ActivePoints-_m6yHkUn.js";import"./Dot-C6EdxuDn.js";import"./types-CFzlQQ1s.js";import"./RegisterGraphicalItemId-BIRSR7Jx.js";import"./ErrorBarContext-Cb6v3AYw.js";import"./GraphicalItemClipPath-DMPCiQHF.js";import"./SetGraphicalItem-CCipA_FV.js";import"./useAnimationId-LxxsO2il.js";import"./getRadiusAndStrokeWidthFromDot-d_31bWzQ.js";import"./ActiveShapeUtils-DigOcqgk.js";import"./isPlainObject-CqaZa_wl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWx4TmVI.js";import"./Trapezoid-DRFbXSGQ.js";import"./Sector-NCqbNZMf.js";import"./Symbols-CsuZ3_sL.js";import"./symbol-DrAbyEPw.js";import"./step-B3cL9I-q.js";import"./Curve-BrfIxnDD.js";import"./index-CPjVtjVX.js";import"./ChartSizeDimensions-Bp_T5Mu5.js";import"./OffsetShower-Bd96igZ1.js";import"./PlotAreaShower-DzHDy2_i.js";import"./CartesianAxis-DaCLeBFj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-qP4fWKjW.js";import"./uniqBy-C7FokKvI.js";import"./iteratee-kOo85QIZ.js";import"./Cross-CoscppeN.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
