import{u as i,e}from"./iframe-UdgfSgbV.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-CxMRlJlu.js";import{g as C}from"./arrayEqualityCheck-CicOt-ds.js";import{L as n}from"./Line-E0LiBgep.js";import{R as A}from"./RechartsHookInspector-CthRFnLf.js";import{X as p}from"./XAxis-B_T7-hQi.js";import{T as c}from"./Tooltip-hJXcGorC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-niwZzApw.js";import"./index-DugrSXtg.js";import"./immer-D2PrSKKY.js";import"./hooks-YBktsx8t.js";import"./axisSelectors-DMRIE0Wb.js";import"./d3-scale-UW9tFBgt.js";import"./zIndexSlice-BZq2EGul.js";import"./renderedTicksSlice-l1jYlYN2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cvpty9Rq.js";import"./chartDataContext-B4DzVMPi.js";import"./CategoricalChart-BUvemvV9.js";import"./resolveDefaultProps-DUahjl-e.js";import"./Curve-Wo73DpX8.js";import"./types-BRerldyT.js";import"./step-CLnk6C4J.js";import"./path-DyVhHtw_.js";import"./Layer-DfoJX-WM.js";import"./ReactUtils-CpmrlivC.js";import"./Label-GqUuXqgi.js";import"./Text-O_rmI639.js";import"./DOMUtils-CEz4_y1m.js";import"./ZIndexLayer--K-LA7QR.js";import"./ActivePoints-Cj3Tq79L.js";import"./Dot-CQmWQFNO.js";import"./RegisterGraphicalItemId-BLtUrA1U.js";import"./ErrorBarContext-BYjQvvS7.js";import"./GraphicalItemClipPath-qHH5OIPj.js";import"./SetGraphicalItem-sqFy1wuC.js";import"./useAnimationId-_H_C4I0e.js";import"./getRadiusAndStrokeWidthFromDot-Db_XWe9X.js";import"./ActiveShapeUtils-fzwtdy4J.js";import"./index-D9bwHzxQ.js";import"./ChartSizeDimensions-ql6F2UUA.js";import"./OffsetShower-DEkhdigp.js";import"./PlotAreaShower-Coz6Wn-z.js";import"./CartesianAxis-DTJQvBIX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BXFO69aB.js";import"./uniqBy-BduRBjZr.js";import"./iteratee-uG1rhi8b.js";import"./Cross-DcHK8-yQ.js";import"./Rectangle-CVc3ss1Y.js";import"./Sector-D4_19HZY.js";const Be={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
