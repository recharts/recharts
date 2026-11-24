import{r as f,R as e}from"./iframe-CGMPGT_Z.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-ph0fLQn1.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BwRFWyAI.js";import{C as k}from"./ComposedChart-DdDYeqHZ.js";import{X as K}from"./XAxis-DbuLqOFS.js";import{L as v}from"./Legend-C0TB2Q7_.js";import{B as a}from"./Bar-bKUrY91T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BCblnQ7e.js";import"./Text-DLnj5LmN.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./ZIndexLayer-9BCkhjyY.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BIscasf0.js";import"./throttle-eL-EEQ3_.js";import"./axisSelectors-nBPX2Xba.js";import"./d3-scale-DhJmdG6x.js";import"./CartesianAxis-B1TiLRwW.js";import"./Layer-BT_Vpx95.js";import"./types-BG6mJK46.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DQJBpYXH.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CgxUiewk.js";import"./uniqBy-Dmo8Jc_P.js";import"./iteratee-D1qU_gcL.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-mfmNhCBT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLE0n3dQ.js";import"./useAnimationId-BO_xR5GW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./tooltipContext-BfxZXmmN.js";import"./ErrorBarContext-BlCnepik.js";import"./activeStyles-Dr2Cpwdi.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./getZIndexFromUnknown-CQbFYYal.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./omit-jkCuCE8o.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
