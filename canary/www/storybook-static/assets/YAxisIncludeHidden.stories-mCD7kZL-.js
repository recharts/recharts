import{r as f,e}from"./iframe-BqavfRSI.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-Ce0lAKWw.js";import{R as A}from"./arrayEqualityCheck-Ra3gjxaW.js";import{C}from"./ComposedChart-B1SQxHiJ.js";import{X as K}from"./XAxis-DMyHdO-k.js";import{L as v}from"./Legend-DrBtMXV7.js";import{B as a}from"./Bar-DnxZeOVk.js";import{R as x}from"./RechartsHookInspector-DIZI_dr5.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BagVy590.js";import"./CartesianAxis--LdiM4X3.js";import"./Layer-7F20iT3S.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./Label-DNJA6zIC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDqdije3.js";import"./zIndexSlice-cuW5CNY3.js";import"./types-etyYATxu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BhizAxMH.js";import"./axisSelectors-CrlizjCS.js";import"./RechartsWrapper-BQN53ECK.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./Symbols-Dkh1Olqs.js";import"./Curve-Bl7M7m7v.js";import"./useElementOffset-DWXh0cP9.js";import"./iteratee-CEGyMYpE.js";import"./tooltipContext-BflV6d4d.js";import"./ReactUtils-wyfG9-H0.js";import"./ActiveShapeUtils-Dcqmnzwc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxU_uLMj.js";import"./useAnimationId-CE6HvtJ3.js";import"./Trapezoid-B5zHDmOP.js";import"./Sector-BUeJdgSe.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./ErrorBarContext-CMc8E4Ed.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./getZIndexFromUnknown-FrgRinK7.js";import"./graphicalItemSelectors-CTYjA39m.js";import"./index-BwE92fQv.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
