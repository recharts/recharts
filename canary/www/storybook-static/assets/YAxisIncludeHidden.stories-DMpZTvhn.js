import{r as f,R as e}from"./iframe-BX5cRibr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-LHNvPj5J.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-AZuYl_vp.js";import{C as k}from"./ComposedChart-ySsto5-f.js";import{X as K}from"./XAxis-DwJ67tbd.js";import{L as v}from"./Legend-Bh7zufuS.js";import{B as s}from"./Bar-DCSjGvKA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaxsWVsm.js";import"./Text-LzAq1gnt.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./DOMUtils-BjdsXn98.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./throttle-zmqWqRK4.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianAxis-C0ASpg_d.js";import"./Layer-W_QEwym4.js";import"./types-DbQE6sDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./Symbols-8Y55TEi-.js";import"./symbol-DJtjK0so.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B2muHLId.js";import"./uniqBy-CUPPr5RE.js";import"./iteratee-C-A_FkJM.js";import"./AnimatedItems-Cm8c3RW5.js";import"./useAnimationId-CcWR-JA_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sEO8jAvN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./tooltipContext-BCMOyfKZ.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getZIndexFromUnknown-wU2gbq3X.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DW-toJ5T.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
