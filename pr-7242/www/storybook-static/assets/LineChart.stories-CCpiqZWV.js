import{r as s,e}from"./iframe-DvnDov4A.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-uEECgumD.js";import{R as C}from"./arrayEqualityCheck-C9lnY2Jk.js";import{L as n}from"./Line-CMGNV9p3.js";import{R as A}from"./RechartsHookInspector-4zpoQdEh.js";import{X as p}from"./XAxis-C1tPrrXX.js";import{T as c}from"./Tooltip-9w79gXLX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-TcHv2uQV.js";import"./index-C2oOJWkO.js";import"./immer-sZpCrch2.js";import"./hooks-BvQWUlQP.js";import"./axisSelectors-CqBaekTZ.js";import"./d3-scale-BcO2Qy0K.js";import"./zIndexSlice-SWDQ-CoV.js";import"./renderedTicksSlice-031iG6wN.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_ZS3e1w.js";import"./chartDataContext-i-tilv0W.js";import"./CategoricalChart-D_33J7_3.js";import"./resolveDefaultProps-G5H4W-ZU.js";import"./Layer-nkTMaplG.js";import"./ReactUtils-CIfEwxbL.js";import"./Label-DplSYrhy.js";import"./Text-spNYJ-qR.js";import"./DOMUtils-DdQ6eDLq.js";import"./ZIndexLayer-CM0jcixQ.js";import"./ActivePoints-Bp_xfLdA.js";import"./Dot-1PiERTp-.js";import"./types-TD_Bh_Hf.js";import"./RegisterGraphicalItemId-BIRi2jKj.js";import"./ErrorBarContext-CvFDt4Lo.js";import"./GraphicalItemClipPath-kvMDTclB.js";import"./SetGraphicalItem-tfmCk3IV.js";import"./useAnimationId-6CABSB-X.js";import"./getRadiusAndStrokeWidthFromDot-ZR3HPK81.js";import"./ActiveShapeUtils-lzwBTbm9.js";import"./isPlainObject-Bm-7eQPN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7q3XGzAF.js";import"./Trapezoid-D2p22PjP.js";import"./Sector-bYTZ9FBx.js";import"./Symbols-D2whzrea.js";import"./symbol-B4kl7GNn.js";import"./step-hQY7d3_H.js";import"./Curve-BY4G9kL5.js";import"./index-DCGexNIF.js";import"./ChartSizeDimensions-CTHGO4oG.js";import"./OffsetShower-DvcNQrDC.js";import"./PlotAreaShower-DoBolyp8.js";import"./CartesianAxis-DShCHaKT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-7HbT1_o2.js";import"./uniqBy-CWXY7iXU.js";import"./iteratee-CEA0pmlV.js";import"./Cross-W0td6AIJ.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
