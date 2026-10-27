import{r as f,R as e}from"./iframe-FAdFbT6J.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-T_mO5jU8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-COO8R9lj.js";import{C as k}from"./ComposedChart-ByetWKbs.js";import{X as K}from"./XAxis-2xPTd-UO.js";import{L as v}from"./Legend-vCTZRYiE.js";import{B as a}from"./Bar-BSXujitS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-MEQSQEMP.js";import"./Text-Cndhy6VG.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./throttle-DmbGe_oo.js";import"./dataEntryStyles-CEjpbRUj.js";import"./axisSelectors-DjwIFZga.js";import"./d3-scale-CfdNPJMp.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B8CA35TH.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CTPpQQlY.js";import"./uniqBy-CNFPVLtL.js";import"./iteratee-DmPtyNGM.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BYdzk1TZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbbHCzWy.js";import"./useAnimationId-CiJHzCVR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./tooltipContext-BRDiEJW9.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./activeStyles-D7U9MU9g.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getZIndexFromUnknown-Dfm4DS3J.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./omit-DZlTO-Gm.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
