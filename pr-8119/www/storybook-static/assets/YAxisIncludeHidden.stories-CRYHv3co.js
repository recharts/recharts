import{r as f,R as e}from"./iframe-C3rzwJQL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bi88dWrW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-6U0v4l7r.js";import{C as k}from"./ComposedChart-DMrHliN6.js";import{X as K}from"./XAxis-DiB8sdSh.js";import{L as v}from"./Legend-B7oMtHG8.js";import{B as a}from"./Bar-Og-SEJod.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CBpcK4i6.js";import"./Text-X-wYRMmx.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./throttle-B7FABENa.js";import"./axisSelectors-_YduxGmH.js";import"./d3-scale-C-_ks2ZK.js";import"./CartesianAxis-CD4CCpjb.js";import"./Layer-B6-xlzoZ.js";import"./types-BKor_cCv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-BmfKzQXT.js";import"./index-Bhn-1pm4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper--Ro5bVbm.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./Symbols-53MnXipr.js";import"./symbol-C4d-r7qM.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-Cpwg_wUg.js";import"./dataEntryStyles-CekGYxzv.js";import"./useElementOffset-CADieQbP.js";import"./uniqBy-rOz66M2B.js";import"./iteratee-DVf-SFr-.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CqZcLqEs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRaBEnAs.js";import"./useAnimationId-Dn06_oTK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./tooltipContext-BO2FOIgQ.js";import"./ErrorBarContext-BUzY2WBc.js";import"./activeStyles-DlQJ4xNs.js";import"./SetGraphicalItem-CPBOF30a.js";import"./getZIndexFromUnknown-CezflR8V.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./omit-hSAuZZsR.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
