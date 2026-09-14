import{r as f,R as e}from"./iframe-CazybM5Q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BbPMcjUo.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C8_Ry1FK.js";import{C as k}from"./ComposedChart-U-yCg0Zp.js";import{X as K}from"./XAxis-DU0DQOG4.js";import{L as v}from"./Legend-BO9b5cY6.js";import{B as a}from"./Bar-dk6tjpkz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-jvSJhliV.js";import"./Text-x2aI-_E3.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./DOMUtils-D953XyQL.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ytwD_49s.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./RechartsWrapper-CpPe0RTB.js";import"./axisSelectors-DZkp_M3U.js";import"./throttle-l1Kptz9a.js";import"./d3-scale-pDPjkkGb.js";import"./index-SN9fh9yC.js";import"./index-7BXYpUCT.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./index-D_RyOPxQ.js";import"./CartesianAxis-CjSMZkKI.js";import"./Layer-fj-XlG60.js";import"./types-BzWyleSx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./Symbols-CaSh0UR-.js";import"./symbol-EFStI95C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4OfpAhcO.js";import"./uniqBy-DV26r5Rr.js";import"./iteratee-Ry3r0H3-.js";import"./AnimatedItems-DoL70GVg.js";import"./useAnimationId-Bh-TCZxX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bh1teys1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./tooltipContext-CxQ9eYjZ.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./ErrorBarContext-BX_x-hk-.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getZIndexFromUnknown-DOb2IOUv.js";import"./useGraphicalItemIdentity-C973phhc.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
