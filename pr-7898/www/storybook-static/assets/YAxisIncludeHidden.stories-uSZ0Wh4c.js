import{r as f,R as e}from"./iframe-KlB-4IG1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DfRBNhMM.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BVLPARW-.js";import{C as k}from"./ComposedChart-UXSSMqzW.js";import{X as K}from"./XAxis-Ca5TUmhH.js";import{L as v}from"./Legend-ISN7Trl8.js";import{B as a}from"./Bar-UMdAqr_e.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RcNfk3jW.js";import"./get-CjriyByo.js";import"./Label-DqUMyvUu.js";import"./Text-Bpt3PNfo.js";import"./ZIndexLayer-DgEHrsgR.js";import"./index-CwL9CPkI.js";import"./index-DAOJlBpl.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DkMb5oL8.js";import"./throttle-DXJsY_uT.js";import"./axisSelectors-ThjGeQP_.js";import"./diverging-BgndSVNB.js";import"./CartesianAxis-CVzE0EQ3.js";import"./Layer-Cl7yX3if.js";import"./types-rdPmYL5R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BREhx7Gk.js";import"./index-CX7x-S-w.js";import"./index-DNDuIT5t.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CD7r0FUc.js";import"./index-CUyiC2Ny.js";import"./fillDefinitions-Cx2SilO3.js";import"./CartesianChart-DYMMc77U.js";import"./chartDataContext-Dajtit_0.js";import"./CategoricalChart-DQDRiNPc.js";import"./Symbols-DP3kQoeZ.js";import"./symbol-Nq8AM552.js";import"./path-BBMZd4YL.js";import"./useElementOffset-H_h6LgYm.js";import"./uniqBy-BPtuw1V1.js";import"./iteratee-BNFWeZQu.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D-8l4rOK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D5Mi37gB.js";import"./useAnimationId-C1lHvxQb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DFwShdCc.js";import"./tooltipContext-BDdeL0xX.js";import"./ErrorBarContext-J4PcI6d4.js";import"./activeStyles-BijthCg6.js";import"./SetGraphicalItem-BaH0crAE.js";import"./getZIndexFromUnknown-BOGVVE3G.js";import"./useEffectiveDataKey-BXp8Go_I.js";import"./omit-DlKftEak.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
