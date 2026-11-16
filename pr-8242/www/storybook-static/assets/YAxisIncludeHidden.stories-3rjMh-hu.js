import{r as f,R as e}from"./iframe-ChMBHEXU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CnSUrpEe.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cd2z3Eer.js";import{C as k}from"./ComposedChart-B7Dgc5aq.js";import{X as K}from"./XAxis-BEcsoff8.js";import{L as v}from"./Legend-B268yQK2.js";import{B as a}from"./Bar-Dwx_3AuD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ZGXU1are.js";import"./Text-BiLv0S0Y.js";import"./resolveDefaultProps-X_3NC_87.js";import"./ZIndexLayer-OHuleK-j.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./throttle-Cnp_ppL_.js";import"./axisSelectors-CyYfX19F.js";import"./d3-scale-B_LSdR1o.js";import"./CartesianAxis-8eiEJoC1.js";import"./Layer-Db_exIRl.js";import"./types-DgDe6MQb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-DyVFOlJ7.js";import"./index-B193mqnD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DPxS5GGe.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CendnaSI.js";import"./uniqBy-CLumAGO5.js";import"./iteratee-B1mbQ6FI.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BARWQZ2-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRyPjtQg.js";import"./useAnimationId-CSNfiiSW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./tooltipContext-D3BNOiAv.js";import"./ErrorBarContext-BeNGW58S.js";import"./activeStyles-BxZootHE.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./getZIndexFromUnknown-73NX_-Km.js";import"./useEffectiveDataKey-Djw6ESIG.js";import"./omit-C4ghczme.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
