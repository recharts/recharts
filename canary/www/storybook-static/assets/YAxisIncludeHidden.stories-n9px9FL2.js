import{r as f,R as e}from"./iframe-ZwmkHOWK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-PaDHJ4i8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B8sjij8M.js";import{C as k}from"./ComposedChart-CFgERvuY.js";import{X as K}from"./XAxis-C1z9LD8A.js";import{L as v}from"./Legend-BzmhKkB_.js";import{B as a}from"./Bar-DWXDaHTG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BVR5F0n2.js";import"./Text-BI3-3dXY.js";import"./resolveDefaultProps-CbN-GnY2.js";import"./DOMUtils-CP0ZeXZR.js";import"./isWellBehavedNumber-DzkihPO6.js";import"./useId-CFRlQjhC.js";import"./useBackwardsCompatibleTheme-CHv0D4hM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bm6SGbYz.js";import"./index-B4E9I_5C.js";import"./index-BAGpmxlA.js";import"./RechartsWrapper-CLkBAicL.js";import"./axisSelectors-DaNNrydT.js";import"./throttle-C39dOrQS.js";import"./d3-scale-DKWhOpVH.js";import"./index-BAV2Qa9k.js";import"./index-Cf44-e7y.js";import"./renderedTicksSlice-CKHEQg46.js";import"./index-DyLWGJaj.js";import"./CartesianAxis-Djmj8VDf.js";import"./Layer-i_0u2Crx.js";import"./types-v1ATzDHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B4XfQoQU.js";import"./chartDataContext-Dk9qGRs-.js";import"./CategoricalChart-CMRgznGD.js";import"./Symbols-CZXHE-Sd.js";import"./symbol-BcLPDN7C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CEleLGXj.js";import"./uniqBy-O2aI4kAk.js";import"./iteratee-AI8PmdR5.js";import"./AnimatedItems-CFufr1UH.js";import"./useAnimationId-BCL-lQv_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqK5FaGX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CuQ7F7ce.js";import"./tooltipContext-CfqH0KIF.js";import"./RegisterGraphicalItemId-DwO6JeUN.js";import"./ErrorBarContext-ik09lEWu.js";import"./GraphicalItemClipPath-DA7NUISl.js";import"./SetGraphicalItem-D-pUVL2E.js";import"./getZIndexFromUnknown-A30bylKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CYn-McYw.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
