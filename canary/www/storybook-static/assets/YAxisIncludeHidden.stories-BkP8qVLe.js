import{r as f,R as e}from"./iframe-C1V3amVF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CCWiCDwe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CxDitcfM.js";import{C as k}from"./ComposedChart-B9ikdlAe.js";import{X as K}from"./XAxis-CUJJeScp.js";import{L as v}from"./Legend-DYuR-vxK.js";import{B as a}from"./Bar-Bav81Bkz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B5Mwu39-.js";import"./Text-C-wx4MGw.js";import"./resolveDefaultProps-maTY1UNo.js";import"./DOMUtils-BorqH6Wm.js";import"./isWellBehavedNumber-sSvUiVa0.js";import"./useId-CqxK22LB.js";import"./useBackwardsCompatibleTheme-DW9fdEyu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-3Hvhzeb3.js";import"./index-B41u_h9l.js";import"./index-B4ZIiFXx.js";import"./RechartsWrapper-Cc-bEMHs.js";import"./axisSelectors-BX0vcNuG.js";import"./throttle-DLY36_v2.js";import"./d3-scale-BOUMSuvG.js";import"./index-CssId3o7.js";import"./index-DnibiSA_.js";import"./renderedTicksSlice-D9YwC06X.js";import"./index-BGhjEBZe.js";import"./CartesianAxis-DtpXHVOF.js";import"./Layer-BYwPbOg9.js";import"./types-BJLf6sJx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-6UNv2iJv.js";import"./chartDataContext-CaPayD00.js";import"./CategoricalChart-B25IDucc.js";import"./Symbols-DCPONZ93.js";import"./symbol-DsoNMZia.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cvn3bpJq.js";import"./uniqBy-CIEuKI_-.js";import"./iteratee-DBOMspHe.js";import"./AnimatedItems-aGWDQ20-.js";import"./useAnimationId-CfyL2S79.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D28FxDHn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MAleYnD7.js";import"./tooltipContext-B8F29Znr.js";import"./RegisterGraphicalItemId-DC_0c8kg.js";import"./ErrorBarContext-BBO43QIU.js";import"./GraphicalItemClipPath-CMqb799B.js";import"./SetGraphicalItem-BaWbpx0v.js";import"./getZIndexFromUnknown-D4unsUMt.js";import"./useGraphicalItemIdentity-DMF19NMJ.js";import"./dataEntryStyles-B8wapxC1.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
