import{r as f,e}from"./iframe-DerYKIzi.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BSq1Zqr5.js";import{Y as c}from"./YAxis-D6MwvlMv.js";import{R as A}from"./arrayEqualityCheck-BjVe0Fqi.js";import{C}from"./ComposedChart-DIipW_Ve.js";import{X as K}from"./XAxis-Bgvn5DCx.js";import{L as v}from"./Legend-oOwdWAco.js";import{B as a}from"./Bar-BhR19V-p.js";import{R as x}from"./RechartsHookInspector-6OICS92a.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./CartesianAxis-CgnzR7dE.js";import"./Layer-D3SGVv1F.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./Label-Dcc5xZ5Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4AZig9C.js";import"./zIndexSlice-Dl8TZiao.js";import"./types-aH4hB60Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bufm5eM3.js";import"./axisSelectors-D2mivk7c.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./Symbols-BsidgTnn.js";import"./Curve-HbHV5hCk.js";import"./useElementOffset-BQTTbTDB.js";import"./iteratee-B5c8PfHS.js";import"./tooltipContext-DpD997Ve.js";import"./ReactUtils-C811ViG8.js";import"./ActiveShapeUtils-BHypxLS_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2nS0zsop.js";import"./useAnimationId-Q_ju2aFP.js";import"./Trapezoid-BqTiWmsP.js";import"./Sector-KrvgbNAg.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./ErrorBarContext-B9auALKr.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./getZIndexFromUnknown-fgnswuXS.js";import"./graphicalItemSelectors-DGqGzZkQ.js";import"./index-Baa4xFqo.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./OffsetShower-CcEDeZ1H.js";import"./PlotAreaShower-lQ69SKO-.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
