import{r as f,R as e}from"./iframe--Qc961ov.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BdfS4w8D.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Rc2BOlPQ.js";import{C as k}from"./ComposedChart-1Ra77Ckb.js";import{X as K}from"./XAxis-CYwUm2ws.js";import{L as v}from"./Legend-pRHqTXn0.js";import{B as a}from"./Bar-2WsDtfT7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BPAtAFkR.js";import"./Text-DukYE8yg.js";import"./resolveDefaultProps-D0aZwB6X.js";import"./pageBackground-DnfHP8JU.js";import"./isWellBehavedNumber-BbQJ1Ue6.js";import"./useId-DBBGR5j5.js";import"./useBackwardsCompatibleTheme-BAsN2dru.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CboR9GKx.js";import"./index-BaNjZzFe.js";import"./index-sLpNG2DY.js";import"./dataEntryStyles-D5gnKJwo.js";import"./axisSelectors-CnmzOTaD.js";import"./throttle-D5ruWPez.js";import"./d3-scale-BiVvCoqI.js";import"./CartesianAxis-BwXCcZP6.js";import"./Layer-CSo0ACXf.js";import"./types-CdbE1zIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iEsOV4gM.js";import"./index-C334R2OZ.js";import"./index-gD-WMNxq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5yfwU4S.js";import"./index-CIuk1Fk6.js";import"./CartesianChart-BPOxbtvv.js";import"./chartDataContext-B9pBQpH6.js";import"./CategoricalChart-BTLrwTlO.js";import"./Symbols-DQbB03hy.js";import"./symbol-WRDdGcKy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-wB-GlItD.js";import"./uniqBy-DboUDVRO.js";import"./iteratee-BVMr74LW.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CmGMz93r.js";import"./useAnimationId-CtnGdaHg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPuH_shy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRmxiGhG.js";import"./tooltipContext-Co8wMlo1.js";import"./RegisterGraphicalItemId-CC6U92H6.js";import"./ErrorBarContext-CJzEAfVg.js";import"./GraphicalItemClipPath-dlzptreQ.js";import"./SetGraphicalItem-CzqDdYjp.js";import"./getZIndexFromUnknown-Dv9psM4b.js";import"./useEffectiveDataKey-B387RzKO.js";import"./omit-I1vbqsah.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
