import{P as f,c as e}from"./iframe-CR5xUcH4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-7a5sZdUx.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-Coakq-0y.js";import{C as k}from"./ComposedChart-DbazSM9x.js";import{X as K}from"./XAxis-CPvIxoVT.js";import{L as v}from"./Legend-DErFnSmW.js";import{B as s}from"./Bar-B2iZFUKD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CdpBIjqV.js";import"./CartesianAxis-CM2xAnRM.js";import"./Layer-DDAYqTxx.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./Label-gV3sJO-c.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Br2sJvd3.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./types-vWyLmemb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./immer-MiNeKFai.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./Symbols-BSKmi5cj.js";import"./symbol-Cf9z5SBx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bf2VABox.js";import"./uniqBy-CLyAGTeC.js";import"./iteratee-BLXBanMB.js";import"./tooltipContext-CI8X2x7c.js";import"./ReactUtils-D5HGwZm0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IJojDNZ6.js";import"./useAnimationId-qfC-4EnL.js";import"./ActiveShapeUtils-G1Nz0YGi.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./ErrorBarContext-C7CGAddG.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./getZIndexFromUnknown-CpM14gun.js";import"./graphicalItemSelectors-BfOvLmPr.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
