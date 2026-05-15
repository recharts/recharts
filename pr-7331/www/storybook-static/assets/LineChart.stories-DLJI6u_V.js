import{u as s,e}from"./iframe-CFLjOTm5.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-DJXd0J6P.js";import{g as C}from"./arrayEqualityCheck-ChmsrC0B.js";import{L as n}from"./Line-Vg9WsR_0.js";import{R as A}from"./RechartsHookInspector-BDSD1XTs.js";import{X as p}from"./XAxis-CPArG0UG.js";import{T as c}from"./Tooltip-DRz3bTA0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./immer-e_Tfrumf.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./zIndexSlice-Cx77az4x.js";import"./renderedTicksSlice-odoaHiua.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./Layer-CWq3y3ul.js";import"./ReactUtils-DhONHYWu.js";import"./Label-BSOdMnMn.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./ZIndexLayer-D7dGD0_V.js";import"./ActivePoints-9HVyXSwD.js";import"./Dot-BsIP-wxa.js";import"./types-CgNdS23P.js";import"./RegisterGraphicalItemId-E3PAioKC.js";import"./ErrorBarContext--tEIgjZN.js";import"./GraphicalItemClipPath-Diu1h3xz.js";import"./SetGraphicalItem-Tg4ql8Pw.js";import"./useAnimationId-DK1cyyuV.js";import"./getRadiusAndStrokeWidthFromDot-CiQZJYhU.js";import"./ActiveShapeUtils-DrwY_Mc1.js";import"./isPlainObject-CzNO0PsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwfIT2qv.js";import"./Trapezoid-B5Lh4oRr.js";import"./Sector-DsUts6aH.js";import"./Symbols-CkgCxPkV.js";import"./symbol-BeYyKtHZ.js";import"./step-BuRaAczm.js";import"./Curve-BhvAwYBS.js";import"./index-xA73MIG_.js";import"./ChartSizeDimensions-DagJBs5z.js";import"./OffsetShower-CbRTjXXF.js";import"./PlotAreaShower-Bz-8aerp.js";import"./CartesianAxis-BpdXJUIh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C2egQmGh.js";import"./uniqBy-C7HTjv5J.js";import"./iteratee-BzNhxdj8.js";import"./Cross-CW35skaP.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
