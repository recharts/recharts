import{r as s,e}from"./iframe-C6Uu7pTN.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-ChV-K2WD.js";import{R as C}from"./arrayEqualityCheck-CwnCehta.js";import{L as n}from"./Line-DBBe-eb5.js";import{R as k}from"./RechartsHookInspector-DK8LEn3K.js";import{X as p}from"./XAxis-DYlJSFAX.js";import{T as c}from"./Tooltip-DF6diYM2.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGLJriAG.js";import"./index-86WMnZat.js";import"./immer-BQbVNYZa.js";import"./hooks-CPOFWC30.js";import"./axisSelectors-CvaRXDpT.js";import"./d3-scale-jTFhmIQC.js";import"./zIndexSlice-TqQJPXuj.js";import"./renderedTicksSlice-BbR9AX3S.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Df2fxLuG.js";import"./chartDataContext-78iSRkXw.js";import"./CategoricalChart-DiJF7AWc.js";import"./resolveDefaultProps-BFs3c8XE.js";import"./Layer-lr_Myov5.js";import"./ReactUtils-De_gzh57.js";import"./Label-BWxvsGM2.js";import"./Text-D3aSBSTN.js";import"./DOMUtils-C3fhmnrv.js";import"./ZIndexLayer-BGg3LDJH.js";import"./ActivePoints-B8JphRK3.js";import"./Dot-Dz4sxWoj.js";import"./types-LVTyj2cP.js";import"./RegisterGraphicalItemId-DjVfXSwO.js";import"./ErrorBarContext-_q0KzTsJ.js";import"./GraphicalItemClipPath-enSk32wK.js";import"./SetGraphicalItem-BpIjVc9U.js";import"./useAnimationId-B1cyGcAu.js";import"./getRadiusAndStrokeWidthFromDot-fX_t_PhE.js";import"./ActiveShapeUtils-H4GnlVn4.js";import"./isPlainObject-BW25J73Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgIvpV-o.js";import"./Trapezoid-Cqle6yIN.js";import"./Sector-pDHcay4d.js";import"./Symbols-CHqyFdvp.js";import"./symbol-B6JyGFlS.js";import"./step-DybRLWtN.js";import"./Curve-D9DtbUHf.js";import"./index-Bw3U1Qlv.js";import"./ChartSizeDimensions-Bo_lxHZc.js";import"./OffsetShower-CHRjZmG4.js";import"./PlotAreaShower-BfZVYUAY.js";import"./CartesianAxis-CSfXt17s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C2BJLsNb.js";import"./uniqBy-DSCX3tJa.js";import"./iteratee-DONz88Kj.js";import"./Cross-BMtQbamh.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
