import{r as f,R as e}from"./iframe-BT2fAbbB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-ChrnpRQE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-0bHXttbZ.js";import{C as k}from"./ComposedChart-DdVrflO2.js";import{X as K}from"./XAxis-BoVnFGs6.js";import{L as v}from"./Legend-DwJmbAop.js";import{B as s}from"./Bar-uUcUXSAk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C017lSC3.js";import"./CartesianAxis-BeeS8R2V.js";import"./Layer-CwmO2g8o.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./Label-BKr83VYg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-vZErJXnS.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./types-UgUXQeZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./immer-Cs_HwjFQ.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./Symbols-CBCiu4_t.js";import"./symbol-B-UyWOPJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DxfqGQMG.js";import"./uniqBy-CE3wruLK.js";import"./iteratee-JLoe2DiT.js";import"./tooltipContext-ftJi64Sx.js";import"./AnimatedItems-B9eraKkz.js";import"./useAnimationId-B9b4cNZQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BI2jxxVC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getZIndexFromUnknown-CUuyWpoA.js";import"./graphicalItemSelectors-BFCuQBJA.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
