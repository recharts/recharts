import{r as f,R as e}from"./iframe-BiXVY0YN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Da5Yhwpa.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-nY6JNSg8.js";import{C as k}from"./ComposedChart-Cf4jkg33.js";import{X as K}from"./XAxis-8aOHTtEo.js";import{L as v}from"./Legend-Cuei_W9Z.js";import{B as s}from"./Bar-Cz7LafTL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DSfNO7n4.js";import"./CartesianAxis-eCQKtisH.js";import"./Layer-uuEILT3S.js";import"./resolveDefaultProps-DD4XGInB.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./Label-BJ6MA63M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6ebEplbW.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./types-CLXMlpTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./immer-Bguoov5l.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./Symbols-BELca2ug.js";import"./symbol-DzSheJ7o.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CPLS44DG.js";import"./uniqBy-CcGBVuj2.js";import"./iteratee-STjWE_qx.js";import"./tooltipContext-aqxYfSHG.js";import"./AnimatedItems-DfhrJO_Z.js";import"./useAnimationId-CfBicigm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DuKXzg_S.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getZIndexFromUnknown-C5kk8Aaf.js";import"./graphicalItemSelectors-C0O5oaAS.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
