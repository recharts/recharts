import{r as i,R as e}from"./iframe-CGMPGT_Z.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-2TTRC4be.js";import{R as C}from"./zIndexSlice-BwRFWyAI.js";import{L as s}from"./Line-DkMyEWjM.js";import{X as p}from"./XAxis-DbuLqOFS.js";import{T as c}from"./Tooltip-VL4D0Geu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQJBpYXH.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./get-cF5BDHN6.js";import"./axisSelectors-nBPX2Xba.js";import"./throttle-eL-EEQ3_.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./polarAxisSelectors-BIscasf0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhJmdG6x.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Layer-BT_Vpx95.js";import"./Curve-B6JD92Z8.js";import"./types-BG6mJK46.js";import"./step-C3GvXaRE.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-mfmNhCBT.js";import"./Label-BCblnQ7e.js";import"./Text-DLnj5LmN.js";import"./ZIndexLayer-9BCkhjyY.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./activeStyles-Dr2Cpwdi.js";import"./useAnimationId-BO_xR5GW.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./ErrorBarContext-BlCnepik.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./CartesianAxis-B1TiLRwW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CgxUiewk.js";import"./uniqBy-Dmo8Jc_P.js";import"./iteratee-D1qU_gcL.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BcQf_zas.js";import"./Rectangle-CLE0n3dQ.js";import"./util-Dxo8gN5i.js";import"./Sector-DRB_9UVA.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
