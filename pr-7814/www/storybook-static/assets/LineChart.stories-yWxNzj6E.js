import{r as i,R as e}from"./iframe-u9oyaNDa.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-B97ZiehQ.js";import{R as C}from"./zIndexSlice-CP6DEYJK.js";import{L as s}from"./Line-7GaAxAzO.js";import{X as p}from"./XAxis-mDQaQsGs.js";import{T as c}from"./Tooltip-DiUmtIlX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUYC64MV.js";import"./resolveDefaultProps-DAwvazXN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-OhjP93PE.js";import"./throttle-BNJMxzFn.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./Layer-DjumWApv.js";import"./Curve-DGZmW8IJ.js";import"./types-DQ_9ILU-.js";import"./step-BrZPGksV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOaP-WB5.js";import"./Label-Q8r239gm.js";import"./Text-BjcDy3qe.js";import"./DOMUtils-ClqiwCzY.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./ZIndexLayer-CWsudvRq.js";import"./useAnimationId-DzZz4Iie.js";import"./ActivePoints-CvbD508d.js";import"./Dot-CL6-lJmb.js";import"./RegisterGraphicalItemId-DN5KjZcx.js";import"./ErrorBarContext-3dixV13Q.js";import"./GraphicalItemClipPath-DV3LH61r.js";import"./SetGraphicalItem-Cs7cmOu4.js";import"./getRadiusAndStrokeWidthFromDot-CN_YkoZo.js";import"./ActiveShapeUtils-DNXHDk_r.js";import"./useGraphicalItemIdentity-BpDjC4sF.js";import"./CartesianAxis-BInpl5Mc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C-12Rct7.js";import"./uniqBy-ThGgtOY0.js";import"./iteratee-TQ17fPkk.js";import"./Cross-DBjhH0rb.js";import"./Rectangle-un1MW7QV.js";import"./util-Dxo8gN5i.js";import"./Sector-qC3sba4E.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
