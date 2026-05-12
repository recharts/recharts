import{r as s,e}from"./iframe-1J0v0kJa.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-dMlqo4kG.js";import{R as C}from"./arrayEqualityCheck-Crr3Dzh6.js";import{L as n}from"./Line-BKAL78qy.js";import{R as A}from"./RechartsHookInspector-D3XyLt9P.js";import{X as p}from"./XAxis-BA2sHg_J.js";import{T as c}from"./Tooltip-O0JzmClx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NfAPn5nO.js";import"./index-CooR3W3l.js";import"./immer-ZnQZAws8.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./zIndexSlice-DMwFl-HJ.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./resolveDefaultProps-C05SE_tf.js";import"./Layer-BVvsC5_K.js";import"./ReactUtils-DrCtqFWq.js";import"./Label-BoTwLtcO.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./ZIndexLayer-Bol6PWej.js";import"./ActivePoints-C2NgxcK8.js";import"./Dot-BM5MyVLI.js";import"./types-DbkoSsM0.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./ErrorBarContext-BoDeu_Di.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./useAnimationId-AI_H7XbQ.js";import"./getRadiusAndStrokeWidthFromDot-DVwfrbNw.js";import"./ActiveShapeUtils-DPgm42Av.js";import"./isPlainObject-yfWDawVf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtnB5yHC.js";import"./Trapezoid-BQHCtBz1.js";import"./Sector-DrN7HSuk.js";import"./Symbols-B03fqPxI.js";import"./symbol-DdOQHYIO.js";import"./step-D8iwa8wm.js";import"./Curve-MBHSj-Hn.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";import"./CartesianAxis-BEIIuhLy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DD7oMeZg.js";import"./uniqBy-31dyuDjs.js";import"./iteratee-CanO0FQp.js";import"./Cross-DWSxO7oX.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
