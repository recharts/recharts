import{r as f,R as e}from"./iframe-CvaFu5-c.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-3HuEzFma.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BCgb8eXa.js";import{C as k}from"./ComposedChart-CJeqweUj.js";import{X as K}from"./XAxis-DQoNxyYu.js";import{L as v}from"./Legend-vLngwb9Y.js";import{B as a}from"./Bar-DNJCJq_u.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./Label-D9P4cAWK.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./throttle-CPKsFv9V.js";import"./axisSelectors-BvhvBZte.js";import"./diverging-1_Z3dmgw.js";import"./CartesianAxis-71DKFDGT.js";import"./Layer-GSzXSKza.js";import"./types-B8ocCfqn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-sPOqKb.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CPc3MDMB.js";import"./uniqBy-DqEP9E_e.js";import"./iteratee-BOojH3GU.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B7SMVv85.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BN9-Ud6u.js";import"./useAnimationId-UMR0vx8i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./tooltipContext-DP5JJD-s.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./activeStyles-TP9Js-Ix.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./getZIndexFromUnknown-DCzd4AEq.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./omit-CJDDCLUj.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
