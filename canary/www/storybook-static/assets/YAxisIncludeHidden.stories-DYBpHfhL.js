import{u as f,e}from"./iframe-DrZHGfnp.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BDktYU23.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-BU1FgpAp.js";import{C}from"./ComposedChart-DxmmuLi3.js";import{X as K}from"./XAxis-CfPxufGn.js";import{L as v}from"./Legend-CpyzK0FE.js";import{B as s}from"./Bar-pYwbJ7vU.js";import{R as x}from"./RechartsHookInspector-C7Iml_JQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DI4oFfLH.js";import"./Layer-ClTbBP2Y.js";import"./resolveDefaultProps-DYZAgT61.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./Label-BqIF3DzG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BfJNfeY9.js";import"./zIndexSlice-D-dyI62l.js";import"./immer-D0UXwCcn.js";import"./types-6QYLxKbI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-7FEKlWww.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./d3-scale-txqkfOII.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./CartesianChart-DJW3KXl1.js";import"./chartDataContext-C7FGjj0C.js";import"./CategoricalChart-iLXWxvTy.js";import"./Symbols-B4qAZBiK.js";import"./symbol-S8QHyV4z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqMnl3PK.js";import"./uniqBy-XAk6kl3o.js";import"./iteratee-usRtL8cc.js";import"./tooltipContext-DiQ8TESl.js";import"./ReactUtils-DDlt2sQ2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6rErMHV.js";import"./useAnimationId-BQVYm0pl.js";import"./ActiveShapeUtils-Dr-kHcGB.js";import"./RegisterGraphicalItemId-BFqXK8dS.js";import"./ErrorBarContext-RFgpZOgG.js";import"./GraphicalItemClipPath-DRJNib_j.js";import"./SetGraphicalItem-BQUpenlh.js";import"./getZIndexFromUnknown-BeX0VjD_.js";import"./graphicalItemSelectors-DnMGtw1m.js";import"./index-BaPlyvUD.js";import"./ChartSizeDimensions-y6v6hFmg.js";import"./OffsetShower-BQ-We3NI.js";import"./PlotAreaShower-DUTHK_JT.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
