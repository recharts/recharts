import{r as s,e}from"./iframe-c0lvfgLm.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-CUqfE9kS.js";import{R as C}from"./arrayEqualityCheck-DNZkspsy.js";import{L as n}from"./Line-DKYnlPFY.js";import{R as k}from"./RechartsHookInspector-5i7IBG_e.js";import{X as p}from"./XAxis-BzKnXhRE.js";import{T as c}from"./Tooltip-hdi9ZDlD.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7zqAgEz.js";import"./index-JTQ4PF_k.js";import"./immer-DMEI_VCu.js";import"./hooks-ChUb4DZG.js";import"./axisSelectors-CPhAqa0q.js";import"./d3-scale-DyxWsOri.js";import"./zIndexSlice-B7Te91Jz.js";import"./renderedTicksSlice-CoATx-5v.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0tcceZf.js";import"./chartDataContext-D5ehU8Li.js";import"./CategoricalChart-CZL3Qa9D.js";import"./resolveDefaultProps-DX2cxMOG.js";import"./Layer-7iJmeUkd.js";import"./ReactUtils-CueXlXtD.js";import"./Label-BLt0xOi5.js";import"./Text-Bx9IcEZb.js";import"./DOMUtils-lAJ9Yg9q.js";import"./ZIndexLayer-FNmvAVY8.js";import"./ActivePoints-CfmDyciD.js";import"./Dot-BLoL5jCu.js";import"./types-Dylc_TMc.js";import"./RegisterGraphicalItemId-B0SpB0cP.js";import"./ErrorBarContext-BIxtFArD.js";import"./GraphicalItemClipPath-BPFJLqSa.js";import"./SetGraphicalItem-DnhQPEpT.js";import"./useAnimationId-BHpMyUty.js";import"./getRadiusAndStrokeWidthFromDot-DcGd4q7a.js";import"./ActiveShapeUtils-DlPS2wY5.js";import"./isPlainObject-YzH8Qd1R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CcbUzCSE.js";import"./Trapezoid-CQsqSlZw.js";import"./Sector-Bob5xxX4.js";import"./Symbols-DtF8_27w.js";import"./symbol-BFhqOZgB.js";import"./step-BpAcvZss.js";import"./Curve-BXRCCM_V.js";import"./index-B2Ds3Lof.js";import"./ChartSizeDimensions-biGDO6V4.js";import"./OffsetShower-bDiiPLh2.js";import"./PlotAreaShower-DfFE-FzJ.js";import"./CartesianAxis-BPHeWl3o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-NhoGt6o4.js";import"./uniqBy-CZAEIT1t.js";import"./iteratee-C5EP3l3E.js";import"./Cross-X2t3Rau3.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
