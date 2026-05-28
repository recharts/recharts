import{u as i,e}from"./iframe-KzgC6yl3.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-BNbXBu5R.js";import{g as C}from"./arrayEqualityCheck-CI6mjpz-.js";import{L as n}from"./Line-BcSuBwlL.js";import{R as A}from"./RechartsHookInspector-CbwNoaPW.js";import{X as p}from"./XAxis-CQ-aN71n.js";import{T as c}from"./Tooltip-I7hy77X8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./immer-BD-tkhpl.js";import"./hooks-Bk-p3SZZ.js";import"./axisSelectors-BGTsJTqw.js";import"./d3-scale-CYshLe_K.js";import"./zIndexSlice-CoKEHAdo.js";import"./renderedTicksSlice-jEvY63xF.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./resolveDefaultProps-DbdijU9i.js";import"./Curve-Q6mWCHhh.js";import"./types-eUgvlmUM.js";import"./step-BvMApuT3.js";import"./path-DyVhHtw_.js";import"./Layer-LeweOpyN.js";import"./ReactUtils-CwLFTC_n.js";import"./Label-DkRj53y4.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./ZIndexLayer-B24S8uuv.js";import"./ActivePoints-CV8SIXKH.js";import"./Dot-DYstLEu7.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./ErrorBarContext-Ch4fukf7.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./useAnimationId-Djb8H1Ge.js";import"./getRadiusAndStrokeWidthFromDot-0pa1p6Pi.js";import"./ActiveShapeUtils-C7hoslI5.js";import"./index-BPaFEgS3.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./OffsetShower-CrK-LA7q.js";import"./PlotAreaShower-CZGD6-xs.js";import"./CartesianAxis-IwDruP1d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DQ7gwspq.js";import"./uniqBy-7QKyZwf-.js";import"./iteratee-XWXks4So.js";import"./Cross-D7GtPIWg.js";import"./Rectangle-kA7xLTPQ.js";import"./Sector-CyxSkJcb.js";const Be={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
