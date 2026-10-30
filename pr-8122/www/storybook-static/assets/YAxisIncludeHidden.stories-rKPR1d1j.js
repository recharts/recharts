import{r as f,R as e}from"./iframe-DTgRciqJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bbi7V5fP.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DVbLmSgB.js";import{C as k}from"./ComposedChart-BUWqBVBV.js";import{X as K}from"./XAxis-GGlBaKPK.js";import{L as v}from"./Legend-DuFVdlS3.js";import{B as a}from"./Bar-CKmLg3q1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ClRWPO-B.js";import"./Text-BPTv_m6E.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./throttle-DuudF_mE.js";import"./axisSelectors-CM_jcbgZ.js";import"./d3-scale-B5ifwFr0.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./Layer-uwDyCJ97.js";import"./types-D-ekNx8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./Symbols-D1y9xfwW.js";import"./symbol-C3fOvccx.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-DVVBuQo8.js";import"./dataEntryStyles-B-5OPbn7.js";import"./useElementOffset-C_KB9sAl.js";import"./uniqBy-CROCk4kq.js";import"./iteratee-CNnsb6wb.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DQdMNFQg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NM_AUMQ3.js";import"./useAnimationId-D4a67WLs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./tooltipContext-BVhZySlP.js";import"./ErrorBarContext-CqakUp6M.js";import"./activeStyles-bjUNghBK.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getZIndexFromUnknown-UWkyHqhi.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./omit-CgSUAxHI.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
