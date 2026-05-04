import{r as s,e}from"./iframe-Cm3fKKya.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B-WZkPSW.js";import{R as C}from"./arrayEqualityCheck-CQWVDseH.js";import{L as n}from"./Line-CUx7_hG8.js";import{R as A}from"./RechartsHookInspector-CpOXiD6O.js";import{X as p}from"./XAxis-_gagIVgp.js";import{T as c}from"./Tooltip-DNGuo1m5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-oDzj0r.js";import"./index-9rVBxZPD.js";import"./immer-CEWtNvyb.js";import"./hooks-B3tRCSat.js";import"./axisSelectors-Bwtc5iq4.js";import"./d3-scale-BjMiYTJr.js";import"./zIndexSlice-DYSMWhOl.js";import"./renderedTicksSlice-BZy1ZNqb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BrFBpup6.js";import"./chartDataContext-B_eInrg7.js";import"./CategoricalChart-CY8DZn6m.js";import"./resolveDefaultProps-BkcHGYVM.js";import"./Layer-Bjej1AmV.js";import"./ReactUtils-CCKIvuk2.js";import"./Label-DcJ8tF7g.js";import"./Text-DvSAUV0i.js";import"./DOMUtils-QUjg2Yua.js";import"./ZIndexLayer-Dsdg_UUE.js";import"./ActivePoints-XXtVAAS1.js";import"./Dot-elfvXfLw.js";import"./types-Cdoht-KM.js";import"./RegisterGraphicalItemId-DJy9dO_8.js";import"./ErrorBarContext-DewfvX2H.js";import"./GraphicalItemClipPath-CRdIG2N7.js";import"./SetGraphicalItem-BjOYW37Q.js";import"./useAnimationId-C78FuYWX.js";import"./getRadiusAndStrokeWidthFromDot-D5QROXAR.js";import"./ActiveShapeUtils-CLgS6WZt.js";import"./isPlainObject-C3QqYDDv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7ODVlbIW.js";import"./Trapezoid-DvgpBRjx.js";import"./Sector-DrC_WEC7.js";import"./Symbols-BZXh3G7C.js";import"./symbol-atQbT2WX.js";import"./step-ClEFzmqb.js";import"./Curve-C9IFio54.js";import"./index-DsjXiXu7.js";import"./ChartSizeDimensions-DHQ2iMpX.js";import"./OffsetShower-Be6n4fO7.js";import"./PlotAreaShower-DRAX5UGP.js";import"./CartesianAxis-DUjBj8lo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DSmvd2Je.js";import"./uniqBy-BhwEwJ-s.js";import"./iteratee-BKobvmlS.js";import"./Cross-DA5JVAUA.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
