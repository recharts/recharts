import{r as f,R as e}from"./iframe-DghEAMN6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-S3ValhBK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DZVgvaAB.js";import{C as k}from"./ComposedChart-CHfOsQFV.js";import{X as K}from"./XAxis-BmVtlHU0.js";import{L as v}from"./Legend-CApeEcJt.js";import{B as s}from"./Bar-BIFLRIyA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-OeFwIBZb.js";import"./CartesianAxis-BBXp2oHY.js";import"./Layer-4aUlzdTp.js";import"./resolveDefaultProps-DtqwpnL6.js";import"./Text-3TARh6pc.js";import"./DOMUtils-Qs3kgbuH.js";import"./isWellBehavedNumber-2WeEbslz.js";import"./Label-5l5u0djs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DDP5Eu2k.js";import"./index-DwTkm5Gc.js";import"./index-BNbzKJUN.js";import"./types-Beb7Z0cf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xCX0SP0o.js";import"./immer-Dzr4hzbh.js";import"./RechartsWrapper--epX0hHz.js";import"./index-CHxwPLCw.js";import"./index-FvypkAhj.js";import"./axisSelectors-Cx52Tyf1.js";import"./d3-scale-CUSv4nyH.js";import"./CartesianChart-B2gIIl6u.js";import"./chartDataContext-DmtHMzxl.js";import"./CategoricalChart-mficH34_.js";import"./Symbols-DCW_1DOh.js";import"./symbol-kK5tHu0k.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D7P9ru3F.js";import"./uniqBy-C8hQkly0.js";import"./iteratee-B9fRV5MV.js";import"./tooltipContext-cbdZeGhH.js";import"./AnimatedItems-ChrydhAM.js";import"./useAnimationId-bXkDgMGB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBtpOBt5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_OCeFGs0.js";import"./RegisterGraphicalItemId-BH9Fw2h1.js";import"./ErrorBarContext-CWlVXcpe.js";import"./GraphicalItemClipPath-B_ue0lJA.js";import"./SetGraphicalItem-DyRJQvTd.js";import"./getZIndexFromUnknown-DtxnlX_W.js";import"./graphicalItemSelectors-r2j0e_dY.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
