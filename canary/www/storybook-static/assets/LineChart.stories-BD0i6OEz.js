import{r as s,e}from"./iframe-CIkWUaKQ.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-vS_4S00u.js";import{R as C}from"./arrayEqualityCheck-BBFq7eoK.js";import{L as n}from"./Line-Bx7wFRjl.js";import{R as A}from"./RechartsHookInspector-BuUCbDqR.js";import{X as p}from"./XAxis-BerErBSJ.js";import{T as c}from"./Tooltip-BR1dvEKK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YxwXYQPU.js";import"./index-CbwLYB0M.js";import"./immer-BHU9OU6q.js";import"./hooks-sjogQk2Y.js";import"./axisSelectors-BaK7cqC2.js";import"./d3-scale-BZ-edMt9.js";import"./zIndexSlice-Cbu3nPXF.js";import"./renderedTicksSlice-BjREbE6W.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjcihWnV.js";import"./chartDataContext-noqwwTdm.js";import"./CategoricalChart-BcDmeBuN.js";import"./resolveDefaultProps-CLDluMEp.js";import"./Layer-Dzvfyp4W.js";import"./ReactUtils-RCeASTt3.js";import"./Label-SHiyMzcT.js";import"./Text-D4ohdNx9.js";import"./DOMUtils-BREdjKiT.js";import"./ZIndexLayer-CUuZZhUK.js";import"./ActivePoints-B2S0txC7.js";import"./Dot-CQ_am1YH.js";import"./types-CPlIJWRj.js";import"./RegisterGraphicalItemId-f4iA6laj.js";import"./ErrorBarContext-dR6dFvJy.js";import"./GraphicalItemClipPath-D13aRDH0.js";import"./SetGraphicalItem-0e33RWLj.js";import"./useAnimationId-DBBbISIM.js";import"./getRadiusAndStrokeWidthFromDot-DqAt7RU4.js";import"./ActiveShapeUtils-DT1OniMN.js";import"./isPlainObject-D-WQBCb_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAWEyFEy.js";import"./Trapezoid-BDKa0CKl.js";import"./Sector-B07-nfVs.js";import"./Symbols-DLm1p1c0.js";import"./symbol-DsKaePiJ.js";import"./step-lfJzJxuy.js";import"./Curve-Cbg_n5d0.js";import"./index-C6VPi8LL.js";import"./ChartSizeDimensions-C20x4d8E.js";import"./OffsetShower-B6J-0iMz.js";import"./PlotAreaShower-BBKrHEPi.js";import"./CartesianAxis-ZLsdGGHc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BM77jCWR.js";import"./uniqBy-R7vda7ns.js";import"./iteratee-BBMB1KLW.js";import"./Cross-DlX0xHfr.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
