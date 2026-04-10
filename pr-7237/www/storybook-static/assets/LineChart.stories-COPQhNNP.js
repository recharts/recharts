import{r as s,e}from"./iframe-BnepZbIT.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D8FIFBpV.js";import{R as C}from"./arrayEqualityCheck-Bzj1NFbL.js";import{L as n}from"./Line-CrpR2_m2.js";import{R as A}from"./RechartsHookInspector-C4hunDdt.js";import{X as p}from"./XAxis-SiwesCXl.js";import{T as c}from"./Tooltip-e6qES6Dq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvbGdFiP.js";import"./index-BYgM4v9S.js";import"./immer-CMcm_nUx.js";import"./hooks-CP1-TJLt.js";import"./axisSelectors-DQBdr2e5.js";import"./d3-scale-rflYLnZy.js";import"./zIndexSlice-C8s-XU9n.js";import"./renderedTicksSlice-CSId2xIn.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-90suVU5n.js";import"./chartDataContext-DCbFY6Je.js";import"./CategoricalChart-Dkb_r9k9.js";import"./resolveDefaultProps-CCq0BlxP.js";import"./Layer-Ca-NGzhu.js";import"./ReactUtils-64sNutUM.js";import"./Label-CvQfGABs.js";import"./Text-CPTRxDfj.js";import"./DOMUtils-DlCDOcC9.js";import"./ZIndexLayer-CaJTwElI.js";import"./ActivePoints-KKzFiWPz.js";import"./Dot-CQLqFjtJ.js";import"./types-Df0IzV2Z.js";import"./RegisterGraphicalItemId-DInnBgXa.js";import"./ErrorBarContext-biD2FyQs.js";import"./GraphicalItemClipPath-BLvis0SJ.js";import"./SetGraphicalItem-Dwsy_PTG.js";import"./useAnimationId-0FE8S7Lc.js";import"./getRadiusAndStrokeWidthFromDot-xaimMp6X.js";import"./ActiveShapeUtils-BrWeXoF9.js";import"./isPlainObject-BxGEMuWM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-QDjYZ4Lh.js";import"./Trapezoid-CWH0SbFy.js";import"./Sector-CD_FNLgY.js";import"./Symbols-eksBr05G.js";import"./symbol-hzKkaagP.js";import"./step-BFaHnM_e.js";import"./Curve-DKZiYoJj.js";import"./index-D2gJFJUM.js";import"./ChartSizeDimensions-YfbBA8uv.js";import"./OffsetShower-DpIwysro.js";import"./PlotAreaShower-BdzDALPX.js";import"./CartesianAxis-DimAd1iY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-ChPfnl3W.js";import"./uniqBy-DQbVnFYw.js";import"./iteratee-CMSgm-8W.js";import"./Cross-DqNAQFtm.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
