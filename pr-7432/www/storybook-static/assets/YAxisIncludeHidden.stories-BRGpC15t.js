import{r as f,R as e}from"./iframe-BAIqIWNA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Bm2PYPOq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CH0jeNcq.js";import{C as k}from"./ComposedChart-Hcr-ILe-.js";import{X as K}from"./XAxis-BESD5mtP.js";import{L as v}from"./Legend-DmYWIZQh.js";import{B as s}from"./Bar-B6VjE44L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BRwdZQjD.js";import"./CartesianAxis-C8GWRYR8.js";import"./Layer-B1lMYI05.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./Label-Bax8HmP7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_81h3bN-.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./types-CesEI09P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzbX13g0.js";import"./throttle-RdvYAJ7W.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./Symbols-CVaSTbbY.js";import"./symbol-DX_EUXwT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Y89N9bd1.js";import"./uniqBy-CLC5nVUH.js";import"./iteratee-D4GVextx.js";import"./tooltipContext-DGLSg2Ug.js";import"./AnimatedItems-C-tOmxqX.js";import"./useAnimationId-BLdV4NOG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcFE5tg_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./ErrorBarContext-kr74OQbY.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./getZIndexFromUnknown-BSd0fS_L.js";import"./graphicalItemSelectors-C-Ixjzq9.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
