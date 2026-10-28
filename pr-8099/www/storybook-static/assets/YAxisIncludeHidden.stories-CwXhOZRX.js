import{r as f,R as e}from"./iframe-D0yOAL3n.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ClNwS6nX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dn2Ys6gV.js";import{C as k}from"./ComposedChart-DzH7Aje-.js";import{X as K}from"./XAxis-ntZPF60e.js";import{L as v}from"./Legend-DPhxLnRv.js";import{B as a}from"./Bar-DsaJuwrA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzBQuB2T.js";import"./Text-z-sERxAx.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./throttle-BrS_cZCp.js";import"./dataEntryStyles-BNyFarFk.js";import"./axisSelectors-DATXyQCy.js";import"./d3-scale-n2sBsRY0.js";import"./CartesianAxis-dbcozJzz.js";import"./Layer-CY7a4PGZ.js";import"./types-IRHz2iGt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwTnzypz.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIhlqtry.js";import"./uniqBy-UFr_nm2i.js";import"./iteratee-DStnvH7g.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CZmttjyK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-hiMsXewW.js";import"./useAnimationId-CKYg8A0e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./tooltipContext-D1gf5Yw0.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./activeStyles-BHH3u2ze.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getZIndexFromUnknown-BIr8Glr3.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./omit-D-Ea7IUT.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
