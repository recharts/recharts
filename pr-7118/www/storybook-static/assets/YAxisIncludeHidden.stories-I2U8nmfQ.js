import{r as f,e}from"./iframe-C-iVd-D9.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BMfSetrt.js";import{R as A}from"./arrayEqualityCheck-CykFyG3w.js";import{C}from"./ComposedChart-BhT7kidc.js";import{X as K}from"./XAxis-DSNvwzP_.js";import{L as v}from"./Legend-CUm12eq7.js";import{B as a}from"./Bar-DLIH3GGF.js";import{R as x}from"./RechartsHookInspector-BmWQIBw0.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DbYsYZ3j.js";import"./Layer-PcuWobZF.js";import"./resolveDefaultProps-CaPMqnUf.js";import"./Text-DV9U-A1x.js";import"./DOMUtils-CDMIcntA.js";import"./Label-B2Hnjv9f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CF1VRPo3.js";import"./zIndexSlice-DM0eYjRM.js";import"./immer-9akI4mGC.js";import"./types-DAf5tiec.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-XpTaEf7K.js";import"./hooks-DgAj9GmX.js";import"./axisSelectors-B51mUxQh.js";import"./d3-scale-BLCaIo2v.js";import"./RechartsWrapper-OZYl-Tz6.js";import"./index-D7iAvCJZ.js";import"./CartesianChart-DCeJ5hMu.js";import"./chartDataContext-Dod_jDwP.js";import"./CategoricalChart-DQuyNjww.js";import"./Symbols-DpPGUMp-.js";import"./symbol-BuPqUUJq.js";import"./step-Ca8O5Pe5.js";import"./useElementOffset-Cxc-8owW.js";import"./uniqBy-Can407_D.js";import"./iteratee-BQhHXczZ.js";import"./tooltipContext-DmQQI9hK.js";import"./ReactUtils-nzFm5ghx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-LerByRq_.js";import"./isPlainObject-y7gB3M8h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CZ4Fndbl.js";import"./useAnimationId-DF-bmt8J.js";import"./Trapezoid-C-P9UIeU.js";import"./Sector-Xd_RhtXJ.js";import"./Curve-6NVtDyjZ.js";import"./RegisterGraphicalItemId-DBYhzviE.js";import"./ErrorBarContext-DToJ31oQ.js";import"./GraphicalItemClipPath-DlmVzEBx.js";import"./SetGraphicalItem-D9P8g2wE.js";import"./getZIndexFromUnknown-2a0m8kz2.js";import"./graphicalItemSelectors-CGXQJwpT.js";import"./index-4pvBd6R2.js";import"./ChartSizeDimensions-7dl-q0eS.js";import"./OffsetShower-DgEJieR9.js";import"./PlotAreaShower-Dw5kcDju.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
