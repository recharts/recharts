import{u as s,e}from"./iframe-Dm92CwFH.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-BrVxYi3N.js";import{g as C}from"./arrayEqualityCheck-CILmZ2ng.js";import{L as n}from"./Line-CsaarKM8.js";import{R as A}from"./RechartsHookInspector-DjDPWpLA.js";import{X as p}from"./XAxis-BxDV4NmS.js";import{T as c}from"./Tooltip-AjXhhwjO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./immer-C2lunnZL.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./zIndexSlice-CZsiKlhz.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./resolveDefaultProps-URK34NLy.js";import"./Layer-CpozC2HI.js";import"./ReactUtils-vWuNVuHD.js";import"./Label-C3d_UHx_.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./ZIndexLayer-BRpAcZD_.js";import"./ActivePoints-CqTWkagC.js";import"./Dot-D9ItCAkE.js";import"./types-CksUkFiR.js";import"./RegisterGraphicalItemId-Bgnu5jtR.js";import"./ErrorBarContext-DWWXrCiO.js";import"./GraphicalItemClipPath-C8gejsmY.js";import"./SetGraphicalItem-C8FWpJGs.js";import"./useAnimationId-DN3FgicD.js";import"./getRadiusAndStrokeWidthFromDot-EjdN7dQP.js";import"./ActiveShapeUtils-CnNIQnOr.js";import"./isPlainObject-BU4pDjKs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYOH8rGO.js";import"./Trapezoid-CRsqSHYT.js";import"./Sector-BkPUWzJ_.js";import"./Symbols-D8RnZW1D.js";import"./symbol-aLdk9boG.js";import"./step-BOUe13iO.js";import"./Curve-gF21399W.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./OffsetShower-VDfu5cmL.js";import"./PlotAreaShower-DIqDk6Vd.js";import"./CartesianAxis-DhxbGkzM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D-mxBOd4.js";import"./uniqBy-CnkbcL_D.js";import"./iteratee-DgYznPUB.js";import"./Cross-D0w41uNF.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
