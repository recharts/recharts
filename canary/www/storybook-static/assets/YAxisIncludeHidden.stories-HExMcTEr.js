import{r as f,R as e}from"./iframe-cV3SAodv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DYud1g9H.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cjgp2TXV.js";import{C as k}from"./ComposedChart-Bqs-Kl5O.js";import{X as K}from"./XAxis-BuIJ_QWG.js";import{L as v}from"./Legend-IZ97z-G8.js";import{B as a}from"./Bar-1EgLCe52.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./Label-CQK_czyp.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors--xQAorkv.js";import"./throttle-CMi-pHht.js";import"./axisSelectors-C9H2pU_G.js";import"./diverging-y_crYDj7.js";import"./CartesianAxis-BCSNf2Xf.js";import"./Layer-zGQNaeEg.js";import"./types-CxXTSyDH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-yYdNmmg6.js";import"./index-DTNI7e-E.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CyX-rkWs.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./chartDataContext-Da1Grc9c.js";import"./CategoricalChart-CWv6udzl.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CFDuhw8U.js";import"./uniqBy-5kbtoCpG.js";import"./iteratee-DH-5OUvh.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Cky1CNqk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBeAx3Mp.js";import"./useAnimationId-DD8tFxYJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./tooltipContext-SZd6u1DI.js";import"./ErrorBarContext-CopN05Qu.js";import"./activeStyles-BPuHxpJZ.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./getZIndexFromUnknown-B0LMJWL-.js";import"./useEffectiveDataKey-DBeKKq_r.js";import"./omit-A4HqYJzm.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
