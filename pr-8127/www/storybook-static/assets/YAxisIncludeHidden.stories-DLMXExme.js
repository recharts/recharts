import{r as f,R as e}from"./iframe-Bp2XYb68.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-EIT5_cgk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cdn-Kk-M.js";import{C as k}from"./ComposedChart-C50k9Mlo.js";import{X as K}from"./XAxis-ts9--8Kg.js";import{L as v}from"./Legend-CWn7fB8c.js";import{B as a}from"./Bar-DWEMPMAu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BYixOdgi.js";import"./Text-NUByGaeH.js";import"./resolveDefaultProps-DKzL2Qxu.js";import"./DOMUtils-CRqOLD4o.js";import"./ZIndexLayer-CdRyST1N.js";import"./index-D6Dz_bd_.js";import"./index-Cy8aa7S-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B_7CHFJS.js";import"./throttle-DjpMRj7m.js";import"./axisSelectors-D7x9R07e.js";import"./d3-scale-BystX3Ur.js";import"./CartesianAxis-BoCxaOyC.js";import"./Layer-BCuSbR8-.js";import"./types-ChkwvJX7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BEFESDc_.js";import"./index-BgEF2N6-.js";import"./index-BWzqc-Tl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFwXtpN1.js";import"./index-BIZLi33-.js";import"./CartesianChart-B3KmVN-H.js";import"./ZIndexPortal-Dv9B-KcK.js";import"./CategoricalChart-DdepWN88.js";import"./Symbols-BjKzRhG-.js";import"./symbol-AE1MCh3f.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-ChX4QXi5.js";import"./useElementOffset-C0qZzXDV.js";import"./uniqBy-C0-xR335.js";import"./iteratee-B9Sxwtsj.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-NX9sUv81.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-M7CoQGRa.js";import"./useAnimationId-BnLlvmFh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNSxrQCm.js";import"./tooltipContext-BaE0Fb1H.js";import"./dataEntryStyles-0iby4079.js";import"./ErrorBarContext-C1RLIbYa.js";import"./activeStyles-BkNcOac3.js";import"./SetGraphicalItem-C-JkmH8Z.js";import"./getZIndexFromUnknown-Dvm9xa7D.js";import"./useEffectiveDataKey-DiX5XHUq.js";import"./omit-BbC3M-Ig.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
