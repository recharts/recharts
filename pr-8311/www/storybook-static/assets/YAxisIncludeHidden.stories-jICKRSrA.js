import{r as f,R as e}from"./iframe-DC5T2GCj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-lqkl3rqG.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DOsx9V2z.js";import{C as k}from"./ComposedChart-Dc1csNHW.js";import{X as K}from"./XAxis-CfQ_9fqW.js";import{L as v}from"./Legend-DBRTAH_k.js";import{B as a}from"./Bar-DQal1fGy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./Label-CWyu9wCB.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./throttle-CU56JRf7.js";import"./axisSelectors-B_BJB7t0.js";import"./d3-scale-Ccs_pA9m.js";import"./CartesianAxis-Ldc9waKq.js";import"./Layer-CPK-7NIh.js";import"./types-Bpysv2Pn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DYjSRCa_.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./Symbols-B7vEIcCD.js";import"./symbol-CpvxzB9V.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DxkPxrTP.js";import"./uniqBy-Bq4o6iFV.js";import"./iteratee-CTGqF3Gd.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D7lSN93x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Hs6i8eyj.js";import"./useAnimationId-Do3keAzT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-09R3ENuC.js";import"./tooltipContext-C_AWyPJu.js";import"./ErrorBarContext-CTMeRt95.js";import"./activeStyles-CBtGMRGE.js";import"./SetGraphicalItem-CgeoKwAC.js";import"./getZIndexFromUnknown-Cx-eK8b6.js";import"./useEffectiveDataKey-CuDgyJop.js";import"./omit-BLqlonnX.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
