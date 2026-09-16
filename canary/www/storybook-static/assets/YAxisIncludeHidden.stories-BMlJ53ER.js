import{r as f,R as e}from"./iframe-BCNgueVp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-FgW2NdaC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CCtmziB1.js";import{C as k}from"./ComposedChart-BZSfKAao.js";import{X as K}from"./XAxis-LOCckWX5.js";import{L as v}from"./Legend-BO_tQWdx.js";import{B as a}from"./Bar-BQjaIkG_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B2ReDrEH.js";import"./Text-DAXsYFxH.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./DOMUtils-C7-Ag6_9.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./RechartsWrapper-DbCJx0GW.js";import"./axisSelectors-D-nEX4IG.js";import"./throttle-NhPjNryy.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./index-D7hqs4ef.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianAxis-cRNPmBWR.js";import"./Layer-DVqtOL17.js";import"./types-Dv8LLmcq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./Symbols-B09GcAtX.js";import"./symbol-95E8py6i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dddhvd44.js";import"./uniqBy-DZMfENsr.js";import"./iteratee-B15ojktg.js";import"./AnimatedItems-DV3N7EYj.js";import"./useAnimationId-CBbWVRap.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8Pg3yvs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cz6FzTvm.js";import"./tooltipContext-DPQKqAtu.js";import"./RegisterGraphicalItemId-D_OLUlPr.js";import"./ErrorBarContext-Bgs6nhLR.js";import"./GraphicalItemClipPath-DQ0b-CJJ.js";import"./SetGraphicalItem-CDaxvQAk.js";import"./getZIndexFromUnknown-hvwCKvcC.js";import"./useGraphicalItemIdentity-CyGmZ9Hw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
