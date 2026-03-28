import{r as f,e}from"./iframe-C27-mxY1.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CPvAYGY0.js";import{R as A}from"./arrayEqualityCheck-D-5eU_dz.js";import{C}from"./ComposedChart-KJkIi4eH.js";import{X as K}from"./XAxis-Bkm5Gu7p.js";import{L as v}from"./Legend-Dhdd6Z_W.js";import{B as a}from"./Bar-C4Jz1B-L.js";import{R as x}from"./RechartsHookInspector-C_T85NFo.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DZAE-TXK.js";import"./Layer-DIVtJdsU.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./Label-B6Z4EDvc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-pky4ZU.js";import"./zIndexSlice-BLW0sC1L.js";import"./immer-CWybgQyF.js";import"./types-DbJv915h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./Symbols-ygUKGMj2.js";import"./symbol-Bcxorr4O.js";import"./step-DPeTeJhQ.js";import"./useElementOffset-CpNmvyH_.js";import"./uniqBy-sO9_1-IK.js";import"./iteratee-BVOByGiD.js";import"./tooltipContext-CvNlSq4Y.js";import"./ReactUtils-DuG0Tdq5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BMqQzPng.js";import"./isPlainObject-Cs6ajyZL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D88V661C.js";import"./useAnimationId-TcKlRMa1.js";import"./Trapezoid-DPganyo-.js";import"./Sector-BBijWEml.js";import"./Curve-C3fWZnPx.js";import"./RegisterGraphicalItemId-CuWJpCyW.js";import"./ErrorBarContext-2LiDJnsG.js";import"./GraphicalItemClipPath-CJlc_ulB.js";import"./SetGraphicalItem-1mG4wi13.js";import"./getZIndexFromUnknown-CViMPH0x.js";import"./graphicalItemSelectors-BQJe7JS2.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
