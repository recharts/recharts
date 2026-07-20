import{r as f,R as e}from"./iframe-BUBMop56.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CNB6NWqV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BFOCeNjP.js";import{C as k}from"./ComposedChart-Co9cxOOG.js";import{X as K}from"./XAxis-Beu0D676.js";import{L as v}from"./Legend-Br77Zx9_.js";import{B as s}from"./Bar-KXwSOlzf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DqkvNHf2.js";import"./Layer-CEgjWxAQ.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./Label-C8PySNEK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BKbyZAtu.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./types-CIINUjJb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./throttle-D75nL504.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./index-CYnUHsqF.js";import"./axisSelectors-CCSlXmRc.js";import"./d3-scale-BKS6cnWE.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./Symbols-BWIrY5M4.js";import"./symbol-2MYH5UYO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bc8UoZ8e.js";import"./uniqBy-GaWKKGJl.js";import"./iteratee-oR2_Mtz0.js";import"./tooltipContext-Deo-eeEQ.js";import"./AnimatedItems-T6oPSFaY.js";import"./useAnimationId-BjgoYA5x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2jqxTYu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./ErrorBarContext-D15ZYdOL.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getZIndexFromUnknown-CmtAqjSf.js";import"./graphicalItemSelectors-BFcZn4ra.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
