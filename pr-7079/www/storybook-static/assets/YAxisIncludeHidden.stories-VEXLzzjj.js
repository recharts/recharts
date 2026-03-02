import{r as f,e}from"./iframe-DFPwKozO.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-D_B66qKF.js";import{R as A}from"./arrayEqualityCheck-BO0FMWsB.js";import{C}from"./ComposedChart-BAhOAMBQ.js";import{X as K}from"./XAxis-DB5s1uQK.js";import{L as v}from"./Legend-CrpbHb3D.js";import{B as a}from"./Bar-B4moLiuP.js";import{R as x}from"./RechartsHookInspector-y9SAwPh-.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BRd4GQUv.js";import"./Layer-UW-3uLDu.js";import"./resolveDefaultProps-B8sM-C45.js";import"./Text-BuTP6JNp.js";import"./DOMUtils-XVY0zsXA.js";import"./Label-BfeOO_bU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyDzR_iO.js";import"./zIndexSlice-uamkKpnq.js";import"./immer-Cq-7IBeQ.js";import"./types-DHDJ8gyd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BKeP3MvG.js";import"./hooks-bta4c9FS.js";import"./axisSelectors-Fye4v2An.js";import"./d3-scale-DC5SBv4a.js";import"./RechartsWrapper-CjOfOtkl.js";import"./index-BM-iP6jK.js";import"./CartesianChart-Dzwf7i_k.js";import"./chartDataContext-o1PhfYVG.js";import"./CategoricalChart-B84p6B_R.js";import"./Symbols-GcyqxXm3.js";import"./symbol-DJv_b8-d.js";import"./step-CD2gspfu.js";import"./useElementOffset-6CBXSlCR.js";import"./uniqBy-CE3JJ0yH.js";import"./iteratee-DpnnO8WS.js";import"./tooltipContext-nePS0eA6.js";import"./ReactUtils-iN1uHd88.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CntxH9-T.js";import"./isPlainObject-GWG2LZr9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Atcro-mi.js";import"./useAnimationId-DMMdhd1b.js";import"./Trapezoid-DlIOBrOD.js";import"./Sector-UE1_Ib6K.js";import"./Curve-Cr2jXmDN.js";import"./RegisterGraphicalItemId-ISC1Bh-u.js";import"./ErrorBarContext-D3fyLUw8.js";import"./GraphicalItemClipPath-CH9onNSH.js";import"./SetGraphicalItem-D8F49Ifw.js";import"./getZIndexFromUnknown-BnTlR-Bi.js";import"./graphicalItemSelectors-CKp7rBmt.js";import"./index-BKyMZNGM.js";import"./ChartSizeDimensions-tYevmH5B.js";import"./OffsetShower-CuJwjf0e.js";import"./PlotAreaShower-CheWi7Y7.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
