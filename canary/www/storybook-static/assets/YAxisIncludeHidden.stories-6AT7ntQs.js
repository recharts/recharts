import{u as f,e}from"./iframe-CxCywqzA.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DxVfrwf5.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-yVNwB6mW.js";import{C}from"./ComposedChart-CX5jdlg2.js";import{X as K}from"./XAxis-_gXpBYMm.js";import{L as v}from"./Legend-CSTAcr5S.js";import{B as s}from"./Bar-BHX1MDeb.js";import{R as x}from"./RechartsHookInspector-DGOvaE6a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CJvJrEPT.js";import"./Layer-BIf3cKek.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./Label-C7vnjRze.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DP6IzTUW.js";import"./zIndexSlice-DVQoyP0x.js";import"./immer-B8hoAty4.js";import"./types-ou1XrYCh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D6OwKyas.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./Symbols-BqKh7AmN.js";import"./symbol-B6dbz-VY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DCPR5Aep.js";import"./uniqBy-CKEO767k.js";import"./iteratee-CVDXqgnY.js";import"./tooltipContext-DpnGzNJg.js";import"./ReactUtils-9u_I1YpW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_fNhFcV.js";import"./useAnimationId-C-vOWrwQ.js";import"./ActiveShapeUtils-sPKYOUtI.js";import"./RegisterGraphicalItemId-BpFbTFO3.js";import"./ErrorBarContext-CRsTDduf.js";import"./GraphicalItemClipPath-vFOoMVO7.js";import"./SetGraphicalItem-CwSOO4xE.js";import"./getZIndexFromUnknown-DP36f3hj.js";import"./graphicalItemSelectors-CYtQB4Qt.js";import"./index-DGGA_IR8.js";import"./ChartSizeDimensions-CFycJ4k1.js";import"./OffsetShower-BkZVXWFE.js";import"./PlotAreaShower-BM-3w1mr.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
