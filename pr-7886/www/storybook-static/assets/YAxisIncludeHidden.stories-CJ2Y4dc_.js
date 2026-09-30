import{r as f,R as e}from"./iframe-DrNDVdUV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-xS1LCjGi.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CtU9gDeX.js";import{C as k}from"./ComposedChart-CI3FiMk_.js";import{X as K}from"./XAxis-CYMSKzPe.js";import{L as v}from"./Legend-CNlWFp5c.js";import{B as a}from"./Bar-IsNWTNL_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-S1smMv2d.js";import"./Text-B6IFXijX.js";import"./resolveDefaultProps-CGCnXzV6.js";import"./DOMUtils-CJOGT8qc.js";import"./isWellBehavedNumber-6ms7Qni5.js";import"./useId-DvlibiBq.js";import"./useBackwardsCompatibleTheme-D28mWunQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVXiBMpv.js";import"./index-CcUsqpS-.js";import"./index-uubsNt5S.js";import"./RechartsWrapper-CftVGGIb.js";import"./axisSelectors-83UqlNkf.js";import"./throttle-yi_4PIaU.js";import"./d3-scale-Dtw5RV1H.js";import"./index-C02YBhOv.js";import"./index-DG6hdvW2.js";import"./renderedTicksSlice-D-gEAZZ9.js";import"./index-f04P2rVP.js";import"./CartesianAxis-D9QKlyxu.js";import"./Layer-MqQXVAAH.js";import"./types-xpc3POF2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-AI3x8M6-.js";import"./chartDataContext-B5-7BCeK.js";import"./CategoricalChart-CAcrwHX_.js";import"./Symbols-BVnZkW-S.js";import"./symbol-P4OpAMFs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CmUznYU5.js";import"./uniqBy-CEMmyZ3q.js";import"./iteratee-BZ785cNU.js";import"./AnimatedItems-BSenOuGe.js";import"./useAnimationId-CQqGpr63.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQDEI2OM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMJhm59f.js";import"./tooltipContext-B7HsC9gN.js";import"./RegisterGraphicalItemId-yZiy6jFu.js";import"./ErrorBarContext-DCn9mgoR.js";import"./GraphicalItemClipPath-BWcxuFET.js";import"./SetGraphicalItem-Cpl9rbNJ.js";import"./getZIndexFromUnknown-DsQqcOX-.js";import"./useGraphicalItemIdentity-CyeNl3AJ.js";import"./dataEntryStyles-JCaOpwA1.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
