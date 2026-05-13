import{r as f,e}from"./iframe-DA7dsAjt.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-C4Bf-We3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-B2Tullra.js";import{C}from"./ComposedChart-BvICr3ON.js";import{X as K}from"./XAxis-D3BVUN8u.js";import{L as v}from"./Legend-CIyYm_rT.js";import{B as s}from"./Bar-2ZMY7Zqq.js";import{R as x}from"./RechartsHookInspector-DyuMbIeF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-5nCOjy0L.js";import"./Layer-CA2bGkBA.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./Label-BbSyBdDv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CtisNWGZ.js";import"./zIndexSlice-QK0EAxoG.js";import"./immer-CgNeP4Cn.js";import"./types-BGlT9ghA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./Symbols-BhPyOpJM.js";import"./symbol-Cme7zaAq.js";import"./step-D3Kjh6oK.js";import"./useElementOffset-CMdfJDCv.js";import"./uniqBy-R1SES33n.js";import"./iteratee-bjfE0mcN.js";import"./tooltipContext-BDZWwd_H.js";import"./ReactUtils-Cqv1MuoY.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-WqUyYvVV.js";import"./isPlainObject-BtsggNmX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-tNMC4o.js";import"./useAnimationId-Ow7TV2bH.js";import"./Trapezoid-CUQqnsJW.js";import"./Sector-CYPQyxpp.js";import"./Curve-CSUb-Mmt.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./ErrorBarContext-Exwfj4Ew.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./getZIndexFromUnknown-BKC3JpvL.js";import"./graphicalItemSelectors-D6QPi44o.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
