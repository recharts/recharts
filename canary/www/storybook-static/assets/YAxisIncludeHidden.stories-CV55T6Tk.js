import{r as f,R as e}from"./iframe-DP6zAp54.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CRTIqg01.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CdFbAgG_.js";import{C as k}from"./ComposedChart-Djbyfnt-.js";import{X as K}from"./XAxis-wrPg27KZ.js";import{L as v}from"./Legend-dg9X3PkL.js";import{B as a}from"./Bar-D3Ep8y64.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./Label-DIQKMqhX.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrRxC45o.js";import"./throttle-D7lh8v3-.js";import"./axisSelectors-Rm4q15PI.js";import"./diverging-Ct01c8MP.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./types-DNQC58zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOH9cWj9.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DojbuA9r.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cg7APWAF.js";import"./useAnimationId-EekDlSpG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./tooltipContext-DK0-RXb9.js";import"./ErrorBarContext-CmnSonHd.js";import"./activeStyles-B0VCWO8T.js";import"./SetGraphicalItem-CNROvnrS.js";import"./getZIndexFromUnknown-DNrX2x-5.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./omit-3dXj1SBX.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
