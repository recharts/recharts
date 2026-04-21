import{r as s,e}from"./iframe-DyvFbeiY.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-R4-3rz0f.js";import{R as C}from"./arrayEqualityCheck-Bn5wKa8z.js";import{L as n}from"./Line-Dwikz1-j.js";import{R as A}from"./RechartsHookInspector-DV82AArc.js";import{X as p}from"./XAxis-B293BcKI.js";import{T as c}from"./Tooltip-DqF6pQE3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdWihcwC.js";import"./index-CNtF4wRg.js";import"./immer-BXVzTfKp.js";import"./hooks-CfJmKGn6.js";import"./axisSelectors-088cVuhB.js";import"./d3-scale-CNJHznva.js";import"./zIndexSlice-Bqm6vulu.js";import"./renderedTicksSlice-CJenSa8J.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CS3DBPlX.js";import"./chartDataContext-DviLklHI.js";import"./CategoricalChart-D-rA1y19.js";import"./resolveDefaultProps-DGnWrc4H.js";import"./Layer-CpTA_ktM.js";import"./ReactUtils-COq0Y09w.js";import"./Label-CDXCniHM.js";import"./Text-Be76LL2i.js";import"./DOMUtils-CzBYED_e.js";import"./ZIndexLayer-C1288rIw.js";import"./ActivePoints-Ci7sTbDq.js";import"./Dot-RjdCxHU2.js";import"./types-CSsXZ5tJ.js";import"./RegisterGraphicalItemId-B9D6uPLZ.js";import"./ErrorBarContext-DayA8Agl.js";import"./GraphicalItemClipPath-CYHMq85Z.js";import"./SetGraphicalItem-DiBnTnci.js";import"./useAnimationId-DwaEpfhV.js";import"./getRadiusAndStrokeWidthFromDot-Ce9nLJu3.js";import"./ActiveShapeUtils-BcQiGKd0.js";import"./isPlainObject-CQyTvYqF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ddgym3Wn.js";import"./Trapezoid-vyL8C7j7.js";import"./Sector-DWMmtBrv.js";import"./Symbols-Be2vj1mX.js";import"./symbol-BvP6gztC.js";import"./step-CqS1DS8s.js";import"./Curve-BctzKEO8.js";import"./index-C_zDqZx9.js";import"./ChartSizeDimensions-Ca623tER.js";import"./OffsetShower-B7jjHmTv.js";import"./PlotAreaShower-B6clyZxt.js";import"./CartesianAxis-DvrkT7dv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DDSbv75U.js";import"./uniqBy-fbRu4jMx.js";import"./iteratee-DBFGwJC_.js";import"./Cross-m0Nu02Dx.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
