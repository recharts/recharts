import{r as s,e}from"./iframe-CJ63uMHg.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-Ccn2No7x.js";import{R as C}from"./arrayEqualityCheck-CjZgOdyP.js";import{L as n}from"./Line-HCaUYNRw.js";import{R as k}from"./RechartsHookInspector-JQmetI7b.js";import{X as p}from"./XAxis-CaS203aX.js";import{T as c}from"./Tooltip-BeUjSwWI.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPJT4FLk.js";import"./index-BTkZssxQ.js";import"./immer-CKeBagLw.js";import"./hooks-DAjaeQkS.js";import"./axisSelectors-Cmmc63M7.js";import"./d3-scale-Ba7WtcOV.js";import"./zIndexSlice-DcFOWvFe.js";import"./renderedTicksSlice-BxvVTmCz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnhtnX-W.js";import"./chartDataContext-BCusU8xR.js";import"./CategoricalChart-mP3FKWNM.js";import"./resolveDefaultProps-CMjyVNNi.js";import"./Layer-DwPjM_1S.js";import"./ReactUtils-BrLU3nhQ.js";import"./Label-BT9o0AB1.js";import"./Text-C4Zilip_.js";import"./DOMUtils-CEnHACCK.js";import"./ZIndexLayer-hB7INJpc.js";import"./ActivePoints-CuJqjtUw.js";import"./Dot-D4anQyzH.js";import"./types-Cg-iPHUY.js";import"./RegisterGraphicalItemId-B1D-i393.js";import"./ErrorBarContext-dABLLY8L.js";import"./GraphicalItemClipPath-B2w_akpT.js";import"./SetGraphicalItem-BO21g4cB.js";import"./useAnimationId-B1Pbcgq5.js";import"./getRadiusAndStrokeWidthFromDot-C1RJ8FJA.js";import"./ActiveShapeUtils-B2UK-_O2.js";import"./isPlainObject-DxawGvw9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-RAhStLpg.js";import"./Trapezoid-DE_yg1mh.js";import"./Sector-D96mfy5y.js";import"./Symbols-Yo7h6BqR.js";import"./symbol-6foS3Lbf.js";import"./step-CrMJLvxS.js";import"./Curve-CD35vdaK.js";import"./index-BTv7XF5w.js";import"./ChartSizeDimensions-C_IgMMTX.js";import"./OffsetShower-TshGFHAM.js";import"./PlotAreaShower-BX2Nq4gV.js";import"./CartesianAxis-DJXCnb2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Db3u9B4j.js";import"./uniqBy-YwcJNLS3.js";import"./iteratee-BOLGpibr.js";import"./Cross-arbvINZp.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
