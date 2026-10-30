import{r as f,R as e}from"./iframe-BTkF_ck3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-xlfioMoU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMb1iT4y.js";import{C as k}from"./ComposedChart-s1Akoicf.js";import{X as K}from"./XAxis-XXOeJL4_.js";import{L as v}from"./Legend-B4kkcuCQ.js";import{B as a}from"./Bar-DJns9iwc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzrvAI-c.js";import"./Text-TXIjjn1-.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./throttle-C296Coau.js";import"./axisSelectors-CNaIfHAW.js";import"./d3-scale-BmgL8dDE.js";import"./CartesianAxis-BPFkFfQP.js";import"./Layer-DbGB2kqV.js";import"./types-8wxp4ZmL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BHSDIcCA.js";import"./dataEntryStyles-CxN2r_W-.js";import"./useElementOffset-Cl0zCrTJ.js";import"./uniqBy-CAi9PQ3u.js";import"./iteratee-zmWyJk5j.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-2kTqXwcO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRH2iL4s.js";import"./useAnimationId-BxLJVC0T.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./tooltipContext-CfPN8kce.js";import"./ErrorBarContext-nR9VGpMB.js";import"./activeStyles-DacmxpXN.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getZIndexFromUnknown-lCk3uQXh.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./omit-DEd-BCVA.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
