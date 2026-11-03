import{r as f,R as e}from"./iframe-DfQVKpWf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DMHv-5gA.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BRoA5zbQ.js";import{C as k}from"./ComposedChart-UT8hODIU.js";import{X as K}from"./XAxis--NVg5Wna.js";import{L as v}from"./Legend-BMaSAhX7.js";import{B as a}from"./Bar-3QTVc3kR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dx4XJGMM.js";import"./Text-BguVyW-T.js";import"./resolveDefaultProps-BRVZcbQl.js";import"./DOMUtils-D9csGiWV.js";import"./ZIndexLayer-iHHFBTZW.js";import"./index-DLkRf9Xs.js";import"./index-Da3zhQui.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DE4p4RgX.js";import"./throttle-D0VENALV.js";import"./axisSelectors-nkYWEth-.js";import"./d3-scale-DC9kPgul.js";import"./CartesianAxis-bSSjBH_Z.js";import"./Layer-Dxd39IZi.js";import"./types-B0IgcrJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-COJW81My.js";import"./index-CLjBtDbF.js";import"./index-C3Wo1ixX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CbT_vqZg.js";import"./index-oM5BRh82.js";import"./fillDefinitions-DMhv-djT.js";import"./CartesianChart-BO_j1rd7.js";import"./ZIndexPortal-BgZ3mdtq.js";import"./CategoricalChart-CIbxz_h2.js";import"./Symbols-C8CspVgJ.js";import"./symbol-D5X2owC8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_4NA5oF.js";import"./uniqBy-Bvv0pG38.js";import"./iteratee-Dj2GE6VN.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BjeX7Zh8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dho5taUB.js";import"./useAnimationId-Co3_Oxtg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dij93_Oc.js";import"./tooltipContext-C17Nxqi9.js";import"./dataEntryStyles-pydJZJI0.js";import"./ErrorBarContext-DMnuYRqA.js";import"./activeStyles-BlB0_IoV.js";import"./SetGraphicalItem-24_y6SOu.js";import"./getZIndexFromUnknown-BfvaioqB.js";import"./useEffectiveDataKey-BuvFv_YU.js";import"./omit-CZ4uP1Dh.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
