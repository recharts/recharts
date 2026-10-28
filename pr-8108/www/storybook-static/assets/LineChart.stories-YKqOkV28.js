import{r as i,R as e}from"./iframe-DbrRN1n8.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-sDu7ccg8.js";import{R as C}from"./zIndexSlice-Du0Au1R-.js";import{L as s}from"./Line-C6WqqYHN.js";import{X as p}from"./XAxis-D4Dr_tjl.js";import{T as c}from"./Tooltip-C7nLXyTl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlyIgJor.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DK6uFkxV.js";import"./throttle-DUdTYHJ7.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./polarAxisSelectors-D77BuFKC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUENC00q.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./Layer-Do_lw1Xj.js";import"./Curve-CoHdM9Ch.js";import"./types-DkNvVUMM.js";import"./step-I4MYWlIC.js";import"./path-DyVhHtw_.js";import"./LabelList-BgsnBCM1.js";import"./Label-A7WyPB0I.js";import"./Text-WfDu__TP.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./ActivePoints-BRaVZy1t.js";import"./Dot-CwOWQR4j.js";import"./activeStyles-BV7TfXze.js";import"./useAnimationId-CvK-4pcw.js";import"./dataEntryStyles-CKR3qDl0.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getRadiusAndStrokeWidthFromDot-GpKWvG3K.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./CartesianAxis-BCK1OBBy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CTE_e8_t.js";import"./uniqBy-KNYEdHaO.js";import"./iteratee-Dv9in7l7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DFNkfyvS.js";import"./Rectangle-3NP_NJyH.js";import"./util-Dxo8gN5i.js";import"./Sector-qqHQzkjF.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
