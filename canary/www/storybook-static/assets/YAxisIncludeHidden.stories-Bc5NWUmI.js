import{r as f,R as e}from"./iframe-BPMC3WYJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis--I1P1gwH.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dj40vb7g.js";import{C as k}from"./ComposedChart-q5KBJ-2n.js";import{X as K}from"./XAxis-BFqeDJUQ.js";import{L as v}from"./Legend-CyUKYI2W.js";import{B as a}from"./Bar-BW2viFRG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-pm6AJFCJ.js";import"./Text-DQWN35zZ.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./ZIndexLayer-edtK9VrY.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./throttle-B4k3GkVg.js";import"./axisSelectors-CrZDIgWl.js";import"./d3-scale-DWK10Otc.js";import"./CartesianAxis-Fpal_j0O.js";import"./Layer-Cp3c10oW.js";import"./types-w6DZXHOl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOOVVQ84.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./Symbols-BiXrA8HB.js";import"./symbol-DMDdywXz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Bx4aDwVk.js";import"./uniqBy-UcILfQxJ.js";import"./iteratee-BJq6bg2a.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BuPGiwQu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGQF-aUM.js";import"./useAnimationId-BI9f9iTm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yBzGzkry.js";import"./tooltipContext-Dr52N-ZM.js";import"./ErrorBarContext-CgYrVc8t.js";import"./activeStyles-Ci2F5zQC.js";import"./SetGraphicalItem-BZWLeuys.js";import"./getZIndexFromUnknown-Ds15p0gl.js";import"./useEffectiveDataKey-o3mJFvm5.js";import"./omit-BiRC9x0X.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
