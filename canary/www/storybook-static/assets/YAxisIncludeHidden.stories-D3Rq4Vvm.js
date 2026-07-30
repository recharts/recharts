import{r as f,R as e}from"./iframe-BEI88iUa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ByzVR28-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CNhIK6pZ.js";import{C as k}from"./ComposedChart-BRe4dKiO.js";import{X as K}from"./XAxis-0izQHWsV.js";import{L as v}from"./Legend-B_NdJWH1.js";import{B as s}from"./Bar-l7m4T70-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CQfR7C4I.js";import"./Text-b9BvWKjK.js";import"./resolveDefaultProps-CNtzbuaW.js";import"./DOMUtils-CavEusJ9.js";import"./isWellBehavedNumber-DwXWb7IU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6tY-vHyf.js";import"./index-CNenOY3c.js";import"./index-DGXEJOU7.js";import"./RechartsWrapper-BwAaxlIx.js";import"./index-DdylQdZr.js";import"./index-UjVR-wEt.js";import"./throttle-BbtfERHN.js";import"./renderedTicksSlice-CfGYAsFa.js";import"./axisSelectors-BwSjoLT0.js";import"./d3-scale-Mw6WOBPY.js";import"./CartesianAxis-DsLYDFB2.js";import"./Layer-BHa_r1ys.js";import"./types-CzsmCJZd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-az12ZSPD.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BBEthDu3.js";import"./chartDataContext-DSUhfh_h.js";import"./CategoricalChart-D3IYhdol.js";import"./Symbols-DEFl8D87.js";import"./symbol-BDcy8gFw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-n39J5_Wl.js";import"./uniqBy-CP7iw8Et.js";import"./iteratee-B9ORTKRU.js";import"./tooltipContext-BtwoPJ1U.js";import"./AnimatedItems-99nv9Q5e.js";import"./useAnimationId-oD_5QjXY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CXxl5AiF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCFEfVD0.js";import"./RegisterGraphicalItemId-DE2xjbZV.js";import"./ErrorBarContext-BOU1rFco.js";import"./GraphicalItemClipPath-35MUlgJV.js";import"./SetGraphicalItem-DEteyePq.js";import"./getZIndexFromUnknown-C9Zn6XmI.js";import"./graphicalItemSelectors-DMzswwb3.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
