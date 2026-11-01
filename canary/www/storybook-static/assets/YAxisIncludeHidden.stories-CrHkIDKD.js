import{r as f,R as e}from"./iframe-Bm_JRRDc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DkJzVEan.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CE1MC-Bj.js";import{C as k}from"./ComposedChart-B5oDJkIg.js";import{X as K}from"./XAxis-CYGYoqLr.js";import{L as v}from"./Legend-Dh6E4qzu.js";import{B as a}from"./Bar-Drfa9bur.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-v2uuRqjZ.js";import"./Text-nM-LHLsO.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./DOMUtils-C1tRULq9.js";import"./pageBackground-BcaJILnW.js";import"./ZIndexLayer-DBCQDkbL.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./throttle-Di0g5pz3.js";import"./axisSelectors-CQbwMXjx.js";import"./d3-scale-_mEsQ66i.js";import"./CartesianAxis-D65lIMFu.js";import"./Layer-C38IBOtq.js";import"./types-BgOFnMuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CWqhr_G8.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./Symbols-CobU2W6x.js";import"./fillDefinitions-D55-ziDc.js";import"./themeFill-DfZYoox_.js";import"./symbol-EG1r1dzp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZtVmn8K.js";import"./uniqBy-CNiTKE7V.js";import"./iteratee-DH1QSUwA.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CIhUYtSm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVcWQa2n.js";import"./useAnimationId-7tWnytho.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./tooltipContext-CKQTaHLn.js";import"./dataEntryStyles-p95uc1IW.js";import"./ErrorBarContext-Bvj-sJVI.js";import"./activeStyles-BuWIAazB.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./getZIndexFromUnknown-CYHnsZcu.js";import"./useEffectiveDataKey-1gMAnkt8.js";import"./omit-XhcW-dlg.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
