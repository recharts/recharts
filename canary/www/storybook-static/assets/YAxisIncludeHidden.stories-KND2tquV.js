import{r as f,R as e}from"./iframe-DDlpcCnl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLVtcSn1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-IyRnOGSL.js";import{C as k}from"./ComposedChart-DTzVCjBN.js";import{X as K}from"./XAxis-BoZpTebr.js";import{L as v}from"./Legend-D1luNBim.js";import{B as a}from"./Bar-C2nN3Wq3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CZPjkQy2.js";import"./Text-BYHxKQhi.js";import"./resolveDefaultProps-DdcIcuy0.js";import"./DOMUtils-CEWteLOc.js";import"./ZIndexLayer-6Wt9kpTG.js";import"./index-BrGVAlaK.js";import"./index-DgZ0S6kR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmUB7T9A.js";import"./throttle-BEGaSLni.js";import"./axisSelectors-DJ_js28E.js";import"./d3-scale-C8E3wvOe.js";import"./CartesianAxis-B9o_pqzh.js";import"./Layer-G7QHPTqV.js";import"./types-9pREsRXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDUEc77e.js";import"./index-DQ5N6C5N.js";import"./index-CVLdebNc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CEsAbTQz.js";import"./index-DwERpMJ8.js";import"./fillDefinitions-B51hWH8m.js";import"./CartesianChart-EWd5fLMj.js";import"./ZIndexPortal-cCqCXZCV.js";import"./CategoricalChart-fIZxwY-X.js";import"./Symbols-CUes1UBB.js";import"./symbol-DbG6j_AG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-qpYo5b.js";import"./uniqBy-5vufMWU3.js";import"./iteratee-DRvaSPOJ.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D8buJxhL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJnKnMxE.js";import"./useAnimationId-BvctuRLt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9MmIWSgd.js";import"./tooltipContext-DbT5aurG.js";import"./dataEntryStyles-DFT_PI06.js";import"./ErrorBarContext-BKlvoAQJ.js";import"./activeStyles-cdXgOxXT.js";import"./SetGraphicalItem-tysqpR10.js";import"./getZIndexFromUnknown-hkfY-fUh.js";import"./useEffectiveDataKey-DdYNwp-E.js";import"./omit-DMBtI0qv.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
