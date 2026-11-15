import{r as i,R as e}from"./iframe-CuQfx1mh.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-kdQhYsCL.js";import{R as C}from"./zIndexSlice-DATCiNk-.js";import{L as s}from"./Line-CJHShm6U.js";import{X as p}from"./XAxis-DFSmxsEI.js";import{T as c}from"./Tooltip-Z4HKncA5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DE6EtITA.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BY0kcEhz.js";import"./throttle-SAQUG4vb.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./polarAxisSelectors-piadlyiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BW1Afi3u.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./Layer-YgN4J4tN.js";import"./Curve-BBk73TGO.js";import"./types-D3Hjk8Vl.js";import"./step-BPhAxlHA.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-GFwLhdMi.js";import"./Label-GADa0aPm.js";import"./Text-BgHfu1GZ.js";import"./ZIndexLayer-W76HFIEY.js";import"./ActivePoints-D3cJ21Q9.js";import"./Dot-nIfHLv6J.js";import"./activeStyles-Ci_kz6ws.js";import"./useAnimationId-tXprvTar.js";import"./Symbols-Cfnu_9Am.js";import"./symbol-CeqqAB3e.js";import"./ErrorBarContext-Ciy31sgt.js";import"./SetGraphicalItem-CgminRJ_.js";import"./getRadiusAndStrokeWidthFromDot-BGDq57jg.js";import"./ActiveShapeUtils-D5R6UpQP.js";import"./useEffectiveDataKey-DTMm3t3E.js";import"./CartesianAxis-CbXqU-62.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-dCD-1zhD.js";import"./uniqBy-B4ZIglI5.js";import"./iteratee-0xqLSxi-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C30SLzjn.js";import"./Rectangle-Dy2GqrdD.js";import"./util-Dxo8gN5i.js";import"./Sector-Cptg7cXg.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
