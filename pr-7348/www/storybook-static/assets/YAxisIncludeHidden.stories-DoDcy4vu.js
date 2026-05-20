import{u as f,e}from"./iframe-CUlKjRv5.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CKyv_Ble.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-DBgCs58d.js";import{C}from"./ComposedChart-D68WBCYe.js";import{X as K}from"./XAxis-CO_kz_i5.js";import{L as v}from"./Legend-BqAOIfma.js";import{B as s}from"./Bar-DwYBALo4.js";import{R as x}from"./RechartsHookInspector-DIUnr0hb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BeQQMY3-.js";import"./Layer-BRPUehgK.js";import"./resolveDefaultProps-_1GgMiat.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./Label-CsCoT34Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dzag2pwA.js";import"./zIndexSlice-ygbvIPwo.js";import"./immer-DSTsi-PZ.js";import"./types-cseKagnM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";import"./step-ndBpbuBv.js";import"./useElementOffset-Crgg6g68.js";import"./uniqBy-BeSJAQ9R.js";import"./iteratee-D8Z_DKuL.js";import"./tooltipContext-CW5tzjbG.js";import"./ReactUtils-Dhd-bIVM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-6qGjBTVG.js";import"./isPlainObject-D3iLjTkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BeDuyTKv.js";import"./useAnimationId-527k5CUF.js";import"./Trapezoid-Bhuw_sBY.js";import"./Sector-DGUTJhGS.js";import"./Curve-Dj9MPAvc.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./ErrorBarContext-CXV3xnHJ.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./getZIndexFromUnknown-TVijfWfN.js";import"./graphicalItemSelectors-ByldMGNB.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
