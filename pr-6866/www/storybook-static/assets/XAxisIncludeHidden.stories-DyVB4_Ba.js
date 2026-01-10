import{r as f,e}from"./iframe-tCRQIxYB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-C5YEwPYl.js";import{R as C}from"./arrayEqualityCheck-DFgE1twh.js";import{C as K}from"./ComposedChart-B_kjiHsD.js";import{X as A}from"./XAxis-o_gppMSb.js";import{L as v}from"./Legend-CKbr3K0E.js";import{B as a}from"./Bar-0p1DbV1h.js";import{R as x}from"./RechartsHookInspector-bM2S9Z_N.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./CartesianAxis-ipmvl_eK.js";import"./Layer-Okfcyfin.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./Label-JD75mQPI.js";import"./PolarUtils-BLxmkcH1.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./zIndexSlice-IJ_zl8YN.js";import"./types-CbdV4-dc.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./CartesianChart-Dy39hE-Z.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./Symbols-DwIizSNL.js";import"./Curve-NiEgXiq2.js";import"./useElementOffset-D0-uD3Uj.js";import"./iteratee-QAA3_HSJ.js";import"./tooltipContext-C5mjD3mc.js";import"./ReactUtils-CF2khIYu.js";import"./ActiveShapeUtils-B61GuIrI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BUsvopn3.js";import"./useAnimationId-D2oVQKnr.js";import"./Trapezoid-hUxVvC3O.js";import"./Sector-DQ482-FH.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./ErrorBarContext-B8Ubbuxs.js";import"./GraphicalItemClipPath-D1JoWQAT.js";import"./SetGraphicalItem-DozJQrmf.js";import"./getZIndexFromUnknown-BYF37b1M.js";import"./graphicalItemSelectors-kD6BeSeA.js";import"./index-CkWn_0P6.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./OffsetShower-B78P8GFz.js";import"./PlotAreaShower-R2kW5Azb.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
