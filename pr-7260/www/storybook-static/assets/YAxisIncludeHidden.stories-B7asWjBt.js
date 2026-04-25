import{r as f,e}from"./iframe-8w6hSOb3.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Bf2ShXUT.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BcSkIFjy.js";import{C}from"./ComposedChart-BXY8auWm.js";import{X as K}from"./XAxis-AMaL4weY.js";import{L as v}from"./Legend-B3iEZQNB.js";import{B as s}from"./Bar-Cf8k4GKl.js";import{R as x}from"./RechartsHookInspector-64iDxMAV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B-EZEcGt.js";import"./Layer-VbLV2S9I.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./Label-CbTww8i0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BZxHBglw.js";import"./zIndexSlice-xR0tBw_b.js";import"./immer-CNp4ouR9.js";import"./types-DDD23-V2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CehvSBlF.js";import"./hooks-DH6TblVT.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./Symbols-HCV45nTw.js";import"./symbol-DDPk1XI3.js";import"./step-CO9P-pBw.js";import"./useElementOffset-BS3k8eV3.js";import"./uniqBy-BKrVti4k.js";import"./iteratee-E4lAKDYa.js";import"./tooltipContext-BmmqtSz1.js";import"./ReactUtils-RNztsw35.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CG73MWk5.js";import"./isPlainObject-UED8GYmG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYl8kbGp.js";import"./useAnimationId-kYjgFxKg.js";import"./Trapezoid-BJuggP_P.js";import"./Sector-C0Mog3VL.js";import"./Curve-DCDk8LQV.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./ErrorBarContext-BMaq7Beg.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./getZIndexFromUnknown-CJD10RPr.js";import"./graphicalItemSelectors-CTgr6Ywa.js";import"./index-1JoQw62M.js";import"./ChartSizeDimensions-BdSUC2dN.js";import"./OffsetShower-CDnSCRp1.js";import"./PlotAreaShower-xfHEq74j.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
