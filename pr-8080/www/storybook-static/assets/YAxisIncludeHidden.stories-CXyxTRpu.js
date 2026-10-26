import{r as f,R as e}from"./iframe-Dckhh8TP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C2iUlU97.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DvqxU_fJ.js";import{C as k}from"./ComposedChart-CwkBXCx2.js";import{X as K}from"./XAxis-DZSKVUHO.js";import{L as v}from"./Legend-BhPG6qOW.js";import{B as a}from"./Bar-Bt74CXWa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BPfiwVrc.js";import"./Text-ixAKnQea.js";import"./resolveDefaultProps-DoWt88Bk.js";import"./pageBackground-Bsi5t8mD.js";import"./useId-BAdhA99P.js";import"./ZIndexLayer-DYLMgu3X.js";import"./index-BTZnO4jD.js";import"./index-BZ7EiUeE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ClcX1Sfv.js";import"./throttle-nSMGIYBk.js";import"./dataEntryStyles-C1y9indW.js";import"./axisSelectors-iU-8zlMU.js";import"./d3-scale-CVKSBoJ3.js";import"./CartesianAxis-B8NfN4oe.js";import"./Layer-Gqc-Z-cf.js";import"./types-orR6Wh5t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BoRV-MuC.js";import"./index-Bf6cRldK.js";import"./index-DfEyCTx4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DN3bSeN0.js";import"./index-BEi4ZfWK.js";import"./CartesianChart-ds3qEH6n.js";import"./chartDataContext-CqDlrvyh.js";import"./CategoricalChart-DiJWdssm.js";import"./Symbols-CuFQCUW8.js";import"./symbol-DC65CFDy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkmVvcV5.js";import"./uniqBy-DzK7VybD.js";import"./iteratee-NdqP5HqK.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DNDVPQVu.js";import"./useAnimationId-DwypxVGS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCB0dWGj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZclTza4.js";import"./tooltipContext-C_c7dwWf.js";import"./RegisterGraphicalItemId-jdQ-nkDB.js";import"./ErrorBarContext-D50rt7ip.js";import"./SetGraphicalItem-B5R69AhG.js";import"./getZIndexFromUnknown-BiGZnT5a.js";import"./useEffectiveDataKey-Dh_S8XsG.js";import"./omit-D41nXwZ-.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
