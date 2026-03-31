import{r as s,e}from"./iframe-vUL-L_aJ.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BeWJ-_y4.js";import{R as C}from"./arrayEqualityCheck-COxCNyPK.js";import{L as n}from"./Line-DsQcjQwj.js";import{R as A}from"./RechartsHookInspector-CWBwyRFX.js";import{X as p}from"./XAxis-BMYosvSp.js";import{T as c}from"./Tooltip-M8eoo1td.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CG_OUpDm.js";import"./index-BdR1gVmI.js";import"./immer-BVp8bXPB.js";import"./hooks-yjZ0j-0_.js";import"./axisSelectors-CUzNHzdL.js";import"./d3-scale-DD2Sx1-d.js";import"./zIndexSlice-K47YJD8k.js";import"./renderedTicksSlice-CDeFkEV6.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BY4kTu9-.js";import"./chartDataContext-BHVW1DWn.js";import"./CategoricalChart-C_yJwLRG.js";import"./resolveDefaultProps-C8rpue-w.js";import"./Layer-Dux9G07m.js";import"./ReactUtils-B3mcMybl.js";import"./Label-C4rHqw7t.js";import"./Text-CzUGJ8je.js";import"./DOMUtils-CvmeQvzc.js";import"./ZIndexLayer-Cr3lCUTq.js";import"./ActivePoints-QOVXqPsr.js";import"./Dot-CikDQJLR.js";import"./types-5KBfjt4C.js";import"./RegisterGraphicalItemId-sesVzteN.js";import"./ErrorBarContext-BI53r7fn.js";import"./GraphicalItemClipPath-D84XG9Hf.js";import"./SetGraphicalItem-DiqKS2xX.js";import"./useAnimationId-DLI5pxxS.js";import"./getRadiusAndStrokeWidthFromDot-BEMpaDjp.js";import"./ActiveShapeUtils-D_EuKoYs.js";import"./isPlainObject-B2pB2xQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TKYWYM.js";import"./Trapezoid-CJp4NMn-.js";import"./Sector-ztmOwzQz.js";import"./Symbols-DfP23eLB.js";import"./symbol-DFtJsCUW.js";import"./step-DT_l3LWo.js";import"./Curve-Cj7OHreQ.js";import"./index-CdQg9v03.js";import"./ChartSizeDimensions-MpUtdPem.js";import"./OffsetShower-CNEUWUv0.js";import"./PlotAreaShower-Xh3uZCwl.js";import"./CartesianAxis-C5gNDMzm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DWmb2K2h.js";import"./uniqBy-BxmRGs-t.js";import"./iteratee-DtJgozn8.js";import"./Cross-RATG2KX5.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
