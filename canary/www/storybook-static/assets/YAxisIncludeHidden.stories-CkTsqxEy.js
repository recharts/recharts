import{r as f,R as e}from"./iframe-C8yGgO2d.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CkFD-fPK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CuRdZ-8K.js";import{C as k}from"./ComposedChart-D2wyoHi-.js";import{X as K}from"./XAxis-DkqGLCT1.js";import{L as v}from"./Legend-H21iyFgB.js";import{B as a}from"./Bar-C0m_JxaU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtCjiiK8.js";import"./Text-N9mhAN-H.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./DOMUtils-BOgsOCmi.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./RechartsWrapper-DxEsBzKb.js";import"./axisSelectors-w7bw2H0b.js";import"./throttle-Dr0khojT.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./CartesianAxis-BHyGAXdi.js";import"./Layer-tDZThP1f.js";import"./types-DDTipNBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./Symbols-D1NUi6Uu.js";import"./symbol-C1h6pqC-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CgrUACTV.js";import"./uniqBy-DkfDDjH9.js";import"./iteratee-Bma5tZ2w.js";import"./AnimatedItems-DmW46OuC.js";import"./useAnimationId-Bie7xBo-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMqwvRGF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./tooltipContext-D2TMP3rH.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./ErrorBarContext-DNGGPxUD.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getZIndexFromUnknown-C_-Lvn3v.js";import"./useGraphicalItemIdentity-B0pPIliE.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
