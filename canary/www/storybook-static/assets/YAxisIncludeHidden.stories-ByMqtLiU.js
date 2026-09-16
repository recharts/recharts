import{r as f,R as e}from"./iframe-CKDPSKer.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-aBoPLQiN.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BPEXBnkz.js";import{C as k}from"./ComposedChart-BRk5rLm3.js";import{X as K}from"./XAxis-A_9Io6kM.js";import{L as v}from"./Legend-Bov7jtG8.js";import{B as a}from"./Bar-dsf1sJWy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dc-yhDIk.js";import"./Text-C2JOwhg7.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./DOMUtils-YKVjc3tQ.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./RechartsWrapper-DXJuSLgb.js";import"./axisSelectors-BCmNu8mb.js";import"./throttle-BxISGQ-D.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./CartesianAxis-CjGSghd8.js";import"./Layer-B33l4zSF.js";import"./types-CtnAz4fT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./Symbols-B54QlVgZ.js";import"./symbol-DL-3irLp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D8p3AvLo.js";import"./uniqBy-DYmmQrZx.js";import"./iteratee-DK5B7GVX.js";import"./AnimatedItems-DQZ1vYlx.js";import"./useAnimationId-BJ5AGKlq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B5okrLSf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./tooltipContext-BG1A-VRG.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getZIndexFromUnknown-Bg3Y29-C.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
