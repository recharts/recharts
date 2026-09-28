import{r as f,R as e}from"./iframe-C_uZmGJ0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CCpz6f2F.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLwc6L6K.js";import{C as k}from"./ComposedChart-Bj6W4vsF.js";import{X as K}from"./XAxis-YZBSNmPV.js";import{L as v}from"./Legend-BX2c5Cl-.js";import{B as a}from"./Bar-Df0K6-nv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-fJXJ83zZ.js";import"./Text-gzTYclIX.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./DOMUtils-D581TnDq.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WWept0wS.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./throttle-ssm5i5NQ.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./index-D4BdbP-V.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianAxis-Dw4Yg42W.js";import"./Layer-FqzZic0p.js";import"./types-mc5h_EFw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./Symbols-BBRAm-fV.js";import"./symbol-DCSp5Nqc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3oK5LdM.js";import"./uniqBy-CEi0ISro.js";import"./iteratee-QMsHInH6.js";import"./AnimatedItems-Bdmry8Nm.js";import"./useAnimationId-DVpik13A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-H3ZsFvAX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./tooltipContext-DF8jhdSm.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./ErrorBarContext-CukgZUAO.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getZIndexFromUnknown-DI5RnXYK.js";import"./useGraphicalItemIdentity-BVAmN--h.js";import"./dataEntryStyles-DgsaIY_H.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
