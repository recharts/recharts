import{r as f,R as e}from"./iframe-BpPwD_oK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-GMxCrcAm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CZskftau.js";import{C as k}from"./ComposedChart-B7ZoxfUU.js";import{X as K}from"./XAxis-Dja-Llqh.js";import{L as v}from"./Legend-KM2rCvli.js";import{B as a}from"./Bar-yMjJlUwJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dm2gX9XZ.js";import"./Text-BhQ_ePKx.js";import"./resolveDefaultProps-oHxAH6y3.js";import"./DOMUtils-BrCWiXlY.js";import"./ZIndexLayer-BfN85Ldf.js";import"./index-BDbYb2y7.js";import"./index-C-Ap2UZI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-gNxk2Qvg.js";import"./throttle-jRz9fd5W.js";import"./axisSelectors-CCOlr32b.js";import"./d3-scale-CBz-jIwW.js";import"./CartesianAxis-DPe5aXb5.js";import"./Layer-uKCEWQEh.js";import"./types-C3LEdY55.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BacllR_T.js";import"./index-sbP1X6JH.js";import"./index-C3FSz61l.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtJNI11v.js";import"./index-DaSN1dEV.js";import"./fillDefinitions-BoqwWLdI.js";import"./CartesianChart-DUDm0Jrf.js";import"./ZIndexPortal-CPCtvPJx.js";import"./CategoricalChart-BCsFwQg5.js";import"./Symbols-CmOlxG5J.js";import"./symbol-CEUG_TNl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Clqm1mfa.js";import"./uniqBy-hvFHRVdb.js";import"./iteratee-CYqM1-65.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CdwfQdaD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KfOr2rpu.js";import"./useAnimationId-DjPYETUK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3pEehn2.js";import"./tooltipContext-CEYILYfp.js";import"./dataEntryStyles-CSbDp-Df.js";import"./ErrorBarContext-C5It2V8R.js";import"./activeStyles-BKBboL8s.js";import"./SetGraphicalItem-CtMfZbBm.js";import"./getZIndexFromUnknown-A314PGjt.js";import"./useEffectiveDataKey-CeotyzvV.js";import"./omit-CoJUrBx5.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
