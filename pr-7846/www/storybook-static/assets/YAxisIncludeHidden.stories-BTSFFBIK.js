import{r as f,R as e}from"./iframe-C63NoaDu.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DmSu88f8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BcMwSK9m.js";import{C as k}from"./ComposedChart-DM4H6PYa.js";import{X as K}from"./XAxis-C5OImGrG.js";import{L as v}from"./Legend-CIqGoIL-.js";import{B as a}from"./Bar-B9SaaKQB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-1Vc72EU1.js";import"./Text-D_RBmkbp.js";import"./resolveDefaultProps-DjxgFVah.js";import"./DOMUtils-DA0ZRZ5p.js";import"./isWellBehavedNumber-BfhF-72O.js";import"./useId-BncxSM4U.js";import"./useBackwardsCompatibleTheme-DEjA-f8D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc9mNp0T.js";import"./index-C9CjOEex.js";import"./index-8uJ0bE2o.js";import"./RechartsWrapper-CTWFoE3n.js";import"./axisSelectors-LGmM4kiC.js";import"./throttle-dl1YLV6q.js";import"./d3-scale-CcYn43Vo.js";import"./index-DKS0oalo.js";import"./index-DO3tFlOP.js";import"./renderedTicksSlice-DIKEWQne.js";import"./index-CqricD4t.js";import"./CartesianAxis-BRA6gGeC.js";import"./Layer-Ckr3gw9l.js";import"./types-DUwSb1pu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ENzs0KXc.js";import"./chartDataContext-CfPmzzSW.js";import"./CategoricalChart-DHxPQS0Z.js";import"./Symbols-CaACSQTs.js";import"./symbol-DTVH9lof.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dr9avRqD.js";import"./uniqBy-C3wZtJ5H.js";import"./iteratee-QeKIrUD3.js";import"./AnimatedItems-DHS6gEFX.js";import"./useAnimationId-DcWGIqWl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvaDc6LC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DIOp6OW3.js";import"./tooltipContext-CXFD7G7p.js";import"./RegisterGraphicalItemId-CrhgcGtn.js";import"./ErrorBarContext-DjLWgwQU.js";import"./GraphicalItemClipPath-DNBzuX5X.js";import"./SetGraphicalItem-CsljS9zr.js";import"./getZIndexFromUnknown-BrA4QuOm.js";import"./useGraphicalItemIdentity-WzLoYH7A.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
