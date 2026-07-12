import{r as f,R as e}from"./iframe-U4mOrMwe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLdDDS3Z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BlSgM3ea.js";import{C as k}from"./ComposedChart-BfGdMqnm.js";import{X as K}from"./XAxis-DG6xcemZ.js";import{L as v}from"./Legend-DPUZIXCc.js";import{B as s}from"./Bar-CApePqjt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B1Bb8VCA.js";import"./Layer-Dh2FttVt.js";import"./resolveDefaultProps-DeLH2ecz.js";import"./Text-5DtlWUUA.js";import"./DOMUtils-CsYBkNDR.js";import"./isWellBehavedNumber-K_DMN0Z2.js";import"./Label-CcnC99yA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yVDcLD3J.js";import"./index-DUYa25JH.js";import"./index-BegtHHbP.js";import"./types-B0fbEwRP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DIBgsBMZ.js";import"./throttle-C66Yjghp.js";import"./RechartsWrapper-Ccy1_TNc.js";import"./index-CECNT87F.js";import"./index-CnEU82E2.js";import"./axisSelectors-D_j8BHYk.js";import"./d3-scale-DcD2sPeq.js";import"./CartesianChart-BwiXZARa.js";import"./chartDataContext-ClSkA-dc.js";import"./CategoricalChart-wt8G0fhK.js";import"./Symbols-CKuT-4HC.js";import"./symbol-bz0Y9ldF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CN4fPkTB.js";import"./uniqBy-_0mEzY_K.js";import"./iteratee-OYHaUVmV.js";import"./tooltipContext-xXTHrz3J.js";import"./AnimatedItems-Moj_u834.js";import"./useAnimationId-R6vuYPvP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CsJy8j3I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--yBfM0nT.js";import"./RegisterGraphicalItemId-BryVNAH7.js";import"./ErrorBarContext-_tOLdnG2.js";import"./GraphicalItemClipPath-IA0cC_pI.js";import"./SetGraphicalItem-BzboYsPC.js";import"./getZIndexFromUnknown-BppCEeG-.js";import"./graphicalItemSelectors-DwntOUL-.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
