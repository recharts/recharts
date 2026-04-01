import{r as s,e}from"./iframe-D2iPyEE3.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CXCIjd6w.js";import{R as C}from"./arrayEqualityCheck-BQ52A-KD.js";import{L as n}from"./Line-0zLbnlDG.js";import{R as A}from"./RechartsHookInspector-pMynMK3d.js";import{X as p}from"./XAxis-Ca5xFIBT.js";import{T as c}from"./Tooltip-qnTa-PrY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9hxchsK.js";import"./index-CGzhf8ES.js";import"./immer-5DUlJX3y.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./zIndexSlice-B-uvLuMe.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./Layer-CIGoVUHw.js";import"./ReactUtils-DlxpINgd.js";import"./Label-CjmamkRK.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./ZIndexLayer-ClfHdlij.js";import"./ActivePoints-DO1blp6A.js";import"./Dot-D8o3tU3P.js";import"./types-DfbbSUKg.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./ErrorBarContext-6PvhO17o.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./useAnimationId-fkVW7SyB.js";import"./getRadiusAndStrokeWidthFromDot-CFwxR8E8.js";import"./ActiveShapeUtils-cVE6agUq.js";import"./isPlainObject-BVZ5R7gX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIa7eyeJ.js";import"./Trapezoid-CD49191V.js";import"./Sector-CON_U0ZW.js";import"./Symbols-Dh7LCKpa.js";import"./symbol-DAG115Zm.js";import"./step-NQkLQHEn.js";import"./Curve-gyPLT6fj.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";import"./CartesianAxis-Bd7Gtpgp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CKbI1PfG.js";import"./uniqBy-Dwf19U3R.js";import"./iteratee-BxNvX9m6.js";import"./Cross-Dj7wEUvN.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
