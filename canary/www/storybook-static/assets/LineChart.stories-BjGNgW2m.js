import{r as i,R as e}from"./iframe-cV3SAodv.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DvXOfUb3.js";import{R as C}from"./zIndexSlice-Cjgp2TXV.js";import{L as s}from"./Line-DOqIdMIn.js";import{X as p}from"./XAxis-BuIJ_QWG.js";import{T as c}from"./Tooltip-KrO3BR4a.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CyX-rkWs.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./axisSelectors-C9H2pU_G.js";import"./throttle-CMi-pHht.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./polarAxisSelectors--xQAorkv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-y_crYDj7.js";import"./index-yYdNmmg6.js";import"./index-DTNI7e-E.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./chartDataContext-Da1Grc9c.js";import"./CategoricalChart-CWv6udzl.js";import"./getRadiusAndStrokeWidthFromDot-C4ogZ01-.js";import"./Layer-zGQNaeEg.js";import"./Curve-CeApDEIq.js";import"./types-CxXTSyDH.js";import"./step-miPDfXCq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Cky1CNqk.js";import"./Label-CQK_czyp.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./ActivePoints-C5tqNSRW.js";import"./Dot-DlXY1cPq.js";import"./activeStyles-BPuHxpJZ.js";import"./useAnimationId-DD8tFxYJ.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./ErrorBarContext-CopN05Qu.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./useEffectiveDataKey-DBeKKq_r.js";import"./CartesianAxis-BCSNf2Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CFDuhw8U.js";import"./uniqBy-5kbtoCpG.js";import"./iteratee-DH-5OUvh.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DKNOH1xZ.js";import"./Rectangle-BBeAx3Mp.js";import"./util-Dxo8gN5i.js";import"./Sector-BhPFPfN5.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
