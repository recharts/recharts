import{r as f,e}from"./iframe-D2iPyEE3.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-r-zcSEA9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BQ52A-KD.js";import{C}from"./ComposedChart-C_oRmZ51.js";import{X as K}from"./XAxis-Ca5xFIBT.js";import{L as v}from"./Legend-CuUAOZH7.js";import{B as s}from"./Bar-DxdxeDJG.js";import{R as x}from"./RechartsHookInspector-pMynMK3d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bd7Gtpgp.js";import"./Layer-CIGoVUHw.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./Label-CjmamkRK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ClfHdlij.js";import"./zIndexSlice-B-uvLuMe.js";import"./immer-5DUlJX3y.js";import"./types-DfbbSUKg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./RechartsWrapper-D9hxchsK.js";import"./index-CGzhf8ES.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./Symbols-Dh7LCKpa.js";import"./symbol-DAG115Zm.js";import"./step-NQkLQHEn.js";import"./useElementOffset-CKbI1PfG.js";import"./uniqBy-Dwf19U3R.js";import"./iteratee-BxNvX9m6.js";import"./tooltipContext-6_bq2H_U.js";import"./ReactUtils-DlxpINgd.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-cVE6agUq.js";import"./isPlainObject-BVZ5R7gX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIa7eyeJ.js";import"./useAnimationId-fkVW7SyB.js";import"./Trapezoid-CD49191V.js";import"./Sector-CON_U0ZW.js";import"./Curve-gyPLT6fj.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./ErrorBarContext-6PvhO17o.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./getZIndexFromUnknown-DC9lUmZS.js";import"./graphicalItemSelectors-DEHTmw7m.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
