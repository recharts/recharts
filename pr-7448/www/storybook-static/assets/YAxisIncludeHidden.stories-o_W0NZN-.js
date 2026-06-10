import{r as f,R as e}from"./iframe-CRd1fYKG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CcTJnWbU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BEDqBT5s.js";import{C as k}from"./ComposedChart-CMYYvZ46.js";import{X as K}from"./XAxis-CFDNTKtN.js";import{L as v}from"./Legend-C0BtyMBO.js";import{B as s}from"./Bar-B2l2QVd4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CAg3-hN5.js";import"./CartesianAxis-BngYAupc.js";import"./Layer-uzXkuSL7.js";import"./resolveDefaultProps-C_1LRrwf.js";import"./Text-BzOWhyUQ.js";import"./DOMUtils-meWqI4ST.js";import"./isWellBehavedNumber-IulUlDH2.js";import"./Label-GPMVhHkr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMZSY73E.js";import"./index-Cu0dCOlk.js";import"./index-COR3Qgsn.js";import"./types-fr95e_gP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwoXfhkK.js";import"./immer-DuXdSz_W.js";import"./RechartsWrapper-CTRhzR3z.js";import"./index-Co5B8-DW.js";import"./index-Dyy4uRrG.js";import"./axisSelectors-CW_HZ1K1.js";import"./d3-scale-Bw_PCS9h.js";import"./string-B6fdYHAA.js";import"./CartesianChart-_Ts9MuUK.js";import"./chartDataContext-24IFZ5R3.js";import"./CategoricalChart-7SQT56eo.js";import"./Symbols-BPYBvDTw.js";import"./symbol-F3eW-PP4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zRETVJYr.js";import"./uniqBy-VdDR52By.js";import"./iteratee-D7Xt4tdY.js";import"./tooltipContext-C8nmrFbH.js";import"./AnimatedItems-CGUpOpVe.js";import"./useAnimationId-B3UhTZxg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KYXVSxkg.js";import"./ActiveShapeUtils-DdflEQCA.js";import"./RegisterGraphicalItemId-CFlZHpEu.js";import"./ErrorBarContext-DHhZn8TN.js";import"./GraphicalItemClipPath-BHaSLCrX.js";import"./SetGraphicalItem-DVL07t4G.js";import"./getZIndexFromUnknown-TK1WiTz2.js";import"./graphicalItemSelectors-BzME9kzL.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
