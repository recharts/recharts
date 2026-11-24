import{r as i,R as e}from"./iframe-B1Ov3CkI.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-ChIIlifa.js";import{R as C}from"./zIndexSlice-BZ09-fF4.js";import{L as s}from"./Line-D6fDEx2j.js";import{X as p}from"./XAxis-B8awpm7u.js";import{T as c}from"./Tooltip-cJI8ulaq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CArKZuEM.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CwNUFUW3.js";import"./throttle-CU4m2LyG.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./getRadiusAndStrokeWidthFromDot-BJHYFlOo.js";import"./Layer-DAwsvvog.js";import"./Curve-D-bNq0v5.js";import"./types-ynn-_gFH.js";import"./step-B516R2zU.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-lld3ulFL.js";import"./Label-DD8YxEOL.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./ActivePoints-egHLZy2G.js";import"./Dot-CLqz5fjj.js";import"./activeStyles-D0wpO0Mw.js";import"./useAnimationId-DhG5SB-S.js";import"./Symbols-D3aq_3ym.js";import"./symbol-fFs6B4hu.js";import"./ErrorBarContext-CrvdUc7x.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./useEffectiveDataKey-DPX-1gIx.js";import"./CartesianAxis-CqVMCZWw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D5jbWozH.js";import"./uniqBy-CuCMSFr0.js";import"./iteratee-D4VRlXRY.js";import"./isArguments-yB-y1yaH.js";import"./Cross-0Rf112BE.js";import"./Rectangle-B3p2_n3w.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_mWH5U.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
