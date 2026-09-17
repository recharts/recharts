import{r as f,R as e}from"./iframe-BZ8dVzH9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-sJ36Ww1v.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-alAuneH8.js";import{C as k}from"./ComposedChart-Bsbx0YHv.js";import{X as K}from"./XAxis-CnHMXMmb.js";import{L as v}from"./Legend-CyrLGj5T.js";import{B as a}from"./Bar-DRrh8pa0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D8Xv73in.js";import"./Text-Sov8IyzM.js";import"./resolveDefaultProps-DGRkN7my.js";import"./DOMUtils-B5j94FrC.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-By4t7zGO.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./axisSelectors-Bf9eJXot.js";import"./throttle-Gvesfo2A.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./CartesianAxis-ZGFemc86.js";import"./Layer-DFGb6VX8.js";import"./types-JZ66y424.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./Symbols-C0TFMyrU.js";import"./symbol-qUdoioFN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C2gbVgRM.js";import"./uniqBy-DrWsEjAm.js";import"./iteratee-CHJKpI4A.js";import"./AnimatedItems-DFtjNgrp.js";import"./useAnimationId-CAROHwad.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wZEMhZV0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./tooltipContext-hs5giZdZ.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./ErrorBarContext-Bbbe3Bh6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./getZIndexFromUnknown-TcmOQc_V.js";import"./useGraphicalItemIdentity-DrldTHyX.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
