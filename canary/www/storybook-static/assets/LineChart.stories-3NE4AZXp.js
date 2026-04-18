import{r as s,e}from"./iframe-C7MtdY8E.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CZytRzMy.js";import{R as C}from"./arrayEqualityCheck-DgrHMpGx.js";import{L as n}from"./Line-DHYjswyr.js";import{R as A}from"./RechartsHookInspector-DFQ9rNFJ.js";import{X as p}from"./XAxis-3uF26BVq.js";import{T as c}from"./Tooltip-Co8FPQgw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCy35Z8x.js";import"./index-ZRFMj45p.js";import"./immer-tybRsQ9G.js";import"./hooks-CRCNzzkU.js";import"./axisSelectors-BszE-kHQ.js";import"./d3-scale--QLdYl1D.js";import"./zIndexSlice-3LN6T8_r.js";import"./renderedTicksSlice-Vrp6ItcJ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CIdWsL9L.js";import"./chartDataContext-bU1HBY0X.js";import"./CategoricalChart-DeBE8RoO.js";import"./resolveDefaultProps-BARk_uhU.js";import"./Layer-Ulref4PH.js";import"./ReactUtils-BhCHdCFE.js";import"./Label-DSRQ68Gc.js";import"./Text-D3CPw6sI.js";import"./DOMUtils-Caf6EbGd.js";import"./ZIndexLayer-Chbgzy16.js";import"./ActivePoints-BwYpscwz.js";import"./Dot-BqE6ffT8.js";import"./types-BR6al878.js";import"./RegisterGraphicalItemId-DRO9PQuR.js";import"./ErrorBarContext-DwrVEdn2.js";import"./GraphicalItemClipPath-CvFbG0n3.js";import"./SetGraphicalItem-4oFR7JPf.js";import"./useAnimationId-xNATfe3s.js";import"./getRadiusAndStrokeWidthFromDot-DnzUrahg.js";import"./ActiveShapeUtils-Bu5dlaov.js";import"./isPlainObject-CwNYxtMJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ci3DSaKm.js";import"./Trapezoid-CKW8i93u.js";import"./Sector-AhRoIGMa.js";import"./Symbols-DB88izld.js";import"./symbol-Ct681S22.js";import"./step-DOKoL0Mc.js";import"./Curve-DoPC-oTP.js";import"./index-B1uIQZ_f.js";import"./ChartSizeDimensions-jmlBhTx2.js";import"./OffsetShower-DHj-Abix.js";import"./PlotAreaShower-94ccGUzR.js";import"./CartesianAxis-B2QCJlN1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-US88cDQq.js";import"./uniqBy-DpqRNa_X.js";import"./iteratee-BhA28Kjc.js";import"./Cross-CP8dYlgm.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
