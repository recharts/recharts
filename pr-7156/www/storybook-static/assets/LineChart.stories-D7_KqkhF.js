import{r as s,e}from"./iframe-CGYv0J_P.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-Bboyl9Ls.js";import{R as C}from"./arrayEqualityCheck-BZetwlMO.js";import{L as n}from"./Line-R4kryobQ.js";import{R as k}from"./RechartsHookInspector-BO40i9ox.js";import{X as p}from"./XAxis-BBLpBgR2.js";import{T as c}from"./Tooltip-BDmLuqNU.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFBg4H1i.js";import"./index-DCXgcjyB.js";import"./immer-Dq3_p8cl.js";import"./hooks-BYcy2WEI.js";import"./axisSelectors-d1jnmTLI.js";import"./d3-scale-CFFcqd30.js";import"./zIndexSlice-DscQ2UEO.js";import"./renderedTicksSlice-BB6lYCOP.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-cuEjJLA1.js";import"./chartDataContext-DAOXspfa.js";import"./CategoricalChart-DJ2ZS2wS.js";import"./resolveDefaultProps-CDCzLOgk.js";import"./Layer-Gk-yVd_6.js";import"./ReactUtils-e-fTpbBc.js";import"./Label-CLm-GmRY.js";import"./Text-DbZ5XXQf.js";import"./DOMUtils-CmrzvfdE.js";import"./ZIndexLayer-ChWoeJD6.js";import"./ActivePoints-DuCztam3.js";import"./Dot-B2QyCy--.js";import"./types-DA895aOk.js";import"./RegisterGraphicalItemId-Br_SJebF.js";import"./ErrorBarContext-Cs8TC5a2.js";import"./GraphicalItemClipPath-CH3RqnTG.js";import"./SetGraphicalItem-BJId-qpW.js";import"./useAnimationId-DzTM1tK7.js";import"./getRadiusAndStrokeWidthFromDot-Cp2r1Hxi.js";import"./ActiveShapeUtils-D3fNYChL.js";import"./isPlainObject-CRVi6C8E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-iQ4syW.js";import"./Trapezoid-C3Q-7u80.js";import"./Sector-DG9owPHZ.js";import"./Symbols-wA8q_wPX.js";import"./symbol-BMJz3y-1.js";import"./step-WNwAxyX5.js";import"./Curve-NAJ5RvpG.js";import"./index-CfugQJAU.js";import"./ChartSizeDimensions-CWNsHALg.js";import"./OffsetShower-n0t9eY-O.js";import"./PlotAreaShower-C2TG4Ybd.js";import"./CartesianAxis-Cu0bgGrg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Dg7ksT9H.js";import"./uniqBy-C4EJXCv-.js";import"./iteratee-XiLYEPtC.js";import"./Cross-DYitQ8uV.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
