import{r as s,R as e}from"./iframe-BNNSts13.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DM01mPe0.js";import{R as C}from"./zIndexSlice-B_0Vu2Ew.js";import{L as n}from"./Line-DHXYmqa3.js";import{X as p}from"./XAxis-CQLk361J.js";import{T as c}from"./Tooltip-DHW7ZYPz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./throttle-CBpSFV7b.js";import"./get-C9gxS0ZW.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./Layer-BUN3jU8m.js";import"./Curve-ByI9xGCG.js";import"./types-CMjaNGyL.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-u006QBg6.js";import"./Label-B9RstaAA.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./useAnimationId-CPqzTwnW.js";import"./ActivePoints-z37_g_gd.js";import"./Dot-GJcUxxVA.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getRadiusAndStrokeWidthFromDot-WWzyayAr.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./CartesianAxis-Bo6M1fU4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";import"./Cross-BHUS_DrE.js";import"./Rectangle-L3OxoeXe.js";import"./util-Dxo8gN5i.js";import"./Sector-DQ8c-GNj.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};
