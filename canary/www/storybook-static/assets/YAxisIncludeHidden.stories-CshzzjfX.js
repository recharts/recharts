import{r as f,R as e}from"./iframe-C9RR7JmE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Bsmg8WZC.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-9FgFGtgA.js";import{C as k}from"./ComposedChart-DzefamiH.js";import{X as K}from"./XAxis-B6hKXJep.js";import{L as v}from"./Legend-BI4I1MVi.js";import{B as a}from"./Bar-CLVp3j9W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BaLJb5QI.js";import"./Text-m7bywbsW.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./ZIndexLayer-CRt4gP-q.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./throttle-CSzDQiVS.js";import"./axisSelectors-TgtedVmF.js";import"./d3-scale-CFw4t_7I.js";import"./CartesianAxis-DmiMG-c8.js";import"./Layer-CF0GFBX9.js";import"./types-DEp2f933.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bb98fXCM.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./chartDataContext--IWIWppp.js";import"./CategoricalChart-CUD-tLds.js";import"./Symbols-DlwZKch0.js";import"./symbol-DWh1oIHF.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C2cTU9_n.js";import"./uniqBy-DEPl67Hh.js";import"./iteratee-Rk_zuFbj.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B4uCvMTS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHyKIA3T.js";import"./useAnimationId-P10-1iqt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./tooltipContext-DYnawDxk.js";import"./ErrorBarContext-D5q20nPS.js";import"./activeStyles-psvB14ar.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./getZIndexFromUnknown-Ar2F7VLj.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./omit-DBKPegXf.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
