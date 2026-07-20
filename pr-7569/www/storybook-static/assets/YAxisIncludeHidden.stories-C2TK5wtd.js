import{r as f,R as e}from"./iframe-rlLReeiH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BPC8NcBR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-dET_x_8J.js";import{C as k}from"./ComposedChart-BU4P-eJZ.js";import{X as K}from"./XAxis-BANsvQjN.js";import{L as v}from"./Legend-C_48hpSU.js";import{B as s}from"./Bar-CqTFwf2A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DB3D7e8-.js";import"./Layer-yUpNfqTk.js";import"./resolveDefaultProps-Df8vYP0G.js";import"./Text-Bv5QIM4O.js";import"./DOMUtils-DlxBAltB.js";import"./isWellBehavedNumber-BS7XWWNW.js";import"./Label-D0R02xnC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-s_cuGEJZ.js";import"./index-CKdVYzDL.js";import"./index-Bbfl3u8C.js";import"./types-Dt7L5GFC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D5uSNu5L.js";import"./throttle-7RYQhcti.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-2Dg61vQO.js";import"./index-BOTGdiK-.js";import"./index-QXSF1qjq.js";import"./axisSelectors-RWAxTq2z.js";import"./d3-scale-kKXY2gAc.js";import"./CartesianChart-keWWrUD3.js";import"./chartDataContext-ylOfrWr_.js";import"./CategoricalChart-z2rCkgdR.js";import"./Symbols-C8uz2tbW.js";import"./symbol-B4A7mbxq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DCf9qhgC.js";import"./uniqBy-B2PaMH-m.js";import"./iteratee-jTXmCl0i.js";import"./tooltipContext-C1weWIDV.js";import"./AnimatedItems-DR-XZCrI.js";import"./useAnimationId-Dx24Y47b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IWxXL7PH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BqK4gs0R.js";import"./RegisterGraphicalItemId-CQs7WMwj.js";import"./ErrorBarContext-DLDAQNmT.js";import"./GraphicalItemClipPath-DSUy1vxD.js";import"./SetGraphicalItem-D7UC0AFj.js";import"./getZIndexFromUnknown-BWg4rIjr.js";import"./graphicalItemSelectors-C-KZryd0.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
