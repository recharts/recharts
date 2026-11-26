import{r as f,R as e}from"./iframe-B9Tl-Ens.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CjYRlTBq.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CeB5DPsb.js";import{C as k}from"./ComposedChart-BkpfzGMq.js";import{X as K}from"./XAxis-DgmkF9Yy.js";import{L as v}from"./Legend-pOgp7twQ.js";import{B as a}from"./Bar-B-7CrVyt.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./Label-Dez-agGk.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C83zEpXU.js";import"./throttle-dfeJw9jR.js";import"./axisSelectors-x8C92zXU.js";import"./diverging-Cl0QaiN4.js";import"./CartesianAxis-BYNQxUMc.js";import"./Layer-Bu8k813y.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DeTgaRib.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./Symbols-BkCPJOBN.js";import"./symbol-CcaxO5ZF.js";import"./path-BBMZd4YL.js";import"./useElementOffset-O98GivjF.js";import"./uniqBy-COJiZ3F4.js";import"./iteratee-6n8bYTkS.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DvmFQkM4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BHPo4ax_.js";import"./useAnimationId-eoD8CiMN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CP-Ler3I.js";import"./tooltipContext-BVEReTSw.js";import"./ErrorBarContext-BP3iz7Vb.js";import"./activeStyles-B1QGMcNg.js";import"./SetGraphicalItem-BRGOOFmX.js";import"./getZIndexFromUnknown-pCGGcqlB.js";import"./useEffectiveDataKey-BhVu78c2.js";import"./omit-rPwIGN_4.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
