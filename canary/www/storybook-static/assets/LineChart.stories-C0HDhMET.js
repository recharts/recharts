import{r as s,R as e}from"./iframe-BBGBS6DV.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BnHHOdKp.js";import{R as C}from"./zIndexSlice-C7go6sDc.js";import{L as n}from"./Line-xVNNGowX.js";import{X as p}from"./XAxis-CMxF0Wjl.js";import{T as c}from"./Tooltip-CDVrlBj3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZVIAxqy.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./immer-u2-xWsf6.js";import"./get-BV7Nc0IZ.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CategoricalChart-BNe26d_a.js";import"./Layer-C7b9GhMV.js";import"./Curve-D7BUefvS.js";import"./types-Bj7fEVXg.js";import"./step-Deq8dNp2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-alz79Juh.js";import"./Label-Iqg4BS5e.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./ZIndexLayer-WmfwTIzB.js";import"./useAnimationId-CCG8jh7R.js";import"./ActivePoints-9mxUzEHn.js";import"./Dot-DdV24ZDH.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./ErrorBarContext-BeUQIIOs.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";import"./getRadiusAndStrokeWidthFromDot-DsI7ajDG.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./CartesianAxis-DBDeoTme.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BG_pV8kB.js";import"./uniqBy-Bo0b8aJc.js";import"./iteratee-BBXnt8_Z.js";import"./Cross-BcF5M0Gn.js";import"./Rectangle-EzzDeVF8.js";import"./Sector-DZ74VsoL.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
