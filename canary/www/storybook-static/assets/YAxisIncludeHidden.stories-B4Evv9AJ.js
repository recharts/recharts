import{r as f,R as e}from"./iframe-DI4HGhHh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-C1Oi2VZJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLsQIX9Y.js";import{C as k}from"./ComposedChart-BT-NJBPH.js";import{X as K}from"./XAxis-Dj4RjVoP.js";import{L as v}from"./Legend-r05uFuGy.js";import{B as s}from"./Bar-BCtslQcx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfcmt9LS.js";import"./CartesianAxis-XgaOnUyy.js";import"./Layer-2I2RJkTJ.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./Label-BOdAN_xF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAI-vp6k.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./types-BM9AiZnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CGUH_--9.js";import"./immer-CAVNBYxE.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./Symbols-Bn-ZN7NN.js";import"./symbol-Bxz5MfJW.js";import"./path-DyVhHtw_.js";import"./useElementOffset--KSA65z0.js";import"./uniqBy-DHyoL8un.js";import"./iteratee-D86B-dJN.js";import"./tooltipContext-DfACEnFU.js";import"./AnimatedItems-B_Y2HCHw.js";import"./useAnimationId-B5j5oAoh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdJqIjzl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getZIndexFromUnknown-3dpL5-Eh.js";import"./graphicalItemSelectors-COEWuTcX.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
