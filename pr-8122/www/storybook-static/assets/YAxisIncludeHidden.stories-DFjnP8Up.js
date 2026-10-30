import{r as f,R as e}from"./iframe-GbU_LfIz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dl6RuWF8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B-uY-xMG.js";import{C as k}from"./ComposedChart-B3bI5XzW.js";import{X as K}from"./XAxis-BQz4ccrC.js";import{L as v}from"./Legend-B5tzkNiC.js";import{B as a}from"./Bar-Cwv5jiis.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKofA95f.js";import"./Text-CcmXBTPp.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./throttle-lL1L3VRP.js";import"./axisSelectors-plpcnepy.js";import"./d3-scale-m-_CTi_p.js";import"./CartesianAxis-DWEGImEY.js";import"./Layer-DZ-BC5fp.js";import"./types-D5h1KHjm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CBlrkAx1.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-PlO8YUnf.js";import"./dataEntryStyles-C8Sz1tul.js";import"./useElementOffset-CMK7cZDC.js";import"./uniqBy-Db9I9r6H.js";import"./iteratee-DgfWwApm.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BpWQDUee.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJMi75hX.js";import"./useAnimationId-3m5wK_ws.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./tooltipContext-DHOiC5Iy.js";import"./ErrorBarContext-pjK3YX1O.js";import"./activeStyles-7gml8bSR.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getZIndexFromUnknown-AbKr_rc7.js";import"./useEffectiveDataKey-DF49AIat.js";import"./omit-nnSIzwj7.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
