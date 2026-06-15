import{r as f,R as e}from"./iframe-CoKy4elT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BJGGz_YN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CY4yYEbq.js";import{C as k}from"./ComposedChart-BVJUWbH_.js";import{X as K}from"./XAxis-DsRQf7G7.js";import{L as v}from"./Legend-D3IpGgUQ.js";import{B as s}from"./Bar-QrXKv0gM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfSl0Rns.js";import"./CartesianAxis-DoYCv6Ih.js";import"./Layer-k2Wdsuzq.js";import"./resolveDefaultProps-CDt21lVt.js";import"./Text-DL1Q3xYK.js";import"./DOMUtils-YWM1N8Io.js";import"./isWellBehavedNumber-1a8W8TdO.js";import"./Label-MtH_fF3i.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Gbc9J2Kq.js";import"./index-Bjw5bEKW.js";import"./index-B3BiA27P.js";import"./types-Du-R6iBe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DBzopiP-.js";import"./immer-lWVojOeC.js";import"./RechartsWrapper-DkPhnPXC.js";import"./index-B6XlI2wQ.js";import"./index-C3h5ViMU.js";import"./axisSelectors-D-8m2pyG.js";import"./d3-scale-xTkB24fT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DX79lhQp.js";import"./chartDataContext-JpjBb8GI.js";import"./CategoricalChart-DaCgDPQn.js";import"./Symbols-mGXHXz_j.js";import"./symbol-D9vQ6-Jo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOdjfFuB.js";import"./uniqBy-CtAtk69m.js";import"./iteratee-BljMhTLe.js";import"./tooltipContext-BylNZt6P.js";import"./AnimatedItems-CIond_pq.js";import"./useAnimationId-DCY8-kt_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CO7CILtg.js";import"./ActiveShapeUtils-CdBo7Ldv.js";import"./RegisterGraphicalItemId-CuDS2LmP.js";import"./ErrorBarContext-DteVVWve.js";import"./GraphicalItemClipPath-BE9EOFft.js";import"./SetGraphicalItem-Bcs0Y3bf.js";import"./getZIndexFromUnknown-DCY99Amk.js";import"./graphicalItemSelectors-DKZhjjw0.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
