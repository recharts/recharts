import{r as i,R as e}from"./iframe-Z4zOoLz7.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BxYqEgdH.js";import{R as C}from"./zIndexSlice-07-9uDTC.js";import{L as s}from"./Line-D2Sd7QBy.js";import{X as p}from"./XAxis-vC51wnfX.js";import{T as c}from"./Tooltip-BQCBXkHh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6jGY5P2.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D5RAwviA.js";import"./throttle-9WzIUwC-.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./isWellBehavedNumber-Ds32fXh1.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./Layer-DROZCM5S.js";import"./Curve-B2kFPXHR.js";import"./types-BIzeqQN_.js";import"./step-Bz8uLEg2.js";import"./path-DyVhHtw_.js";import"./activeStyles-Clj_q_02.js";import"./Label-CznRo0qq.js";import"./Text-D1NXAhAr.js";import"./pageBackground-cgE2GIfC.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./ZIndexLayer-CzgpVDV6.js";import"./useAnimationId-CclGmA5U.js";import"./dataEntryStyles-jPYjF1-F.js";import"./ActivePoints-Cf8I1OR_.js";import"./Dot-BYY6Lyl-.js";import"./ErrorBarContext-DyrSqIsA.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./getRadiusAndStrokeWidthFromDot-oWL_gOl_.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";import"./CartesianAxis-D0qgtLuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-S6uYAEYX.js";import"./uniqBy-D7Oablgk.js";import"./iteratee-BmQxJUF4.js";import"./Cross-Cs-2djo7.js";import"./Rectangle-BRzNxGc4.js";import"./util-Dxo8gN5i.js";import"./Sector-CO7Pa82d.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
