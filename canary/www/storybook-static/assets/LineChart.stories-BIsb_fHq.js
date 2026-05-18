import{u as s,e}from"./iframe-BmdG6Yuj.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-DzaHoHRf.js";import{g as C}from"./arrayEqualityCheck-Cs0ODbAq.js";import{L as n}from"./Line-BXq3-19U.js";import{R as A}from"./RechartsHookInspector-C9gdculA.js";import{X as p}from"./XAxis-yj9kgQkK.js";import{T as c}from"./Tooltip-zfMIy2Sl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./immer-r1hs1aui.js";import"./hooks-DLMhcoxZ.js";import"./axisSelectors-B5YNmqFl.js";import"./d3-scale-BCNqbAE1.js";import"./zIndexSlice-CernrlT2.js";import"./renderedTicksSlice-BiizQght.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./resolveDefaultProps-CzKMDris.js";import"./Layer-CTqkrp1s.js";import"./ReactUtils-BDG3-ZiE.js";import"./Label-BahHfmoK.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./ZIndexLayer-BALln1nu.js";import"./ActivePoints-3tH4QPDb.js";import"./Dot-C-X-bkP7.js";import"./types-HBeXaxhb.js";import"./RegisterGraphicalItemId-Bh3Gr8bc.js";import"./ErrorBarContext-DmBcQTJi.js";import"./GraphicalItemClipPath-CCzofO3U.js";import"./SetGraphicalItem-A_fx4pfl.js";import"./useAnimationId-DYvcKDoo.js";import"./getRadiusAndStrokeWidthFromDot-DMLzSi-R.js";import"./ActiveShapeUtils-DLVI0LAd.js";import"./isPlainObject-B7mW1TAl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr2ikaiy.js";import"./Trapezoid-BUVaAWPm.js";import"./Sector-CrLZSk6O.js";import"./Symbols-iO_juYq8.js";import"./symbol-Dl25fcAc.js";import"./step-B9kksXJi.js";import"./Curve-o1yfXHk1.js";import"./index-C_lgB8BG.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./OffsetShower-DFfLZ4K8.js";import"./PlotAreaShower-CawkEE7f.js";import"./CartesianAxis-DQoe1nv2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DqYBnuYB.js";import"./uniqBy-cB4yLFVg.js";import"./iteratee-Cn99cyAf.js";import"./Cross-Djvw-tyz.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
