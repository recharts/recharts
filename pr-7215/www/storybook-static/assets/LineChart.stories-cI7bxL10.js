import{r as s,e}from"./iframe-DDxjm-WU.js";import{L as n}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DZfv1obd.js";import{R as C}from"./arrayEqualityCheck-BDTW-iCp.js";import{L as m}from"./Line-BPnw9nie.js";import{R as A}from"./RechartsHookInspector-Bsn_fuN0.js";import{X as p}from"./XAxis-Bk56gde7.js";import{T as c}from"./Tooltip-DHPmlMiI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./immer-Dkl5Am7g.js";import"./hooks-YOhxCck_.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CyBi_8s9.js";import"./renderedTicksSlice-Bbo75at4.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./Layer-DLlz0gUf.js";import"./Curve-Dkov4-pW.js";import"./types-BJgxgmcc.js";import"./step-SAK8fO-u.js";import"./AnimatedItems-CSkyjlHH.js";import"./Label-yPRdE_cG.js";import"./Text-Dhvbhtov.js";import"./DOMUtils-BA-rpJ1d.js";import"./ZIndexLayer-BMzzahCv.js";import"./useAnimationId-BR6TF1aX.js";import"./ActivePoints-C7F7VZ5g.js";import"./Dot-L6tPFerw.js";import"./RegisterGraphicalItemId-ClGGvm6o.js";import"./ErrorBarContext-DW-8h9VL.js";import"./GraphicalItemClipPath-DqVRZ_0S.js";import"./SetGraphicalItem-CuKG-JqA.js";import"./getRadiusAndStrokeWidthFromDot-BORIc5te.js";import"./ActiveShapeUtils-DLASNkc5.js";import"./isPlainObject-BBpCzhfD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IbIg2bFH.js";import"./Trapezoid--noiZBKT.js";import"./Sector-DsN_tQHR.js";import"./Symbols-KpMFDNBi.js";import"./symbol-rnYDxF4k.js";import"./index-PKdkWvoA.js";import"./ChartSizeDimensions-DNtnVTHS.js";import"./OffsetShower-kAoxPyWs.js";import"./PlotAreaShower-CCGJY3Cl.js";import"./CartesianAxis-ClZZ2QTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-jNB1bLaO.js";import"./uniqBy-DUJoZvc-.js";import"./iteratee-B_gEuLW0.js";import"./Cross-CAl6g6IT.js";const Oe={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(n),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const xe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,xe as __namedExportsOrder,Oe as default};
