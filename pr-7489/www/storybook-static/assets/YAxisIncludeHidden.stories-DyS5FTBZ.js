import{r as f,R as e}from"./iframe-Csitbru2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-77x_J4Mg.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BG9qkId4.js";import{C as k}from"./ComposedChart-BUYN4Cux.js";import{X as K}from"./XAxis-GSkuRjug.js";import{L as v}from"./Legend-1-fEOdlM.js";import{B as s}from"./Bar-vxIAmQew.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DUq6txa7.js";import"./CartesianAxis-625Se9fv.js";import"./Layer-CzMJ0aPe.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./Label-ipIcHgJV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BXMbhl4p.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./types-CUGjGCsQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DArjmdb9.js";import"./immer-DZIxrqNF.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./Symbols-DTyRS-9_.js";import"./symbol-6fV8HDNc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFAuBBXU.js";import"./uniqBy-BiKJ-0mt.js";import"./iteratee-DCHecb74.js";import"./tooltipContext-BtT9U0V8.js";import"./AnimatedItems-nKsPTqFW.js";import"./useAnimationId-co5Blost.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bp3a_jVT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./ErrorBarContext-CNfKV2VL.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getZIndexFromUnknown-BVZ_dzF3.js";import"./graphicalItemSelectors-Cb7i0Zq_.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
