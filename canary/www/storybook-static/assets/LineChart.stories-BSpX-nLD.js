import{r as i,R as e}from"./iframe-RcHlpEKf.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bl79bY0o.js";import{R as C}from"./zIndexSlice-BoP2xr6w.js";import{L as s}from"./Line-HYy8FRYx.js";import{X as p}from"./XAxis-BH3R8cCN.js";import{T as c}from"./Tooltip-BiJgaYT3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqdoPGo4.js";import"./resolveDefaultProps-Sy-hwd8S.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BfZD20OT.js";import"./throttle-B-NCjC4g.js";import"./index-vzeW1Ty_.js";import"./index-rSShmn2P.js";import"./isWellBehavedNumber-h-vCOYII.js";import"./d3-scale-phcZca4Z.js";import"./index-DfHRgTU5.js";import"./index-D8H-d46C.js";import"./renderedTicksSlice-Dzlqim1n.js";import"./index-BtSxVTMy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDx2cMpK.js";import"./chartDataContext-vN80Diu9.js";import"./CategoricalChart-CAKS8zF4.js";import"./Layer-Bl7Trn9v.js";import"./Curve-CcZscRZ7.js";import"./types-JXLuZB-s.js";import"./step-pIWHJRNG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BD0VccbN.js";import"./Label-BpQvgwWr.js";import"./Text-DfdPFWZL.js";import"./DOMUtils-CQKDG8TV.js";import"./useId-B6srCqhz.js";import"./useBackwardsCompatibleTheme-nHddxgax.js";import"./ZIndexLayer-BNX-NDC0.js";import"./useAnimationId-9jumoZun.js";import"./ActivePoints-Ba2vyqxq.js";import"./Dot-C4knZ77r.js";import"./RegisterGraphicalItemId-CnIEFT0k.js";import"./ErrorBarContext-D1YbY_j0.js";import"./GraphicalItemClipPath-CsLhpBaz.js";import"./SetGraphicalItem-DuO6azf0.js";import"./getRadiusAndStrokeWidthFromDot-hc8l7Jma.js";import"./ActiveShapeUtils-B2oqSRKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Br9WShXs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-D_VyJzbA.js";import"./uniqBy-C7Ad3lRf.js";import"./iteratee-D_13UF3J.js";import"./Cross-DcmaQtiU.js";import"./Rectangle-DeaA5h0E.js";import"./util-Dxo8gN5i.js";import"./Sector-D2MS7gxB.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
