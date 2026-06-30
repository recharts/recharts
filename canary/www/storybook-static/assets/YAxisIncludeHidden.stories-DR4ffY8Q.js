import{r as f,R as e}from"./iframe-DNYOsiJO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BYx3TtuN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BYsyPOtl.js";import{C as k}from"./ComposedChart-DhpLFFry.js";import{X as K}from"./XAxis-Dc7egqDj.js";import{L as v}from"./Legend-YlSkelU_.js";import{B as s}from"./Bar-CnUx9NGb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DvCBXc2H.js";import"./CartesianAxis-DB2jJ2Vg.js";import"./Layer-BZEyjxjb.js";import"./resolveDefaultProps-BPA_kNXr.js";import"./Text-COQ57Hvt.js";import"./DOMUtils-DMxex0QR.js";import"./isWellBehavedNumber-BdiH4iwW.js";import"./Label-DBVLreiQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6YZY0_d.js";import"./index-CpvOcg5A.js";import"./index-B-scg1za.js";import"./types-CfyGDdUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B3G44Ect.js";import"./throttle-DhLz3mrQ.js";import"./RechartsWrapper-D4XAWs0V.js";import"./index-BghJ0rJu.js";import"./index-DN5tCymc.js";import"./axisSelectors-BU0FKw5j.js";import"./d3-scale-Cm3hMOK_.js";import"./CartesianChart-CJ0aqbjB.js";import"./chartDataContext-ALZLxkDM.js";import"./CategoricalChart-Dgn8q3Cx.js";import"./Symbols-I2yRXz2U.js";import"./symbol-ba0mQzRy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cw6InSRv.js";import"./uniqBy-Dqcc81ao.js";import"./iteratee-BmMaIqc5.js";import"./tooltipContext-86Ce_pFB.js";import"./AnimatedItems-CfNYG8xc.js";import"./useAnimationId-DniHu15m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0fmCEGG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dv5sca8G.js";import"./RegisterGraphicalItemId-PRQMqBjc.js";import"./ErrorBarContext-8ntzOtYf.js";import"./GraphicalItemClipPath-C8T0qCgO.js";import"./SetGraphicalItem-DQ-8Rtbz.js";import"./getZIndexFromUnknown-CRsb39eG.js";import"./graphicalItemSelectors-BWLE6_sA.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
