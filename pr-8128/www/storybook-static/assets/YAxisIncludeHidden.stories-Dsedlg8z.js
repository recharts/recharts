import{r as f,R as e}from"./iframe-C9xnj3fa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CZieiH3_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CcurngJa.js";import{C as k}from"./ComposedChart-CPJRa0Xe.js";import{X as K}from"./XAxis-CqLpIx_r.js";import{L as v}from"./Legend-EgzWNiBX.js";import{B as a}from"./Bar-Bhc7-zFr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BDFDhH9S.js";import"./Text-BlDPHkKw.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./DOMUtils-rMdb-gP0.js";import"./pageBackground-BZHE6_vS.js";import"./ZIndexLayer-BqHotqUl.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./throttle-Brv_8OQk.js";import"./axisSelectors-Ci_X7Owa.js";import"./d3-scale-Bt8PJZEG.js";import"./CartesianAxis-CWptnmGh.js";import"./Layer-DDMBpFba.js";import"./types-DG6esOZW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-jCX_JL39.js";import"./index-DsrYsm3j.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BTsf-RRm.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";import"./Symbols-Cm6DVkmF.js";import"./fillDefinitions-JiW6eW7Z.js";import"./symbol-B6aiZ8Bc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFo0ivMe.js";import"./uniqBy-DEkhL1Ig.js";import"./iteratee-BNbt2Vfj.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Dl-1RIBv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BnqXvc2P.js";import"./useAnimationId-CE3S5svQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-3CPPp2aV.js";import"./tooltipContext-CVOZ5wR7.js";import"./dataEntryStyles-DUCKxZ4T.js";import"./ErrorBarContext-CpFpfUyn.js";import"./activeStyles-D9Ul1Rn7.js";import"./SetGraphicalItem-CW9QGr42.js";import"./getZIndexFromUnknown-B9U1LOAw.js";import"./useEffectiveDataKey-Bl0Ac7JR.js";import"./omit-hcBPfrkh.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
