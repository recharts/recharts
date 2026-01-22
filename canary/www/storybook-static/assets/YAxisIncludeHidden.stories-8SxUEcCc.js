import{r as f,e}from"./iframe-DZKc3wlS.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-BIjjeUdJ.js";import{R as A}from"./arrayEqualityCheck-DjWYx_fN.js";import{C}from"./ComposedChart-B72QYvLv.js";import{X as K}from"./XAxis-kwyNZCQz.js";import{L as v}from"./Legend-LR1sKRtT.js";import{B as a}from"./Bar-B4QE6OL-.js";import{R as x}from"./RechartsHookInspector-Co_Fh5Fl.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./CartesianAxis-zQUlpkZ2.js";import"./Layer-DH-WpK_h.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./Label-CCWjKoRR.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DokrlvR2.js";import"./zIndexSlice-B0ARFS3L.js";import"./types-CL0cTInA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DW00eoGN.js";import"./axisSelectors-D0TaSUJl.js";import"./RechartsWrapper-CFmROmVB.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./CategoricalChart-CckqKMR_.js";import"./Symbols-CqfdXGpW.js";import"./Curve-gwVQ8PMT.js";import"./useElementOffset-BTWpApp3.js";import"./iteratee-BsUQyG_p.js";import"./tooltipContext-Bvo5mwDL.js";import"./ReactUtils-rr4vsGZe.js";import"./ActiveShapeUtils-BkixNy1s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BC7Fny-7.js";import"./useAnimationId-NX8Gitos.js";import"./Trapezoid-B-GT8XQC.js";import"./Sector-Bdu3v8S8.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./ErrorBarContext-DvKtKMAK.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./getZIndexFromUnknown-BBKWE2ig.js";import"./graphicalItemSelectors-MTx4Krmh.js";import"./index-ZKZvtgb5.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
