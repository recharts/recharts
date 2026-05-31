import{P as f,c as e}from"./iframe-fo49l_7F.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Dn27aIIS.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-DRP-3MQ6.js";import{C as k}from"./ComposedChart-BGsB6qPQ.js";import{X as K}from"./XAxis-BzBl98RW.js";import{L as v}from"./Legend-C3uAHlAe.js";import{B as s}from"./Bar-DtAlqLKU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BUAOm5zY.js";import"./CartesianAxis-BLZxyXIk.js";import"./Layer-Cshlv-Qa.js";import"./resolveDefaultProps-CVMfvQ41.js";import"./Text-BTD0u6_t.js";import"./DOMUtils-7oUYJi4I.js";import"./isWellBehavedNumber-B0btAC56.js";import"./Label-B622NV2p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D6UFvHMF.js";import"./index-Cq9JpdB2.js";import"./index-LHlEkonc.js";import"./types-Bblnl65_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvOi1XF2.js";import"./immer-Cnd_vM0p.js";import"./RechartsWrapper-DNEpPwFB.js";import"./index-3vxLE14G.js";import"./index-Dnm6qrQS.js";import"./axisSelectors-DA_mvJaq.js";import"./d3-scale-qag23egh.js";import"./CartesianChart-C_VrjQWn.js";import"./chartDataContext-DeCM2GRR.js";import"./CategoricalChart-Di0rvdap.js";import"./Symbols-3fti8klF.js";import"./symbol-B4TcFWcH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrLD4_4t.js";import"./uniqBy-DCYBvHHV.js";import"./iteratee-COYh5OnJ.js";import"./tooltipContext-AbOvBp5p.js";import"./ReactUtils-Bb0TLcRV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bu1eqIwN.js";import"./useAnimationId-AS8JtY64.js";import"./ActiveShapeUtils-nlm4-u2n.js";import"./RegisterGraphicalItemId-zZVZ96Iy.js";import"./ErrorBarContext-BBLhm3gp.js";import"./GraphicalItemClipPath-qLKfObJe.js";import"./SetGraphicalItem-BMqVgIbs.js";import"./getZIndexFromUnknown-BelaatVF.js";import"./graphicalItemSelectors-D7c0zymu.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
