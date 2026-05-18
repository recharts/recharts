import{u as s,e}from"./iframe-DZ8hthY-.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-iuMVAsHC.js";import{g as C}from"./arrayEqualityCheck-CM4xUg98.js";import{L as n}from"./Line-ByZpIY1G.js";import{R as A}from"./RechartsHookInspector-UTj_zoVi.js";import{X as p}from"./XAxis-miaKL81g.js";import{T as c}from"./Tooltip-BzBtiibB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUTuEf4Y.js";import"./index-D76bsI4z.js";import"./immer-BecrFbrr.js";import"./hooks-DoB3DHlQ.js";import"./axisSelectors-DgKTbZDy.js";import"./d3-scale-DZsU5NlZ.js";import"./zIndexSlice-DRYSH0d1.js";import"./renderedTicksSlice-B11M6loL.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zFbedmPR.js";import"./chartDataContext-CrXAevUQ.js";import"./CategoricalChart-Bvtk9acs.js";import"./resolveDefaultProps-B_ys-f75.js";import"./Layer-CVDrdQdQ.js";import"./ReactUtils-BDnHjpWV.js";import"./Label-NDKa2SGb.js";import"./Text-CCJtZgZH.js";import"./DOMUtils-DNsRktQS.js";import"./ZIndexLayer-CigE4wdP.js";import"./ActivePoints-CQPlZabl.js";import"./Dot-CK1-CRkK.js";import"./types-CeA2W1WE.js";import"./RegisterGraphicalItemId-p_DkQNMI.js";import"./ErrorBarContext-A1fFW7tK.js";import"./GraphicalItemClipPath-Cgx5E8W2.js";import"./SetGraphicalItem-CO1zjpRd.js";import"./useAnimationId-EGG1FiRd.js";import"./getRadiusAndStrokeWidthFromDot-BCNCi0Sv.js";import"./ActiveShapeUtils-BnH0jvYd.js";import"./isPlainObject-DcZDH2H_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DX54_srN.js";import"./Trapezoid-DtiIjNQQ.js";import"./Sector-B0ZgMooc.js";import"./Symbols-DM3sefdE.js";import"./symbol-Dw5oaVNQ.js";import"./step-C2ZxtsDR.js";import"./Curve-BwYo_aCq.js";import"./index-DZqpEK_T.js";import"./ChartSizeDimensions-ULUEOeMz.js";import"./OffsetShower-BU-kozBz.js";import"./PlotAreaShower-BchYlFwA.js";import"./CartesianAxis-CAIPbX_H.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CZcO71mh.js";import"./uniqBy-CITw4fEJ.js";import"./iteratee-DNBLEmsl.js";import"./Cross-Bg85ZWQq.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
