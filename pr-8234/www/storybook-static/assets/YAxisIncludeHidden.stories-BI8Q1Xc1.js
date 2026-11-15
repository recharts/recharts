import{r as f,R as e}from"./iframe-Co7Udrye.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CRk-eV3B.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DOrD3bq8.js";import{C as k}from"./ComposedChart-Bbn1F0DT.js";import{X as K}from"./XAxis-C4fRrpXS.js";import{L as v}from"./Legend-DZTzeHvv.js";import{B as a}from"./Bar-CUuauI_5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DffVq635.js";import"./Text-DVQecdV7.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./ZIndexLayer-DEtSsufZ.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./throttle-Cc_t6lxE.js";import"./axisSelectors-e3Zjl34d.js";import"./d3-scale-DSuWQh9E.js";import"./CartesianAxis-CBeq856j.js";import"./Layer-C65liL5F.js";import"./types-CNLXZtmS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CzRhzMVT.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yaxFxPbx.js";import"./uniqBy-HSw8sR7S.js";import"./iteratee-wNQh5Cd7.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-KlXlC10J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFZCBY1B.js";import"./useAnimationId-DDJ6zjpL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./tooltipContext-CJlsJU_o.js";import"./ErrorBarContext-DzV5SKcC.js";import"./activeStyles-dIWWSidH.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getZIndexFromUnknown-CuGIjvif.js";import"./useEffectiveDataKey-C3nLlcoP.js";import"./omit-CFjlI9EB.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
