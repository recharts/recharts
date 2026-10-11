import{r as f,R as e}from"./iframe-B5nqGCFx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BgoYMJlL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-fA6rJzVB.js";import{C as k}from"./ComposedChart-DwtG5NiV.js";import{X as K}from"./XAxis-BbfaJWKY.js";import{L as v}from"./Legend-DbTPlpw_.js";import{B as a}from"./Bar-CoidScCq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dboddtc6.js";import"./Text-D2l9VyZ3.js";import"./resolveDefaultProps-DTwkyIYB.js";import"./pageBackground-Do8lEaLA.js";import"./isWellBehavedNumber-CTlIu6VQ.js";import"./useId-D5UXkky-.js";import"./useBackwardsCompatibleTheme-DdYC-jFL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-udH7BH-f.js";import"./index-COQrJFEi.js";import"./index-BRJwV6Tu.js";import"./RechartsWrapper-Ba7GDCRC.js";import"./axisSelectors-DRuLrEYP.js";import"./throttle-8usPf-nG.js";import"./d3-scale-Cvdyq6r4.js";import"./index-D7H2LPLl.js";import"./index-C0uKubiT.js";import"./renderedTicksSlice-D3liRtIY.js";import"./index-DNc7GpB0.js";import"./CartesianAxis-nGdi1wTE.js";import"./Layer-SWDQGPXc.js";import"./types-CilMbPhc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bo-Bdmuv.js";import"./chartDataContext-BLw5SzU5.js";import"./CategoricalChart-BPnw4lhz.js";import"./Symbols-DHtTH7TJ.js";import"./symbol-daI3B66U.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7bOm6Io.js";import"./uniqBy-BrQ249xF.js";import"./iteratee-D4GTaDc4.js";import"./activeStyles-LGVgbHeS.js";import"./useAnimationId-DegqvOnN.js";import"./dataEntryStyles-CA9fGSl9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BlT3bA6g.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BaXicK3x.js";import"./tooltipContext-DMSCmSoo.js";import"./ErrorBarContext-BKhVL6zW.js";import"./GraphicalItemClipPath-RjRlios3.js";import"./SetGraphicalItem-B1zewZJg.js";import"./getZIndexFromUnknown-4FVe3T72.js";import"./useGraphicalItemIdentity-C3gqRS6g.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
