import{r as f,R as e}from"./iframe-B3Q9BieZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DvVjGCkX.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-sqFd1bzt.js";import{C as k}from"./ComposedChart-D1EiQGBZ.js";import{X as K}from"./XAxis-D2lT-EVr.js";import{L as v}from"./Legend-D54bBuuY.js";import{B as a}from"./Bar-D2P5vE9X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DqBOaUXK.js";import"./Text-vJxvkBMX.js";import"./resolveDefaultProps-BfktPE_A.js";import"./ZIndexLayer-D273i2uL.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./throttle-D7B_fzZD.js";import"./axisSelectors-DvTAFEOk.js";import"./d3-scale-C94aTEcE.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cfrbgio_.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BjLkxFtO.js";import"./uniqBy-BY6j9O5X.js";import"./iteratee-CK_fQl9o.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DvvOVUEP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uE9FLPYH.js";import"./useAnimationId-2VJaNjeA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./tooltipContext-DrUQbg9p.js";import"./ErrorBarContext-B613I2F5.js";import"./activeStyles-BLYIXqri.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./getZIndexFromUnknown-CaJBxPdw.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./omit-DiesSGF7.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
