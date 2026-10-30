import{r as f,R as e}from"./iframe-SPJaGn0F.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Whjsv-c4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-nIWAtr6b.js";import{C as k}from"./ComposedChart-CmUNzOx5.js";import{X as K}from"./XAxis-D91EJms1.js";import{L as v}from"./Legend-CZxulQ8f.js";import{B as a}from"./Bar-BMPv6VPE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-COXn0L8P.js";import"./Text-BYUbuGtp.js";import"./resolveDefaultProps-DgTytEg2.js";import"./DOMUtils-BDkhG4Mf.js";import"./ZIndexLayer-CuxzF6Ru.js";import"./index-BiFHN7g6.js";import"./index-DUJEB6Vl.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CIAIQYnO.js";import"./throttle-Cb7coFKv.js";import"./axisSelectors-BV5QtOCC.js";import"./d3-scale-ChAd5Ihl.js";import"./CartesianAxis-D0rqelxZ.js";import"./Layer-GoN2yHWA.js";import"./types-DJ6_4iq2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CknOQqZ1.js";import"./index-U_F_U_yW.js";import"./index-B2XfpK0R.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DA_3WzAb.js";import"./index-Bl846mwt.js";import"./CartesianChart-DHKYKaYX.js";import"./ZIndexPortal-zVY5zLCl.js";import"./CategoricalChart-CWkGyQY4.js";import"./Symbols-CUkMeiyc.js";import"./symbol-DauxKq8Z.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-CRqjOhTR.js";import"./dataEntryStyles-DAzBzzsr.js";import"./useElementOffset-DwP8huJc.js";import"./uniqBy-P-x3YYna.js";import"./iteratee-CwlSc91y.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BeGqiY0d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-UJSQ6vDA.js";import"./useAnimationId-d7QVaKqG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-zpveVZ8b.js";import"./tooltipContext-DxrbQih8.js";import"./ErrorBarContext-CyoUsRnh.js";import"./activeStyles-BViWZA4B.js";import"./SetGraphicalItem-B-k8mUay.js";import"./getZIndexFromUnknown-BMcA4aLi.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-PspZ4BaC.js";import"./omit-BjfPEdNU.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
