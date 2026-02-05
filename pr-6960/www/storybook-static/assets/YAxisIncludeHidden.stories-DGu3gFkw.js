import{r as f,e}from"./iframe-BDkb7FkG.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BSq1Zqr5.js";import{Y as c}from"./YAxis-Q5HYawHS.js";import{R as A}from"./arrayEqualityCheck-B0TJyWD5.js";import{C}from"./ComposedChart-Ccent4P8.js";import{X as K}from"./XAxis-CmGav0vS.js";import{L as v}from"./Legend-BhCA1bNt.js";import{B as a}from"./Bar-BtjbD41A.js";import{R as x}from"./RechartsHookInspector-BNEsfHz6.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./CartesianAxis-CqOMvTf3.js";import"./Layer-DN29fGq2.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./Label-557v0PPI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CSKx51xZ.js";import"./zIndexSlice-CEfchlTx.js";import"./types-lD78ZLRW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DxXidz5r.js";import"./axisSelectors-BNLmthUg.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./CartesianChart-D8s7iQvN.js";import"./chartDataContext-BN0HTO99.js";import"./CategoricalChart-QMn_55Fk.js";import"./Symbols-cZo6AVu-.js";import"./Curve-BhcGGWB4.js";import"./useElementOffset-Cm-nycv7.js";import"./iteratee-BCcKgiDG.js";import"./tooltipContext-BT8nO4h9.js";import"./ReactUtils-Bu2m7OLZ.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./useAnimationId-Dt_DMrVN.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./ErrorBarContext-Cklgrfin.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./getZIndexFromUnknown-CxznuSwf.js";import"./graphicalItemSelectors-CvnRNsih.js";import"./index-BiD0RfS5.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
