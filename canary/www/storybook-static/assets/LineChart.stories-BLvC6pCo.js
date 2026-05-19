import{u as s,e}from"./iframe-cnMzeIJZ.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-iDd8MFWH.js";import{g as C}from"./arrayEqualityCheck-Diz3n3Hs.js";import{L as n}from"./Line-DNc1zXXh.js";import{R as A}from"./RechartsHookInspector-z-0196Jh.js";import{X as p}from"./XAxis-CwsNG3zV.js";import{T as c}from"./Tooltip-DNhbjbIV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9N_K_8iJ.js";import"./index-DcitoB6s.js";import"./immer-CEVvpJh0.js";import"./hooks-DbNIViQP.js";import"./axisSelectors-JTUQkC92.js";import"./d3-scale-BBoVmphj.js";import"./zIndexSlice-KCSxBezz.js";import"./renderedTicksSlice-CttqerD-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-v4VQpoAp.js";import"./chartDataContext-DuCir45J.js";import"./CategoricalChart-CbexdhNs.js";import"./resolveDefaultProps-BJEUNe0z.js";import"./Layer-C2d9GIhW.js";import"./ReactUtils-Cvax_Sun.js";import"./Label-r0BVcH36.js";import"./Text-B1T-uFVD.js";import"./DOMUtils-8Qso1Lek.js";import"./ZIndexLayer-DgSpDsSo.js";import"./ActivePoints-BF7AMWlG.js";import"./Dot-CuCyL62Q.js";import"./types-CvoSDie4.js";import"./RegisterGraphicalItemId-CKB_e_SX.js";import"./ErrorBarContext-UNWUxf6o.js";import"./GraphicalItemClipPath-D7TSUiOR.js";import"./SetGraphicalItem-CHoRTGzo.js";import"./useAnimationId-BIlplKMu.js";import"./getRadiusAndStrokeWidthFromDot-D1rOBQHf.js";import"./ActiveShapeUtils-gcJ89Q36.js";import"./isPlainObject-D33aVf8i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXYQFJg_.js";import"./Trapezoid-D7-33KRZ.js";import"./Sector-q4gGdICU.js";import"./Symbols-zGmBpapW.js";import"./symbol-CLamLFlr.js";import"./step-CVx5i_lR.js";import"./Curve-BYV27PWl.js";import"./index-CSSLHj9Z.js";import"./ChartSizeDimensions-BiOnGwPS.js";import"./OffsetShower-BBJcAEb8.js";import"./PlotAreaShower-C0UNL5CH.js";import"./CartesianAxis-DKEuyvio.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DUk4lhRc.js";import"./uniqBy-CkPNX-V7.js";import"./iteratee-D0L7wdlz.js";import"./Cross-DtQ6Ys6s.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
