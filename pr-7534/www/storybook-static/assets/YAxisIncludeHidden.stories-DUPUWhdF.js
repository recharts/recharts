import{r as f,R as e}from"./iframe-Dz7fOwcI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BBLdCd6N.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DlvYonxh.js";import{C as k}from"./ComposedChart-Dj2W9R-k.js";import{X as K}from"./XAxis-DFw5p9mB.js";import{L as v}from"./Legend-B34M7RXQ.js";import{B as s}from"./Bar-CtWIgBpf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Ccqj4A2W.js";import"./Layer-Cbl9ckF3.js";import"./resolveDefaultProps-iMaSxvai.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./Label-DdFPLPtR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uLTirNmh.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./types-BbykzSU1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgHHusta.js";import"./throttle-P3hcp8f5.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./index-DeBQrWVz.js";import"./axisSelectors-BrQnrxrh.js";import"./d3-scale-DvZHjVYW.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./Symbols-vq9ym0W5.js";import"./symbol-IHzi228e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DE8HnghF.js";import"./uniqBy-Bc4mdW14.js";import"./iteratee-DMupSKW3.js";import"./tooltipContext-BUI4kYkZ.js";import"./AnimatedItems-DmM_DoTI.js";import"./useAnimationId-DXftpzbd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2KMKFcS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpKGxq0o.js";import"./RegisterGraphicalItemId-nSw_C2Ok.js";import"./ErrorBarContext-DsGpPWxc.js";import"./GraphicalItemClipPath-BgvZ3vl9.js";import"./SetGraphicalItem-Dj4x9kmg.js";import"./getZIndexFromUnknown-B8KQU5KR.js";import"./graphicalItemSelectors-zHfIRokA.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
