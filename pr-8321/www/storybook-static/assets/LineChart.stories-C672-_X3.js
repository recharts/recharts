import{r as i,R as e}from"./iframe-CvaFu5-c.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-D8Cp2b8w.js";import{R as C}from"./zIndexSlice-BCgb8eXa.js";import{L as s}from"./Line-Bo0hpeCk.js";import{X as p}from"./XAxis-DQoNxyYu.js";import{T as c}from"./Tooltip-BuWKvjd4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-sPOqKb.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./axisSelectors-BvhvBZte.js";import"./throttle-CPKsFv9V.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-1_Z3dmgw.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./getRadiusAndStrokeWidthFromDot-9zV8sg_8.js";import"./Layer-GSzXSKza.js";import"./Curve-CMLV0YB3.js";import"./types-B8ocCfqn.js";import"./step-C9qQ8yhV.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B7SMVv85.js";import"./Label-D9P4cAWK.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./ActivePoints-DxXTbZF0.js";import"./Dot-C2Vb3upB.js";import"./activeStyles-TP9Js-Ix.js";import"./useAnimationId-UMR0vx8i.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./CartesianAxis-71DKFDGT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CPc3MDMB.js";import"./uniqBy-DqEP9E_e.js";import"./iteratee-BOojH3GU.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BwS2T31m.js";import"./Rectangle-BN9-Ud6u.js";import"./util-Dxo8gN5i.js";import"./Sector-By2AYXm5.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
