import{r as s,e}from"./iframe-DHSCsAdF.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-ByyADZkz.js";import{R as C}from"./arrayEqualityCheck-DejELsrN.js";import{L as n}from"./Line-xRKz7Lqu.js";import{R as A}from"./RechartsHookInspector-Bl_b1l7P.js";import{X as p}from"./XAxis-rIWvyQc_.js";import{T as c}from"./Tooltip-DmuGD4wR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DegZicoB.js";import"./index-CpBtaSsl.js";import"./immer-B7vO4s3P.js";import"./hooks-Ed4LhnTQ.js";import"./axisSelectors-CI0vprku.js";import"./d3-scale-m9dtnhXI.js";import"./zIndexSlice-CsWdvizj.js";import"./renderedTicksSlice-BJJo2R47.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-OvkPOyqJ.js";import"./chartDataContext-CG3f3Y43.js";import"./CategoricalChart-DOIkqHpB.js";import"./resolveDefaultProps-DdBt44A0.js";import"./Layer-CgIzBpZ9.js";import"./ReactUtils-CI0cWBwW.js";import"./Label-C3rJ2_4a.js";import"./Text-BU_Eo4vH.js";import"./DOMUtils-DnRUdIba.js";import"./ZIndexLayer-NxKSFRC9.js";import"./ActivePoints-BU40hces.js";import"./Dot-BKOJ7ZOA.js";import"./types-BJ3oAoHr.js";import"./RegisterGraphicalItemId-Co8itO9h.js";import"./ErrorBarContext-BnFLkwS3.js";import"./GraphicalItemClipPath-7TaZPKiL.js";import"./SetGraphicalItem-CGPj629n.js";import"./useAnimationId-DdH8uK_v.js";import"./getRadiusAndStrokeWidthFromDot-C6SN24Cr.js";import"./ActiveShapeUtils-D-9eavqk.js";import"./isPlainObject-DIsRAxNl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-nZJBYK.js";import"./Trapezoid-DaZMlX5v.js";import"./Sector-DwAaS_QE.js";import"./Symbols-ChUxQx2e.js";import"./symbol-Dw26CW2u.js";import"./step-BXBXLUST.js";import"./Curve-DdDf1hH6.js";import"./index-C9zRLUqd.js";import"./ChartSizeDimensions-na2CXaMS.js";import"./OffsetShower-BYL_rrah.js";import"./PlotAreaShower-BF-kz2CC.js";import"./CartesianAxis-BCj8T9-Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DK8TM0kx.js";import"./uniqBy-BXsrqUuV.js";import"./iteratee-RqtmE6ui.js";import"./Cross-DqE97NNl.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
