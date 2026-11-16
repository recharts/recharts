import{r as f,R as e}from"./iframe-DHoXusD1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-_YVzx5KE.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-FsvXxdXV.js";import{C as k}from"./ComposedChart-CDDK98iJ.js";import{X as K}from"./XAxis-hvLT-HVR.js";import{L as v}from"./Legend-DPl65V_h.js";import{B as a}from"./Bar-DKB3P-1-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DH0ZiH3v.js";import"./Text-DGMTORnL.js";import"./resolveDefaultProps-htUurm4w.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./throttle-bPL_CYHd.js";import"./axisSelectors-pR92cyKp.js";import"./d3-scale-BrVNT65M.js";import"./CartesianAxis-D3kgYeFy.js";import"./Layer-DvTlLbe7.js";import"./types-BuL5d7PW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B415nsX3.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0dudveHh.js";import"./uniqBy-Cb8Ka0OF.js";import"./iteratee-DACkWKhu.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DvIJVMhk.js";import"./useAnimationId-BUoKLqt_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./tooltipContext-bHP8AoZ-.js";import"./ErrorBarContext-BUjEWD9b.js";import"./activeStyles-CtCkxF9Y.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./getZIndexFromUnknown-vHe20no9.js";import"./useEffectiveDataKey-Ckh-4MN_.js";import"./omit-D6XzhNnp.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
