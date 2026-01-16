import{r as f,e}from"./iframe-BESbJ0y8.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-Cn9GoD8s.js";import{R as A}from"./arrayEqualityCheck-BJiY8zR4.js";import{C}from"./ComposedChart-CzRf54mG.js";import{X as K}from"./XAxis-DXfH0Gay.js";import{L as v}from"./Legend-Bkm0uCP1.js";import{B as a}from"./Bar-CuWm_wTn.js";import{R as x}from"./RechartsHookInspector-BIrUgBA6.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./CartesianAxis-D-J9lWts.js";import"./Layer-C8CJBWmq.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./Label-qXVAmmrb.js";import"./PolarUtils-BLb-h-71.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./zIndexSlice-Ce7G6X37.js";import"./types-CGrtFV1P.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./RechartsWrapper-DRe6KgwL.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./Symbols-D6ejZ83Z.js";import"./Curve-9nr7VYb2.js";import"./useElementOffset-BAA_29pq.js";import"./iteratee-YMYAzx6R.js";import"./tooltipContext-D7tZ70Gw.js";import"./ReactUtils-CdwmpjBo.js";import"./ActiveShapeUtils-Cfdp6Sqn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0B57kHB.js";import"./useAnimationId-XfKJYBN0.js";import"./Trapezoid-BCkjDT6c.js";import"./Sector-DR905TlL.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./ErrorBarContext-D0r4aWU5.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./getZIndexFromUnknown-BlZWVLdU.js";import"./graphicalItemSelectors-wDI_ZJYU.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
