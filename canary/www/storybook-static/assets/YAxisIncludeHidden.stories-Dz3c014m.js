import{r as f,R as e}from"./iframe-D34TH6kS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BB2iGVHg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DaIxnBgS.js";import{C as k}from"./ComposedChart-LEsvyFPs.js";import{X as K}from"./XAxis-eUT57Vta.js";import{L as v}from"./Legend-BWK9Xcu6.js";import{B as a}from"./Bar-tSvlBU_S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bmp2qp_V.js";import"./Text-DnFfEMnn.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CB23D7zz.js";import"./throttle-BpT9ifnU.js";import"./axisSelectors-Dy4Zn44Z.js";import"./d3-scale-DZnn2eaB.js";import"./CartesianAxis-BM-PI8Qd.js";import"./Layer-Dwmoii2m.js";import"./types-sVdhE-m7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./Symbols-DvTMqivt.js";import"./symbol-CF9tVrFE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ipbyi-Tm.js";import"./uniqBy-HVU5otxv.js";import"./iteratee-P8VRTjFX.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-1IdMTUqF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkQXoZfZ.js";import"./useAnimationId-B9qHmTzi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./tooltipContext-DqSmtwC6.js";import"./dataEntryStyles-vZIv75R2.js";import"./ErrorBarContext-BpXycT31.js";import"./activeStyles-BhcCN1d0.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./getZIndexFromUnknown-PCAkaOYb.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./omit-CYTpcbgM.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
