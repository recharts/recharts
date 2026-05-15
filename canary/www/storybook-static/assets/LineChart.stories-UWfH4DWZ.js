import{r as s,e}from"./iframe-B0S7Bw5r.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B4FDZDv9.js";import{R as C}from"./arrayEqualityCheck-B6UHuCSW.js";import{L as n}from"./Line-D68t4KMI.js";import{R as A}from"./RechartsHookInspector-CMq6C7Gt.js";import{X as p}from"./XAxis-DiUkTxAp.js";import{T as c}from"./Tooltip-ZhoZYo-6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./immer-evaWtkoc.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./zIndexSlice-9UjK9UdZ.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./Layer-Dc2WQE0F.js";import"./ReactUtils-X5Zc33o_.js";import"./Label-Sf__cS6l.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./ZIndexLayer-D8Z-QIey.js";import"./ActivePoints-zTeK-7RL.js";import"./Dot-DXEnHZYi.js";import"./types-DOzdXJDs.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./ErrorBarContext-CJSJ027V.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./useAnimationId-NZHn6B37.js";import"./getRadiusAndStrokeWidthFromDot-iWtNb3XX.js";import"./ActiveShapeUtils-BunL0KP8.js";import"./isPlainObject-Dg3LRGot.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-R6r6MP54.js";import"./Trapezoid-CwbraNO9.js";import"./Sector-CoxeQB-O.js";import"./Symbols-CYKSAWm0.js";import"./symbol-B-6h4y7x.js";import"./step-BpWwZl0O.js";import"./Curve-DEKI4hEN.js";import"./index-j_275XjD.js";import"./ChartSizeDimensions-C7fjLK0m.js";import"./OffsetShower-xAOZ3hBm.js";import"./PlotAreaShower-VWh9CzYD.js";import"./CartesianAxis-xLcMiLgB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-z_Q4U8yI.js";import"./uniqBy-L7bCXYuO.js";import"./iteratee-BbOKiONH.js";import"./Cross-oxAmOxir.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
