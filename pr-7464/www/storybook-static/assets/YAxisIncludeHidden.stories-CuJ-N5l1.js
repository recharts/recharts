import{r as f,R as e}from"./iframe-DMp7qWBc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Csr1iP4L.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DwEqiBQ-.js";import{C as k}from"./ComposedChart-r_H9u5_0.js";import{X as K}from"./XAxis-BEU7rEXV.js";import{L as v}from"./Legend-DfI93GLz.js";import{B as s}from"./Bar-Dw0JmqF5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-xm_p6-0H.js";import"./CartesianAxis-BpcewqQP.js";import"./Layer-CuLdBvJ8.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./isWellBehavedNumber-B2IEwkWH.js";import"./Label-CTVwy9Ni.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./types-nrPXTQ41.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xTgogQQT.js";import"./immer-Cdu3yC2y.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./index-BjkWDWFl.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./Symbols-B2QFfdKs.js";import"./symbol-C-pIEiEF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DiViSUwj.js";import"./uniqBy-CQGZokB0.js";import"./iteratee-g85ug9Sr.js";import"./tooltipContext-DKR079yv.js";import"./AnimatedItems-BdLU55_g.js";import"./useAnimationId-Bo28EVo_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-hZTYOPpO.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./ErrorBarContext-BXcE1fb6.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getZIndexFromUnknown-CYkR5FEl.js";import"./graphicalItemSelectors-S6DhiXfP.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
