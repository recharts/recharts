import{r as i,R as e}from"./iframe-BDPfsqdF.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CA6ESBS4.js";import{R as C}from"./zIndexSlice-BfcQE96w.js";import{L as s}from"./Line-fKw3Ma_7.js";import{X as p}from"./XAxis-D4_j-k4X.js";import{T as c}from"./Tooltip-DsDoEAPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUmM3uYA.js";import"./resolveDefaultProps-UXrhpxMr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-c7iT3Xqf.js";import"./throttle-DLGVq_fI.js";import"./index-BQeH_1mA.js";import"./index-DhEcRTBz.js";import"./polarAxisSelectors-C7NGCs8b.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8DyPgUy.js";import"./index-Bojq0CZP.js";import"./index-ex-Pgi_h.js";import"./renderedTicksSlice-GMkNhND_.js";import"./index-BRY97WZu.js";import"./CartesianChart-Do0DiZlo.js";import"./ZIndexPortal-kQXYrtt7.js";import"./CategoricalChart-BnbJl500.js";import"./Layer-irdZ2U7P.js";import"./Curve-wYhnU7Gh.js";import"./types-DRfbQMuT.js";import"./step-BXNgbZXy.js";import"./path-DyVhHtw_.js";import"./LabelList-BClBWVcN.js";import"./Label-CIaOlIjm.js";import"./Text-BNo_l2gi.js";import"./DOMUtils-DaHiW2kn.js";import"./ZIndexLayer-D5wXYtG3.js";import"./ActivePoints-1Kk_6r7U.js";import"./Dot-CDca1BfZ.js";import"./activeStyles-BFWSM9RU.js";import"./useAnimationId-PJ8_CwxA.js";import"./dataEntryStyles-RZhAuyPm.js";import"./Symbols-DWB63jlf.js";import"./symbol-CTG-DGxK.js";import"./ErrorBarContext-KG77bNmA.js";import"./SetGraphicalItem-Bfmt3udz.js";import"./getRadiusAndStrokeWidthFromDot-Jl4t-yCo.js";import"./ActiveShapeUtils-Cyzjr61Z.js";import"./useEffectiveDataKey-DsGW0DuD.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-BGQBH839.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-8y_suHrr.js";import"./uniqBy-BVW2sC2D.js";import"./iteratee-C91la3m6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CuhOk6PY.js";import"./Rectangle-CavKlM0x.js";import"./util-Dxo8gN5i.js";import"./Sector-DpHwGpqU.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};
