import{r as s,e}from"./iframe-C3KLAr_X.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-EylGj-2b.js";import{R as C}from"./arrayEqualityCheck-DnI1m1N4.js";import{L as n}from"./Line-_AKn2THI.js";import{R as A}from"./RechartsHookInspector-CDrt9EHV.js";import{X as p}from"./XAxis-BBmktT_d.js";import{T as c}from"./Tooltip-DgK5KqS0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CHSmfZwv.js";import"./index-C-7EyPyC.js";import"./immer-7U5Tji_6.js";import"./hooks-DZuDX4va.js";import"./axisSelectors-CWLPDJ8I.js";import"./d3-scale-ZNDiiXCQ.js";import"./zIndexSlice-Cl9Q2qHp.js";import"./renderedTicksSlice-Y_XNygaP.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CwI8QMMb.js";import"./chartDataContext-BIjR8iwE.js";import"./CategoricalChart-CWEKSGB2.js";import"./resolveDefaultProps-CDRZbdh0.js";import"./Layer-gez65z60.js";import"./ReactUtils-Dl7XDcr4.js";import"./Label-D03TCqMA.js";import"./Text-CKsAfS2q.js";import"./DOMUtils-BTX_GG3X.js";import"./ZIndexLayer-ZwdT_RoZ.js";import"./ActivePoints-C0SjOUTr.js";import"./Dot-b607mIJy.js";import"./types-CUBBvZMp.js";import"./RegisterGraphicalItemId-uSngcEvn.js";import"./ErrorBarContext-pe48v0HA.js";import"./GraphicalItemClipPath-CrZc4JF3.js";import"./SetGraphicalItem-CgbMvRrw.js";import"./useAnimationId-BHPPVsUk.js";import"./getRadiusAndStrokeWidthFromDot-CfDNziOs.js";import"./ActiveShapeUtils-BDuTGezX.js";import"./isPlainObject-1BlW33tf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNR6RJPB.js";import"./Trapezoid-Bo7unZPt.js";import"./Sector-DDPunuhX.js";import"./Symbols-BpWkyHSI.js";import"./symbol-Bi41egzv.js";import"./step-nMlGD7PS.js";import"./Curve-DuWzArMY.js";import"./index-D4Ia_Qi8.js";import"./ChartSizeDimensions-BUMoLVC9.js";import"./OffsetShower-Bzqo_bHi.js";import"./PlotAreaShower-9mAhzD5z.js";import"./CartesianAxis-B4oXNbAG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BzB57i36.js";import"./uniqBy-Cv-Iaane.js";import"./iteratee-Bd1b-YF_.js";import"./Cross-B-4L7eoI.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
