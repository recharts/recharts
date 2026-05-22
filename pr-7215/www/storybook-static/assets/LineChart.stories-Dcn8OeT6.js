import{u as i,e}from"./iframe-DF4bgTei.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-D_gMte7O.js";import{g as C}from"./arrayEqualityCheck-BMFJWZLR.js";import{L as n}from"./Line-BRJiVivl.js";import{R as A}from"./RechartsHookInspector-D-0gsnbs.js";import{X as p}from"./XAxis-DbY3ezb1.js";import{T as c}from"./Tooltip-k_OdOkyj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQPl6oVo.js";import"./index-BTdRTt63.js";import"./immer-MYTD12gY.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./Layer-B2y3FrWZ.js";import"./Curve-BOvv8LQu.js";import"./types-D1G2vCVO.js";import"./step-BNKRdB7Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NJgg5Z7A.js";import"./Label-BpQxBJRP.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./ZIndexLayer-k5HrhQv7.js";import"./useAnimationId-UfrY9hCr.js";import"./ActivePoints-DmxnIX1w.js";import"./Dot-BYGa6gij.js";import"./RegisterGraphicalItemId-BXLg-7qN.js";import"./ErrorBarContext-FGV68ztp.js";import"./GraphicalItemClipPath-DJtNLijn.js";import"./SetGraphicalItem-CZCtNcvF.js";import"./getRadiusAndStrokeWidthFromDot-gX3jCxFw.js";import"./ActiveShapeUtils-CkfODQkB.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";import"./CartesianAxis-OtzrWNBq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BcTVsJDN.js";import"./uniqBy-BXIpk_rG.js";import"./iteratee-BpH81eH_.js";import"./Cross-B-zZt1A_.js";import"./Rectangle-BRW7e3qr.js";import"./Sector-CZ_a1zY_.js";const He={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Se=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Se as __namedExportsOrder,He as default};
