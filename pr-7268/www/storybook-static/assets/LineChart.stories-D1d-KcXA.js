import{r as s,e}from"./iframe-ARz8mg4k.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-FVMsIbCT.js";import{R as C}from"./arrayEqualityCheck-DrcNi_LJ.js";import{L as n}from"./Line-DEIZCqut.js";import{R as A}from"./RechartsHookInspector-BQqyZpBz.js";import{X as p}from"./XAxis-BTtzk9-i.js";import{T as c}from"./Tooltip-CzxJu9zc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Blzvisg2.js";import"./index-rdZdQMAv.js";import"./immer-DTctj60x.js";import"./hooks-BYzsfUc2.js";import"./axisSelectors-BVUGHvar.js";import"./d3-scale-C0EL32h-.js";import"./zIndexSlice-DS03Ah9k.js";import"./renderedTicksSlice-CVTh0NIO.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUThqtKP.js";import"./chartDataContext-DOtajESI.js";import"./CategoricalChart-B_WLpA_O.js";import"./resolveDefaultProps-B-6s3uHj.js";import"./Layer-DVzuE_pH.js";import"./ReactUtils-hXOLhjEf.js";import"./Label-Cu7mDpGK.js";import"./Text-D-6uYGdc.js";import"./DOMUtils-CE-5408s.js";import"./ZIndexLayer-C2oPn4PG.js";import"./ActivePoints-DPEPJ12U.js";import"./Dot-D4Exawvu.js";import"./types-DqkCHGa8.js";import"./RegisterGraphicalItemId-BXvuLG6J.js";import"./ErrorBarContext-DDh6r-dJ.js";import"./GraphicalItemClipPath-Bz4PQaQE.js";import"./SetGraphicalItem-CxI49ViB.js";import"./useAnimationId-C0fVDb8C.js";import"./getRadiusAndStrokeWidthFromDot-CsRHkFbH.js";import"./ActiveShapeUtils-wYDV2nzn.js";import"./isPlainObject-B1moSef3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--sGlWkza.js";import"./Trapezoid-Cyk80hbt.js";import"./Sector-DhlBySFK.js";import"./Symbols-DEV19KB2.js";import"./symbol-DfbaKguC.js";import"./step-CP_r1PA8.js";import"./Curve-BzlOSzH0.js";import"./index-L5czeD9H.js";import"./ChartSizeDimensions-CD-DU66p.js";import"./OffsetShower-IkmwAKSt.js";import"./PlotAreaShower-atAkjEbW.js";import"./CartesianAxis-BXpWNIc5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CSKRZ4dE.js";import"./uniqBy-ASh7y_L6.js";import"./iteratee-BNnjrYcR.js";import"./Cross-2wRLy28I.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
