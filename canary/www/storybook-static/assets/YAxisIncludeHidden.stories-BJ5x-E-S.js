import{r as f,R as e}from"./iframe-CVlx7bU_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Bw2rcCFX.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CQ18OEDz.js";import{C as k}from"./ComposedChart-Dp5ziSq3.js";import{X as K}from"./XAxis-DMF0oTJ1.js";import{L as v}from"./Legend--dqzDeOl.js";import{B as a}from"./Bar-BcttE19g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DOtvRCj8.js";import"./Text-GjS4GngU.js";import"./resolveDefaultProps-7sOSs16A.js";import"./ZIndexLayer-DRYYNy0H.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./throttle-CmXgXLjc.js";import"./axisSelectors-BJrugk6A.js";import"./d3-scale-CkwZs2c8.js";import"./CartesianAxis-BdpTb-nX.js";import"./Layer-CTBEbigF.js";import"./types-BMFpEHKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJNVPp8V.js";import"./uniqBy-Cw4jSxoQ.js";import"./iteratee-Cke1s3Tj.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CMoIO_lw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BzACz78L.js";import"./useAnimationId-JkE7TXZo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./tooltipContext-CnffpGeV.js";import"./ErrorBarContext-DzVhOjsh.js";import"./activeStyles-5RuXhDxF.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getZIndexFromUnknown-CQuHEXnK.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./omit-BUnywL07.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
