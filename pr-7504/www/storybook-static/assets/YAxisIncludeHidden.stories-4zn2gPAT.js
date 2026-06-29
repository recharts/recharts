import{r as f,R as e}from"./iframe-C8BOwi09.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-5qfCryrA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BhlUeiz9.js";import{C as k}from"./ComposedChart-BOY6dDEf.js";import{X as K}from"./XAxis-Dm5Odjs3.js";import{L as v}from"./Legend-DcS5oJXk.js";import{B as s}from"./Bar-C2U3c-NG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cxci_11r.js";import"./CartesianAxis-CWGT70cF.js";import"./Layer--iJ-Hj_L.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./Label-D4SfTv0v.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKEhnbZx.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./types-BPAGzNH6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./throttle-DKEMBEBf.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./Symbols-DAdykIXc.js";import"./symbol-C0S571ub.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3uxDO7B.js";import"./uniqBy-DDmV_BGS.js";import"./iteratee-Br5fFLhE.js";import"./tooltipContext-Dtceov_d.js";import"./AnimatedItems-DJI9G60d.js";import"./useAnimationId-C1RCoeBd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B5iv9bX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./ErrorBarContext-DLDAFGHH.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./getZIndexFromUnknown-QOlWSk1A.js";import"./graphicalItemSelectors-Bizb05lq.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
