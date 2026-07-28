import{r as f,R as e}from"./iframe-Byz0CZgU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-jlA8Ias5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DotL-Jp7.js";import{C as k}from"./ComposedChart-C88qarp6.js";import{X as K}from"./XAxis-BUPL4hjC.js";import{L as v}from"./Legend-D2dToN1F.js";import{B as s}from"./Bar-BZq8m0ZK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B3F7THN1.js";import"./Layer-jJo0ut9m.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./Label-DuUl9C5P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaxIl4jI.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./types-DE0YJD6S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./throttle-4aokm5Ko.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./axisSelectors-CN4g76wg.js";import"./d3-scale-D3FDPfRZ.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./Symbols-BVpfILPu.js";import"./symbol-CS8b5as0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dpa0V5po.js";import"./uniqBy-BOokmjAX.js";import"./iteratee-JxZPr5ba.js";import"./tooltipContext-ahP9ZnaZ.js";import"./AnimatedItems-2XdTa_Uh.js";import"./useAnimationId-CqGGvgKC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lPqfXVFD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./ErrorBarContext-D4-M1cf3.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getZIndexFromUnknown-CWojjiYB.js";import"./graphicalItemSelectors-CtWClP3j.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
