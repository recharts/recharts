import{r as f,R as e}from"./iframe-CtCQjsM6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DBaHNEP2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dyeq-kTm.js";import{C as k}from"./ComposedChart-DHyW9dZg.js";import{X as K}from"./XAxis-CP213xw9.js";import{L as v}from"./Legend-BCCQxZNg.js";import{B as s}from"./Bar-K77vF5If.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CXMuCFS1.js";import"./CartesianAxis-BR8NQrXr.js";import"./Layer-ikVkc87V.js";import"./resolveDefaultProps-y277M-17.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./Label-DEKQSx_8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./types-DG_xuUOr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B82fdgBY.js";import"./immer-UADZssR3.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./Symbols-CYOQ4gfn.js";import"./symbol-DQIAPejZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-F2Bq50mD.js";import"./uniqBy-BH1tP1ZF.js";import"./iteratee-DKULfjVT.js";import"./tooltipContext-BoH31FI7.js";import"./AnimatedItems-D-nX9UUI.js";import"./useAnimationId-BByU_EIU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYymeKVw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getZIndexFromUnknown-DA3lv6Ga.js";import"./graphicalItemSelectors-Dx8FkvhD.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
