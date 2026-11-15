import{r as f,R as e}from"./iframe-CuQfx1mh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BKox7kU6.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DATCiNk-.js";import{C as k}from"./ComposedChart-CT5dqqrP.js";import{X as K}from"./XAxis-DFSmxsEI.js";import{L as v}from"./Legend-Bb2vQlaO.js";import{B as a}from"./Bar-Cq0JzL2k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-GADa0aPm.js";import"./Text-BgHfu1GZ.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./ZIndexLayer-W76HFIEY.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-piadlyiA.js";import"./throttle-SAQUG4vb.js";import"./axisSelectors-BY0kcEhz.js";import"./d3-scale-BW1Afi3u.js";import"./CartesianAxis-CbXqU-62.js";import"./Layer-YgN4J4tN.js";import"./types-D3Hjk8Vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DE6EtITA.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./Symbols-Cfnu_9Am.js";import"./symbol-CeqqAB3e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dCD-1zhD.js";import"./uniqBy-B4ZIglI5.js";import"./iteratee-0xqLSxi-.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-GFwLhdMi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dy2GqrdD.js";import"./useAnimationId-tXprvTar.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5R6UpQP.js";import"./tooltipContext-BJkKDx34.js";import"./ErrorBarContext-Ciy31sgt.js";import"./activeStyles-Ci_kz6ws.js";import"./SetGraphicalItem-CgminRJ_.js";import"./getZIndexFromUnknown-C1FyC94R.js";import"./useEffectiveDataKey-DTMm3t3E.js";import"./omit-CqavrwwZ.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
