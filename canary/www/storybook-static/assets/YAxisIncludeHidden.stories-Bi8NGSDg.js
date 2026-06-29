import{r as f,R as e}from"./iframe-ClhUNVnE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CrIc_odO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bj_mEjES.js";import{C as k}from"./ComposedChart-BTSIcYKW.js";import{X as K}from"./XAxis-LUnQ02U1.js";import{L as v}from"./Legend-CPawz5NQ.js";import{B as s}from"./Bar-CdhyRJ92.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Uq0DWhIe.js";import"./CartesianAxis-6ub_g_j0.js";import"./Layer-De05M5So.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./Label-C7_QXzyC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGNmh353.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./types-B-IY3TCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-beSFYC.js";import"./throttle-CYmjgX02.js";import"./RechartsWrapper-CH-OQa-8.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./Symbols-CM_x84Fs.js";import"./symbol-DRYWtuxg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHiTyfaG.js";import"./uniqBy-CcWMM-R1.js";import"./iteratee-DPPNHIa6.js";import"./tooltipContext-ZmJNyT4E.js";import"./AnimatedItems-CjVS2mh2.js";import"./useAnimationId-CT1xX_cr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-SjMvhhWJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DM6q8ZUn.js";import"./RegisterGraphicalItemId-EpH2csVt.js";import"./ErrorBarContext-Dhef0H9H.js";import"./GraphicalItemClipPath-BcvmXpNm.js";import"./SetGraphicalItem-D69pntSs.js";import"./getZIndexFromUnknown-BpQkEBI4.js";import"./graphicalItemSelectors-Bj_iJVXB.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
