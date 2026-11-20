import{r as f,R as e}from"./iframe-B4BvLeme.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-T0QKWtDf.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DyTYWVcs.js";import{C as k}from"./ComposedChart-D4s6ZbXJ.js";import{X as K}from"./XAxis-T18YTghU.js";import{L as v}from"./Legend-BkO5u0Ie.js";import{B as a}from"./Bar-CxnmACF7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bp5zUoNH.js";import"./Text-B4NS4A04.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./throttle-DQNRL0AJ.js";import"./axisSelectors-DS5uRUAA.js";import"./d3-scale-DfUXkppW.js";import"./CartesianAxis-reQTS2uW.js";import"./Layer-Bxh7arjC.js";import"./types-UPHeghFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B0OT4wWF.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./Symbols-BPMmDEMk.js";import"./symbol-YAvM_-gl.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BbIaovZs.js";import"./uniqBy-D7JAzLt7.js";import"./iteratee-DlFoAbv_.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-n779GVpT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Wqh2w_9O.js";import"./useAnimationId-B1vlq9HU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./tooltipContext-D_p8bgOZ.js";import"./ErrorBarContext-BEP_BW62.js";import"./activeStyles-BtDPe58A.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./getZIndexFromUnknown-DrpZLg6y.js";import"./useEffectiveDataKey-cN06FnCm.js";import"./omit-DUdB1-kG.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
