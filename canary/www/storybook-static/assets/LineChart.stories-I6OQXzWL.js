import{r as s,e}from"./iframe-5nyyyA4e.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-n-Ec2vAU.js";import{R as C}from"./arrayEqualityCheck-DhH-5wr2.js";import{L as n}from"./Line-Bd-6aEXe.js";import{R as k}from"./RechartsHookInspector-Bic4nxDU.js";import{X as p}from"./XAxis-CpInK2W7.js";import{T as c}from"./Tooltip-Er2GaErC.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbfL-s84.js";import"./index-DrSxOYtm.js";import"./immer-2somCEQQ.js";import"./hooks-CdfksvpZ.js";import"./axisSelectors-CobE02gZ.js";import"./d3-scale-puoPpyC3.js";import"./zIndexSlice-C6txXD1x.js";import"./renderedTicksSlice-Cm-fMS3n.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFvpoJB5.js";import"./chartDataContext-SxjdhjDb.js";import"./CategoricalChart-DI7k_Lzd.js";import"./resolveDefaultProps-CeTTuEfb.js";import"./Layer-DviFQGNi.js";import"./ReactUtils-BrfFtQHh.js";import"./Label-CduFeyI1.js";import"./Text-CE1WfcL6.js";import"./DOMUtils-Dq_WTVX1.js";import"./ZIndexLayer-OUT57C2H.js";import"./ActivePoints-C08M__J8.js";import"./Dot-YnFnwCT3.js";import"./types-BpXzUYak.js";import"./RegisterGraphicalItemId-Co9Ixth9.js";import"./ErrorBarContext-CfPRQDi6.js";import"./GraphicalItemClipPath-4mU8FIdV.js";import"./SetGraphicalItem-YjHvOXLE.js";import"./useAnimationId-C32uUUSq.js";import"./getRadiusAndStrokeWidthFromDot-BSz_BA2S.js";import"./ActiveShapeUtils-DGjL05Fk.js";import"./isPlainObject-BQonFNMT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJXxZxcM.js";import"./Trapezoid-BDtTj6J0.js";import"./Sector-STsIidKv.js";import"./Symbols-CXSqTNLX.js";import"./symbol-DYTo8Fkb.js";import"./step-CMCDVxPb.js";import"./Curve-CtxNRaVC.js";import"./index-ltgFEkuv.js";import"./ChartSizeDimensions-CHqoYXte.js";import"./OffsetShower-pvxB70aB.js";import"./PlotAreaShower-CC7NhsKv.js";import"./CartesianAxis-D47MJU_E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BTKbSGPa.js";import"./uniqBy-DdFUbo3O.js";import"./iteratee-B-bQO1-C.js";import"./Cross-CmROOS6c.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
