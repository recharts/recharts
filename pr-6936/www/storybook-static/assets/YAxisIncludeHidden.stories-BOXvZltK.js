import{r as f,e}from"./iframe-BRGG-JoH.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-Dr8aURmX.js";import{R as A}from"./arrayEqualityCheck-mIQ5hzOq.js";import{C}from"./ComposedChart-EtXkgG2p.js";import{X as K}from"./XAxis-Cdr81EpX.js";import{L as v}from"./Legend-DF6u81l5.js";import{B as a}from"./Bar-Cqvo0cE_.js";import{R as x}from"./RechartsHookInspector-Ctx1w3em.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./CartesianAxis-BoArf1fz.js";import"./Layer-Da-YNOyz.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./Label-cR9E2h9U.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D0IJam7I.js";import"./zIndexSlice-DL-y9Kvz.js";import"./types-BKK4rjEh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./RechartsWrapper-9pcaaxwh.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./Symbols-Bp7HaOpu.js";import"./Curve-D65O9kIu.js";import"./useElementOffset-C8V_pdJZ.js";import"./iteratee-Dp3oOjSb.js";import"./tooltipContext-BgeYg4JW.js";import"./ReactUtils-Dc8DAnTF.js";import"./ActiveShapeUtils-CgJmUR31.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DW4Clnem.js";import"./useAnimationId-CqPKjgNu.js";import"./Trapezoid-Dhytgh39.js";import"./Sector-RG4HwYfK.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./ErrorBarContext-v-g5O0yz.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./getZIndexFromUnknown-DkUvDB3y.js";import"./graphicalItemSelectors-Bw2zOLDM.js";import"./index-D8mL5N4x.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./OffsetShower-BMRMJ2Vb.js";import"./PlotAreaShower-DTP32oyl.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
