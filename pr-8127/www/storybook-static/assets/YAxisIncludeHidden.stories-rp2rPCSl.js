import{r as f,R as e}from"./iframe-3XHGwrzY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BDE7drTG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Brmhs58T.js";import{C as k}from"./ComposedChart-3w0CXkas.js";import{X as K}from"./XAxis-DAbWxmV3.js";import{L as v}from"./Legend-CItgQnxt.js";import{B as a}from"./Bar-CC8Y8PHQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DV0q5jx7.js";import"./Text-BPYl0AVs.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DX_jscyS.js";import"./throttle-CcufCSOD.js";import"./axisSelectors-0sscf7qw.js";import"./d3-scale-DC4T9Y5K.js";import"./CartesianAxis-rPfnZIs4.js";import"./Layer-Cs_-jK6s.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFT9i2CK.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-Czp8LH37.js";import"./themeFill-BM4c2Gyu.js";import"./useElementOffset-B4umSDLo.js";import"./uniqBy-B1y1vTmS.js";import"./iteratee-P6PZZRrs.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-KPZxqPb8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvFpd_DO.js";import"./useAnimationId-9M90yRIF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./tooltipContext-dsgQ_cgj.js";import"./dataEntryStyles-DQz1PP-z.js";import"./ErrorBarContext-N4SBTIIF.js";import"./activeStyles-Pcudkpr-.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getZIndexFromUnknown-BCOI3m4Q.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./omit-D10Ycyv8.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
