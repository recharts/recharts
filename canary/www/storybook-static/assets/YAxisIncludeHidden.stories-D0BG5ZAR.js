import{r as f,R as e}from"./iframe-Dsugo_zg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BOEdL1M7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CQ8Dq6Rw.js";import{C as k}from"./ComposedChart-Clv-J78V.js";import{X as K}from"./XAxis-BtWHE8Ii.js";import{L as v}from"./Legend-BsJaqzMT.js";import{B as s}from"./Bar-BZvBFTcM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B4-DsMlp.js";import"./CartesianAxis-1FBfSHCk.js";import"./Layer-PDKsNXXB.js";import"./resolveDefaultProps-ByiopbeA.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./Label-Dv0ON-tn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CosUoOTg.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./types-BdpIxXW8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CsDLwy59.js";import"./immer-Dn_ZGj_2.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./axisSelectors-DuSkawJ1.js";import"./d3-scale-C9TIKeBC.js";import"./string-B6fdYHAA.js";import"./CartesianChart-UK3tQwAh.js";import"./chartDataContext-D_whFwD4.js";import"./CategoricalChart-FdwMdvH0.js";import"./Symbols-BHPShsT2.js";import"./symbol-4UK5LcDA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ckhk56wk.js";import"./uniqBy-BVaAsoy2.js";import"./iteratee-BfnyOwZq.js";import"./tooltipContext-BGk27Aep.js";import"./AnimatedItems-BcVxVlvs.js";import"./useAnimationId-BEJfwvjz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6j2cXDPI.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./ErrorBarContext-BTy60tqZ.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getZIndexFromUnknown-D5sXd5s7.js";import"./graphicalItemSelectors-CtWRHLh-.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
