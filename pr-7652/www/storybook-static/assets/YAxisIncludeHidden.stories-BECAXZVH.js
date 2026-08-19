import{r as f,R as e}from"./iframe-CgwPoQay.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D2N4RV8b.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cwvky78x.js";import{C as k}from"./ComposedChart-Co7sgDaS.js";import{X as K}from"./XAxis-DOtySNzv.js";import{L as v}from"./Legend-DQPvvXca.js";import{B as s}from"./Bar-BkJVXfzS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwBi1oPN.js";import"./Text-DLEzBygV.js";import"./resolveDefaultProps-CD_cqqva.js";import"./DOMUtils-DewFbXuK.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiLuwpYl.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./throttle-sMY3RlhH.js";import"./axisSelectors-D5ccOzPk.js";import"./d3-scale-DtIIfQy7.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./CartesianAxis-DLTPH4hp.js";import"./Layer-DjRO5iA4.js";import"./types-D2pCS11Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./Symbols-Cde2M23J.js";import"./symbol-CquBrsNv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BVRfxINV.js";import"./uniqBy-Du-asTiq.js";import"./iteratee-BR7CkU_G.js";import"./AnimatedItems-9ERF5uBB.js";import"./useAnimationId-C35lEnnz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIlOeeWH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./tooltipContext-0v1e_mhm.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getZIndexFromUnknown-CcEba17n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ZuF58nAr.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
