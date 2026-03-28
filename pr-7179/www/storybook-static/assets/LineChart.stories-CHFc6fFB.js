import{r as s,e}from"./iframe-C27-mxY1.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-C6gtMSpp.js";import{R as C}from"./arrayEqualityCheck-D-5eU_dz.js";import{L as n}from"./Line-BOC_LYzJ.js";import{R as k}from"./RechartsHookInspector-C_T85NFo.js";import{X as p}from"./XAxis-Bkm5Gu7p.js";import{T as c}from"./Tooltip-CEG07HIK.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./immer-CWybgQyF.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./zIndexSlice-BLW0sC1L.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./Layer-DIVtJdsU.js";import"./ReactUtils-DuG0Tdq5.js";import"./Label-B6Z4EDvc.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./ZIndexLayer-B-pky4ZU.js";import"./ActivePoints-h9H1Ebnw.js";import"./Dot-DiMYf5U7.js";import"./types-DbJv915h.js";import"./RegisterGraphicalItemId-CuWJpCyW.js";import"./ErrorBarContext-2LiDJnsG.js";import"./GraphicalItemClipPath-CJlc_ulB.js";import"./SetGraphicalItem-1mG4wi13.js";import"./useAnimationId-TcKlRMa1.js";import"./getRadiusAndStrokeWidthFromDot-BW0gjx4V.js";import"./ActiveShapeUtils-BMqQzPng.js";import"./isPlainObject-Cs6ajyZL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D88V661C.js";import"./Trapezoid-DPganyo-.js";import"./Sector-BBijWEml.js";import"./Symbols-ygUKGMj2.js";import"./symbol-Bcxorr4O.js";import"./step-DPeTeJhQ.js";import"./Curve-C3fWZnPx.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";import"./CartesianAxis-DZAE-TXK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CpNmvyH_.js";import"./uniqBy-sO9_1-IK.js";import"./iteratee-BVOByGiD.js";import"./Cross-Bl3K-N73.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
