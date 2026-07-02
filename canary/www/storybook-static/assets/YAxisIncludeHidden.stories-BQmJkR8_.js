import{r as f,R as e}from"./iframe-GELhAUTo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CwCyZywx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ClN2s-1U.js";import{C as k}from"./ComposedChart-CdCgkykE.js";import{X as K}from"./XAxis-Y85LtPOX.js";import{L as v}from"./Legend-BLx8mw05.js";import{B as s}from"./Bar-KUjk1Seu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C2iZYvRC.js";import"./Layer-1dFGvAkG.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./Label-D2gt0uaB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./types-CDH6nNS8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./throttle-DU3kigO2.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./Symbols-_h1NCy2L.js";import"./symbol-DDMMncL4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSI1lZ64.js";import"./uniqBy-UEtfjGe3.js";import"./iteratee-HaGkk_IB.js";import"./tooltipContext-Cansh_dN.js";import"./AnimatedItems-D0mvcaGm.js";import"./useAnimationId-Cjs3Y5s0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1qGnE1A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./ErrorBarContext-Cc-Db4VE.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getZIndexFromUnknown-BtPaCaU9.js";import"./graphicalItemSelectors-Djhj5DPh.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
