import{r as f,R as e}from"./iframe-C5Zmv3_Q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-iK8t4Zai.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C4av0-dC.js";import{C as k}from"./ComposedChart-DQmUib5w.js";import{X as K}from"./XAxis-CXSd1JZe.js";import{L as v}from"./Legend-DPMB5n98.js";import{B as a}from"./Bar-M5JnW_M7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-nDrE78J8.js";import"./Text-CCFi8jW2.js";import"./resolveDefaultProps-CwLCHu7g.js";import"./ZIndexLayer-Dmgp-ZTU.js";import"./index-CUtPCjcT.js";import"./index-uwf7-i8Q.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3ABPV6P.js";import"./throttle-D_vuQCXn.js";import"./axisSelectors-LAQsy88k.js";import"./d3-scale-AN13rbty.js";import"./CartesianAxis-Bf2m6kfJ.js";import"./Layer-DEJLFQPm.js";import"./types-BtbrjSJt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bu3GXH9z.js";import"./index-DOiQQlaZ.js";import"./index-SEOAbOhc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cbn62-za.js";import"./index-eHYTpsq_.js";import"./fillDefinitions-chfTF0ar.js";import"./CartesianChart-7XbIDtU0.js";import"./chartDataContext-DtLXn_BI.js";import"./CategoricalChart-XRCYKQSl.js";import"./Symbols-CWRNkrAk.js";import"./symbol-B4pqWh0c.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bvo80b_z.js";import"./uniqBy-4dpdqULc.js";import"./iteratee-BNZjisoW.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BKf5w-lY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqOgBzLM.js";import"./useAnimationId-Dbt3XGZ7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HLQ9J4sr.js";import"./tooltipContext-BWXm03D_.js";import"./ErrorBarContext-9P_gyWZq.js";import"./activeStyles-CRgGZhKT.js";import"./SetGraphicalItem-Bb8-L5uL.js";import"./getZIndexFromUnknown-BTUV7CxY.js";import"./useEffectiveDataKey-DifAuVlu.js";import"./omit-Dv_LNC98.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
