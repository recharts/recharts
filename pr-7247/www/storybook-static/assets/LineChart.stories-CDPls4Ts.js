import{r as s,e}from"./iframe-CgD2l6ll.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BiLbMo45.js";import{R as C}from"./arrayEqualityCheck-Ce8ToQce.js";import{L as n}from"./Line-CWagXAtR.js";import{R as A}from"./RechartsHookInspector-wCO4fGuE.js";import{X as p}from"./XAxis-Dwv3lvMC.js";import{T as c}from"./Tooltip-BsInjJ3y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Csl_cz9v.js";import"./index-CiRw8P2v.js";import"./immer-CSa9Hlzz.js";import"./hooks-Bpy6m5AM.js";import"./axisSelectors-odqRCvmi.js";import"./d3-scale-BuJMnYaW.js";import"./zIndexSlice-CWeG0hvl.js";import"./renderedTicksSlice-BTs2Zr2I.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dnb9hNXP.js";import"./chartDataContext-CpiPBezf.js";import"./CategoricalChart-CrkBWVhR.js";import"./resolveDefaultProps-BcwZVjgI.js";import"./Layer-xPACpCXS.js";import"./ReactUtils-DT-vzjkJ.js";import"./Label-D_DKdnsr.js";import"./Text-B-yzB-LI.js";import"./DOMUtils-CLb0DfXc.js";import"./ZIndexLayer-8FhZChLk.js";import"./ActivePoints-CfIeRm58.js";import"./Dot-CmUBOjxz.js";import"./types-CO3nSITq.js";import"./RegisterGraphicalItemId-DQH7cQCp.js";import"./ErrorBarContext-eq28NwTt.js";import"./GraphicalItemClipPath-oqYXxjvR.js";import"./SetGraphicalItem-Be8y5kPC.js";import"./useAnimationId-DgqiEA4Q.js";import"./getRadiusAndStrokeWidthFromDot-BIOm4JA6.js";import"./ActiveShapeUtils-BuoidUZn.js";import"./isPlainObject-BR2GQDLn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdyxrGVo.js";import"./Trapezoid-G-FN5Gcg.js";import"./Sector-DgCnGScK.js";import"./Symbols-KXE8aVcl.js";import"./symbol-CDbbQw2g.js";import"./step-DpdY8Awj.js";import"./Curve-CvT7tHbE.js";import"./index-Dt6lrkA2.js";import"./ChartSizeDimensions-D4uuPom-.js";import"./OffsetShower-Cc0zOxiQ.js";import"./PlotAreaShower-DDf_tE0M.js";import"./CartesianAxis-CFnaMpqS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DNzlmXmU.js";import"./uniqBy-CqSCdlOS.js";import"./iteratee-Cf9bYLPC.js";import"./Cross-B7xfFQa-.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
