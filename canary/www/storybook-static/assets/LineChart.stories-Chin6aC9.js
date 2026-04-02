import{r as s,e}from"./iframe-BaY_xsSZ.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CwetqMlH.js";import{R as C}from"./arrayEqualityCheck-Bdjqc4Ae.js";import{L as n}from"./Line-BUwsNwDj.js";import{R as A}from"./RechartsHookInspector-BZJAdbFr.js";import{X as p}from"./XAxis-ViYQKBdh.js";import{T as c}from"./Tooltip-CmuUZ6lx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DGEkw1V9.js";import"./index-BSMrFEqd.js";import"./immer-BxBygCNY.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./d3-scale-DIZez8ZA.js";import"./zIndexSlice-CtFEU_Ni.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./Layer-04iznQcl.js";import"./ReactUtils-B7IYIUp3.js";import"./Label-B4b2gNZT.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./ZIndexLayer-BzH8oXrO.js";import"./ActivePoints-t-qLyG_8.js";import"./Dot-BqkojDsv.js";import"./types-BZAl2150.js";import"./RegisterGraphicalItemId-x5Fjg9Mp.js";import"./ErrorBarContext-hvPjdfRQ.js";import"./GraphicalItemClipPath-C_oN7uRQ.js";import"./SetGraphicalItem-13HzTRgX.js";import"./useAnimationId-CntPUL-4.js";import"./getRadiusAndStrokeWidthFromDot-BrRZUxyx.js";import"./ActiveShapeUtils-CAoRm2wW.js";import"./isPlainObject-DluGOkEU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHMEhJP1.js";import"./Trapezoid-DZ8rNB7q.js";import"./Sector-c_JEoVhU.js";import"./Symbols-D6WgJo03.js";import"./symbol-N8c7H1tN.js";import"./step-CLF9a_rc.js";import"./Curve-B7UPBPeR.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";import"./CartesianAxis-CxJxU8_8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CP6WPjsc.js";import"./uniqBy-CrxusMQm.js";import"./iteratee-BK5pxv5Q.js";import"./Cross-B8xeSogi.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
