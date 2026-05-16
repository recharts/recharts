import{u as s,e}from"./iframe-pel8cYCN.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-Bv9PvkWa.js";import{g as C}from"./arrayEqualityCheck-C_lOmCrI.js";import{L as n}from"./Line-BwrWq8g2.js";import{R as A}from"./RechartsHookInspector-Dg66sE1s.js";import{X as p}from"./XAxis-B599S9Vu.js";import{T as c}from"./Tooltip-B_nY5tDG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSDFgvQ-.js";import"./index-BtBEICN3.js";import"./immer-BJQdivTr.js";import"./hooks-D-fRP47Y.js";import"./axisSelectors-Bb4Kms9I.js";import"./d3-scale-CX31JByl.js";import"./zIndexSlice-ymPJrgdD.js";import"./renderedTicksSlice-DOQ_XGYo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BlzYSjsM.js";import"./chartDataContext-Edg6lPwK.js";import"./CategoricalChart-B61I782z.js";import"./resolveDefaultProps-YrDhwYNk.js";import"./Layer-CNeytfD9.js";import"./ReactUtils-MkRs3AIp.js";import"./Label-LVsFLhHv.js";import"./Text-CYIA95SW.js";import"./DOMUtils-ctqdh0oB.js";import"./ZIndexLayer-BvzXDAda.js";import"./ActivePoints-DvhKq6eb.js";import"./Dot-CC60-gqd.js";import"./types-Xh1xXsKt.js";import"./RegisterGraphicalItemId-DwjBwfbK.js";import"./ErrorBarContext-DJfRhZLU.js";import"./GraphicalItemClipPath-BGEnX0Xy.js";import"./SetGraphicalItem-fB0iJna-.js";import"./useAnimationId-v_N6QXXH.js";import"./getRadiusAndStrokeWidthFromDot-Co4GzyJq.js";import"./ActiveShapeUtils-DNJLSjTo.js";import"./isPlainObject-CZCkl5XT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwHhsTLl.js";import"./Trapezoid-B96cM-TC.js";import"./Sector-CNApQaS1.js";import"./Symbols-DxzOQiX8.js";import"./symbol-D7iNy2hw.js";import"./step-DDfuaYno.js";import"./Curve-DUNlDEm2.js";import"./index-Db97PsMK.js";import"./ChartSizeDimensions-KFbSwMPV.js";import"./OffsetShower-D-gSoeld.js";import"./PlotAreaShower-BJPLXysn.js";import"./CartesianAxis-CHS0WdpC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DnweuCUb.js";import"./uniqBy-VTopnPt7.js";import"./iteratee-B40Sj4cN.js";import"./Cross-C9ZHuiSZ.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
