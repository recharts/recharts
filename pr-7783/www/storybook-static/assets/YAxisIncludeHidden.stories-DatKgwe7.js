import{r as f,R as e}from"./iframe-DzgNGLlq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-TE47wPZ7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CTnIst4D.js";import{C as k}from"./ComposedChart-BLITsJxL.js";import{X as K}from"./XAxis-Cw-Rs66g.js";import{L as v}from"./Legend-CCVMTi1z.js";import{B as a}from"./Bar-CqYxz51s.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B2-HhKmy.js";import"./Text-Cmcmp6Rw.js";import"./resolveDefaultProps-CaF46lB1.js";import"./DOMUtils-qoFWhjfZ.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSDazUEj.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./RechartsWrapper-CboTFEd7.js";import"./axisSelectors-94eYl4rY.js";import"./throttle-uLx0gES7.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./CartesianAxis-Cz79nqzF.js";import"./Layer-OlcmJ5EJ.js";import"./types-jKlbb9F_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./Symbols-CVUsTJ0K.js";import"./symbol-CmjPbuz2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jStCutUO.js";import"./uniqBy-u5dTU2Kl.js";import"./iteratee-DNOBrypk.js";import"./AnimatedItems-Cm23KMMu.js";import"./useAnimationId-CKHGdmz-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chy5A9Vo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./tooltipContext-Bvg8AaqK.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./ErrorBarContext-BTHVw71_.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./getZIndexFromUnknown-ubDi66MJ.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
