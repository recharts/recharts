import{r as i,R as e}from"./iframe-BGOT0UMq.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BJ9jtgC7.js";import{R as C}from"./zIndexSlice-BPU0EfFx.js";import{L as s}from"./Line-JD7ySvzw.js";import{X as p}from"./XAxis-Cg--p2uq.js";import{T as c}from"./Tooltip-CkaqGQxO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CjrWTlpw.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Wq_jv7lJ.js";import"./throttle-gIJqAgIK.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./Layer-C_IgQKNN.js";import"./Curve-DVizwtjl.js";import"./types-B69giCR1.js";import"./step-B3HmNN3j.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DLd27jVc.js";import"./Label-BU1lFQ2f.js";import"./Text-D50SBSje.js";import"./DOMUtils-DS3nE711.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./useAnimationId-B8wYOiNY.js";import"./ActivePoints-qLhVMlGM.js";import"./Dot-CUw-BquZ.js";import"./RegisterGraphicalItemId-CDcrkiRG.js";import"./ErrorBarContext-C9R0WBsq.js";import"./GraphicalItemClipPath-CPiocMLU.js";import"./SetGraphicalItem-C3s6q2T3.js";import"./getRadiusAndStrokeWidthFromDot-C5RVjXgj.js";import"./ActiveShapeUtils-DjoIgzDR.js";import"./useGraphicalItemIdentity-NEokAZII.js";import"./CartesianAxis-hSXvCGlw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-qq_A2Adc.js";import"./uniqBy-DxQg0KF1.js";import"./iteratee-BjdoCIjK.js";import"./Cross-BrzaeTP3.js";import"./Rectangle-BYLcafiV.js";import"./util-Dxo8gN5i.js";import"./Sector-TCzhosuq.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
