import{u as i,e}from"./iframe-CWtGA3nN.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-BLiLgLJz.js";import{g as C}from"./arrayEqualityCheck-SSZ_TbBR.js";import{L as n}from"./Line-DlLocPs1.js";import{R as A}from"./RechartsHookInspector-C5rf562U.js";import{X as p}from"./XAxis-DW0rJY1W.js";import{T as c}from"./Tooltip-DgQdaJPt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtFvOF_N.js";import"./index-CJJNMar2.js";import"./immer-BFspOnss.js";import"./hooks-2GkvPwk3.js";import"./axisSelectors-B2ypiSef.js";import"./d3-scale-QF4ItY9H.js";import"./zIndexSlice-DXFiHolo.js";import"./renderedTicksSlice-dpcUCF55.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjBRb4BQ.js";import"./chartDataContext-BDE8JW6h.js";import"./CategoricalChart-VkWulsmh.js";import"./resolveDefaultProps-DAVWEwBG.js";import"./Curve-SkiaV8u-.js";import"./types-DgK_EaWG.js";import"./step-CBW02vKx.js";import"./path-DyVhHtw_.js";import"./Layer-CPnmijdU.js";import"./ReactUtils-JfqC4NUj.js";import"./Label-C--aO5Ak.js";import"./Text-C8joD4Pq.js";import"./DOMUtils-CParKcwz.js";import"./ZIndexLayer-DtffmqPt.js";import"./ActivePoints-DkGt118u.js";import"./Dot-CP0aaNdE.js";import"./RegisterGraphicalItemId-6R0wFFYv.js";import"./ErrorBarContext-Bkb8bdCY.js";import"./GraphicalItemClipPath-636H-9xI.js";import"./SetGraphicalItem-DcEByKaS.js";import"./useAnimationId-B0ac7aow.js";import"./getRadiusAndStrokeWidthFromDot-Df0eg7nC.js";import"./ActiveShapeUtils-CdHtuYAv.js";import"./index-DsA403Ur.js";import"./ChartSizeDimensions-BdcGth4f.js";import"./OffsetShower-BzgHuzNu.js";import"./PlotAreaShower-5_nPAcLw.js";import"./CartesianAxis-Bxj1i8r5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DXnmGdlu.js";import"./uniqBy-B6g5sB3v.js";import"./iteratee-MnyvU_G3.js";import"./Cross-L3muEabX.js";import"./Rectangle-CNr5V-0I.js";import"./Sector-CyRUSSOl.js";const Be={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
