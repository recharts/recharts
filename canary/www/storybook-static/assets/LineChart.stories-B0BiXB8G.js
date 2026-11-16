import{r as i,R as e}from"./iframe-CO23d3n1.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-hSFM3_oe.js";import{R as C}from"./zIndexSlice-DMSZKiVC.js";import{L as s}from"./Line-9yhlogYr.js";import{X as p}from"./XAxis-BoBOjjsH.js";import{T as c}from"./Tooltip-DGlV0wbU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bh8_r7fw.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DJQVEMl6.js";import"./throttle-B66_T3U8.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./polarAxisSelectors-D8_om16C.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C9xcvLA3.js";import"./index-D4fJrATD.js";import"./index-D0uo_LWY.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./Layer-CYlWB893.js";import"./Curve-4EA_oLfz.js";import"./types-BU4Ojrin.js";import"./step-C-f981dl.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BB1e2MfD.js";import"./Label-2Fni25es.js";import"./Text-DWIEtkwC.js";import"./ZIndexLayer-DcfMfyOV.js";import"./ActivePoints-DF4l2wc6.js";import"./Dot-DD8m7FDf.js";import"./activeStyles-Bl6Emzo4.js";import"./useAnimationId-DzTpCf5I.js";import"./Symbols-BjRa6Boz.js";import"./symbol-CniqeamR.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./getRadiusAndStrokeWidthFromDot-p6N7re72.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./CartesianAxis-Dnx0rUNa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DdC3N3ay.js";import"./uniqBy-MGV_25lQ.js";import"./iteratee-BTK9QdXN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CrPnjk2H.js";import"./Rectangle-xnUKvACR.js";import"./util-Dxo8gN5i.js";import"./Sector-CxWlo4ry.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
