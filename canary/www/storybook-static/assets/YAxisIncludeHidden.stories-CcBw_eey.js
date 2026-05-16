import{u as f,e}from"./iframe-CbvHz0qJ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CUyG3y8q.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CIVk4CxQ.js";import{C}from"./ComposedChart-C-53BhDQ.js";import{X as K}from"./XAxis-BvInkeR9.js";import{L as v}from"./Legend-DO5w7hdM.js";import{B as s}from"./Bar-DqSYXOEq.js";import{R as x}from"./RechartsHookInspector-C8-wiP8k.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CAdbPfIH.js";import"./Layer-oNxAKppL.js";import"./resolveDefaultProps-FfHzzJ36.js";import"./Text-zXYfGIDc.js";import"./DOMUtils-KYbfHoFv.js";import"./Label-DiuN5RYa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFivYDgH.js";import"./zIndexSlice-DOjchSOT.js";import"./immer-C8JaxkgT.js";import"./types-D2ZhhyQv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DxWAR4bl.js";import"./hooks-BggtznHY.js";import"./axisSelectors-CyVqvn-7.js";import"./d3-scale-CaSsgBWf.js";import"./RechartsWrapper-B5t1ZP3_.js";import"./index-QoqGOv4u.js";import"./CartesianChart-5KTQh7sp.js";import"./chartDataContext-CMNbR_6b.js";import"./CategoricalChart-DaBAgJKk.js";import"./Symbols-BTRaNc6y.js";import"./symbol-C7eT5nNM.js";import"./step-BAeK-y3y.js";import"./useElementOffset-oVtGe_1V.js";import"./uniqBy-Bt5IS1fo.js";import"./iteratee-DOvvrhL8.js";import"./tooltipContext-zTD1WGF_.js";import"./ReactUtils-Bd_oEybG.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B059YRpu.js";import"./isPlainObject-5PdtnTbn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dc_2-qT8.js";import"./useAnimationId-cKMJpCeK.js";import"./Trapezoid-B-N3racq.js";import"./Sector-gYM3CaID.js";import"./Curve-DeTt9QyO.js";import"./RegisterGraphicalItemId-DcNWQseR.js";import"./ErrorBarContext-BQunpeTT.js";import"./GraphicalItemClipPath-CH-wZPAw.js";import"./SetGraphicalItem-Dnr1kOuh.js";import"./getZIndexFromUnknown-DEjsszaa.js";import"./graphicalItemSelectors-BIise6HR.js";import"./index-B7VOlChJ.js";import"./ChartSizeDimensions-Baj3tE5Q.js";import"./OffsetShower-CepRLrgp.js";import"./PlotAreaShower-Bm7LeybJ.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
