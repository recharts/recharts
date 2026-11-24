import{r as f,R as e}from"./iframe-Cg_iar9N.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D6x7oYcH.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BjUOfyjh.js";import{C as k}from"./ComposedChart-BFCZD_8N.js";import{X as K}from"./XAxis-CGc4hdT9.js";import{L as v}from"./Legend-BYP7URbe.js";import{B as a}from"./Bar-DFJwXaP_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./Label-BJnLd782.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./throttle-BblIHJT1.js";import"./axisSelectors-CZOBtonL.js";import"./d3-scale-DPBNOBhz.js";import"./CartesianAxis-DOu6asA8.js";import"./Layer-Bzrsb6mZ.js";import"./types-ltSKN6AB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C7ImdcI0.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./path-BBMZd4YL.js";import"./useElementOffset-hhsDlGuK.js";import"./uniqBy-DOt34CrH.js";import"./iteratee-DBE5xjg2.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CxwfrkTv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_eYXhuf.js";import"./useAnimationId-9EHB1qr6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./tooltipContext-DvVRje4i.js";import"./ErrorBarContext-CGI8-gVI.js";import"./activeStyles-BGKrSIuv.js";import"./SetGraphicalItem-B4YPaENS.js";import"./getZIndexFromUnknown-Cei6wpWn.js";import"./useEffectiveDataKey-Cs5zYK5x.js";import"./omit-CBv3Naky.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
