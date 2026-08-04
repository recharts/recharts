import{r as f,R as e}from"./iframe-C5hmF0To.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-8wMoNgQN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BixfUK5V.js";import{C as k}from"./ComposedChart-8HNQI9r3.js";import{X as K}from"./XAxis-C0QI0HXh.js";import{L as v}from"./Legend-BsUHQNuT.js";import{B as s}from"./Bar-DMRz1YNp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Du636Igd.js";import"./Text-C5taNjiE.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./DOMUtils-BTnNVt5T.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CCu8NHHi.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./RechartsWrapper-C2jsJsE5.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./throttle-teWCo3kp.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./d3-scale-B4bxyqZp.js";import"./CartesianAxis-Co52JpOx.js";import"./Layer-CDmGCMyH.js";import"./types-CeFfhpIK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./Symbols-BGaSP5QY.js";import"./symbol-DEC0z0TC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvtQZ0-R.js";import"./uniqBy-BSE1jEQh.js";import"./iteratee-CTdVzveq.js";import"./tooltipContext-6ft3c5Lu.js";import"./AnimatedItems-BcG4wu47.js";import"./useAnimationId-WdLJ0TXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcdSdsCc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./ErrorBarContext-BXXzJsD_.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./getZIndexFromUnknown-D7_bSQ98.js";import"./graphicalItemSelectors-Dvd0v0Xk.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
