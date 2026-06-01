import{P as f,c as e}from"./iframe-CE1Ai-kZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CtQfEX5v.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-yWbeh4A5.js";import{C as k}from"./ComposedChart-BkL-CQuh.js";import{X as K}from"./XAxis-b9Iy0H9I.js";import{L as v}from"./Legend-m6K7d0-p.js";import{B as s}from"./Bar-DBKgwB6R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-mVWjURP_.js";import"./CartesianAxis-C_FQ4pG9.js";import"./Layer-IyK8O9Af.js";import"./resolveDefaultProps-CmEakyQ-.js";import"./Text-DURDmivW.js";import"./DOMUtils-CSrHQ79m.js";import"./isWellBehavedNumber-Bxf6a22g.js";import"./Label-DLrYniOW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CqYRU3_E.js";import"./index-Gozxl0v8.js";import"./index-B1iIDv_0.js";import"./types-Cms7mXxl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BQLVMwTH.js";import"./immer-DgYhOWDS.js";import"./RechartsWrapper-4e423j6r.js";import"./index-DaGE07U6.js";import"./index-DziNllj1.js";import"./axisSelectors-C9KJ0caj.js";import"./d3-scale-BHF3M1h_.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-Cs0xCG0T.js";import"./chartDataContext-Y7cA5Syy.js";import"./CategoricalChart-BlcXzgR0.js";import"./Symbols-B2K6orYb.js";import"./symbol-D11TJsJH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-L6VNX1pt.js";import"./uniqBy-CajY-tu0.js";import"./iteratee-C1550tO-.js";import"./tooltipContext-CSXC0SyN.js";import"./AnimatedItems-oYMoGio2.js";import"./useAnimationId-BY50CzGe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Las83rKf.js";import"./ActiveShapeUtils-BuWDNzFh.js";import"./RegisterGraphicalItemId-BjpF4fds.js";import"./ErrorBarContext-Cn2z2gOd.js";import"./GraphicalItemClipPath-CRxsA1xP.js";import"./SetGraphicalItem-DLzcOWdZ.js";import"./getZIndexFromUnknown-BkibC0lB.js";import"./graphicalItemSelectors-DuUNl4l3.js";const xe={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
