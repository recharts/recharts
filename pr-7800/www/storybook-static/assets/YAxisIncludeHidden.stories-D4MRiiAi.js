import{r as f,R as e}from"./iframe-BnZHUF9X.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C5pkUNB3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ONbH2CMm.js";import{C as k}from"./ComposedChart-B4o4gtm7.js";import{X as K}from"./XAxis-CRqJ7xsJ.js";import{L as v}from"./Legend-CnuG6WaE.js";import{B as a}from"./Bar-CUYYh6Xg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-hOa9Xaax.js";import"./Text-CPiy7pnu.js";import"./resolveDefaultProps-CS-Gahor.js";import"./DOMUtils-C0afjJmd.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CIa5rzLp.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./RechartsWrapper-ztAk4E9P.js";import"./axisSelectors-DSOG4fe3.js";import"./throttle-DYWyyBD4.js";import"./d3-scale-hcynQqTx.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./index-CVXi-tnN.js";import"./CartesianAxis-CnqpkBi3.js";import"./Layer-D4LkPBUk.js";import"./types-CA0d64vS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./Symbols-Cqtcw8wG.js";import"./symbol-i8QsJMqg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-TFsjHbYB.js";import"./uniqBy-BpF-KHKu.js";import"./iteratee-B0GexjSp.js";import"./AnimatedItems-Bxt2Mhs_.js";import"./useAnimationId-CuFFFGhn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cx8oRFI-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nVjPub3k.js";import"./tooltipContext-CWuq_eDw.js";import"./RegisterGraphicalItemId-eknPVKNp.js";import"./ErrorBarContext-DNaI9-CH.js";import"./GraphicalItemClipPath-DFiiV3dA.js";import"./SetGraphicalItem-BS2ba3Ul.js";import"./getZIndexFromUnknown-CpCm3Bnu.js";import"./useGraphicalItemIdentity-esDnMWhm.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
