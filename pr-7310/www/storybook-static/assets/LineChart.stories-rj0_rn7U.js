import{r as s,e}from"./iframe-ZnuiNVaE.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-I-sqc6q8.js";import{R as C}from"./arrayEqualityCheck-DcpsFffb.js";import{L as n}from"./Line-UlckhZvH.js";import{R as A}from"./RechartsHookInspector-C4iarVXO.js";import{X as p}from"./XAxis-hfxAoNer.js";import{T as c}from"./Tooltip-CC2AIUKK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEYGVzUm.js";import"./index-BpNZQyS5.js";import"./immer-0nSCgAvg.js";import"./hooks-B5VA8Mmq.js";import"./axisSelectors-B7fsKZ9l.js";import"./d3-scale-CY4nDl51.js";import"./zIndexSlice-Drs2c4sD.js";import"./renderedTicksSlice-Bn9JwHxd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QqWjed8q.js";import"./chartDataContext-DOw2_YIC.js";import"./CategoricalChart-Bp3TzfC0.js";import"./resolveDefaultProps-SpwOLF2r.js";import"./Layer-3YLDlAyc.js";import"./ReactUtils-DWDhNlKk.js";import"./Label-CBQ7F7ZY.js";import"./Text-CLHYbH4R.js";import"./DOMUtils-DTgaodk1.js";import"./ZIndexLayer-BzV-T_Iz.js";import"./ActivePoints-CsKFQX5w.js";import"./Dot-DOC-EnTU.js";import"./types-mDbQPIQK.js";import"./RegisterGraphicalItemId-BcaLYkaD.js";import"./ErrorBarContext-C1ZpfKHJ.js";import"./GraphicalItemClipPath-C75obMCp.js";import"./SetGraphicalItem-CLIyGsmN.js";import"./useAnimationId-DkOya059.js";import"./getRadiusAndStrokeWidthFromDot-CVCMuq1B.js";import"./ActiveShapeUtils-B0-GYp8s.js";import"./isPlainObject-Bh5udtth.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8PzQF5cj.js";import"./Trapezoid-BzAzl90f.js";import"./Sector-BJWLe057.js";import"./Symbols-D3ZFSmHu.js";import"./symbol-DOh64DiI.js";import"./step-BAeuU6ZP.js";import"./Curve-D7bzhexe.js";import"./index-BWgKuq9M.js";import"./ChartSizeDimensions-CpD-sUWL.js";import"./OffsetShower-B_CY-ece.js";import"./PlotAreaShower-DfogOd1z.js";import"./CartesianAxis-90i_fguh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DfXBdw7O.js";import"./uniqBy-C1Nplgu-.js";import"./iteratee-CLm8sMEH.js";import"./Cross-C4WVnIN-.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
