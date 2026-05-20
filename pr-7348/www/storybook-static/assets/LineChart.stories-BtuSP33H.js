import{u as s,e}from"./iframe-Cpa_K2wH.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-DtZjfpbN.js";import{g as C}from"./arrayEqualityCheck-B3CGbERi.js";import{L as n}from"./Line-Dn6n2q0g.js";import{R as A}from"./RechartsHookInspector-Bqt-aS6w.js";import{X as p}from"./XAxis-BzN0sbb6.js";import{T as c}from"./Tooltip-BhCnUH6y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./immer-DMfm46iJ.js";import"./hooks-B0YV-Gb0.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./Layer-C28Vj2nU.js";import"./ReactUtils-BowWIwT6.js";import"./Label-9gVLBIOF.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./ZIndexLayer-CVL2PXNl.js";import"./ActivePoints-gBLXy0JF.js";import"./Dot-BhWE0LKt.js";import"./types-BYysGBoP.js";import"./RegisterGraphicalItemId-s90PoDx_.js";import"./ErrorBarContext-BJDGu-MY.js";import"./GraphicalItemClipPath-CP_rA2Hw.js";import"./SetGraphicalItem-BFrPL6Zw.js";import"./useAnimationId-BXAU-yXd.js";import"./getRadiusAndStrokeWidthFromDot-DEe3jrRF.js";import"./ActiveShapeUtils-DZgn0W6W.js";import"./isPlainObject-Cv9egWS8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_TjkgDNn.js";import"./Trapezoid-MfEacaGn.js";import"./Sector-CErlt9yR.js";import"./Symbols-Bzs7g2p8.js";import"./symbol-DqufiAtJ.js";import"./step-csQH98gw.js";import"./Curve-rXHg5I_o.js";import"./index-fBY_53TJ.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./OffsetShower-BpeLegDD.js";import"./PlotAreaShower-LKM4gBGb.js";import"./CartesianAxis-BYutAp1h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CxLjeYJj.js";import"./uniqBy-BwhAZYz-.js";import"./iteratee-DoCUAkfC.js";import"./Cross-DR-MDVhZ.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
