import{r as s,e}from"./iframe-_tOEOrTB.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CzYzsJ6j.js";import{R as C}from"./arrayEqualityCheck-B2ATAN_K.js";import{L as n}from"./Line-CSH30hMe.js";import{R as A}from"./RechartsHookInspector-BgNu5TE0.js";import{X as p}from"./XAxis-B99ydacs.js";import{T as c}from"./Tooltip-FgVwiQpp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B4fVc8pz.js";import"./index-C8IxNL1D.js";import"./immer-Ctu7T9Ma.js";import"./hooks-Dxc4ftFI.js";import"./axisSelectors-C0eqwsIc.js";import"./d3-scale-BYOnugJI.js";import"./zIndexSlice-CWqmREsN.js";import"./renderedTicksSlice-C1VyvUnW.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BdgakOV8.js";import"./chartDataContext-Cj00HDaN.js";import"./CategoricalChart-uPJQTpzY.js";import"./resolveDefaultProps-QC90EbHK.js";import"./Layer-DKn_t_OY.js";import"./ReactUtils-D3WhBtDM.js";import"./Label-DY2hHCUB.js";import"./Text-CLhNqgF1.js";import"./DOMUtils-Dp_xH288.js";import"./ZIndexLayer-CgC8xk-g.js";import"./ActivePoints-UW1fO4V4.js";import"./Dot-MLQan19h.js";import"./types-0739cztl.js";import"./RegisterGraphicalItemId-Dse9b0HT.js";import"./ErrorBarContext-DwAJtrMz.js";import"./GraphicalItemClipPath-DkwW047q.js";import"./SetGraphicalItem-FaJmXbmv.js";import"./useAnimationId-x2-6Yyy0.js";import"./getRadiusAndStrokeWidthFromDot-DShwyyA4.js";import"./ActiveShapeUtils-XLBlJtUm.js";import"./isPlainObject-jyHTfG6K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-hCYFffPl.js";import"./Trapezoid-CqizPLb6.js";import"./Sector-Cruz6N8W.js";import"./Symbols-CXub2t2y.js";import"./symbol-BgrsGtcm.js";import"./step-rG5mhkUn.js";import"./Curve-BgKgFd6U.js";import"./index-BRj_naI3.js";import"./ChartSizeDimensions-DuqOm4SH.js";import"./OffsetShower-BuTy_q5n.js";import"./PlotAreaShower-DHEJGydW.js";import"./CartesianAxis-DXWYS4eF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BPo9O-tw.js";import"./uniqBy-P3VkkSyy.js";import"./iteratee-B2hoZeMP.js";import"./Cross-CZx91a-X.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
