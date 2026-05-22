import{u as f,e}from"./iframe-wPjdlMkh.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CALSYCDu.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-C2qrry8R.js";import{C}from"./ComposedChart-DRK5OR9O.js";import{X as K}from"./XAxis-_OYHLA6K.js";import{L as v}from"./Legend-TABkCGtc.js";import{B as s}from"./Bar-DphLeeKq.js";import{R as x}from"./RechartsHookInspector-Bh7Xd8ps.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BzSAAt9Y.js";import"./Layer-Cueh5NkG.js";import"./resolveDefaultProps-DRV1yjEG.js";import"./Text-D_Ir2n4d.js";import"./DOMUtils-CiWWI4hV.js";import"./Label-BRKSm8Ce.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9w89N_j.js";import"./zIndexSlice-CfQuOadn.js";import"./immer-BpPfFNPI.js";import"./types-D-aEIpto.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DSJJKDzx.js";import"./hooks-DMKFe6xQ.js";import"./axisSelectors-BeV9utXI.js";import"./d3-scale-NFHY5pWC.js";import"./RechartsWrapper-B-jo2qpq.js";import"./index-CRU-lK14.js";import"./CartesianChart-TFHKXQrQ.js";import"./chartDataContext-Ds7D7t0h.js";import"./CategoricalChart-C7FeICx9.js";import"./Symbols-CxPJ2NK4.js";import"./symbol-0Nqa0CmC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BW7DH_NQ.js";import"./uniqBy-Csen4X-d.js";import"./iteratee-Bu02any-.js";import"./tooltipContext-f7sFM_aI.js";import"./ReactUtils-DkGkgP-m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2oO3kmO.js";import"./useAnimationId-FpSV_Xeh.js";import"./ActiveShapeUtils-Dm52jN-p.js";import"./RegisterGraphicalItemId-CMP7i145.js";import"./ErrorBarContext-C8p1ky5C.js";import"./GraphicalItemClipPath-Iqn3z8Uo.js";import"./SetGraphicalItem-FTMP51O8.js";import"./getZIndexFromUnknown-CDNkcekP.js";import"./graphicalItemSelectors-CxS-ntMf.js";import"./index-88IFfxfH.js";import"./ChartSizeDimensions-CSliTc3n.js";import"./OffsetShower-C85nEH-b.js";import"./PlotAreaShower-DrRr8S-w.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
