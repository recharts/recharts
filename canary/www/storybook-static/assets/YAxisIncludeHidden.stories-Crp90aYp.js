import{r as f,R as e}from"./iframe-C6tckEdC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-rcBaqYZ7.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BRbRDCdD.js";import{C as k}from"./ComposedChart-5VVWJpva.js";import{X as K}from"./XAxis-DzYRQrky.js";import{L as v}from"./Legend-CcuFitOG.js";import{B as a}from"./Bar-COzrNdIA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./Label-DaLGTh2V.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./throttle-CU3FfpOW.js";import"./axisSelectors-BaS600qd.js";import"./diverging-cNizIXDy.js";import"./CartesianAxis-HAEOo14B.js";import"./Layer-CZ4BpJHW.js";import"./types-DkdMor4N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-DKLWww0Z.js";import"./index-DvK4dXF2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-0oVlPs_v.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./Symbols-BA4WcXcY.js";import"./symbol-CGpiEals.js";import"./path-BBMZd4YL.js";import"./useElementOffset-ox168otc.js";import"./uniqBy-BwUTEk2q.js";import"./iteratee-Chh9ZJty.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DEosnEmo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-J0TAD1ax.js";import"./useAnimationId-Cexbjbj0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cs4PiFBm.js";import"./tooltipContext-BhjHZJqr.js";import"./ErrorBarContext-CFH2x5Ed.js";import"./activeStyles-Cw05xMjp.js";import"./SetGraphicalItem-L9dOpy2C.js";import"./getZIndexFromUnknown-CH5Vk0MN.js";import"./useEffectiveDataKey-C_xG5lbB.js";import"./omit-BcHc5x07.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
