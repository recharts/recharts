import{r as f,R as e}from"./iframe-dVfgBJJs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bw51heiQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cjn5-XTM.js";import{C as k}from"./ComposedChart-EYm7zLU4.js";import{X as K}from"./XAxis-Dq_1Ikw5.js";import{L as v}from"./Legend-aBMS0PKs.js";import{B as s}from"./Bar-DPL8yQrI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./resolveDefaultProps-BJYE31LD.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./Label-Qwq3mE6t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwGLm3MP.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./throttle-B7XzNIu7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./axisSelectors-rruDH4Fs.js";import"./d3-scale-BnZ4Lirr.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./Symbols-HSjwRIgd.js";import"./symbol-Jvzv5OcK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./tooltipContext-D6BeuZ0a.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBvNSrWO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./ErrorBarContext-CcM5piDn.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getZIndexFromUnknown-BIwG92vh.js";import"./graphicalItemSelectors-BdW54Xar.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
