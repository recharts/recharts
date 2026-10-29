import{r as f,R as e}from"./iframe-C0OVyiWZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BzGOPf-n.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-8GqqcFEr.js";import{C as k}from"./ComposedChart-CDKrU3QJ.js";import{X as K}from"./XAxis-CTdfh09z.js";import{L as v}from"./Legend-CrVVwmbt.js";import{B as a}from"./Bar-CBHHOqe1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-YEc5vJ1L.js";import"./Text-CW0hOv-I.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./throttle-D68qy_th.js";import"./axisSelectors-D80ZAqVH.js";import"./d3-scale-P-FUFzKf.js";import"./CartesianAxis-B5NtJHos.js";import"./Layer-OalOUm3Y.js";import"./types-C-qeruIO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CTQttuVZ.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BE4RQkQy.js";import"./uniqBy-Cmw3QRKv.js";import"./iteratee-CPh3NlRT.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D0ai-hpm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bj8y9oTS.js";import"./useAnimationId-CezZ2glr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./tooltipContext-21ewW2ab.js";import"./dataEntryStyles-Cd6CZepp.js";import"./ErrorBarContext-Crxfy6Lq.js";import"./activeStyles-D_QsSvZV.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getZIndexFromUnknown-Bh8-1w9i.js";import"./useEffectiveDataKey-AC38WMBQ.js";import"./omit-DWjYnwJ8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
