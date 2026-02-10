import{r as f,e}from"./iframe-BtK7K3Kv.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-CwLMlwVC.js";import{R as A}from"./arrayEqualityCheck-CFfqZo_0.js";import{C}from"./ComposedChart-B_mHOkev.js";import{X as K}from"./XAxis-DGpvny6L.js";import{L as v}from"./Legend-CiOMkmt7.js";import{B as a}from"./Bar-CJAElBbT.js";import{R as x}from"./RechartsHookInspector-D4JLTX2d.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./CartesianAxis-BOqlO8Q1.js";import"./Layer-DV1icpzr.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./Label-DynPPCJ6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaJzxTrT.js";import"./zIndexSlice-m57chh8X.js";import"./types-CVJb2MOT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./RechartsWrapper-DGVCpdWj.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./Symbols-DqB8iXHv.js";import"./Curve-yPyY_uXZ.js";import"./useElementOffset-Di7XOydY.js";import"./iteratee-C_F3norR.js";import"./tooltipContext-C__a452J.js";import"./ReactUtils-BJV4SHfz.js";import"./ActiveShapeUtils-DG-TGbIe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_NKn9vF.js";import"./useAnimationId-FO0Tg1s_.js";import"./Trapezoid-C4MEq2xn.js";import"./Sector-8dbuSlIN.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./ErrorBarContext-CiGlk53m.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./getZIndexFromUnknown-CmwjF5Pb.js";import"./graphicalItemSelectors-B2Vfl7ve.js";import"./index-CPKyuAeN.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
