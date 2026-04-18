import{r as s,e}from"./iframe-Bs9ufhmU.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-De48jml9.js";import{R as C}from"./arrayEqualityCheck-bNviqcqR.js";import{L as n}from"./Line-a0e7HScR.js";import{R as A}from"./RechartsHookInspector-BLOzRcf9.js";import{X as p}from"./XAxis-vN0EOhjQ.js";import{T as c}from"./Tooltip-DwY1pg8y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZIvkK7Y.js";import"./index-Dj-F8bgJ.js";import"./immer-7dvTdnME.js";import"./hooks-DNTcenQI.js";import"./axisSelectors-B6DmQDXD.js";import"./d3-scale-QYSZWFrh.js";import"./zIndexSlice-B-DHuVWa.js";import"./renderedTicksSlice-D4shqqjC.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BB1EgM6J.js";import"./chartDataContext-pLUBtclw.js";import"./CategoricalChart-jwpeEM8k.js";import"./resolveDefaultProps-CGjn5uwQ.js";import"./Layer-BeNhTzXz.js";import"./ReactUtils-DhI6Oe1E.js";import"./Label-DU0nM-QI.js";import"./Text-hajrhHnl.js";import"./DOMUtils-DooEv1Ok.js";import"./ZIndexLayer-BNfspdHK.js";import"./ActivePoints-B_kl37lc.js";import"./Dot-Hw3ymEj1.js";import"./types-iG6YPFqe.js";import"./RegisterGraphicalItemId-_wgk5kOH.js";import"./ErrorBarContext-E0MFYBlH.js";import"./GraphicalItemClipPath-cqIDCUaZ.js";import"./SetGraphicalItem-DGPcT5tY.js";import"./useAnimationId-B97gwkv5.js";import"./getRadiusAndStrokeWidthFromDot-BRin4YHv.js";import"./ActiveShapeUtils-BF7TNpr9.js";import"./isPlainObject-DsuLoG7m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUsMUIL7.js";import"./Trapezoid-5VBN_EIn.js";import"./Sector-mpY_PZJM.js";import"./Symbols-D0Ncjn54.js";import"./symbol-BG2oG_xM.js";import"./step-Egwu_prR.js";import"./Curve-B9iYmKCN.js";import"./index-bM7E3l5J.js";import"./ChartSizeDimensions-SAcKlyRY.js";import"./OffsetShower-BK-2MEQe.js";import"./PlotAreaShower-BHBQx0G4.js";import"./CartesianAxis-Dy-A2DW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Bjx5_Ell.js";import"./uniqBy-qpDPjGbK.js";import"./iteratee-lQHxSBe4.js";import"./Cross-tlbE3IuY.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
