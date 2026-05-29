import{P as f,c as e}from"./iframe-CmE1Gw1b.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-sLz07qff.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-CPvazyt5.js";import{C as k}from"./ComposedChart-B0hkf2v7.js";import{X as K}from"./XAxis-CsAE-1wy.js";import{L as v}from"./Legend-CLEzoxOZ.js";import{B as s}from"./Bar-CwvnK4bZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Xs9eC5t9.js";import"./CartesianAxis-CAtPdKeh.js";import"./Layer-abY4Fjir.js";import"./resolveDefaultProps-DMnLPor7.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./isWellBehavedNumber-iiy358B8.js";import"./Label-Cvukc7WC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHcHf456.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./types-DmTRT5mp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./immer-D0ucvycs.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";import"./Symbols-B59YXWP_.js";import"./symbol-DzwPD8ez.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-LxG0BO.js";import"./uniqBy-BvaoGVQr.js";import"./iteratee-RsGkkcHy.js";import"./tooltipContext-ChOVTM28.js";import"./ReactUtils-BAXLe4Ge.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DC373LRb.js";import"./useAnimationId-D3nuvCaK.js";import"./ActiveShapeUtils-C_GLb3KM.js";import"./RegisterGraphicalItemId-B-oWQNZS.js";import"./ErrorBarContext-BpCSl48G.js";import"./GraphicalItemClipPath-BhaC-7pi.js";import"./SetGraphicalItem-DE9GuFyM.js";import"./getZIndexFromUnknown-_xYpBNHf.js";import"./graphicalItemSelectors-vcPysoTb.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
