import{r as s,R as e}from"./iframe-DqR9Wcc8.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BUbtnRjr.js";import{R as C}from"./zIndexSlice-xGZRRsol.js";import{L as m}from"./Line-B9-enMa0.js";import{X as p}from"./XAxis-D6ZHtCxW.js";import{T as c}from"./Tooltip-erEqSpoz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1r2IRn89.js";import"./index-BM32474r.js";import"./index-Dri9MlSm.js";import"./index-CbJoLlYH.js";import"./index-D7HcE4ER.js";import"./throttle-Die-14D_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C4f15nEZ.js";import"./resolveDefaultProps-CE9KWHQ7.js";import"./isWellBehavedNumber-CwOhzfGR.js";import"./d3-scale-CAWaFyWJ.js";import"./renderedTicksSlice-D_2jrhVU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-sKen-XIs.js";import"./chartDataContext-CtOkxvrA.js";import"./CategoricalChart-IMV6Cr9c.js";import"./Layer-DIEU6Rsu.js";import"./Curve-BJ-wJMc8.js";import"./types-CwWmwHzD.js";import"./step-BtguIK0L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BnD_-gzN.js";import"./Label-BYPDwyti.js";import"./Text-CCjVuIgd.js";import"./DOMUtils-gqBnduPC.js";import"./useId-DKdBWodA.js";import"./useBackwardsCompatibleTheme-CwCCGp3S.js";import"./ZIndexLayer-CGt7Qqz1.js";import"./useAnimationId-BRWCn8G_.js";import"./ActivePoints-BTHz1vc8.js";import"./Dot-D1oj5oJp.js";import"./RegisterGraphicalItemId-DE2Efd51.js";import"./ErrorBarContext-mgM-6MAT.js";import"./GraphicalItemClipPath-DlZT7n4i.js";import"./SetGraphicalItem-Y-0P1f8y.js";import"./getRadiusAndStrokeWidthFromDot-CbfPJyLi.js";import"./ActiveShapeUtils-RlM9Arec.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-1hhq5YML.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-B9s5QY5V.js";import"./uniqBy-BMuxe0j6.js";import"./iteratee-DmaCZN6x.js";import"./Cross-BMahMfpW.js";import"./Rectangle-rLnjQriQ.js";import"./util-Dxo8gN5i.js";import"./Sector-BST40rBb.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
