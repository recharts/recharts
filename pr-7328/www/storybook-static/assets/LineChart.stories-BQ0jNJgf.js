import{r as s,e}from"./iframe-BNMXyeq9.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DxbtuVQ7.js";import{R as C}from"./arrayEqualityCheck-Beh0vaeo.js";import{L as n}from"./Line-gdwjxtB7.js";import{R as A}from"./RechartsHookInspector-DoNDmCSP.js";import{X as p}from"./XAxis-BQQS4Uyr.js";import{T as c}from"./Tooltip-DE-Xht-O.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-p99nh58x.js";import"./index-CqHAUX4Y.js";import"./immer-DLDegpHz.js";import"./hooks-CxmJQzvA.js";import"./axisSelectors-Bjzn5CZG.js";import"./d3-scale-jx-p6VOM.js";import"./zIndexSlice-BXAFsMol.js";import"./renderedTicksSlice-BOGp2GeV.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BotaMIv-.js";import"./chartDataContext-C7KiXxa1.js";import"./CategoricalChart-Ced0NDVQ.js";import"./resolveDefaultProps-DqK5jQb8.js";import"./Layer-9B5krggT.js";import"./ReactUtils-BiDFqrgq.js";import"./Label-CmY8D_Vk.js";import"./Text-DpT8fH0_.js";import"./DOMUtils-bKs0Y9ns.js";import"./ZIndexLayer-rfj-vOql.js";import"./ActivePoints-BNreOZF9.js";import"./Dot-C8tx3hOP.js";import"./types-C7VY0BRq.js";import"./RegisterGraphicalItemId-qopa_Nsy.js";import"./ErrorBarContext-DocAQmKI.js";import"./GraphicalItemClipPath-BN3M0qNc.js";import"./SetGraphicalItem-CpGjwelu.js";import"./useAnimationId-BIOuiTZH.js";import"./getRadiusAndStrokeWidthFromDot-lM7t1HK-.js";import"./ActiveShapeUtils-D0ia5i81.js";import"./isPlainObject-B18GKfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DjmVhQIC.js";import"./Trapezoid-CbRqZG4l.js";import"./Sector-CWORy7MA.js";import"./Symbols-BX6LNW-t.js";import"./symbol-CO4n4duV.js";import"./step-BVNiQCr9.js";import"./Curve-CIYQTlJO.js";import"./index-Dh6m6MB-.js";import"./ChartSizeDimensions-CH4qJAUd.js";import"./OffsetShower-CtjINnVg.js";import"./PlotAreaShower-BAtsa-GO.js";import"./CartesianAxis-CFKApKAY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DBo3BKsc.js";import"./uniqBy-BkkLROVl.js";import"./iteratee-DR_LWlIn.js";import"./Cross-CiHOZNs8.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
