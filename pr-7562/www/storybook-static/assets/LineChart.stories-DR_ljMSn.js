import{r as s,R as e}from"./iframe-54ZcEpUv.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D01Tsqu3.js";import{R as C}from"./zIndexSlice-D4EcTS4q.js";import{L as n}from"./Line-DXl0be7s.js";import{X as p}from"./XAxis-BhMXtQiv.js";import{T as c}from"./Tooltip-5XrQW7rn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./throttle-DtmCwuH2.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./d3-scale-Bz_vEXwn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./Layer-C5bNrRV9.js";import"./Curve-FTpO0g2t.js";import"./types-kdBRSK-c.js";import"./step-BsOSpGLs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bo-aqLFl.js";import"./Label--73vW_dK.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./ZIndexLayer-CQupnOhG.js";import"./useAnimationId-D-RZ_xXC.js";import"./ActivePoints-DSvyBCZS.js";import"./Dot-C2NjTS0n.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./ErrorBarContext-DIEqyawL.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getRadiusAndStrokeWidthFromDot-eGcgYRyQ.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./CartesianAxis-BfyoGem3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CHF_XBdP.js";import"./uniqBy-DtjPrqio.js";import"./iteratee-Bz0VOYsU.js";import"./Cross-434ElTmF.js";import"./Rectangle-KX1Q4ZbD.js";import"./util-Dxo8gN5i.js";import"./Sector-DS_9F4Dx.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
