import{r as i,R as e}from"./iframe-C0aK3mAR.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-aN-j3XL0.js";import{R as C}from"./zIndexSlice-CaqKW8u4.js";import{L as s}from"./Line-YVyFfETe.js";import{X as p}from"./XAxis-oAoSo46I.js";import{T as c}from"./Tooltip-C5OWskP-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D12_Reb0.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D_X7VOsT.js";import"./throttle-Csdh9d4D.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./polarAxisSelectors-CptuzTw1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_djSwnK.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./Layer-CagqC790.js";import"./Curve-OWEMFZrc.js";import"./types-CmOm39qI.js";import"./step-BYip5hLG.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-cRuikTAi.js";import"./Label-DrUlGLQ7.js";import"./Text-sM2vj8c3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./ActivePoints-BHO4PoXJ.js";import"./Dot-C9rBqPl7.js";import"./activeStyles-D8lDViyk.js";import"./useAnimationId-sv0XuVET.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./ErrorBarContext-zrW_wYS_.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getRadiusAndStrokeWidthFromDot-QbS_nSQ9.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./useEffectiveDataKey-C4GReELG.js";import"./CartesianAxis-CUkLyyeh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bd-Smj9e.js";import"./uniqBy-BgGQ3Z2O.js";import"./iteratee-BXSX8eL-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-PSRIh47R.js";import"./Rectangle-D2OQ5a3O.js";import"./util-Dxo8gN5i.js";import"./Sector-C1PqGwtk.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
