import{r as f,R as e}from"./iframe-BECHMrDZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-9bvi17Wq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ZZYOt5ZJ.js";import{C as k}from"./ComposedChart-DEoquINt.js";import{X as K}from"./XAxis-Dnf9N0V4.js";import{L as v}from"./Legend-C_5eNF-Y.js";import{B as s}from"./Bar-DooUIvHF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CPwaVA9l.js";import"./CartesianAxis-BTVfzskq.js";import"./Layer-ESOqu-Gc.js";import"./resolveDefaultProps-BtqON1I7.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./Label-VQOoexxL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dzP4UBMr.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./types-n4LQ-b_y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./immer-DNeblauM.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./Symbols-C1067cmX.js";import"./symbol-B59qSlrV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcmDvjnC.js";import"./uniqBy-3fDUfdm2.js";import"./iteratee-DRu_ACEH.js";import"./tooltipContext-BS8ljBXU.js";import"./AnimatedItems-CQmyu7n-.js";import"./useAnimationId-BT4jYtUB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-De025VPd.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./ErrorBarContext-D2jpma0H.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getZIndexFromUnknown-CS8UYbYk.js";import"./graphicalItemSelectors-LrHXndN_.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
