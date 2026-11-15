import{r as i,R as e}from"./iframe--N-T_hBz.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-kwmHH-ds.js";import{R as C}from"./zIndexSlice-BrmEEgcV.js";import{L as s}from"./Line-DFZhpl4a.js";import{X as p}from"./XAxis-DdKAxJ7S.js";import{T as c}from"./Tooltip-BblCHtO7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dga53r6u.js";import"./resolveDefaultProps-BZdVkepW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-dSJNPUYj.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./Layer-1myxLhO2.js";import"./Curve-AUzua7kl.js";import"./types-CDdNjsiG.js";import"./step-BCTml7Sd.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CggySQjW.js";import"./Label-DcuyFpKL.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./ActivePoints-BSj_UmGI.js";import"./Dot-MqsnkUih.js";import"./activeStyles-CQz5jccO.js";import"./useAnimationId-B0H5IbY6.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./ErrorBarContext-Cxj8MR3w.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getRadiusAndStrokeWidthFromDot-C_-ClNXz.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./CartesianAxis-D25MAZFZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DwViDVhc.js";import"./uniqBy-Ba4jswSg.js";import"./iteratee-CiVllZTn.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BpIRhDE_.js";import"./Rectangle-C0b2pOCq.js";import"./util-Dxo8gN5i.js";import"./Sector-Bqy4ZQqB.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
