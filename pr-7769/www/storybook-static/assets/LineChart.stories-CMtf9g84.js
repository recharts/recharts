import{r as i,R as e}from"./iframe-5Ln2iLqA.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DRhloam_.js";import{R as C}from"./zIndexSlice-DFex-upv.js";import{L as s}from"./Line-0wKA-RqY.js";import{X as p}from"./XAxis-C-UtlQCm.js";import{T as c}from"./Tooltip-BCHNqt5f.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BHuvBmBF.js";import"./resolveDefaultProps-IjnCGfXZ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BMU5_zje.js";import"./throttle-BvN7rUxU.js";import"./index-CzncCR4k.js";import"./index-D7j-yBVr.js";import"./isWellBehavedNumber-CdZO7OXS.js";import"./d3-scale-DUTFXTFy.js";import"./index-SDNpyV8r.js";import"./index-1g9ahHpc.js";import"./renderedTicksSlice-B6ULVZ0v.js";import"./index-LP2TzsJ5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1RwtF1h6.js";import"./chartDataContext-BWMyO-qW.js";import"./CategoricalChart-no-3Z0-_.js";import"./Layer-DAiXs0AA.js";import"./Curve-CjwJajTH.js";import"./types-DPL8-78e.js";import"./step-Dlf9LIeZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-axJun3VY.js";import"./Label-9F2YL2wp.js";import"./Text-oIzTAhmK.js";import"./DOMUtils-Cf_dBvDb.js";import"./useId-DeG95-BA.js";import"./useBackwardsCompatibleTheme-C1dsWZXc.js";import"./ZIndexLayer-ZmLJud1E.js";import"./useAnimationId-CJTvG1Qi.js";import"./ActivePoints-CyfXnlmG.js";import"./Dot-BtmEb1H2.js";import"./RegisterGraphicalItemId-08XYAnQ7.js";import"./ErrorBarContext-Mgqq5-U9.js";import"./GraphicalItemClipPath-CFv0pGXv.js";import"./SetGraphicalItem-woQRWKGe.js";import"./getRadiusAndStrokeWidthFromDot-Cd93T_Q0.js";import"./ActiveShapeUtils-DterXnUU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-TNvZ3AHE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-tgIx7o39.js";import"./uniqBy-DUSKgABV.js";import"./iteratee-BinWTTLm.js";import"./Cross-COZxUUI-.js";import"./Rectangle-BMEZChfE.js";import"./util-Dxo8gN5i.js";import"./Sector-BPatKHxW.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
