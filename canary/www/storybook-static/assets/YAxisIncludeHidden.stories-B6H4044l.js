import{r as f,R as e}from"./iframe-Dpjo95BT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D506yA8K.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bz9FHg4X.js";import{C as k}from"./ComposedChart-BechDuQ5.js";import{X as K}from"./XAxis-BTXqWGnk.js";import{L as v}from"./Legend-Cl_iyn0Y.js";import{B as a}from"./Bar-l8MrXgR-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DulCRYKX.js";import"./Text-8qrIJHOF.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./throttle-CgrRaOJs.js";import"./axisSelectors-DSxvh8IJ.js";import"./d3-scale-C6Aj8r2L.js";import"./CartesianAxis-BKOwU02Z.js";import"./Layer-dEC3lxZB.js";import"./types-CB3DqoLS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-B-kkbwvl.js";import"./index-CQjokYOg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BpzLbtwc.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./Symbols-DoRtyuXb.js";import"./symbol-WOMD01oz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DDmleafX.js";import"./uniqBy-C9-llrOR.js";import"./iteratee-CNDxe9py.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DJoHLEEy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3bNmSLU.js";import"./useAnimationId-DXZwJd8h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./tooltipContext-C2Z-qwWl.js";import"./dataEntryStyles-0BlaoxRC.js";import"./ErrorBarContext-zCJLcJsR.js";import"./activeStyles-lY2Wk3Pa.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getZIndexFromUnknown-BQ02n8Sf.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./omit-BY7G6jYg.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
