import{r as f,e}from"./iframe-D7aX3J5h.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-ByFth8eE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DLuUv4yo.js";import{C}from"./ComposedChart-CmEEfZPd.js";import{X as K}from"./XAxis-EjrrpAWt.js";import{L as v}from"./Legend-Dfl2ak29.js";import{B as s}from"./Bar-B4OHPfpd.js";import{R as x}from"./RechartsHookInspector-BTqr9y2h.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bj6Nx-J-.js";import"./Layer-CJYXhEUr.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./Label-UZajBuhN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CkNFgsWD.js";import"./zIndexSlice-uyR3EFO5.js";import"./immer-DIW08hxt.js";import"./types-4ix9MfJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./hooks-D1J8v2Uc.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./Symbols-BNYsC8j_.js";import"./symbol-BUFbd2WM.js";import"./step-lYGPVUHl.js";import"./useElementOffset-7Ur_tbNZ.js";import"./uniqBy-BMTpWui9.js";import"./iteratee-Cr-LsCtJ.js";import"./tooltipContext-T7CTMUR-.js";import"./ReactUtils-CbiuaN3U.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-ozGWPntb.js";import"./isPlainObject-C2gpCQxZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5iIq7iY.js";import"./useAnimationId-m-yYskNq.js";import"./Trapezoid-DY_CkLjE.js";import"./Sector-B9JMeRk8.js";import"./Curve-C0dUv9vi.js";import"./RegisterGraphicalItemId-CN0LR0Zv.js";import"./ErrorBarContext-DUsuoaJE.js";import"./GraphicalItemClipPath-DCnzaJaS.js";import"./SetGraphicalItem-BA9LnDto.js";import"./getZIndexFromUnknown-mfMvjEMC.js";import"./graphicalItemSelectors-CrjsmUQK.js";import"./index-BUdbPquH.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./OffsetShower-YsWSeMxm.js";import"./PlotAreaShower-BsknmqpH.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
