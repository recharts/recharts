import{r as s,R as e}from"./iframe-DiVXU681.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BawnwMxD.js";import{R as C}from"./zIndexSlice-DzaA_87S.js";import{L as n}from"./Line-BlL2BOn4.js";import{X as p}from"./XAxis-C3k2I40a.js";import{T as c}from"./Tooltip-24mP4oxf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./throttle-TSFzffo4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D56P7LNb.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./Layer-BIRlOb6y.js";import"./Curve-BjRrTa61.js";import"./types-VNyUreZc.js";import"./step-CQ2-KwOC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CmBbc9Cv.js";import"./Label-0bv0xRMH.js";import"./Text-CCIULR2F.js";import"./DOMUtils-CLkaSbmi.js";import"./ZIndexLayer-BbNui_5z.js";import"./useAnimationId-CxWNxwEQ.js";import"./ActivePoints-DG4FSK5q.js";import"./Dot-BqazTdoT.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./ErrorBarContext-DQhhoIiU.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getRadiusAndStrokeWidthFromDot-BO77BdP0.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./CartesianAxis-pQr6RLfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DnWcYAZJ.js";import"./uniqBy-BfbLVdUA.js";import"./iteratee-BKX_gc7E.js";import"./Cross-DfLUlGK_.js";import"./Rectangle-NkoMZfI8.js";import"./util-Dxo8gN5i.js";import"./Sector-B85yuHHd.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
