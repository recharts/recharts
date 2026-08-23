import{r as s,R as e}from"./iframe-DjwM0vgm.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CKgvEI7y.js";import{R as C}from"./zIndexSlice-S6d1Qn7a.js";import{L as m}from"./Line-D-8O9Mab.js";import{X as p}from"./XAxis-BZppthUd.js";import{T as c}from"./Tooltip-CLlN6saw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BA3LaKhk.js";import"./index-DNt860Ln.js";import"./index-DxMXUOIN.js";import"./index-D4-5N2-z.js";import"./index-z5DhIgT0.js";import"./throttle-CucYyHCR.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUwM7bTC.js";import"./resolveDefaultProps-BFL8H9_0.js";import"./isWellBehavedNumber-DYJhUs7I.js";import"./d3-scale-CwSigEVq.js";import"./renderedTicksSlice-BdL9Tyr5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqDwVa2A.js";import"./chartDataContext-D_305TZw.js";import"./CategoricalChart-Cq3eseQi.js";import"./Layer-4XX9ZvT_.js";import"./Curve-BULGBxkP.js";import"./types-Co4bPNAL.js";import"./step-B9Cib_uB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C2ZGCcD3.js";import"./Label-DksVCiKj.js";import"./Text-esJ64cTt.js";import"./DOMUtils-CoSy3vPc.js";import"./useId-C20ArA-J.js";import"./useBackwardsCompatibleTheme-DiGCOcMi.js";import"./ZIndexLayer-BplzHMbl.js";import"./useAnimationId-C_ptHuMP.js";import"./ActivePoints-3wMe_Rof.js";import"./Dot-CVNFD5oh.js";import"./RegisterGraphicalItemId-Bfv8TlvG.js";import"./ErrorBarContext-SnNUtmYc.js";import"./GraphicalItemClipPath-BTc4Rf5I.js";import"./SetGraphicalItem-BH3XWVOo.js";import"./getRadiusAndStrokeWidthFromDot-swb7_H1P.js";import"./ActiveShapeUtils-D8QEGcp-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-SmpQZLxS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CRpgW7vZ.js";import"./uniqBy-p0oDiZgx.js";import"./iteratee-Ci02_5B5.js";import"./Cross-BDdB4vhK.js";import"./Rectangle-Dhvnt00l.js";import"./util-Dxo8gN5i.js";import"./Sector-BRNZ1tO0.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};
