import{r as f,R as e}from"./iframe-osdC7w3x.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DYUQr3XS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-deUrzjsz.js";import{C as k}from"./ComposedChart-NByrG7TX.js";import{X as K}from"./XAxis-B__lQt6h.js";import{L as v}from"./Legend-pDiA-ZTx.js";import{B as s}from"./Bar-C8jawNzS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CRRMP5SS.js";import"./Text-HkDUvF78.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./DOMUtils-CpdlvjrD.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_4Zumz8.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./throttle-yBEImYyh.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianAxis-D1s41LT1.js";import"./Layer-CRq3eSZM.js";import"./types-PJaZpOTb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./Symbols-Coi-Izm_.js";import"./symbol-BY8GUPiW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ci-G34ee.js";import"./uniqBy-BwdA_Akb.js";import"./iteratee-Bc7fw8nQ.js";import"./tooltipContext-DugeM6MB.js";import"./AnimatedItems-DHXks09V.js";import"./useAnimationId-T5o_BkmZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IzVRkUh0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getZIndexFromUnknown-CDLEPKSa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DAicamNa.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
