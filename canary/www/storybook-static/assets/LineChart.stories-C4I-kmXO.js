import{u as i,e}from"./iframe-BhUxTtiL.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-L4wvqIBp.js";import{g as C}from"./arrayEqualityCheck-DppgWusB.js";import{L as n}from"./Line-p3VovnKi.js";import{R as A}from"./RechartsHookInspector-JMIq0pQS.js";import{X as p}from"./XAxis-C73en9jh.js";import{T as c}from"./Tooltip-5YUiJS6V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./immer-CHCHxlI3.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./resolveDefaultProps-BwRhqspK.js";import"./Curve-BICrVSEu.js";import"./types-Lg-gn8wA.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./Layer-BGQI9FGV.js";import"./ReactUtils-BLhQELGN.js";import"./Label-B-L_WnHM.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./ZIndexLayer-BPpIaF6c.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";import"./CartesianAxis-Dg6rum68.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-JSdm64jE.js";import"./uniqBy-BCcn4akX.js";import"./iteratee-BIvWeTYe.js";import"./Cross-4Dq1pJa5.js";import"./Rectangle-CXSstgx1.js";import"./Sector-C6l3Kc-d.js";const Be={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const He=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,He as __namedExportsOrder,Be as default};
