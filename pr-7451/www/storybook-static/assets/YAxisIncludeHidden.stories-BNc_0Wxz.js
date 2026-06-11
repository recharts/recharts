import{r as f,R as e}from"./iframe-DVB9NpZr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CIOeYwaY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-inUr0xCU.js";import{C as k}from"./ComposedChart-oQ-te1DN.js";import{X as K}from"./XAxis-CjffC60d.js";import{L as v}from"./Legend-TiAv2XOH.js";import{B as s}from"./Bar-BWAOVqf3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DFBBhs2u.js";import"./CartesianAxis-BFFWpUHq.js";import"./Layer-CznYhS6e.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./Label-C-9e4xzc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YpWmKYVa.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./types-CmHpCyOi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJczlu3R.js";import"./immer-cUFuezMs.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./Symbols-DrVUv3XW.js";import"./symbol-vftm-K-Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXbw_jYn.js";import"./uniqBy-DDqwjX8c.js";import"./iteratee-DxauXe4m.js";import"./tooltipContext-DgkZ29eX.js";import"./AnimatedItems-DN0vzfw4.js";import"./useAnimationId-D_d0Diy_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eOEMHMNE.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./ErrorBarContext-C6AudozV.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getZIndexFromUnknown-Dnn9JAxK.js";import"./graphicalItemSelectors-C16TioBL.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
