import{r as f,R as e}from"./iframe-bG7_G66g.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-C7HJKNEA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BYtx9lI3.js";import{C as k}from"./ComposedChart-CgJhKHi6.js";import{X as K}from"./XAxis-BJQkDMRF.js";import{L as v}from"./Legend-Dyu2OvIi.js";import{B as s}from"./Bar-BzCbXELW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CKlYZxfa.js";import"./CartesianAxis-Dnx9Ro6b.js";import"./Layer-ky2aT-iX.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./Label-B0PcRW41.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRupmzoF.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./types-DAUYWUcJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./immer-DhTjJvAV.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./CategoricalChart-BHq-0gkK.js";import"./Symbols-DT3xUkSo.js";import"./symbol-BHGaTRDx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cm17sbSB.js";import"./uniqBy-BKybyHng.js";import"./iteratee-C9qT0ecR.js";import"./tooltipContext-ifqM4yjs.js";import"./AnimatedItems-C0ftWhjM.js";import"./useAnimationId-NfEwsoHb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xxCREvqc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./ErrorBarContext-BmWpZ9Bv.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getZIndexFromUnknown-5r75UkC2.js";import"./graphicalItemSelectors-DMrbzbso.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
