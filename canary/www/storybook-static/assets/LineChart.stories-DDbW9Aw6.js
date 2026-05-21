import{u as s,e}from"./iframe-DNsUwX5k.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-goQbOCfg.js";import{g as C}from"./arrayEqualityCheck-XA4mGyWk.js";import{L as n}from"./Line-B6QUTRYX.js";import{R as A}from"./RechartsHookInspector-BUhXRUq2.js";import{X as p}from"./XAxis-ONim8OVF.js";import{T as c}from"./Tooltip-CDQOdmLr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AU67btz7.js";import"./index-DYHZYw9F.js";import"./immer-BPrEK5Rz.js";import"./hooks-B6BHB-7W.js";import"./axisSelectors-YJUEl-2g.js";import"./d3-scale-Bdi71Qs5.js";import"./zIndexSlice-C-6628LZ.js";import"./renderedTicksSlice-JsYvqF2I.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FHxIuFwU.js";import"./chartDataContext-A5vEwNfY.js";import"./CategoricalChart-C9xxMr9R.js";import"./resolveDefaultProps-BfvXjv4K.js";import"./Layer-DWNEDYKO.js";import"./ReactUtils-CLpPl2yo.js";import"./Label-DrlcblLQ.js";import"./Text-CaUPu0Ls.js";import"./DOMUtils-DEWL1h2i.js";import"./ZIndexLayer-COBAY4xu.js";import"./ActivePoints-BULqV-gI.js";import"./Dot-CqXou1PJ.js";import"./types-DAXoUOiX.js";import"./RegisterGraphicalItemId-C0Pyz4Je.js";import"./ErrorBarContext-D803I392.js";import"./GraphicalItemClipPath-DhAcpDyX.js";import"./SetGraphicalItem-BCtoQcNZ.js";import"./useAnimationId-gBW8_6W-.js";import"./getRadiusAndStrokeWidthFromDot-Cq_xctji.js";import"./ActiveShapeUtils-CsZp4u_s.js";import"./isPlainObject-N__ihfse.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-h1QYOt2M.js";import"./Trapezoid-DDnY6d6S.js";import"./Sector-CETfwnvm.js";import"./Symbols-JY5hg72Q.js";import"./symbol-CKZaVPZy.js";import"./step--sLhjxi-.js";import"./Curve-BVLF1D_I.js";import"./index-DbbfyfFF.js";import"./ChartSizeDimensions-DUMsduP3.js";import"./OffsetShower-yJre-SEb.js";import"./PlotAreaShower-BRZz345m.js";import"./CartesianAxis-Ctr04CZm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DEU7ULV0.js";import"./uniqBy-PI0PJHxt.js";import"./iteratee-BuVbuqpH.js";import"./Cross-zxjIy8Mi.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
