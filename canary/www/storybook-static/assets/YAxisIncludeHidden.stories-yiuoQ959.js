import{r as f,R as e}from"./iframe-C0xznG0O.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B6DY9sl9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DJPgYMzR.js";import{C as k}from"./ComposedChart-Bphih_7C.js";import{X as K}from"./XAxis-3Gc-ze43.js";import{L as v}from"./Legend-YI1yXyiY.js";import{B as a}from"./Bar-CjOMNEca.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CdEwuWhi.js";import"./Text-DqaiwO2M.js";import"./resolveDefaultProps-BUVviTw0.js";import"./DOMUtils-CfITjNXH.js";import"./isWellBehavedNumber-LB6DsCms.js";import"./useId-CG9ImVhA.js";import"./useBackwardsCompatibleTheme-Dw2k0O31.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dqy54YGG.js";import"./index-3uxIGkdF.js";import"./index-D3C5hy7v.js";import"./RechartsWrapper-CVCjkFWi.js";import"./axisSelectors-KY5G3glE.js";import"./throttle-ca9JXI34.js";import"./d3-scale-D_nuk9af.js";import"./index-_lyS6R2I.js";import"./index-DGO5Pcl1.js";import"./renderedTicksSlice-Bn386d_U.js";import"./index-BsyGVjbB.js";import"./CartesianAxis-CXWr6EGM.js";import"./Layer-DEw218Et.js";import"./types-CAt-4Uam.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BilL1rox.js";import"./chartDataContext-r0-EMCxL.js";import"./CategoricalChart-AELfSP8z.js";import"./Symbols-jn71a-FL.js";import"./symbol-Bc3vMSLI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJZMOgR9.js";import"./uniqBy-Ck71NLZs.js";import"./iteratee-B2v99DCQ.js";import"./AnimatedItems-ykdNzwWW.js";import"./useAnimationId-DxkHkn8_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUlwcvxX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-s_Kx4tDI.js";import"./tooltipContext-BDMF1Ufc.js";import"./RegisterGraphicalItemId-CHswFd-U.js";import"./ErrorBarContext-BMmbs1Vg.js";import"./GraphicalItemClipPath-BwjkPZ9S.js";import"./SetGraphicalItem-BcdUc_t-.js";import"./getZIndexFromUnknown-DmpJeP7G.js";import"./useGraphicalItemIdentity-BPVVk20a.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
