import{r as f,R as e}from"./iframe-DKiAUKfj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CPqJ1LPY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DRDYTCs-.js";import{C as k}from"./ComposedChart-7seVkJ1o.js";import{X as K}from"./XAxis-BHxip6nG.js";import{L as v}from"./Legend-C9YapKWg.js";import{B as a}from"./Bar-DKemWGCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BqJsTdph.js";import"./Text-DzjLOXSn.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./DOMUtils-kE23eB48.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./RechartsWrapper-V6OGhvVE.js";import"./axisSelectors-CgDB5I1Y.js";import"./throttle-C4io43Xn.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./CartesianAxis-C20v2lN6.js";import"./Layer-TOA8EzlX.js";import"./types-CesjT3HQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./Symbols-DNiqT9Oi.js";import"./symbol-cWeA-9da.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CfjQprQ-.js";import"./uniqBy-BRiSgWCU.js";import"./iteratee-DYj_iQuR.js";import"./AnimatedItems-CPnSyqXV.js";import"./useAnimationId-D05enbBD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3_ltPRK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CameuY1c.js";import"./tooltipContext-DM4TP7FV.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./ErrorBarContext-CdB3k_cz.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getZIndexFromUnknown-2yl0ehkD.js";import"./useGraphicalItemIdentity-BklSfqcr.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
