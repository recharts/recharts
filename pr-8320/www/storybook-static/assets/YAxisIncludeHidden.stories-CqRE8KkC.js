import{r as f,R as e}from"./iframe-DEVQjgtg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DNUJzVJY.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfK8JSFq.js";import{C as k}from"./ComposedChart-CkNI_L7v.js";import{X as K}from"./XAxis-BW3rW0v-.js";import{L as v}from"./Legend-CuHxeQW8.js";import{B as a}from"./Bar-C4UysR5s.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./Label-CuMp2cQz.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./throttle-icp-MZ_z.js";import"./axisSelectors-t3BvEa3q.js";import"./diverging-Co6YNHM_.js";import"./CartesianAxis-CPxmijCh.js";import"./Layer-Cr563h4j.js";import"./types-B0JGDzFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CfFuT0mb.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./path-BBMZd4YL.js";import"./useElementOffset-M02b1bSW.js";import"./uniqBy-RXDCBnIw.js";import"./iteratee-69chSGWI.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvNq4YWD.js";import"./useAnimationId-CMFy88eN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./tooltipContext-czqY8cLu.js";import"./ErrorBarContext-D5jMJqSB.js";import"./activeStyles-D4aY95Js.js";import"./SetGraphicalItem-CsW3luzS.js";import"./getZIndexFromUnknown-BZIIFNNy.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./omit-BoAzSUIq.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
