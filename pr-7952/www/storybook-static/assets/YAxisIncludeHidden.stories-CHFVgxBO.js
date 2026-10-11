import{r as f,R as e}from"./iframe-DIGZheBd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-pOdEjlW4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-_cU-ODvm.js";import{C as k}from"./ComposedChart-AI3knhdQ.js";import{X as K}from"./XAxis-JeVlcNJo.js";import{L as v}from"./Legend-CfHDjC-3.js";import{B as a}from"./Bar-CoEyq2yh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DdnBRnzY.js";import"./Text-OwXAxNhC.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./pageBackground-CxPMNoKP.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Csfe5z3g.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./axisSelectors-D8SOTwsy.js";import"./throttle-BSuBUnwb.js";import"./d3-scale-DdurYsOp.js";import"./CartesianAxis--bh-_8od.js";import"./Layer-CyJKyehG.js";import"./types-MK9UFfTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CZtBBFTk.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./Symbols-BfxfCoQh.js";import"./symbol-CFKklyyk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MF99uNag.js";import"./uniqBy-De-60mdC.js";import"./iteratee-UNnIxzF9.js";import"./activeStyles-BNdVOgR8.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbIHVVOf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./tooltipContext-DXl9iCeE.js";import"./ErrorBarContext-Bx6RRNyu.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getZIndexFromUnknown-LNrjdUtF.js";import"./useEffectiveDataKey-DDZKQvTb.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
