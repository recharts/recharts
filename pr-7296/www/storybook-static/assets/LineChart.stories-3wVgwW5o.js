import{r as s,e}from"./iframe-BIeRAvIs.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-VyoefzlV.js";import{R as C}from"./arrayEqualityCheck-Bo5lKgUH.js";import{L as n}from"./Line-CNyBQv9K.js";import{R as A}from"./RechartsHookInspector-ZnpsfR9f.js";import{X as p}from"./XAxis-Bz_wbRMX.js";import{T as c}from"./Tooltip-Bf47inJY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./immer-5-lHdrEI.js";import"./hooks-DF9hzSyO.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./zIndexSlice-C0VSrdrd.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./resolveDefaultProps-B7afBTwD.js";import"./Layer-BzoHvM-S.js";import"./ReactUtils-hS7xEmGS.js";import"./Label-B1v8zCXy.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./ZIndexLayer-BTjArk6I.js";import"./ActivePoints-efPNJuTS.js";import"./Dot-pi2zX1oI.js";import"./types-DQojIKJi.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./ErrorBarContext-BHrSsU01.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./useAnimationId-C9Uv8ueb.js";import"./getRadiusAndStrokeWidthFromDot-D7Vs4ffU.js";import"./ActiveShapeUtils-Bps_BZs-.js";import"./isPlainObject-l3KiUXnf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYSY3nrg.js";import"./Trapezoid-C_yuwcEm.js";import"./Sector-EPL29HSF.js";import"./Symbols-BeXKfzK2.js";import"./symbol-CFCWUA3z.js";import"./step-CNOKEUU2.js";import"./Curve-BwmaiqIM.js";import"./index-CG5u5SYH.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./OffsetShower-VB1mbOI0.js";import"./PlotAreaShower-Dt-mgpmA.js";import"./CartesianAxis-2__l5TP8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BNrYAXx-.js";import"./uniqBy-DUPncpu5.js";import"./iteratee-YXX4R6kw.js";import"./Cross-CfKJtijX.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
