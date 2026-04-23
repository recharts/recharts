import{r as f,e}from"./iframe-B9O9PLmj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BoxHjnQ7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DC5CCiaX.js";import{C}from"./ComposedChart-GxkF_kkS.js";import{X as K}from"./XAxis-B1EE7uVS.js";import{L as v}from"./Legend-waBu6jOx.js";import{B as s}from"./Bar-BFn2UJSW.js";import{R as x}from"./RechartsHookInspector-oD2s6CPO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D9MTlCrN.js";import"./Layer-CeeJrP8o.js";import"./resolveDefaultProps-BG5-jm5o.js";import"./Text-BILB17Zq.js";import"./DOMUtils-CwoLiA_U.js";import"./Label-CyHBMA3l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYfC-fux.js";import"./zIndexSlice-CXYg_MdN.js";import"./immer-CorX8m6_.js";import"./types-wS1CwaJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-M3URujhE.js";import"./hooks-BTzSQdIL.js";import"./axisSelectors-D00_Gdzw.js";import"./d3-scale-CExCS1t0.js";import"./RechartsWrapper-DGbm3XN2.js";import"./index-CAnKFVeM.js";import"./CartesianChart-CzHYXFWb.js";import"./chartDataContext-CXYcSTD1.js";import"./CategoricalChart-CMv5R2DQ.js";import"./Symbols-CFtKhMEP.js";import"./symbol-gibfx3Ew.js";import"./step-DmhUsuIO.js";import"./useElementOffset-BDjp6GLr.js";import"./uniqBy-CjP1EF7z.js";import"./iteratee-D6c1MZ_S.js";import"./tooltipContext-DAf7S0C6.js";import"./ReactUtils-BBiT48UQ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BZRBvXfn.js";import"./isPlainObject-DKUUO2R6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD4TDJ91.js";import"./useAnimationId-CEyoSkEC.js";import"./Trapezoid-BTKQS4gb.js";import"./Sector-Cr5FAs6h.js";import"./Curve-CnUGNDOG.js";import"./RegisterGraphicalItemId-B6wW9i8n.js";import"./ErrorBarContext-CdQGiGFg.js";import"./GraphicalItemClipPath-CTLEHBag.js";import"./SetGraphicalItem-C1WNJGNc.js";import"./getZIndexFromUnknown-CecZB_XU.js";import"./graphicalItemSelectors-BE10KQC6.js";import"./index-B7585ExM.js";import"./ChartSizeDimensions-BLFdg5d7.js";import"./OffsetShower-BZwyeReB.js";import"./PlotAreaShower-4RtYHx69.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
