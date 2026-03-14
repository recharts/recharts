import{r as f,e}from"./iframe-DhSnVUUY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CXFxK72j.js";import{R as A}from"./arrayEqualityCheck-ItSr43uT.js";import{C}from"./ComposedChart-CygvqBNp.js";import{X as K}from"./XAxis-BK9sGi8f.js";import{L as v}from"./Legend-BbSGbk_D.js";import{B as a}from"./Bar-FCA6sD8U.js";import{R as x}from"./RechartsHookInspector-_iSQ6Sv6.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-wTVaN_w2.js";import"./Layer-DqA8yJsy.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./Label-CbPieNct.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qqef8KVB.js";import"./zIndexSlice-CmnFYU-3.js";import"./immer-ffnfnJI7.js";import"./types-B9YiKk4f.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-aQirpCka.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./RechartsWrapper-yZud87Hm.js";import"./index-CW6mkywG.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./step-CbaapRre.js";import"./useElementOffset-CdKfT37L.js";import"./uniqBy-zkYuhEQW.js";import"./iteratee-lYsZgTBf.js";import"./tooltipContext-Cx0YQoA4.js";import"./ReactUtils-BaLETgkD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./useAnimationId-DocxG_ZJ.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./Curve-BOb3x1Vv.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./ErrorBarContext-CqudBFLS.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./getZIndexFromUnknown-COBi3hxl.js";import"./graphicalItemSelectors-BT93NeYu.js";import"./index-AtwlN2q9.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./OffsetShower-BxnZU9HH.js";import"./PlotAreaShower-CiIWRvtc.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
